(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"0ba0":function(t,e,n){"use strict";n("2eaa")},"2eaa":function(t,e,n){},"33d1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute-center q-px-sm"},[t.loading?[n("q-inner-loading",{attrs:{showing:"",color:"blue-grey-6"}})]:n("q-card",{staticClass:"my-card q-mx-sm"},[n("q-card-section",{staticClass:"bg-blue-grey-6 text-white"},[n("div",{staticClass:"text-h6"},[t._v("\n        Fazer Login\n      ")])]),n("q-separator"),t.message?n("q-card-section",[n("div",{staticClass:"my-section q-pa-md"},[n("div",{staticClass:"text-h5 text-weight-bold text-center"},[t._v("\n          "+t._s(t.message)+"\n        ")]),n("q-btn",{staticClass:"full-width q-mt-xl",attrs:{color:"blue-grey-10",label:"Tentar novamente"},on:{click:function(e){return t.$router.go()}}})],1)]):n("q-card-section",[n("q-form",{staticClass:"q-gutter-md q-pa-md",on:{submit:t.doLogin,reset:t.onCancel}},[n("q-input",{attrs:{type:"text",filled:"",color:"blue-grey-10",label:"Nome do Usuário","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Por favor, preencha o nome do usuário"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:t.login.username,callback:function(e){t.$set(t.login,"username",e)},expression:"login.username"}}),n("q-input",{attrs:{filled:"",type:t.isPwd?"password":"text",color:"blue-grey-10",label:"Senha","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Por favor, informe a senha"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.login.password,callback:function(e){t.$set(t.login,"password",e)},expression:"login.password"}}),n("div",{staticClass:"q-mt-lg"},[n("q-btn",{attrs:{label:"Entrar",type:"submit",color:"blue-grey-10"}}),n("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Cancelar",type:"reset",color:"blue-grey-10",flat:""}})],1)],1)],1)],1)],2)},o=[],s=(n("e6cf"),n("ded3")),a=n.n(s),l=n("cf33"),i={name:"login",data(){return{login:{username:null,password:null},loading:!1,message:null,isPwd:!0,returnUrl:null}},methods:{async doLogin(){try{this.loading=!0;const t=a()({},this.login),e=await Object(l["b"])(t);e.status?(localStorage.setItem("usuario",JSON.stringify(e.usuario)),this.$router.push(this.returnUrl)):this.message=e.message}catch(t){this.message="Erro ao logar no sistema",console.error(t)}finally{this.loading=!1}},onCancel(){this.$router.push("/")}},created(){localStorage.getItem("usuario")&&""!=localStorage.getItem("usuario")&&this.$router.push("/"),this.returnUrl=this.$route.query.returnUrl||"/"}},c=i,u=(n("0ba0"),n("2877")),d=n("74f7"),f=n("f09f"),p=n("a370"),g=n("eb85"),m=n("9c40"),h=n("0378"),b=n("27f9"),y=n("0016"),w=n("eebe"),q=n.n(w),v=Object(u["a"])(c,r,o,!1,null,"eff8bc58",null);e["default"]=v.exports;q()(v,"components",{QInnerLoading:d["a"],QCard:f["a"],QCardSection:p["a"],QSeparator:g["a"],QBtn:m["a"],QForm:h["a"],QInput:b["a"],QIcon:y["a"]})},a27e:function(t,e,n){"use strict";n("e6cf");const r=n("bc3a"),o="https://ccb-schedules-api.herokuapp.com";function s(t){return new Promise((function(e,n){r.get(o+t).then((({data:t})=>e(t))).catch((t=>{console.error(t),n(t)}))}))}function a(t,e){return new Promise((function(n,s){r.post(o+t,e).then((({data:t})=>n(t))).catch((t=>{console.error(t),s(t)}))}))}function l(t,e){return new Promise((function(n,s){r.put(o+t,e).then((({data:t})=>n(t))).catch((t=>{console.error(t),s(t)}))}))}function i(t,e){return new Promise((function(n,s){r.delete(o+t,e).then((({data:t})=>n(t))).catch((t=>{console.error(t),s(t)}))}))}function c(t){return new Promise((function(e,n){r.get(t).then((({data:t})=>e(t))).catch((t=>{console.error(t),n(t)}))}))}e["a"]={callUrl:s,postUrl:a,putUrl:l,deleteUrl:i,callAnyUrl:c}},cf33:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));var r=n("a27e");const o="/users";function s(t){return r["a"].postUrl(`${o}/login`,t)}function a(){return r["a"].callAnyUrl("http://www.geoplugin.net/json.gp")}}}]);