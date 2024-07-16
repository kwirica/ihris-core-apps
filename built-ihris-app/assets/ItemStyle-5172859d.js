import{_ as g,o as w,n as b,a as e,w as s,h as p,d,V as m,m as f,q as u,l as C}from"./index-5c26168b.js";import{V}from"./TextStyle-7779cfb0.js";import{V as r}from"./VCol-88ee311f.js";import{g as a,d as h}from"./VisualizationBuilder-4a236344.js";const y={props:["subscriber","values"],data(){return{settings:{borderColor:"#000",color:"",borderWidth:0,borderType:"solid",shadowBlur:0,shadowColor:"",shadowOffsetX:0,shadowOffsetY:0},borderTypes:["solid","dashed","dotted"],displayProgBorderColor:!1,displayISShadowColor:!1,displayProgColor:!1}},methods:{updated(){this.$emit(this.subscriber,this.settings)}},created(){for(const n in this.values)Object.keys(this.settings).indexOf(n)!==-1&&(this.settings[n]=this.values[n])}};function x(n,o,v,I,l,i){return w(),b("div",null,[e(p,{modelValue:l.displayProgBorderColor,"onUpdate:modelValue":o[1]||(o[1]=t=>l.displayProgBorderColor=t),width:"313px"},{default:s(()=>[e(V,{class:"ma-2","canvas-height":"300",modelValue:l.settings.borderColor,"onUpdate:modelValue":o[0]||(o[0]=t=>l.settings.borderColor=t)},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(p,{modelValue:l.displayProgColor,"onUpdate:modelValue":o[3]||(o[3]=t=>l.displayProgColor=t),width:"313px"},{default:s(()=>[e(V,{class:"ma-2","canvas-height":"300",modelValue:l.settings.color,"onUpdate:modelValue":o[2]||(o[2]=t=>l.settings.color=t)},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(p,{modelValue:l.displayISShadowColor,"onUpdate:modelValue":o[5]||(o[5]=t=>l.displayISShadowColor=t),width:"313px"},{default:s(()=>[e(V,{class:"ma-2","canvas-height":"300",modelValue:l.settings.shadowColor,"onUpdate:modelValue":o[4]||(o[4]=t=>l.settings.shadowColor=t)},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(C,null,{default:s(()=>[e(r,{cols:"6"},{default:s(()=>[d(" Progress color: ")]),_:1}),e(r,{cols:"6"},{default:s(()=>[e(m,{color:l.settings.color,width:"30px",height:"20",onClick:o[7]||(o[7]=t=>l.displayProgColor=!0)},{default:s(()=>[e(f,{onClick:o[6]||(o[6]=t=>l.displayProgColor=!0)})]),_:1},8,["color"])]),_:1}),e(r,{cols:"6"},{default:s(()=>[d(" Progress border color: ")]),_:1}),e(r,{cols:"6"},{default:s(()=>[e(m,{color:l.settings.borderColor,width:"30px",height:"20",onClick:o[9]||(o[9]=t=>l.displayProgBorderColor=!0)},{default:s(()=>[e(f,{onClick:o[8]||(o[8]=t=>l.displayProgBorderColor=!0)})]),_:1},8,["color"])]),_:1}),e(r,{cols:"12"},{default:s(()=>[e(u,{modelValue:l.settings.borderWidth,"onUpdate:modelValue":o[10]||(o[10]=t=>l.settings.borderWidth=t),type:"number",label:"Border Width",min:"0",max:"10000",onInput:i.updated},{default:s(()=>[e(a,{activator:"parent",location:"bottom"},{default:s(()=>[d("Border width. No border when it is set to be 0")]),_:1})]),_:1},8,["modelValue","onInput"])]),_:1}),e(r,{cols:"12"},{default:s(()=>[e(h,{items:l.borderTypes,modelValue:l.settings.borderType,"onUpdate:modelValue":o[11]||(o[11]=t=>l.settings.borderType=t),label:"Border type",onInput:i.updated},null,8,["items","modelValue","onInput"])]),_:1}),e(r,{cols:"12"},{default:s(()=>[e(u,{modelValue:l.settings.shadowBlur,"onUpdate:modelValue":o[12]||(o[12]=t=>l.settings.shadowBlur=t),type:"number",label:"Size of shadow blur",min:"0",max:"40",onInput:i.updated},{default:s(()=>[e(a,{activator:"parent",location:"bottom"},{default:s(()=>[d("This attribute should be used along with shadowColor, shadowOffsetX, shadowOffsetY to set shadow to component")]),_:1})]),_:1},8,["modelValue","onInput"])]),_:1}),e(r,{cols:"6"},{default:s(()=>[d(" Shadow Color: ")]),_:1}),e(r,{cols:"6"},{default:s(()=>[e(m,{color:l.settings.shadowColor,width:"30px",height:"20",onClick:o[14]||(o[14]=t=>l.displayISShadowColor=!0)},{default:s(()=>[e(f,{onClick:o[13]||(o[13]=t=>l.displayISShadowColor=!0)})]),_:1},8,["color"])]),_:1}),e(r,{cols:"6"},{default:s(()=>[e(u,{modelValue:l.settings.shadowOffsetX,"onUpdate:modelValue":o[15]||(o[15]=t=>l.settings.shadowOffsetX=t),type:"number",label:"Horizontal Offset",min:"-90",max:"90",onInput:i.updated},{default:s(()=>[e(a,{activator:"parent",location:"bottom"},{default:s(()=>[d(" Offset distance on the horizontal direction of shadow ")]),_:1})]),_:1},8,["modelValue","onInput"])]),_:1}),e(r,{cols:"6"},{default:s(()=>[e(u,{modelValue:l.settings.shadowOffsetY,"onUpdate:modelValue":o[16]||(o[16]=t=>l.settings.shadowOffsetY=t),type:"number",label:"Vertical Offset",min:"-90",max:"90",onInput:i.updated},{default:s(()=>[e(a,{activator:"parent",location:"bottom"},{default:s(()=>[d(" Offset distance on the vertical direction of shadow ")]),_:1})]),_:1},8,["modelValue","onInput"])]),_:1})]),_:1})])}const U=g(y,[["render",x]]);export{U as I};