import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as V}from"./index-Bc2G9s8g.js";const A="_wrapper_42jup_1",W="_disabled_42jup_9",F="_input_42jup_14",O="_box_42jup_22",R="_checked_42jup_46",z="_indeterminate_42jup_47",G="_checkIcon_42jup_52",H="_textStack_42jup_62",J="_label_42jup_68",K="_helperText_42jup_76",t={wrapper:A,disabled:W,input:F,box:O,checked:R,indeterminate:z,checkIcon:G,textStack:H,label:J,helperText:K},r=({checked:b=!1,indeterminate:d=!1,disabled:x=!1,label:p,helperText:u,onChange:h,className:U})=>{const m=V.useId(),E=[t.box,b?t.checked:"",d?t.indeterminate:""].filter(Boolean).join(" ");return e.jsxs("label",{className:[t.wrapper,x?t.disabled:"",U??""].filter(Boolean).join(" "),htmlFor:m,children:[e.jsx("input",{id:m,type:"checkbox",className:t.input,checked:b,disabled:x,onChange:a=>h==null?void 0:h(a.target.checked),ref:a=>{a&&(a.indeterminate=d)}}),e.jsx("span",{className:E,"aria-hidden":"true",children:d?e.jsx("svg",{className:t.checkIcon,width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:e.jsx("path",{d:"M1 1h8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):e.jsx("svg",{className:t.checkIcon,width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",children:e.jsx("path",{d:"M1 3.5L3.5 6L9 1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),(p||u)&&e.jsxs("span",{className:t.textStack,children:[p&&e.jsx("span",{className:t.label,children:p}),u&&e.jsx("span",{className:t.helperText,children:u})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const X={title:"Components/Checkbox",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{label:"Checkbox label",helperText:"Supporting description line"}},n={args:{checked:!0,label:"Checkbox label",helperText:"Supporting description line"}},l={args:{indeterminate:!0,label:"Checkbox label",helperText:"Supporting description line"}},c={args:{disabled:!0,label:"Checkbox label",helperText:"Supporting description line"}},o={args:{disabled:!0,checked:!0,label:"Checkbox label",helperText:"Supporting description line"}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{label:"Unchecked",helperText:"Default state"}),e.jsx(r,{checked:!0,label:"Checked",helperText:"Selected state"}),e.jsx(r,{indeterminate:!0,label:"Indeterminate",helperText:"Mixed state"}),e.jsx(r,{disabled:!0,label:"Disabled",helperText:"Not interactive"})]})};var k,g,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox label',
    helperText: 'Supporting description line'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var _,j,T;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Checkbox label',
    helperText: 'Supporting description line'
  }
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var C,S,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: 'Checkbox label',
    helperText: 'Supporting description line'
  }
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,N,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Checkbox label',
    helperText: 'Supporting description line'
  }
}`,...(I=(N=c.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var D,w,q;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    label: 'Checkbox label',
    helperText: 'Supporting description line'
  }
}`,...(q=(w=o.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};var L,B,M;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Checkbox label="Unchecked" helperText="Default state" />
      <Checkbox checked label="Checked" helperText="Selected state" />
      <Checkbox indeterminate label="Indeterminate" helperText="Mixed state" />
      <Checkbox disabled label="Disabled" helperText="Not interactive" />
    </div>
}`,...(M=(B=i.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};const Y=["Unchecked","Checked","Indeterminate","Disabled","DisabledChecked","AllStates"];export{i as AllStates,n as Checked,c as Disabled,o as DisabledChecked,l as Indeterminate,s as Unchecked,Y as __namedExportsOrder,X as default};
