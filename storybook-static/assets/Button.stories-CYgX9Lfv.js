import{c as A}from"./utils-CuqrWA7w.js";import{j as F}from"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";import{P as e}from"./index-CE9T9n2a.js";import{c as G}from"./index-Bb4qSo10.js";/* empty css              */import"./index-DEUJ_QDu.js";const J=G("inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm gap-[10px] font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{"solid-primary":"bg-primary-9 text-neutral-2 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-primary-10 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed","solid-secondary":"bg-neutral-2 text-primary-9 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-neutral-4 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed","solid-destructive":"bg-error-9 text-error-1 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-error-10 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed","outline-primary":"border-2 border-primary-9 bg-none text-primary-9 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-primary-3 disabled:bg-neutral-1 disabled:text-neutral-7 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:border-neutral-7","outline-neutral":"border-2 border-neutral-12 bg-none text-neutral-12 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-neutral-3 disabled:bg-neutral-1 disabled:text-neutral-7 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:border-neutral-7","outline-destructive":"bg-error-1 text-error-9 border-2 border-error-9 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-error-3 disabled:bg-neutral-1 disabled:text-neutral-7 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:border-neutral-7","neutral-primary":"bg-neutral-12 text-neutral-2 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-neutral-11 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed","neutral-secondary":"bg-neutral-2 text-neutral-12 focus:ring-2 focus:ring-overlay-6 focus:ring-offset-background hover:bg-neutral-4 disabled:bg-neutral-7 disabled:text-neutral-2 disabled:pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"},size:{xs:"h-[32px] px-[12px] text-xs",sm:"h-[36px] px-[14px] text-sm",md:"h-[40px] px-[16px] text-sm",lg:"h-[44px] px-[16px] text-md",xl:"h-[48px] px-[20px] text-md","2xl":"h-[64px] px-[28px] text-lg"},radius:{none:"rounded-none",xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl",full:"rounded-full"}},defaultVariants:{variant:"solid",size:"md"}}),i=({variant:q,size:_,label:j,radius:E,state:u,className:R,...T})=>F.jsx("button",{type:"button",disabled:u==="disabled",className:A(J({variant:q,size:_,radius:E}),R),style:{cursor:u==="disabled"?"not-allowed":""},...T,children:j});i.propTypes={variant:e.oneOf(["solid-primary","solid-secondary","solid-destructive","outline-primary","outline-neutral","outline-destructive","neutral-primary","neutral-secondary"]),size:e.oneOf(["xs","sm","md","lg","xl","2xl"]),label:e.string.isRequired,onClick:e.func,radius:e.oneOf(["none","xs","sm","md","lg","xl","2xl","full"]),state:e.oneOf(["default","disabled"])};i.defaultProps={variant:"solid-primary",size:"md",label:"Button",radius:"xs",onClick:()=>{alert("Hello from adroit UI :)")},state:"default"};i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'solid-primary'",computed:!1},description:"",type:{name:"enum",value:[{value:"'solid-primary'",computed:!1},{value:"'solid-secondary'",computed:!1},{value:"'solid-destructive'",computed:!1},{value:"'outline-primary'",computed:!1},{value:"'outline-neutral'",computed:!1},{value:"'outline-destructive'",computed:!1},{value:"'neutral-primary'",computed:!1},{value:"'neutral-secondary'",computed:!1}]},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'xs'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1}]},required:!1},label:{defaultValue:{value:"'Button'",computed:!1},description:"",type:{name:"string"},required:!1},radius:{defaultValue:{value:"'xs'",computed:!1},description:"",type:{name:"enum",value:[{value:"'none'",computed:!1},{value:"'xs'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1},{value:"'2xl'",computed:!1},{value:"'full'",computed:!1}]},required:!1},onClick:{defaultValue:{value:`() => {
  alert('Hello from adroit UI :)');
}`,computed:!1},description:"",type:{name:"func"},required:!1},state:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'disabled'",computed:!1}]},required:!1}}};const Z={title:"Example/Button",component:i,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{variant:"solid-primary",size:"md",label:"Solid Button",radius:"xs",state:"default",onClick:()=>{alert("Hello from adroitUI!")}}},r={args:{variant:"solid-secondary",size:"md",label:"Solid Inverted Button",radius:"xs",state:"default",onClick:()=>{alert("Hello from adroitUI!")}}},t={args:{variant:"neutral-primary",size:"md",label:"Neutral Button",radius:"xs",state:"default",onClick:()=>{alert("Hello from adroitUI!")}}},l={args:{variant:"neutral-secondary",size:"md",label:"Neutral Button",radius:"xs",state:"default",onClick:()=>{alert("Hello from adroitUI!")}}},o={args:{variant:"outline-primary",size:"md",label:"Solid Button",radius:"xs",state:"default",onClick:()=>{alert("Hello from adroitUI!")}}},s={args:{variant:"outline-neutral",size:"md",label:"Solid Button",radius:"xs",state:"default",onClick:()=>{alert("Hello from adroitUI!")}}},n={args:{variant:"solid-destructive",size:"md",label:"Delete",radius:"xs",state:"default",onClick:()=>{alert("Hello from adroitUI!")}}},d={args:{variant:"outline-destructive",size:"md",label:"Delete",radius:"xs",state:"default",onClick:()=>{alert("Hello from adroitUI!")}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'solid-primary',
    size: 'md',
    label: 'Solid Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    }
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,b,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'solid-secondary',
    size: 'md',
    label: 'Solid Inverted Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    }
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,x,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'neutral-primary',
    size: 'md',
    label: 'Neutral Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    }
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var k,S,z;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'neutral-secondary',
    size: 'md',
    label: 'Neutral Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    }
  }
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var I,C,B;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'outline-primary',
    size: 'md',
    label: 'Solid Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    }
  }
}`,...(B=(C=o.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var H,U,h;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'outline-neutral',
    size: 'md',
    label: 'Solid Button',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    }
  }
}`,...(h=(U=s.parameters)==null?void 0:U.docs)==null?void 0:h.source}}};var N,w,O;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'solid-destructive',
    size: 'md',
    label: 'Delete',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    }
  }
}`,...(O=(w=n.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var P,D,V;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'outline-destructive',
    size: 'md',
    label: 'Delete',
    radius: 'xs',
    state: 'default',
    onClick: () => {
      alert('Hello from adroitUI!');
    }
  }
}`,...(V=(D=d.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const $=["SolidPrimary","SolidSecondary","NeutralPrimary","NeutralSecondary","OutlinePrimary","OutlineNeutral","SolidDestructive","OutlineDestructive"];export{t as NeutralPrimary,l as NeutralSecondary,d as OutlineDestructive,s as OutlineNeutral,o as OutlinePrimary,n as SolidDestructive,a as SolidPrimary,r as SolidSecondary,$ as __namedExportsOrder,Z as default};
