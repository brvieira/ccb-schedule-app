(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"134f":function(t,e,n){},"4eee":function(t,e,n){"use strict";n("134f")},a27e:function(t,e,n){"use strict";n("e6cf");const a=n("bc3a"),s="https://ccb-schedules-api.herokuapp.com";function o(t){return new Promise((function(e,n){a.get(s+t).then((({data:t})=>e(t))).catch((t=>{console.error(t),n(t)}))}))}function i(t,e){return new Promise((function(n,o){a.post(s+t,e).then((({data:t})=>n(t))).catch((t=>{console.error(t),o(t)}))}))}function r(t,e){return new Promise((function(n,o){a.put(s+t,e).then((({data:t})=>n(t))).catch((t=>{console.error(t),o(t)}))}))}function c(t,e){return new Promise((function(n,o){a.delete(s+t,e).then((({data:t})=>n(t))).catch((t=>{console.error(t),o(t)}))}))}e["a"]={callUrl:o,postUrl:i,putUrl:r,deleteUrl:c}},e5c8:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var a=n("a27e");const s="/messages";function o(t){return a["a"].postUrl(`${s}`,t)}function i(){return a["a"].callUrl(`${s}/last`)}},f8dd:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container col"},[t.loading?[n("q-inner-loading",{attrs:{showing:"",color:"blue-grey-6"}})]:n("div",{staticClass:"content q-pa-md"},[n("q-card",{staticClass:"q-mt-lg q-pa-sm-md q-pb-sm-lg"},[n("q-card-section",[n("div",{staticClass:"text-h6"},[t._v("Mensagem")])]),n("q-card-section",[n("q-editor",{attrs:{"min-height":"10rem",toolbar:[["bold","italic","underline"],[{label:t.$q.lang.editor.fontSize,icon:t.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-3","size-4","size-5","size-6","size-7"]}]]},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),n("div",{staticClass:"q-mt-lg"},[n("q-btn",{attrs:{dense:t.$q.screen.lt.md,label:"Salvar",color:"blue-grey-10"},on:{click:t.saveMessage}})],1)],1)],1),n("q-card",{staticClass:"q-mt-xl q-pa-sm-md q-pb-sm-lg"},[n("q-card-section",[n("div",{staticClass:"text-h6"},[t._v("Exemplo")])]),n("q-card-section",[n("q-card",[n("q-card-section",{staticClass:"text-white bg-orange-9"},[n("div",{staticClass:"text-h6 text-weight-bolder"},[t._v("Aviso à Irmandade")])]),n("q-card-section",{staticClass:"bg-orange-2",domProps:{innerHTML:t._s(t.text)}})],1)],1)],1)],1)],2)},s=[],o=(n("e6cf"),n("e5c8")),i={name:"MsgView",data(){return{text:"",loading:!1}},methods:{async getMessage(){try{this.loading=!0;const t=await Object(o["b"])();this.text=t.text||""}catch(t){console.error(t),this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Erro ao carregar mensagem!"})}finally{this.loading=!1}},async saveMessage(){try{this.loading=!0,await Object(o["a"])({text:this.text}),this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Mensagem salva com sucesso!"}),this.$router.go(-1)}catch(t){console.error(t),this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Erro ao salvar mensagem!"})}finally{this.loading=!1}}},mounted(){this.getMessage()}},r=i,c=(n("4eee"),n("2877")),l=n("74f7"),d=n("f09f"),u=n("a370"),g=n("d66b"),f=n("9c40"),h=n("eebe"),m=n.n(h),b=Object(c["a"])(r,a,s,!1,null,"57b407e1",null);e["default"]=b.exports;m()(b,"components",{QInnerLoading:l["a"],QCard:d["a"],QCardSection:u["a"],QEditor:g["a"],QBtn:f["a"]})}}]);