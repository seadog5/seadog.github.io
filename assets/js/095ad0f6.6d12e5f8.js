"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=o,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},c=void 0,i={unversionedId:"Leetcode/python_library",id:"Leetcode/python_library",title:"python_library",description:"This page save some useful python library for leetcode.",source:"@site/docs/Leetcode/python_library.md",sourceDirName:"Leetcode",slug:"/Leetcode/python_library",permalink:"/my-seadog-website/docs/Leetcode/python_library",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Leetcode/python_library.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Leetcode",permalink:"/my-seadog-website/docs/category/leetcode"},next:{title:"Greedy Algorithm",permalink:"/my-seadog-website/docs/Leetcode/greedy"}},l={},s=[{value:"Counter",id:"counter",level:3},{value:"Deque",id:"deque",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page save some useful python library for leetcode."),(0,o.kt)("h3",{id:"counter"},"Counter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="counter.py"',title:'"counter.py"'},"from collections import Counter\n\nlist1 = ['x','y','z','x','x','x','y', 'z']\n\n# Initialization\nCounter(list1) # => Counter({'x': 4, 'y': 2, 'z': 2})\n\n# Updating\ncounterObject = collections.Counter(list1)\ncounterObject.keys() = [ 'x' , 'y' , 'z' ]\nmost_common_element = counterObject.most_common(1) # [('x', 4)]\ncounterObject.update(\"some string\") # => Counter({'o': 3, 'u': 3, 'e': 2, 's': 2})\ncounterObject['s'] += 1 # Increase/Decrease frequency\n\n# Accessing\nfrequency_of_s = counterObject['s']\n\n# Deleting\ndel couterObject['s']\n")),(0,o.kt)("h3",{id:"deque"},"Deque"),(0,o.kt)("p",null,"Deque is double-ended queue and it can be used as stack, queue, and linked list"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="deque.py"',title:'"deque.py"'},"from collections import deque\n# Stack\ns = deque()\ns.append(1);  # 1\ns.append(2);  # 1,2\ns.append(3);  # 1,2,3\ns.pop();      # 1,2\ns.pop();      # 1\n\n# Queue\nq = deque()\nq.append(1);  # 1\nq.append(2);  # 1,2\nq.append(3);  # 1,2,3\nq.popleft();  # 2,3\nq.popleft();  # 3\n\n# LinkedList\nll = deque() \nll.append(1);     # 1\nll.append(2);     # 1,2\nll.appendleft(0); # 0,1,2\nll.pop();         # 0,1\nll.popleft();     # 1\n")),(0,o.kt)("p",null,"The content of this page take this post ",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/discuss/study-guide/2122306/python-cheat-sheet-for-leetcode"},"https://leetcode.com/discuss/study-guide/2122306/python-cheat-sheet-for-leetcode")," as reference."))}d.isMDXComponent=!0}}]);