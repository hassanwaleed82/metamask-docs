"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2520],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||i;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),i=n(4865),s=n(19365);const o={description:"Get the estimated gas prices for a chain."},l="Get EIP-1559 gas prices",u={unversionedId:"gas-api/api-reference/gasprices-type2",id:"gas-api/api-reference/gasprices-type2",title:"Get EIP-1559 gas prices",description:"Get the estimated gas prices for a chain.",source:"@site/services/gas-api/api-reference/gasprices-type2.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/gasprices-type2",permalink:"/1264-snaps-network-access/services/gas-api/api-reference/gasprices-type2",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/gasprices-type2.md",tags:[],version:"current",frontMatter:{description:"Get the estimated gas prices for a chain."},sidebar:"servicesSidebar",previous:{title:"Get the busy threshold",permalink:"/1264-snaps-network-access/services/gas-api/api-reference/busythreshold"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],m={toc:p},g="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"get-eip-1559-gas-prices"},"Get EIP-1559 gas prices"),(0,r.yg)("p",null,"Returns the estimated ",(0,r.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"EIP-1559")," gas fees for the specified\nblockchain network."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"GET")," ",(0,r.yg)("inlineCode",{parentName:"p"},"https://gas.api.infura.io/networks/${chainId}/suggestedGasFees")),(0,r.yg)("h2",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Path"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"chainId"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - ID of the chain to query.")),(0,r.yg)("h2",{id:"returns"},"Returns"),(0,r.yg)("p",null,"Recommended gas price details based of the level of urgency:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"low"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"medium"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"high")," - Object containing recommended values for transactions by level of urgency:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"suggestedMaxPriorityFeePerGas"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The maximum suggested priority fee per gas to pay\nto have transactions included in a block."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"suggestedMaxFeePerGas"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The maximum suggested total fee per gas to pay, including\nboth the base fee and the priority fee."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"minWaitTimeEstimate"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"number")," - The minimum estimated wait time (in milliseconds) for a\ntransaction to be included in a block at the suggested gas price."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"maxWaitTimeEstimate"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"number")," - The maximum estimated wait time (in milliseconds) for a\ntransaction to be included in a block at the suggested gas price."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"estimatedBaseFee"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The current estimated base fee per gas on the network."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"networkCongestion"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"number")," - The current congestion on the network, represented as a number\nbetween ",(0,r.yg)("inlineCode",{parentName:"li"},"0")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"1"),".\nA lower network congestion score (for example ",(0,r.yg)("inlineCode",{parentName:"li"},"0.1"),"), indicates that fewer transactions are being\nsubmitted, so it's cheaper to validate transactions."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"latestPriorityFeeRange"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"array")," - The range of priority fees per gas for recent transactions on\nthe network."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"historicalPriorityFeeRange"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"array")," - The range of priority fees per gas for transactions on the\nnetwork over a historical period."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"historicalBaseFeeRange"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"array")," - The range of base fees per gas on the network over a\nhistorical period."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"priorityFeeTrend"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The current trend in priority fees on the network, either ",(0,r.yg)("inlineCode",{parentName:"li"},"up")," or\n",(0,r.yg)("inlineCode",{parentName:"li"},"down")," (whether it's getting more expensive or cheaper)."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"baseFeeTrend"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"string")," - The current trend in base fees on the network, either ",(0,r.yg)("inlineCode",{parentName:"li"},"up")," or\n",(0,r.yg)("inlineCode",{parentName:"li"},"down")," (whether it's getting more expensive or cheaper).")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("h3",{id:"request"},"Request"),(0,r.yg)("p",null,"Include your ",(0,r.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id"},"API key"),"\nand ",(0,r.yg)("a",{parentName:"p",href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret"},"API key secret"),"\nto authorize your account to use the APIs."),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(s.A,{value:"cURL",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X "GET"                     \\\n    -u <API-KEY>:<API-KEY-SECRET> \\\n    "https://gas.api.infura.io/networks/1/suggestedGasFees"\n'))),(0,r.yg)(s.A,{value:"JavaScript",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'const axios = require("axios");\n\nconst apiKey = "<API-KEY>"; // Replace with your API key.\nconst apiKeySecret = "<API-KEY-SECRET>"; // Replace with your API key secret.\n\nconst Auth = Buffer.from(\n    apiKey + ":" + apiKeySecret,\n).toString("base64");\n\n// The chain ID of the supported network.\nconst chainId = 1;\n\n(async () => {\n    try {\n        const { data } = await axios.get(\n            `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,\n            {\n                headers: {\n                    Authorization: `Basic ${Auth}`,\n                },\n            },\n        );\n        console.log("Suggested gas fees:", data);\n    } catch (error) {\n        console.log("Server responded with:", error);\n    }\n})();\n')))),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "low": {\n        "suggestedMaxPriorityFeePerGas": "0.05",\n        "suggestedMaxFeePerGas": "16.334026964",\n        "minWaitTimeEstimate": 15000,\n        "maxWaitTimeEstimate": 30000\n    },\n    "medium": {\n        "suggestedMaxPriorityFeePerGas": "0.1",\n        "suggestedMaxFeePerGas": "22.083436402",\n        "minWaitTimeEstimate": 15000,\n        "maxWaitTimeEstimate": 45000\n    },\n    "high":{\n        "suggestedMaxPriorityFeePerGas": "0.3",\n        "suggestedMaxFeePerGas": "27.982845839",\n        "minWaitTimeEstimate": 15000,\n        "maxWaitTimeEstimate": 60000\n    },\n    "estimatedBaseFee": "16.284026964",\n    "networkCongestion" :0.5125,\n    "latestPriorityFeeRange": ["0", "3"],\n    "historicalPriorityFeeRange": ["0.000000001", "89"],\n    "historicalBaseFeeRange": ["13.773088584", "29.912845463"],\n    "priorityFeeTrend": "down",\n    "baseFeeTrend": "up"\n}\n')))}d.isMDXComponent=!0},19365:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(96540),r=n(20053);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n},t)}},4865:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(58168),r=n(96540),i=n(20053),s=n(23104),o=n(47751),l=n(92303);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.a_)(),g=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==o&&(m(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:g},s,{className:(0,i.A)("tabs__item",u.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function p(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,o.u)(e);return r.createElement("div",{className:(0,i.A)("tabs-container",u.tabList)},r.createElement(c,(0,a.A)({},e,t)),r.createElement(p,(0,a.A)({},e,t)))}function g(e){const t=(0,l.A)();return r.createElement(m,(0,a.A)({key:String(t)},e))}},47751:(e,t,n)=>{n.d(t,{u:()=>m});var a=n(96540),r=n(56347),i=n(57485),s=n(31682),o=n(89466);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=u(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[m,g]=p({queryString:n,groupId:r}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,o.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),h=(()=>{const e=m??d;return c({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),g(e),y(e)}),[g,y,i]),tabValues:i}}}}]);