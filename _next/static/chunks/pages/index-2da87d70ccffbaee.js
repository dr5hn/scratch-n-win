(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6516)}])},1692:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(5893),i=t(7294),s=t(1664),o=t.n(s),a=t(1163),c=t(9074),u=function(){var e=(0,c.a)(),n=e.user,t=e.logout,i=(0,a.useRouter)();return(0,r.jsx)("header",{className:"text-gray-700 bg-teal-500 body-font",children:(0,r.jsxs)("div",{className:"flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap md:p-8",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("a",{className:"text-xl font-bold text-white",children:"Flora's Kitchen"})})}),(0,r.jsx)(o(),{href:"/signin",children:(0,r.jsx)("button",{className:"".concat(n||"/signin"==i.pathname?"hidden":"block"," inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"),children:"Sign In"})}),(0,r.jsx)("button",{className:"".concat(n?"block":"hidden"," inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"),onClick:function(){return t()},children:"Sign Out"})]})})};var l=function(){return(0,r.jsx)("footer",{className:"bg-blue-500"})};function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,s=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(s.push(r.value),!n||s.length!==n);o=!0);}catch(c){a=!0,i=c}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return s}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e){var n=x(function(){var e=(0,i.useState)([0,0]),n=e[0],t=e[1];return(0,i.useLayoutEffect)((function(){var e=function(){t([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),2)[1];return(0,r.jsxs)("div",{className:"flex flex-col",style:{height:n-80},children:[(0,r.jsx)(u,{}),(0,r.jsx)("main",{className:"flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16",children:e.children}),(0,r.jsx)(l,{})]})}},6516:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(5893),i=t(7294),s=t(1692),o=t(2540),a=t(9074),c=t(4051),u=t.n(c),l=t(1923),f=t.n(l);t(6257);function x(e,n,t,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void t(u)}a.done?n(c):Promise.resolve(c).then(r,i)}function d(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function o(e){x(s,r,i,o,a,"next",e)}function a(e){x(s,r,i,o,a,"throw",e)}o(void 0)}))}}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}(0,t(515).Z)();var p=function(){var e=d(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().firestore().collection("redeems").add(j({},n,{timestamp:f().firestore.FieldValue.serverTimestamp()})).then((function(){return!0})).catch((function(e){return!1}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=d(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f().firestore().collection("redeems").where("phone","==",n).orderBy("timestamp","desc"),e.next=3,t.get().then((function(e){var n=e.docs[0].data().timestamp.toDate();return{date:n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear()+" "+n.getHours()+":"+n.getMinutes()+":"+n.getSeconds(),size:e.size}})).catch((function(e){return!1}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}var g=function(){var e=(0,a.a)().user,n=(0,i.useState)(!1),t=n[0],c=n[1],u=(0,i.useState)(!1),l=u[0],f=u[1],x=(0,i.useState)(""),d=x[0],h=x[1],j=(0,i.useState)(""),v=j[0],g=j[1],b=(0,i.useState)(!1),w=b[0],N=b[1],O=(0,i.useState)(!1),S=O[0],k=O[1];e&&m(e.phone).then((function(e){e&&e.size&&!w&&(c(!0),k(e.date))}));var P={width:320,height:320,image:"ScratchNWin.jpg",finishPercent:50,onComplete:function(){_(),f(!0)}},E=["5% ","10%","15%","A Free Pastry \ud83c\udf70"],_=function(){var n=E[Math.floor(Math.random()*E.length)];h(n),g(n.includes("Pastry")?"":"Discount on your Order."),p({phone:e.phone,offer:n}),N(!0)};return e&&t&&!w?(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("img",{src:"scratch.png",className:"w-1/5",alt:"Four one-eyed aliens playing"}),(0,r.jsx)("br",{}),(0,r.jsx)("h1",{children:"Welcome to Flora's Kitchen"}),(0,r.jsxs)("h2",{children:["Unfortunately, You've already availed for this offer on ",S,"."]})]})}):e&&!t?(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("img",{src:"scratch.png",className:"w-1/5",alt:"Four one-eyed aliens playing"}),(0,r.jsx)("br",{}),(0,r.jsx)(o.Z,y({},P,{children:(0,r.jsxs)("div",{className:"p-3 mx-auto my-8 text-3xl font-bold ext-center",children:[(0,r.jsxs)("h2",{children:["Congratulations!! \ud83c\udf89",(0,r.jsx)("br",{}),"You've Won ",(0,r.jsx)("br",{})]}),(0,r.jsx)("h1",{className:"text-5xl",children:d}),(0,r.jsx)("h2",{children:v}),(0,r.jsxs)("div",{className:"popper ".concat(l?"active":"inactive"),children:[(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]})]})}))]})}):e?void 0:(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center text-center",children:[(0,r.jsx)("h1",{children:"Welcome to Flora's Kitchen"}),(0,r.jsx)("h2",{children:"Redirecting to signin..."})]})})}},515:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(1923),i=t.n(r),s=(t(6690),{appId:"1:568416382340:web:25220d42008854d931c1d1",apiKey:"AIzaSyAqygRLKJUwfPklHQ-LCUxRDRxlApqKZdo",authDomain:"floras-kitchen.firebaseapp.com",databaseURL:"https://floras-kitchen.firebaseio.com",projectId:"floras-kitchen",storageBucket:"floras-kitchen.appspot.com",messagingSenderId:"568416382340"});function o(){i().apps.length||i().initializeApp(s)}},4297:function(e,n,t){"use strict";t.d(n,{J:function(){return r}});var r=function(e){var n=e.uid,t=e.email,r=e.xa,i=e.displayName;return{id:n,phone:e.phoneNumber,email:t,token:r,name:i,avatar:e.photoURL}}},9074:function(e,n,t){"use strict";t.d(n,{a:function(){return d}});var r=t(4051),i=t.n(r),s=t(7294),o=t(1163),a=t(1923),c=t.n(a),u=(t(6690),t(515)),l=t(4152),f=t(4297);function x(e,n,t,r,i,s,o){try{var a=e[s](o),c=a.value}catch(u){return void t(u)}a.done?n(c):Promise.resolve(c).then(r,i)}(0,u.Z)();var d=function(){var e=(0,s.useState)(),n=e[0],t=e[1],r=(0,o.useRouter)(),a=function(){var e,n=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().auth().signOut().then((function(){r.push("/signin")})).catch((function(e){console.error(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var s=e.apply(n,t);function o(e){x(s,r,i,o,a,"next",e)}function a(e){x(s,r,i,o,a,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,s.useEffect)((function(){var e=c().auth().onIdTokenChanged((function(e){if(e){var n=(0,f.J)(e);(0,l.rk)(n),t(n)}else(0,l.gq)(),t()})),n=(0,l.Zl)();if(n)return t(n),function(){e()};r.push("/signin")}),[]),{user:n,logout:a}}},4152:function(e,n,t){"use strict";t.d(n,{Zl:function(){return s},gq:function(){return a},rk:function(){return o}});var r=t(6808),i=t.n(r),s=function(){var e=i().get("auth");if(e)return JSON.parse(e)},o=function(e){i().set("auth",e,{expires:1/24})},a=function(){return i().remove("auth")}}},function(e){e.O(0,[774,239,883,905,257,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);