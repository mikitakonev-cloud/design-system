import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as k}from"./index-Bc2G9s8g.js";const w="_wrapper_1aqhn_1",E="_disabled_1aqhn_9",F="_input_1aqhn_14",V="_ring_1aqhn_22",A="_selected_1aqhn_47",G="_dot_1aqhn_57",I="_textStack_1aqhn_69",U="_label_1aqhn_75",C="_helperText_1aqhn_83",a={wrapper:w,disabled:E,input:F,ring:V,selected:A,dot:G,textStack:I,label:U,helperText:C},t=({selected:c=!1,disabled:u=!1,label:d,helperText:i,value:m="",name:O,onChange:p,className:D})=>{const x=k.useId();return e.jsxs("label",{className:[a.wrapper,u?a.disabled:"",D??""].filter(Boolean).join(" "),htmlFor:x,children:[e.jsx("input",{id:x,type:"radio",className:a.input,checked:c,disabled:u,value:m,name:O,onChange:()=>p==null?void 0:p(m)}),e.jsx("span",{className:[a.ring,c?a.selected:""].filter(Boolean).join(" "),"aria-hidden":"true",children:e.jsx("span",{className:a.dot})}),(d||i)&&e.jsxs("span",{className:a.textStack,children:[d&&e.jsx("span",{className:a.label,children:d}),i&&e.jsx("span",{className:a.helperText,children:i})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const K={title:"Components/RadioButton",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{selected:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{label:"Radio label",helperText:"Helper text"}},s={args:{selected:!0,label:"Radio label",helperText:"Helper text"}},l={args:{disabled:!0,label:"Radio label",helperText:"Helper text"}},o={args:{disabled:!0,selected:!0,label:"Radio label",helperText:"Helper text"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(t,{name:"group",value:"a",selected:!0,label:"Option A",helperText:"First option"}),e.jsx(t,{name:"group",value:"b",label:"Option B",helperText:"Second option"}),e.jsx(t,{name:"group",value:"c",label:"Option C",helperText:"Third option"})]})};var b,g,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Radio label',
    helperText: 'Helper text'
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var _,f,T;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    selected: true,
    label: 'Radio label',
    helperText: 'Helper text'
  }
}`,...(T=(f=s.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var y,q,R;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Radio label',
    helperText: 'Helper text'
  }
}`,...(R=(q=l.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var v,j,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true,
    selected: true,
    label: 'Radio label',
    helperText: 'Helper text'
  }
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,N,H;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <RadioButton name="group" value="a" selected label="Option A" helperText="First option" />
      <RadioButton name="group" value="b" label="Option B" helperText="Second option" />
      <RadioButton name="group" value="c" label="Option C" helperText="Third option" />
    </div>
}`,...(H=(N=n.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};const L=["Unselected","Selected","Disabled","DisabledSelected","RadioGroup"];export{l as Disabled,o as DisabledSelected,n as RadioGroup,s as Selected,r as Unselected,L as __namedExportsOrder,K as default};
