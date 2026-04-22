import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{R as er}from"./index-Bc2G9s8g.js";const ar="_button_djctq_1",tr="_sizeM_djctq_19",sr="_sizeL_djctq_26",nr="_primary_djctq_34",or="_secondary_djctq_52",ir="_tertiary_djctq_70",cr="_ghost_djctq_88",dr="_loading_djctq_116",lr="_spinner_djctq_121",pr="_spin_djctq_121",ur="_icon_djctq_140",a={button:ar,sizeM:tr,sizeL:sr,primary:nr,secondary:or,tertiary:ir,ghost:cr,loading:dr,spinner:lr,spin:pr,icon:ur},e=er.forwardRef(({variant:J="primary",size:K="M",loading:t=!1,disabled:Q=!1,iconLeft:y,iconRight:g,children:U,className:X,...Y},Z)=>{const $=a[J],rr=K==="L"?a.sizeL:a.sizeM;return r.jsxs("button",{ref:Z,className:[a.button,$,rr,t?a.loading:"",X??""].filter(Boolean).join(" "),disabled:Q||t,...Y,children:[t?r.jsx("span",{className:a.spinner,"aria-hidden":"true"}):y&&r.jsx("span",{className:a.icon,children:y}),U,!t&&g&&r.jsx("span",{className:a.icon,children:g})]})});e.displayName="Button";e.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'M' | 'L'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'L'"}]},description:"",defaultValue:{value:"'M'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const gr={title:"Components/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","ghost"]},size:{control:"radio",options:["M","L"]},loading:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{variant:"primary",children:"Button"}},n={args:{variant:"secondary",children:"Button"}},o={args:{variant:"tertiary",children:"Button"}},i={args:{variant:"ghost",children:"Button"}},c={args:{variant:"primary",size:"L",children:"Button"}},d={args:{variant:"primary",loading:!0,children:"Button"}},l={args:{variant:"primary",disabled:!0,children:"Button"}},p={args:{variant:"primary",children:"Button",iconLeft:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:[r.jsx("circle",{cx:"7",cy:"7",r:"6",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M7 4v3l2 2",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}},u={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"tertiary",children:"Tertiary"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"primary",disabled:!0,children:"Disabled"}),r.jsx(e,{variant:"primary",loading:!0,children:"Loading"})]})},m={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[r.jsx(e,{variant:"primary",size:"M",children:"Size M"}),r.jsx(e,{variant:"primary",size:"L",children:"Size L"})]})};var h,v,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button'
  }
}`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var f,_,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Button'
  }
}`,...(j=(_=n.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var x,L,z;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Button'
  }
}`,...(z=(L=o.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var S,b,q;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Button'
  }
}`,...(q=(b=i.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var R,M,w;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'L',
    children: 'Button'
  }
}`,...(w=(M=c.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var N,T,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    children: 'Button'
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var W,C,I;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Button'
  }
}`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var V,A,D;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button',
    iconLeft: <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
  }
}`,...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var G,P,E;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="primary" loading>Loading</Button>
    </div>
}`,...(E=(P=u.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var O,F,H;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Button variant="primary" size="M">Size M</Button>
      <Button variant="primary" size="L">Size L</Button>
    </div>
}`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const hr=["Primary","Secondary","Tertiary","Ghost","Large","Loading","Disabled","WithIconLeft","AllVariants","AllSizes"];export{m as AllSizes,u as AllVariants,l as Disabled,i as Ghost,c as Large,d as Loading,s as Primary,n as Secondary,o as Tertiary,p as WithIconLeft,hr as __namedExportsOrder,gr as default};
