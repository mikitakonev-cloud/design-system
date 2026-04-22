import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{r as n}from"./index-Bc2G9s8g.js";const W="_wrapper_ut15p_1",K="_label_ut15p_9",M="_trigger_ut15p_17",A="_open_ut15p_55",F="_placeholder_ut15p_59",P="_chevron_ut15p_63",z="_dropdown_ut15p_73",G="_option_ut15p_86",H="_selected_ut15p_107",J="_helperText_ut15p_112",a={wrapper:W,label:K,trigger:M,open:A,placeholder:F,chevron:P,dropdown:z,option:G,selected:H,helperText:J},v=({options:r,value:s,placeholder:B="Select an option",label:_,helperText:b,disabled:I=!1,onChange:m,className:L})=>{const x=n.useId(),[l,o]=n.useState(!1),h=n.useRef(null),g=r.find(e=>e.value===s);n.useEffect(()=>{const e=f=>{h.current&&!h.current.contains(f.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const O=e=>{m==null||m(e),o(!1)},R=e=>{e.key==="Escape"&&o(!1),(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),o(f=>!f))};return t.jsxs("div",{ref:h,className:[a.wrapper,L??""].filter(Boolean).join(" "),children:[_&&t.jsx("label",{className:a.label,htmlFor:x,children:_}),t.jsxs("button",{id:x,type:"button",className:[a.trigger,l?a.open:""].filter(Boolean).join(" "),disabled:I,onClick:()=>o(e=>!e),onKeyDown:R,"aria-haspopup":"listbox","aria-expanded":l,children:[t.jsx("span",{className:g?"":a.placeholder,children:g?g.label:B}),t.jsx("svg",{className:[a.chevron,l?a.open:""].filter(Boolean).join(" "),width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:t.jsx("path",{d:"M4 6l4 4 4-4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),l&&t.jsx("div",{className:a.dropdown,role:"listbox",children:r.map(e=>t.jsx("button",{type:"button",role:"option","aria-selected":e.value===s,className:[a.option,e.value===s?a.selected:""].filter(Boolean).join(" "),onClick:()=>O(e.value),children:e.label},e.value))}),b&&t.jsx("span",{className:a.helperText,children:b})]})};v.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const u=[{value:"design",label:"Design"},{value:"engineering",label:"Engineering"},{value:"product",label:"Product"},{value:"marketing",label:"Marketing"}],X={title:"Components/Select",component:v,parameters:{layout:"centered"},tags:["autodocs"],decorators:[r=>t.jsx("div",{style:{width:320,paddingBottom:160},children:t.jsx(r,{})})],argTypes:{disabled:{control:"boolean"}}},c={args:{options:u,label:"Team",placeholder:"Select a team",helperText:"Choose your team"}},i={args:{options:u,label:"Team",value:"design"}},p={args:{options:u,label:"Team",placeholder:"Select a team",disabled:!0}},d={render:()=>{const[r,s]=n.useState("");return t.jsx(v,{options:u,value:r,label:"Team",placeholder:"Select a team",helperText:"Choose your team",onChange:s})}};var y,T,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options,
    label: 'Team',
    placeholder: 'Select a team',
    helperText: 'Choose your team'
  }
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var j,w,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options,
    label: 'Team',
    value: 'design'
  }
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var N,E,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    options,
    label: 'Team',
    placeholder: 'Select a team',
    disabled: true
  }
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var D,C,V;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Select options={options} value={value} label="Team" placeholder="Select a team" helperText="Choose your team" onChange={setValue} />;
  }
}`,...(V=(C=d.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const Y=["Default","WithValue","Disabled","Interactive"];export{c as Default,p as Disabled,d as Interactive,i as WithValue,Y as __namedExportsOrder,X as default};
