(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9483],{6475:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(7294),s=n(7961);const a=function(e){const t=(0,r.useRef)(!1),n=(0,r.useRef)({startX:0,startY:0,lastX:0,lastY:0});(0,r.useEffect)((()=>{const r=document.getElementById(e);if(!r)throw new Error("Element with given id doesn't exist");const s=r.parentElement;if(!s)throw new Error("target element must have a parent");const a=e=>{t.current=!0,n.current.startX=e.clientX,n.current.startY=e.clientY},c=e=>{t.current=!1,n.current.lastX=r.offsetLeft,n.current.lastY=r.offsetTop},u=e=>{if(!t.current)return;const s=e.clientX-n.current.startX+n.current.lastX,a=e.clientY-n.current.startY+n.current.lastY;r.style.top=`${a}px`,r.style.left=`${s}px`};r.addEventListener("mousedown",a),r.addEventListener("mouseup",c),s.addEventListener("mousemove",u),s.addEventListener("mouseleave",c);return()=>{r.removeEventListener("mousedown",a),r.removeEventListener("mouseup",c),s.removeEventListener("mousemove",u),s.removeEventListener("mouseleave",c)}}),[e])},c=e=>{let{card_id:t,cardBackground:n}=e;return a(t),r.createElement("div",{id:t,className:"box"})};function u(){return r.createElement(s.Z,null,r.createElement("main",null,r.createElement("div",{className:"container"},[1,2,3].map(((e,t)=>r.createElement(c,{key:t,card_id:`card_${t}`,cardBackground:n(2941)(`./${e}.png`).default}))))))}},2317:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/1-00656b95d1ef0fe96a42586ef294cc7a.png"},7523:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/2-e0ee3283c48e21d2cf9054c914c05698.png"},4140:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/3-674c482639dff94b27971bfe78ade3e6.png"},5050:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/4-ba06c09fe118a72b900bfcc6ecb7cdd2.png"},2941:(e,t,n)=>{var r={"./1.png":2317,"./2.png":7523,"./3.png":4140,"./4.png":5050};function s(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id=2941}}]);