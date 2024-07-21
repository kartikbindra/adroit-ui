import{c as V}from"./utils-CuqrWA7w.js";import{j as o}from"./jsx-runtime-DWbWqHZ-.js";import{r as n}from"./index-l2PZgWEW.js";import{P as f}from"./index-CE9T9n2a.js";import{c as _}from"./index-Bb4qSo10.js";/* empty css              */import"./index-DEUJ_QDu.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),D=(...e)=>e.filter((r,t,s)=>!!r&&s.indexOf(r)===t).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=n.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:i="",children:c,iconNode:E,...N},I)=>n.createElement("svg",{ref:I,...$,width:r,height:r,stroke:e,strokeWidth:s?Number(t)*24/Number(r):t,className:D("lucide",i),...N},[...E.map(([S,q])=>n.createElement(S,q)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,r)=>{const t=n.forwardRef(({className:s,...i},c)=>n.createElement(M,{ref:c,iconNode:r,className:D(`lucide-${L(e)}`,s),...i}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=u("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=u("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=u("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=u("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),B=_("",{variants:{type:{info:"bg-primary-4 text-primary-10",success:"bg-success-4 text-success-10",warning:"bg-warning-4 text-warning-11",error:"bg-error-4 text-error-10"}},defaultVariants:{type:"info"}}),m=({type:e,title:r,description:t,className:s,...i})=>o.jsxs("div",{className:V(B({type:e}),s,"flex items-center gap-[16px] py-4 px-4 w-full rounded-sm"),...i,children:[o.jsxs("div",{className:"flex items-center justify-center w-[24px] h-[24px] rounded-full",children:[e==="info"&&o.jsx(W,{}),e==="success"&&o.jsx(O,{}),e==="warning"&&o.jsx(P,{}),e==="error"&&o.jsx(R,{})]}),o.jsxs("div",{children:[o.jsx("div",{className:"text-md font-semibold",children:r}),o.jsx("div",{className:"text-xs font-regular",children:t})]})]});m.propTypes={type:f.oneOf(["info","success","warning","error"]),title:f.string,description:f.string};m.defaultProps={type:"info",title:"Alert-Title",description:"Alert-Description"};m.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{type:{defaultValue:{value:"'info'",computed:!1},description:"",type:{name:"enum",value:[{value:"'info'",computed:!1},{value:"'success'",computed:!1},{value:"'warning'",computed:!1},{value:"'error'",computed:!1}]},required:!1},title:{defaultValue:{value:"'Alert-Title'",computed:!1},description:"",type:{name:"string"},required:!1},description:{defaultValue:{value:"'Alert-Description'",computed:!1},description:"",type:{name:"string"},required:!1}}};const J={title:"Example/Alert",component:m,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{type:"info",title:"Accordion-Title",description:"Accordion-Description"}},l={args:{type:"success",title:"Accordion-Title",description:"Accordion-Description"}},p={args:{type:"warning",title:"Accordion-Title",description:"Accordion-Description"}},d={args:{type:"error",title:"Accordion-Title",description:"Accordion-Description"}};var g,y,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Accordion-Title',
    description: 'Accordion-Description'
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var A,h,v;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Accordion-Title',
    description: 'Accordion-Description'
  }
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var w,k,j;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Accordion-Title',
    description: 'Accordion-Description'
  }
}`,...(j=(k=p.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var b,C,T;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Accordion-Title',
    description: 'Accordion-Description'
  }
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const Q=["AlertInfo","AlertSuccess","AlertWarning","AlertError"];export{d as AlertError,a as AlertInfo,l as AlertSuccess,p as AlertWarning,Q as __namedExportsOrder,J as default};
