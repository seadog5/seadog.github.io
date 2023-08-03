"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[572],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>y});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=u(t),p=a,y=l["".concat(c,".").concat(p)]||l[p]||d[p]||o;return t?n.createElement(y,i(i({ref:r},m),{},{components:t})):n.createElement(y,i({ref:r},m))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8719:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},i="Greedy Algorithm",s={unversionedId:"Leetcode/greedy",id:"Leetcode/greedy",title:"Greedy Algorithm",description:"Kadane's Algorithm",source:"@site/docs/Leetcode/greedy.md",sourceDirName:"Leetcode",slug:"/Leetcode/greedy",permalink:"/my-seadog-website/docs/Leetcode/greedy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Leetcode/greedy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"template for binary search",permalink:"/my-seadog-website/docs/Leetcode/binary_search"},next:{title:"Backtracking",permalink:"/my-seadog-website/docs/Leetcode/backtracking"}},c={},u=[{value:"Kadane&#39;s Algorithm",id:"kadanes-algorithm",level:2},{value:"sample for kadane&#39;s algorithm",id:"sample-for-kadanes-algorithm",level:3}],m={toc:u},l="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(l,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"greedy-algorithm"},"Greedy Algorithm"),(0,a.kt)("h2",{id:"kadanes-algorithm"},"Kadane's Algorithm"),(0,a.kt)("p",null,"Can be applied to maximum subarray problem\nkeep current subarray and maximum subarray\nuse current subarray to record -> subarray + number v.s. current number\nmaximum subarray to record the final output"),(0,a.kt)("h3",{id:"sample-for-kadanes-algorithm"},"sample for kadane's algorithm"),(0,a.kt)("p",null,"leetcode 53"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="maxSubArray.py"',title:'"maxSubArray.py"'},"def maxSubArray(self, nums):\n    curr_sum = max_sum = nums[0]\n    for num in nums[1:]:\n        curr_sum = max(num, curr_sum + num)\n        max_sum = max(max_sum, curr_sum + num)\n    return max_sum\n")))}d.isMDXComponent=!0}}]);