(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9483],{6475:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(7294),s=r(7961);const a=function(e){const t=(0,n.useRef)(!1),r=(0,n.useRef)({startX:0,startY:0,lastX:0,lastY:0});(0,n.useEffect)((()=>{const n=document.getElementById(e);if(!n)throw new Error("Element with given id doesn't exist");const s=n.parentElement;if(!s)throw new Error("target element must have a parent");const a=e=>{t.current=!0,r.current.startX=e.clientX,r.current.startY=e.clientY},c=e=>{t.current=!1,r.current.lastX=n.offsetLeft,r.current.lastY=n.offsetTop},u=e=>{if(!t.current)return;const s=e.clientX-r.current.startX+r.current.lastX,a=e.clientY-r.current.startY+r.current.lastY;n.style.top=`${a}px`,n.style.left=`${s}px`};n.addEventListener("mousedown",a),n.addEventListener("mouseup",c),s.addEventListener("mousemove",u),s.addEventListener("mouseleave",c);return()=>{n.removeEventListener("mousedown",a),n.removeEventListener("mouseup",c),s.removeEventListener("mousemove",u),s.removeEventListener("mouseleave",c)}}),[e])},c=e=>{let{card_id:t,cardBackground:r}=e;return a(t),n.createElement("div",{id:t,className:"box"},n.createElement("img",{src:r}))};function u(){return n.createElement(s.Z,null,n.createElement("main",null,n.createElement("div",{className:"playground"},[1,2,3].map(((e,t)=>n.createElement(c,{key:t,card_id:`card_${t}`,cardBackground:r(2941)(`./${e}.png`).default}))))))}},2317:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/1-00656b95d1ef0fe96a42586ef294cc7a.png"},7523:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/2-e0ee3283c48e21d2cf9054c914c05698.png"},4140:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/3-674c482639dff94b27971bfe78ade3e6.png"},5050:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r.p+"assets/images/4-ba06c09fe118a72b900bfcc6ecb7cdd2.png"},2941:(e,t,r)=>{var n={"./1.png":2317,"./2.png":7523,"./3.png":4140,"./4.png":5050};function s(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id=2941}}]);