(function(e){function t(t){for(var n,a,l=t[0],s=t[1],u=t[2],c=0,p=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},a={3:0},r={3:0},i=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{1:"4633d180",2:"7a759946",4:"7ef6f3cb",5:"2dd516b7",6:"ab0a89e5",7:"10e439df",8:"9c16ef3a",9:"8cbe0c0d",10:"5cab5af9",11:"0ab35602",12:"3a66e643",13:"e8dc14fa"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o={2:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{1:"31d6cfe0",2:"b60270a5",4:"e1ad8746",5:"d020c239",6:"d21868f3",7:"892945bf",8:"dbd9efef",9:"1c819a46",10:"ce0b68e4",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0"}[e]+".css",r=s.p+n,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===r))return t()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){u=p[l],c=u.getAttribute("data-href");if(c===n||c===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],d.parentNode.removeChild(d),o(i)},d.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(e);var p=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(d);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,o[1](p)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=c;i.push([0,0]),o()})({0:function(e,t,o){e.exports=o("2f39")},"0047":function(e,t,o){},"2f39":function(e,t,o){"use strict";o.r(t);o("e6cf"),o("5319"),o("7d6e"),o("e54f"),o("985d"),o("4e2f"),o("0047");var n=o("2b0e"),a=o("f476"),r=o("42d2"),i=o("b05d"),l=o("2a19");n["a"].use(i["a"],{config:{notify:{}},lang:a["a"],iconSet:r["a"],plugins:{Notify:l["a"]}});var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-layout",{staticClass:"bg-grey-4",attrs:{view:"hhh lpR lfr"}},[o("q-page-container",[o("router-view",{key:e.$route.fullPath})],1)],1)},u=[],c=o("d716"),p=o("fc06"),d={name:"App",components:{GeneralNavBar:c["a"],AdminNavBar:p["a"]},computed:{isUserLogged(){return null!=localStorage.getItem("usuario")}}},h=d,f=o("2877"),m=o("4d5a"),b=o("09e3"),g=o("eebe"),v=o.n(g),y=Object(f["a"])(h,s,u,!1,null,null,null),w=y.exports;v()(y,"components",{QLayout:m["a"],QPageContainer:b["a"]});var P=o("8c4f");const _=[{path:"/",component:()=>o.e(12).then(o.bind(null,"9b2d")),children:[{path:"",name:"index",component:()=>Promise.all([o.e(0),o.e(7)]).then(o.bind(null,"cc4f"))},{path:"login",name:"login",component:()=>Promise.all([o.e(0),o.e(10)]).then(o.bind(null,"33d1"))},{path:"senha",name:"senha",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"de0a")),props:{tipo:"Culto Oficial"}},{path:"senha/devolver",name:"devolver_senha",component:()=>Promise.all([o.e(0),o.e(9)]).then(o.bind(null,"2663"))},{path:"senha/editar",name:"editar_senha",component:()=>Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"1f4d"))},{path:"porteiro/:tipo",name:"porteiro",component:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"6e9f")),props:!0,meta:{authorize:["admin","porteiro-irmas","porteiro-irmaos"]}}]},{path:"/admin",component:()=>o.e(11).then(o.bind(null,"0ebb")),props:{tipo:"Culto Oficial"},meta:{authorize:["admin"]},children:[{path:"",name:"cultos",component:()=>Promise.all([o.e(0),o.e(1)]).then(o.bind(null,"f6b42")),props:{tipo:"Culto Oficial"},meta:{authorize:["admin"]}},{path:"reunioes",name:"reunioes",component:()=>Promise.all([o.e(0),o.e(1)]).then(o.bind(null,"f6b42")),props:{tipo:"Reunião de Jovens e Menores"},meta:{authorize:["admin"]}},{path:"ensaios",name:"ensaios",component:()=>Promise.all([o.e(0),o.e(1)]).then(o.bind(null,"f6b42")),props:{tipo:"Ensaio"},meta:{authorize:["admin"]}},{path:"outros",name:"outros",component:()=>Promise.all([o.e(0),o.e(1)]).then(o.bind(null,"f6b42")),props:{tipo:"Outros"},meta:{authorize:["admin"]}},{path:"servico/novo",name:"novo_servico",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"5198")),meta:{authorize:["admin"]}},{path:"servico/editar/:id",name:"editar_servico",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"5198")),props:!0,meta:{authorize:["admin"]}},{path:"mensagem",name:"mensagem",component:()=>Promise.all([o.e(0),o.e(8)]).then(o.bind(null,"f8dd")),meta:{authorize:["admin"]}}]},{path:"*",component:()=>o.e(13).then(o.bind(null,"e51e"))}];var C=_;n["a"].use(P["a"]);var O=function(){const e=new P["a"]({scrollBehavior:()=>({x:0,y:0}),routes:C,mode:"hash",base:""});return e},q=async function(){const e="function"===typeof O?await O({Vue:n["a"]}):O,t={router:e,render:e=>e(w),el:"#q-app"};return{app:t,router:e}},S=async({router:e})=>{e.beforeEach(((e,t,o)=>{const{authorize:n}=e.meta,a=JSON.parse(localStorage.getItem("usuario"));if(n){if(!a)return o({path:"/login",query:{returnUrl:e.path}});if(n.length&&!n.includes(a.role))return o({path:"/"})}o()}))};const x="";async function T(){const{app:e,router:t}=await q();let o=!1;const a=e=>{o=!0;const n=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=n},r=window.location.href.replace(window.location.origin,""),i=[S];for(let s=0;!1===o&&s<i.length;s++)if("function"===typeof i[s])try{await i[s]({app:e,router:t,Vue:n["a"],ssrContext:null,redirect:a,urlPath:r,publicPath:x})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&new n["a"](e)}T()},d716:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-header",{staticClass:"bg-blue-grey-8 text-white",attrs:{elevated:"","height-hint":"98"}},[o("q-toolbar",[o("q-btn",{attrs:{flat:"",stretch:"",label:"Congregação Cristã no Brasil",to:"/"}}),o("q-space",{staticClass:"touch-hide"}),e.showLogout?o("q-btn",{attrs:{stretch:"",flat:"",label:"Sair",icon:"exit_to_app"},on:{click:e.logout}}):e._e()],1)],1)},a=[],r={name:"GeneralNavBar",props:["showLogout"],methods:{logout(){localStorage.removeItem("usuario"),this.$router.go()}}},i=r,l=o("2877"),s=o("e359"),u=o("65c6"),c=o("9c40"),p=o("2c91"),d=o("eebe"),h=o.n(d),f=Object(l["a"])(i,n,a,!1,null,null,null);t["a"]=f.exports;h()(f,"components",{QHeader:s["a"],QToolbar:u["a"],QBtn:c["a"],QSpace:p["a"]})},fc06:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-header",{staticClass:"bg-blue-grey-8 text-white",attrs:{elevated:"","height-hint":"98"}},[o("q-toolbar",[o("q-btn",{attrs:{flat:"",stretch:"",label:"Congregação Cristã no Brasil",to:"/"}}),o("q-space",{staticClass:"touch-hide"}),o("q-btn",{attrs:{stretch:"",flat:"",label:"Sair",icon:"exit_to_app"},on:{click:e.logout}})],1),o("q-tabs",{staticClass:"bg-blue-grey-10 text-white",attrs:{align:"center","no-caps":"","outside-arrows":"","mobile-arrows":""}},[o("q-route-tab",{attrs:{to:e.goTo("mensagem"),label:"Aviso"}}),o("q-route-tab",{attrs:{to:e.goTo("cultos"),label:"Cultos Oficiais"}}),o("q-route-tab",{attrs:{to:e.goTo("reunioes"),label:"Reuniões de Jovens e Menores"}}),o("q-route-tab",{attrs:{to:e.goTo("ensaios"),label:"Ensaios"}}),o("q-route-tab",{attrs:{to:e.goTo("outros"),label:"Outros Serviços"}})],1)],1)},a=[],r={name:"AdminNavBar",methods:{goTo(e){return{name:e}},logout(){localStorage.removeItem("usuario"),this.$router.push("/")}}},i=r,l=o("2877"),s=o("e359"),u=o("65c6"),c=o("9c40"),p=o("2c91"),d=o("429b"),h=o("7867"),f=o("eebe"),m=o.n(f),b=Object(l["a"])(i,n,a,!1,null,null,null);t["a"]=b.exports;m()(b,"components",{QHeader:s["a"],QToolbar:u["a"],QBtn:c["a"],QSpace:p["a"],QTabs:d["a"],QRouteTab:h["a"]})}});