import { ref } from "vue";
export default function IhrisAxisChart(
  series,
  categories,
  chart,
  option,
  chartOptions,
  dataset
) {
  let data = ref("");
  const query = ref({
    size: 0,
    query: {},
    reportOptions: {
      locationBasedConstraint: true,
    },
  });

  function addFilters(filters) {
    query.value.query = {
      bool: filters.bool,
    };
  }
  function getChartData() {
    return new Promise((resolve, reject) => {
      buildQuery()
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  function buildQuery() {
    return new Promise((resolve, reject) => {
      if (series.value.length === 0) {
        return resolve();
      }
      data.value = "";
      let seriesField = series.value[0].name;
      if (series.value[0].type === "text") {
        seriesField += ".keyword";
      }
      if (categories.value.length > 0) {
        query.value.aggs = {
          categories: {},
        };
        if (categories.value.length === 1) {
          const category = categories.value[0];
          let field = category.name;
          if (category.type === "text") {
            field += ".keyword";
          }
          const term = {};
          term[category.name] = {
            terms: {
              field,
            },
          };
          query.value.aggs.categories.composite = {
            sources: [term],
          };
        } else {
          const terms = [];
          for (const category of categories.value) {
            let field = category.name;
            if (category.type === "text") {
              field += ".keyword";
            }
            const term = {};
            term[category.name] = {
              terms: {
                field,
                missing_bucket: true,
              },
            };
            terms.push(term);
          }
          query.value.aggs.categories.composite = {
            size: 1000,
            sources: terms,
          };
        }
        query.value.aggs.categories.aggs = {
          series: {},
        };
        if (
          series.value[0].aggsBy.name === "value_count" &&
          chart.value.type !== "pie"
        ) {
          query.value.aggs.categories.aggs.series.terms = {
            field: seriesField,
            order: { _key: "asc" },
            min_doc_count: 0,
            size: 2000000,
          };
        } else {
          const aggBy = series.value[0].aggsBy.name;
          query.value.aggs.categories.aggs.series[aggBy] = {
            field: seriesField,
          };
        }
      } else {
        const terms = {};
        terms[series.value[0].name] = {
          terms: {
            field: seriesField,
          },
        };
        query.value.aggs = {
          series: {
            composite: {
              size: 1000,
              sources: [terms],
            },
          },
        };
      }
      getData()
        .then(() => {
          if (categories.value.length > 1) {
            parseMultiCategoryResults();
          } else {
            parseResults();
          }
          return resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  function getData() {
    return new Promise((resolve, reject) => {
      let category = "categories";
      if (chart.value.maxCategories === 0) {
        category = "series";
      }
      const url = `/es/${dataset.value.name}/_search?filter_path=aggregations`;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query.value),
      })
        .then((response) => {
          response
            .json()
            .then((results) => {
              if (!data.value) {
                data.value = results;
              } else if (
                results.aggregations[category].buckets &&
                results.aggregations[category].buckets.length > 0
              ) {
                data.value.aggregations[category].buckets =
                  data.value.aggregations[category].buckets.concat(
                    results.aggregations[category].buckets
                  );
              }
              if (
                results.aggregations &&
                results.aggregations[category].after_key
              ) {
                query.value.aggs[category].composite.after =
                  results.aggregations[category].after_key;
                getData().then(() => {
                  return resolve();
                });
              } else {
                return resolve();
              }
            })
            .catch((err) => {
              console.log(err);
              return reject(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  async function parseMultiCategoryResults() {
    let level1Cats = [];
    let level2Cats = [];
    const keys = {};
    const seriesData = {};
    for (const bucket of data.value.aggregations.categories.buckets) {
      const catKeys = Object.keys(bucket.key);
      if (!keys[bucket.key[catKeys[0]]]) {
        keys[bucket.key[catKeys[0]]] = {
          categories: [],
          values: {},
        };
      }
      keys[bucket.key[catKeys[0]]].categories.push(bucket.key[catKeys[1]]);
      if (bucket.series.buckets) {
        for (const value of bucket.series.buckets) {
          let name = value.key;
          if (value.key_as_string) {
            name = value.key_as_string;
          }
          if (!keys[bucket.key[catKeys[0]]].values[name]) {
            keys[bucket.key[catKeys[0]]].values[name] = [];
          }
          if (value.doc_count > 0) {
            keys[bucket.key[catKeys[0]]].values[name].push(value.doc_count);
          } else {
            keys[bucket.key[catKeys[0]]].values[name].push("-");
          }
        }
      } else if (bucket.series.value) {
        let value = bucket.series.value;
        if (value === 0) {
          value = "-";
        }
        let name =
          series.value[0].aggsBy.display + "(" + series.value[0].display + ")";
        if (!keys[bucket.key[catKeys[0]]].values[name]) {
          keys[bucket.key[catKeys[0]]].values[name] = [];
        }
        keys[bucket.key[catKeys[0]]].values[name].push(value);
      }
    }
    for (let level1 in keys) {
      let cats = keys[level1].categories;
      for (let cat of cats) {
        //check if category is missing on other levels and add it with a value 0
        for (let otherLevel1 in keys) {
          if (otherLevel1 === level1) {
            continue;
          }
          const exist = keys[otherLevel1].categories.find((catInOther) => {
            return cat === catInOther;
          });
          if (!exist) {
            keys[otherLevel1].categories.push(cat);
            keys[otherLevel1].categories.sort();
            const index = keys[otherLevel1].categories.indexOf(cat);
            //insert zero at the index of missing category
            for (let serKey in keys[otherLevel1].values) {
              keys[otherLevel1].values[serKey].splice(index, 0, "-");
            }
          }
        }
      }
    }

    level1Cats = Object.keys(keys);
    for (let level1Cat of level1Cats) {
      level2Cats = level2Cats.concat(keys[level1Cat].categories);
      for (let serKey in keys[level1Cat].values) {
        if (!seriesData[serKey]) {
          seriesData[serKey] = [];
        }
        seriesData[serKey] = seriesData[serKey].concat(
          keys[level1Cat].values[serKey]
        );
      }
    }

    let xAxisSettings = {};
    if (option.value.xAxis && option.value.xAxis.length > 0) {
      xAxisSettings = JSON.parse(JSON.stringify(option.value.xAxis[0]));
      delete xAxisSettings.data;
    }
    let yAxisSettings = {};
    if (option.value.yAxis) {
      yAxisSettings = JSON.parse(JSON.stringify(option.value.yAxis));
    }
    option.value.xAxis = [];
    option.value.yAxis = {};
    option.value.series = [];
    if (level2Cats && level2Cats.length > 0) {
      option.value.xAxis.push({
        ...xAxisSettings,
        type: "category",
        data: level2Cats,
      });
    }
    if (level1Cats && level1Cats.length > 0) {
      option.value.xAxis.push({
        ...xAxisSettings,
        type: "category",
        data: level1Cats,
      });
    }
    option.value.yAxis = {
      type: "value",
      ...yAxisSettings,
    };
    const chartOpt = chartOptions.value.find((opt) => {
      return opt.type === chart.value.type;
    });
    for (const seriesName in seriesData) {
      let hasGtZero = seriesData[seriesName].find((vl) => {
        return vl !== "-";
      });
      //remove all series data that has all zero
      if (!hasGtZero) {
        continue;
      }
      option.value.series.push({
        name: seriesName,
        type: chart.value.type,
        ...chartOpt,
        data: seriesData[seriesName],
      });
    }
  }
  async function parseResults() {
    const level1Cat = [];
    const seriesData = {};
    for (const bucket of data.value.aggregations.categories.buckets) {
      const keys = Object.keys(bucket.key);
      for (const key of keys) {
        level1Cat.push(bucket.key[key]);
      }
      if (bucket.series.buckets) {
        for (const value of bucket.series.buckets) {
          let name = value.key;
          if (value.key_as_string) {
            name = value.key_as_string;
          }
          if (!seriesData[name]) {
            seriesData[name] = [];
          }
          let val = value.doc_count;
          if (val === 0) {
            val = "-";
          }
          seriesData[name].push(val);
        }
      } else if (bucket.series.value) {
        let value = bucket.series.value;
        if (value === 0) {
          value = "-";
        }
        if (!seriesData[series.value[0].display]) {
          seriesData[series.value[0].display] = [];
        }
        seriesData[series.value[0].display].push(value);
      }
    }
    let xAxisSettings = {};
    if (option.value.xAxis && option.value.xAxis.length > 0) {
      xAxisSettings = JSON.parse(JSON.stringify(option.value.xAxis[0]));
      delete xAxisSettings.data;
    }
    let yAxisSettings = {};
    if (option.value.yAxis) {
      yAxisSettings = JSON.parse(JSON.stringify(option.value.yAxis));
    }
    option.value.xAxis = [];
    option.value.yAxis = {};
    option.value.series = [];
    if (level1Cat && level1Cat.length > 0) {
      option.value.xAxis.push({
        ...xAxisSettings,
        type: "category",
        data: level1Cat,
      });
    }
    option.value.yAxis = {
      type: "value",
      ...yAxisSettings,
    };
    const chartOpt = chartOptions.value.find((opt) => {
      return opt.type === chart.value.type;
    });
    for (const seriesName in seriesData) {
      let hasGtZero = seriesData[seriesName].find((vl) => {
        return vl !== "-";
      });
      //remove all series data that has all zero
      if (!hasGtZero) {
        continue;
      }
      option.value.series.push({
        name: seriesName,
        type: chart.value.type,
        ...chartOpt,
        data: seriesData[seriesName],
      });
    }
  }
  return {
    addFilters,
    getChartData,
  };
}