import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{R as D,r as q}from"./index-Bc2G9s8g.js";const T="_wrapper_1489g_1",V="_icon_1489g_8",R="_input_1489g_18",E="_clearButton_1489g_59",I="_hasClear_1489g_81",s={wrapper:T,icon:V,input:R,clearButton:E,hasClear:I},l=D.forwardRef(({value:r,onChange:a,onClear:y,placeholder:C="Search...",disabled:i,className:w,...b},B)=>{const d=!!r&&!i;return e.jsxs("div",{className:[s.wrapper,w??""].filter(Boolean).join(" "),children:[e.jsx("span",{className:s.icon,"aria-hidden":"true",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("circle",{cx:"7",cy:"7",r:"5.25",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M11 11l3 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsx("input",{ref:B,type:"text",role:"searchbox",className:[s.input,d?s.hasClear:""].filter(Boolean).join(" "),value:r,placeholder:C,disabled:i,onChange:N=>a==null?void 0:a(N.target.value),...b}),d&&e.jsx("button",{type:"button",className:s.clearButton,onClick:y,"aria-label":"Clear search",children:e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:e.jsx("path",{d:"M1 1l8 8M9 1l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})});l.displayName="Search";l.__docgenInfo={description:"",methods:[],displayName:"Search",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},placeholder:{defaultValue:{value:"'Search...'",computed:!1},required:!1}},composes:["Omit"]};const F={title:"Components/Search",component:l,parameters:{layout:"centered"},tags:["autodocs"],decorators:[r=>e.jsx("div",{style:{width:320},children:e.jsx(r,{})})],argTypes:{disabled:{control:"boolean"}}},t={args:{placeholder:"Search tasks..."}},o={args:{value:"Design tokens",placeholder:"Search tasks..."}},n={args:{placeholder:"Search tasks...",disabled:!0}},c={render:()=>{const[r,a]=q.useState("");return e.jsx(l,{value:r,placeholder:"Search tasks...",onChange:a,onClear:()=>a("")})}};var u,p,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search tasks...'
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,g,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 'Design tokens',
    placeholder: 'Search tasks...'
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,f,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search tasks...',
    disabled: true
  }
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var k,_,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Search value={value} placeholder="Search tasks..." onChange={setValue} onClear={() => setValue('')} />;
  }
}`,...(j=(_=c.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const L=["Default","Filled","Disabled","Interactive"];export{t as Default,n as Disabled,o as Filled,c as Interactive,L as __namedExportsOrder,F as default};
