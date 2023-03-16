import{L as x}from"./LineStyle-d8e9db47.js";import{C as v}from"./ChartLabel-fba9f1f2.js";import{I as _}from"./ItemStyle-aa696830.js";import{_ as I,af as g,l as T,m as P,p as l,q as e,I as y,b6 as V,x as n,B as S,H as C,A as c,aA as u}from"./index-e1a7a787.js";import{V as B}from"./TextStyle-d575cad1.js";import{V as h}from"./VSwitch-e2ee2715.js";import{d as s,e as m,f as b,g as p,h as f}from"./VisualizationBuilder-fc150169.js";import{V as d}from"./VCol-9c9d795e.js";import{V as U}from"./VContainer-de4a4c64.js";const W={emits:["chartSettings"],props:{option:Object},data(){return{settings:{type:"bar",barWidth:"",barMaxWidth:"",barMinWidth:"",barGap:"30%",colorBy:"data",showBackground:!1,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderColor:"#000",borderWidth:0,borderType:"solid"},label:{show:!1,rotate:0,offset:[0,0]},labelLine:{show:!1,lineStyle:{}},itemStyle:{color:"auto",borderColor:"#000",borderWidth:0,borderType:"solid",shadowBlur:0,shadowColor:"",shadowOffsetX:0,shadowOffsetY:0},labelLayout:{draggable:!0},tooltip:{},markPoint:{}},displayBColor:!1,displayBBorderColor:!1,displayISBorderColor:!1,displayISShadowColor:!1,colorBy:["data","series"],borderTypes:["solid","dashed","dotted"],position:["top","left","right","bottom","inside","insideLeft","insideRight","insideTop","insideBottom","insideTopLeft","insideBottomLeft","insideTopRight","insideBottomRight","start","middle","end","insideStart","insideEnd"],barGap:"",markPoint:!1}},created(){if(this.option.series&&this.option.series.length>0){const r=this.option.series.find(t=>t.type==="bar");for(const t in r)this.settings[t]&&(this.settings[t]=r[t])}this.updated(),this.settings.barGap&&(this.barGap=this.settings.barGap.replace("%","")),this.settings.markPoint&&this.settings.markPoint.data&&(this.markPoint=!0)},methods:{markPointSwitch(){this.markPoint?this.settings.markPoint={data:[{type:"max"}],symbol:"pin"}:this.settings.markPoint={},this.updated()},barGapUpdated(){this.settings.barGap=this.barGap+"%"},barLabelSettings(r){this.settings.label=r,this.updated()},labelLineStyle(r){for(const t in r.value)this.settings.labelLine.lineStyle[t]=r.value[t];this.updated()},barStyle(r){for(const t in r.value)this.settings.itemStyle[t]=r.value[t];this.updated()},updated(){this.$emit("chartSettings",this.settings)}},components:{LineStyle:x,ChartLabel:v,ItemStyle:_}};function G(r,t,M,E,o,i){const k=g("ChartLabel"),w=g("LineStyle"),L=g("ItemStyle");return T(),P(U,{"grid-list-xs":""},{default:l(()=>[e(y,{modelValue:o.displayBColor,"onUpdate:modelValue":t[1]||(t[1]=a=>o.displayBColor=a),width:"313px"},{default:l(()=>[e(B,{class:"ma-2","canvas-height":"300",modelValue:o.settings.backgroundStyle.color,"onUpdate:modelValue":t[0]||(t[0]=a=>o.settings.backgroundStyle.color=a)},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(y,{modelValue:o.displayBBorderColor,"onUpdate:modelValue":t[3]||(t[3]=a=>o.displayBBorderColor=a),width:"313px"},{default:l(()=>[e(B,{class:"ma-2","canvas-height":"300",modelValue:o.settings.backgroundStyle.borderColor,"onUpdate:modelValue":t[2]||(t[2]=a=>o.settings.backgroundStyle.borderColor=a)},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(V,{items:o.colorBy,modelValue:o.settings.colorBy,"onUpdate:modelValue":t[4]||(t[4]=a=>o.settings.colorBy=a),label:"Color By",onChange:i.updated},null,8,["items","modelValue","onChange"]),e(h,{color:"blue",label:"Mark point in a chart",modelValue:o.markPoint,"onUpdate:modelValue":t[5]||(t[5]=a=>o.markPoint=a),onChange:i.markPointSwitch},{default:l(()=>[e(s,{activator:"parent",location:"bottom"},{default:l(()=>[n("Display a mark for the highest/minimum value on the line")]),_:1})]),_:1},8,["modelValue","onChange"]),e(h,{color:"blue",label:"Show background",modelValue:o.settings.showBackground,"onUpdate:modelValue":t[6]||(t[6]=a=>o.settings.showBackground=a),onChange:i.updated},{default:l(()=>[e(s,{activator:"parent",location:"bottom"},{default:l(()=>[n("Whether to show background behind each bar. Use backgroundStyle to set background style")]),_:1})]),_:1},8,["modelValue","onChange"]),e(m,{multiple:"",focusable:""},{default:l(()=>[e(b,null,{default:l(()=>[e(p,null,{default:l(()=>[n("Bar Background Style")]),_:1}),e(f,null,{default:l(()=>[e(S,null,{default:l(()=>[e(d,{cols:"6"},{default:l(()=>[n(" Color: ")]),_:1}),e(d,{cols:"6"},{default:l(()=>[e(C,{color:o.settings.backgroundStyle.color,width:"30px",height:"20",onClick:t[8]||(t[8]=a=>o.displayBColor=!0)},{default:l(()=>[e(c,{onClick:t[7]||(t[7]=a=>o.displayBColor=!0)})]),_:1},8,["color"])]),_:1}),e(d,{cols:"6"},{default:l(()=>[n(" Color: ")]),_:1}),e(d,{cols:"6"},{default:l(()=>[e(C,{color:o.settings.backgroundStyle.borderColor,width:"30px",height:"20",onClick:t[10]||(t[10]=a=>o.displayBBorderColor=!0)},{default:l(()=>[e(c,{onClick:t[9]||(t[9]=a=>o.displayBBorderColor=!0)})]),_:1},8,["color"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(u,{modelValue:o.settings.backgroundStyle.borderWidth,"onUpdate:modelValue":t[11]||(t[11]=a=>o.settings.backgroundStyle.borderWidth=a),type:"number",label:"Border width",min:"0",max:"40",onInput:i.updated},{default:l(()=>[e(s,{activator:"parent",location:"bottom"},{default:l(()=>[n("The border width of bar. defaults to have no border")]),_:1})]),_:1},8,["modelValue","onInput"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(V,{items:o.borderTypes,modelValue:o.settings.backgroundStyle.borderType,"onUpdate:modelValue":t[12]||(t[12]=a=>o.settings.backgroundStyle.borderType=a),label:"Border type",onInput:i.updated},null,8,["items","modelValue","onInput"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{multiple:"",focusable:""},{default:l(()=>[e(b,null,{default:l(()=>[e(p,null,{default:l(()=>[n("Labels")]),_:1}),e(f,null,{default:l(()=>[e(k,{subscriber:"barLabel",onBarLabel:i.barLabelSettings,values:o.settings.label},null,8,["onBarLabel","values"])]),_:1})]),_:1}),e(s,{activator:"parent",location:"bottom"},{default:l(()=>[n("Settings about labels of a bar")]),_:1})]),_:1}),e(m,{multiple:"",focusable:""},{default:l(()=>[e(b,null,{default:l(()=>[e(p,null,{default:l(()=>[n("Label Line")]),_:1}),e(f,null,{default:l(()=>[e(S,null,{default:l(()=>[e(d,{cols:"12"},{default:l(()=>[e(h,{color:"blue",label:"Show/Hide",modelValue:o.settings.labelLine.show,"onUpdate:modelValue":t[13]||(t[13]=a=>o.settings.labelLine.show=a),onChange:i.updated},{default:l(()=>[e(s,{activator:"parent",location:"bottom"},{default:l(()=>[n("Show or Hide label line")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),e(d,{cols:"12"},{default:l(()=>[e(w,{subscriber:"labelLineStyle",onLabelLineStyle:i.labelLineStyle,values:o.settings.labelLine.lineStyle},null,8,["onLabelLineStyle","values"])]),_:1})]),_:1})]),_:1})]),_:1}),e(s,{activator:"parent",location:"bottom"},{default:l(()=>[n("Configuration of label guide line")]),_:1})]),_:1}),e(m,{multiple:"",focusable:""},{default:l(()=>[e(b,null,{default:l(()=>[e(p,null,{default:l(()=>[n("Bars Settings")]),_:1}),e(f,null,{default:l(()=>[e(L,{subscriber:"barStyle",onBarStyle:i.barStyle,values:o.settings.itemStyle},null,8,["onBarStyle","values"])]),_:1})]),_:1})]),_:1}),e(u,{modelValue:o.settings.barWidth,"onUpdate:modelValue":t[14]||(t[14]=a=>o.settings.barWidth=a),type:"number",label:"Bar width",min:"0",max:"100",onInput:i.updated},{default:l(()=>[e(s,{activator:"parent",location:"bottom"},{default:l(()=>[n("The width of the bar. Adaptive when not specified")]),_:1})]),_:1},8,["modelValue","onInput"]),e(u,{modelValue:o.settings.barMaxWidth,"onUpdate:modelValue":t[15]||(t[15]=a=>o.settings.barMaxWidth=a),type:"number",label:"Bar maximum width",min:"0",max:"100",onInput:i.updated},{default:l(()=>[e(s,{activator:"parent",location:"bottom"},{default:l(()=>[n("The maximum width of the bar. Has higer priority than barWidth")]),_:1})]),_:1},8,["modelValue","onInput"]),e(u,{modelValue:o.settings.barMinWidth,"onUpdate:modelValue":t[16]||(t[16]=a=>o.settings.barMinWidth=a),type:"number",label:"Bar minimum width",min:"0",max:"100",onInput:i.updated},{default:l(()=>[e(s,{activator:"parent",location:"bottom"},{default:l(()=>[n("The minimum width of the bar. Has higer priority than barWidth")]),_:1})]),_:1},8,["modelValue","onInput"]),e(u,{modelValue:o.barGap,"onUpdate:modelValue":t[17]||(t[17]=a=>o.barGap=a),type:"number",label:"Gap between bars",min:"-100",max:"100",onInput:i.barGapUpdated,"append-icon":"mdi-percent"},null,8,["modelValue","onInput"])]),_:1})}const X=I(W,[["render",G]]);export{X as default};
