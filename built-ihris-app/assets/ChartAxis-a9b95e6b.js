import{T as C,V as S}from"./TextStyle-7779cfb0.js";import{L as w}from"./LineStyle-73f83ed4.js";import T from"./ChartAxisPointer-b4c3c7ed.js";import{_ as k,r as y,o as U,n as I,a as e,w as i,h as v,q as d,d as x,l as b}from"./index-5c26168b.js";import{V as t}from"./VCol-88ee311f.js";import{h as s,d as L,i as m,j as r,k as p,l as f}from"./VisualizationBuilder-4a236344.js";const A={props:["values"],data(){return{displayLineStyleColor:!1,displayAxisTickColor:!1,axis:{show:!0,position:"bottom",offset:0,type:"category",name:"",nameLocation:"end",nameGap:15,nameRotate:0,nameTextStyle:{},inverse:!1,min:"dataMin",max:"dataMax",axisLine:{show:!0,onZero:!0,lineStyle:{color:"#333",width:1,type:"solid",cap:"butt",opacity:1}},axisTick:{show:!0,alignWithLabel:!1,inside:!1,length:5,lineStyle:{color:"#333",width:1,type:"solid",cap:"butt",opacity:1}},axisLabel:{show:!0,inside:!1,interval:"auto",rotate:0,margin:8,showMinLabel:!0,showMaxLabel:!0,hideOverlap:!1,lineStyle:{color:"#333",width:1,type:"solid",cap:"butt",opacity:1}},splitLine:{show:!1,interval:0,lineStyle:{color:"#333",width:1,type:"solid",cap:"butt",opacity:1}},axisPointer:{show:!1,type:"line",label:{show:!1,margin:3,color:"#fff",fontStyle:"normal",fontWeight:"normal",fontFamily:"sans-serif",lineHeight:12},triggerTooltip:!0,value:"",handle:{show:!0,size:45,color:"#333"}}},position:["bottom","top"],types:[{name:"Numerical axis, suitable for continuous data",value:"value"},{name:"Category axis, suitable for discrete category data",value:"category"},{name:"Time axis, suitable for continuous time series data",value:"time"},{name:"Log axis, suitable for log data",value:"log"}],nameLocation:["start","middle","end"]}},methods:{externalSettings(u){this.axis[u.name]=u.value,this.updated()},textStyle(u){for(const l in u.value)this.axis.nameTextStyle[l]=u.value[l];this.updated()},axisLineStyle(u){for(const l in u.value)this.axis.axisLine.lineStyle[l]=u.value[l];this.updated()},axisTickStyle(u){for(const l in u.value)this.axis.axisTick.lineStyle[l]=u.value[l];this.updated()},splitLineStyle(u){for(const l in u.value)this.axis.splitLine.lineStyle[l]=u.value[l];this.updated()},axisLabelStyle(u){for(const l in u.value)this.axis.axisLabel[l]=u.value[l];this.updated()},updated(){this.$emit("chartAxis",{name:"axis",value:this.axis})}},created(){for(const u in this.values)Object.keys(this.axis).indexOf(u)!==-1&&(this.axis[u]=this.values[u]);(!this.values||this.values.length===0)&&this.updated()},components:{TextStyle:C,LineStyle:w,ChartAxisPointer:T}};function _(u,l,c,P,a,o){const h=y("TextStyle"),V=y("LineStyle"),g=y("ChartAxisPointer");return U(),I("div",null,[e(v,{modelValue:a.displayLineStyleColor,"onUpdate:modelValue":l[1]||(l[1]=n=>a.displayLineStyleColor=n),width:"313px"},{default:i(()=>[e(S,{class:"ma-2","canvas-height":"300",modelValue:a.axis.axisLine.lineStyle.color,"onUpdate:modelValue":l[0]||(l[0]=n=>a.axis.axisLine.lineStyle.color=n)},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(v,{modelValue:a.displayAxisTickColor,"onUpdate:modelValue":l[3]||(l[3]=n=>a.displayAxisTickColor=n),width:"313px"},{default:i(()=>[e(S,{class:"ma-2","canvas-height":"300",modelValue:a.axis.axisTick.lineStyle.color,"onUpdate:modelValue":l[2]||(l[2]=n=>a.axis.axisTick.lineStyle.color=n)},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(b,null,{default:i(()=>[e(t,{cols:"12"},{default:i(()=>[e(s,{color:"blue",label:"Show/Hide",modelValue:a.axis.show,"onUpdate:modelValue":l[4]||(l[4]=n=>a.axis.show=n),onChange:o.updated},null,8,["modelValue","onChange"]),e(L,{items:a.position,modelValue:a.axis.position,"onUpdate:modelValue":l[5]||(l[5]=n=>a.axis.position=n),label:"Position of x axis",onChange:o.updated},null,8,["items","modelValue","onChange"]),e(d,{modelValue:a.axis.offset,"onUpdate:modelValue":l[6]||(l[6]=n=>a.axis.offset=n),type:"number",label:"Offset of x axis relative to default position",min:"-400",max:"400",onInput:o.updated},null,8,["modelValue","onInput"]),e(L,{items:a.types,modelValue:a.axis.type,"onUpdate:modelValue":l[7]||(l[7]=n=>a.axis.type=n),label:"Type of axis","item-title":"name","item-value":"value",onChange:o.updated},null,8,["items","modelValue","onChange"]),e(d,{modelValue:a.axis.name,"onUpdate:modelValue":l[8]||(l[8]=n=>a.axis.name=n),label:"Name of axis",onInput:o.updated},null,8,["modelValue","onInput"]),e(L,{items:a.nameLocation,modelValue:a.axis.nameLocation,"onUpdate:modelValue":l[9]||(l[9]=n=>a.axis.nameLocation=n),label:"Name position",onChange:o.updated},null,8,["items","modelValue","onChange"]),e(d,{modelValue:a.axis.nameGap,"onUpdate:modelValue":l[10]||(l[10]=n=>a.axis.nameGap=n),type:"number",label:"Gap between axis name and axis line",min:"-400",max:"400",onInput:o.updated},null,8,["modelValue","onInput"]),e(d,{modelValue:a.axis.nameRotate,"onUpdate:modelValue":l[11]||(l[11]=n=>a.axis.nameRotate=n),type:"number",label:"Rotation of axis name",min:"-400",max:"400",onInput:o.updated},null,8,["modelValue","onInput"]),e(m,{multiple:"",focusable:""},{default:i(()=>[e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[x("Text Style of axis name")]),_:1}),e(f,null,{default:i(()=>[e(h,{onTextStyle:o.textStyle,values:a.axis.nameTextStyle},null,8,["onTextStyle","values"])]),_:1})]),_:1})]),_:1}),e(s,{color:"blue",label:"Invert the axis",modelValue:a.axis.inverse,"onUpdate:modelValue":l[12]||(l[12]=n=>a.axis.inverse=n),onChange:o.updated},null,8,["modelValue","onChange"]),e(d,{modelValue:a.axis.min,"onUpdate:modelValue":l[13]||(l[13]=n=>a.axis.min=n),type:"number",label:"The minimun value of axis",onInput:o.updated},null,8,["modelValue","onInput"]),e(d,{modelValue:a.axis.max,"onUpdate:modelValue":l[14]||(l[14]=n=>a.axis.max=n),type:"number",label:"The maximum value of axis",onInput:o.updated},null,8,["modelValue","onInput"]),e(m,null,{default:i(()=>[e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[x("Axis Label")]),_:1}),e(f,null,{default:i(()=>[e(b,null,{default:i(()=>[e(t,{cols:"12"},{default:i(()=>[e(s,{color:"blue",label:"Show/Hide",modelValue:a.axis.axisLabel.show,"onUpdate:modelValue":l[15]||(l[15]=n=>a.axis.axisLabel.show=n),onChange:o.updated},null,8,["modelValue","onChange"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(s,{color:"blue",label:"Axis labels face the inside direction",modelValue:a.axis.axisLabel.inside,"onUpdate:modelValue":l[16]||(l[16]=n=>a.axis.axisLabel.inside=n),onChange:o.updated},null,8,["modelValue","onChange"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(d,{modelValue:a.axis.axisLabel.interval,"onUpdate:modelValue":l[17]||(l[17]=n=>a.axis.axisLabel.interval=n),type:"number",label:"Interval of Axis label",min:"0",max:"400",onInput:o.updated},null,8,["modelValue","onInput"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(d,{modelValue:a.axis.axisLabel.rotate,"onUpdate:modelValue":l[18]||(l[18]=n=>a.axis.axisLabel.rotate=n),type:"number",label:"Rotate Axis label",min:"-90",max:"90",onInput:o.updated},null,8,["modelValue","onInput"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(d,{modelValue:a.axis.axisLabel.margin,"onUpdate:modelValue":l[19]||(l[19]=n=>a.axis.axisLabel.margin=n),type:"number",label:"Margin between axis label and axis line",min:"-90",max:"90",onInput:o.updated},null,8,["modelValue","onInput"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(s,{color:"blue",label:"Show the label of the min tick",modelValue:a.axis.axisLabel.showMinLabel,"onUpdate:modelValue":l[20]||(l[20]=n=>a.axis.axisLabel.showMinLabel=n),onChange:o.updated},null,8,["modelValue","onChange"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(s,{color:"blue",label:"Show the label of the max tick",modelValue:a.axis.axisLabel.showMaxLabel,"onUpdate:modelValue":l[21]||(l[21]=n=>a.axis.axisLabel.showMaxLabel=n),onChange:o.updated},null,8,["modelValue","onChange"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(s,{color:"blue",label:"Hide overlapped labels",modelValue:a.axis.axisLabel.hideOverlap,"onUpdate:modelValue":l[22]||(l[22]=n=>a.axis.axisLabel.hideOverlap=n),onChange:o.updated},null,8,["modelValue","onChange"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(h,{onTextStyle:o.axisLabelStyle,values:a.axis.axisLabel},null,8,["onTextStyle","values"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,null,{default:i(()=>[e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[x("Axis Line")]),_:1}),e(f,null,{default:i(()=>[e(b,null,{default:i(()=>[e(t,{cols:"12"},{default:i(()=>[e(s,{color:"blue",label:"Show/Hide",modelValue:a.axis.axisLine.show,"onUpdate:modelValue":l[23]||(l[23]=n=>a.axis.axisLine.show=n),onChange:o.updated},null,8,["modelValue","onChange"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(m,null,{default:i(()=>[e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[x("Line Style")]),_:1}),e(f,null,{default:i(()=>[e(V,{subscriber:"axisLineStyle",onAxisLineStyle:o.axisLineStyle,values:a.axis.axisLine},null,8,["onAxisLineStyle","values"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,null,{default:i(()=>[e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[x("Split line of axis in grid area")]),_:1}),e(f,null,{default:i(()=>[e(b,null,{default:i(()=>[e(t,{cols:"12"},{default:i(()=>[e(s,{color:"blue",label:"Show/Hide",modelValue:a.axis.splitLine.show,"onUpdate:modelValue":l[24]||(l[24]=n=>a.axis.splitLine.show=n),onChange:o.updated},null,8,["modelValue","onChange"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(d,{modelValue:a.axis.splitLine.interval,"onUpdate:modelValue":l[25]||(l[25]=n=>a.axis.splitLine.interval=n),type:"number",label:"Interval of Axis split lines",min:"0",max:"400",onInput:o.updated},null,8,["modelValue","onInput"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(m,null,{default:i(()=>[e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[x("Line Style")]),_:1}),e(f,null,{default:i(()=>[e(V,{subscriber:"splitLineStyle",onSplitLineStyle:o.splitLineStyle,values:a.axis.splitLine},null,8,["onSplitLineStyle","values"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,null,{default:i(()=>[e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[x("Axis Tick")]),_:1}),e(f,null,{default:i(()=>[e(b,null,{default:i(()=>[e(t,{cols:"12"},{default:i(()=>[e(s,{color:"blue",label:"Show/Hide",modelValue:a.axis.axisTick.show,"onUpdate:modelValue":l[26]||(l[26]=n=>a.axis.axisTick.show=n),onChange:o.updated},null,8,["modelValue","onChange"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(s,{color:"blue",label:"Align axis tick with label",modelValue:a.axis.axisTick.alignWithLabel,"onUpdate:modelValue":l[27]||(l[27]=n=>a.axis.axisTick.alignWithLabel=n),onChange:o.updated},null,8,["modelValue","onChange"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(s,{color:"blue",label:"Axis labels face the inside direction",modelValue:a.axis.axisTick.inside,"onUpdate:modelValue":l[28]||(l[28]=n=>a.axis.axisTick.inside=n),onChange:o.updated},null,8,["modelValue","onChange"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(d,{modelValue:a.axis.axisTick.length,"onUpdate:modelValue":l[29]||(l[29]=n=>a.axis.axisTick.length=n),type:"number",label:"Length of the axis tick",min:"0",max:"400",onInput:o.updated},null,8,["modelValue","onInput"])]),_:1}),e(t,{cols:"12"},{default:i(()=>[e(m,null,{default:i(()=>[e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[x("Line Style")]),_:1}),e(f,null,{default:i(()=>[e(V,{subscriber:"axisTickStyle",onAxisTickStyle:o.axisTickStyle,values:a.axis.axisTick},null,8,["onAxisTickStyle","values"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{multiple:"",focusable:""},{default:i(()=>[e(r,null,{default:i(()=>[e(p,null,{default:i(()=>[x("Chart Axis Pointer")]),_:1}),e(f,null,{default:i(()=>[e(g,{onChartAxisPointer:o.externalSettings,values:a.axis.axisPointer},null,8,["onChartAxisPointer","values"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const G=k(A,[["render",_]]);export{G as C};
