import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{R,r as V}from"./index-Bc2G9s8g.js";const F="_wrapper_15c99_1",B="_label_15c99_8",O="_inputWrapper_15c99_16",P="_input_15c99_16",k="_error_15c99_58",z="_helperText_15c99_62",A="_errorText_15c99_70",r={wrapper:F,label:B,inputWrapper:O,input:P,error:k,helperText:z,errorText:A},c=R.forwardRef(({label:a,helperText:d,error:s,onChange:i,className:q,disabled:w,...E},D)=>{const u=V.useId();return e.jsxs("div",{className:[r.wrapper,q??""].filter(Boolean).join(" "),children:[a&&e.jsx("label",{className:r.label,htmlFor:u,children:a}),e.jsx("div",{className:r.inputWrapper,children:e.jsx("input",{id:u,ref:D,className:[r.input,s?r.error:""].filter(Boolean).join(" "),disabled:w,onChange:W=>i==null?void 0:i(W.target.value),...E})}),s&&e.jsx("span",{className:r.errorText,children:s}),!s&&d&&e.jsx("span",{className:r.helperText,children:d})]})});c.displayName="TextInput";c.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const J={title:"Components/TextInput",component:c,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e.jsx("div",{style:{width:320},children:e.jsx(a,{})})],argTypes:{disabled:{control:"boolean"}}},t={args:{label:"Label",placeholder:"Placeholder text",helperText:"Supporting description"}},l={args:{label:"Label",defaultValue:"Input value",helperText:"Supporting description"}},n={args:{label:"Label",defaultValue:"Invalid value",error:"This field is required"}},o={args:{label:"Label",placeholder:"Disabled",helperText:"Not editable",disabled:!0}},p={args:{placeholder:"Enter text..."}};var m,x,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
    helperText: 'Supporting description'
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,h,T;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    defaultValue: 'Input value',
    helperText: 'Supporting description'
  }
}`,...(T=(h=l.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var _,f,v;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    defaultValue: 'Invalid value',
    error: 'This field is required'
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,N,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Disabled',
    helperText: 'Not editable',
    disabled: true
  }
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var I,L,S;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(S=(L=p.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const K=["Default","Filled","WithError","Disabled","NoLabel"];export{t as Default,o as Disabled,l as Filled,p as NoLabel,n as WithError,K as __namedExportsOrder,J as default};
