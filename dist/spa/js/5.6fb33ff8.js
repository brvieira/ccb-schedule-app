(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0653":function(e,t,n){},"2c41":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c}));var a=n("a27e");const r="/lane";function o(e){return a["a"].postUrl(`${r}`,e)}function i(e){return a["a"].deleteUrl(`${r}/number/${e}`)}function s(e,t){return a["a"].callUrl(`${r}/service/${e}/${t}`)}function c(e){return a["a"].putUrl(`${r}/number`,e)}},"6e9f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container q-mt-lg q-pa-md"},[e.loading?[n("q-inner-loading",{attrs:{showing:"",color:"blue-grey-6"}})]:e.senhas?n("div",{staticClass:"row justify-center"},[n("q-tabs",{staticClass:"text-blue-grey-10 col-12",attrs:{align:"center","no-caps":"","outside-arrows":"","mobile-arrows":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("q-tab",{attrs:{name:"not-confirmed",label:"irmao"==e.tipo?"IRMÃOS QUE NÃO CHEGARAM":"IRMÃS QUE NÃO CHEGARAM"}}),n("q-tab",{attrs:{name:"confirmed",label:"irmao"==e.tipo?"IRMÃOS QUE JÁ CHEGARAM":"IRMÃS QUE JÁ CHEGARAM"}})],1),n("q-separator"),n("q-tab-panels",{staticClass:"col-12 no-background q-px-sm-xl q-px-xs",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"not-confirmed"}},[n("q-table",{attrs:{data:e.notConfirmed,columns:e.columns,title:"Lista de Presença","row-key":"_id",pagination:e.pagination,selection:"multiple",selected:e.selected_not_confirmed,loading:e.loading,filter:e.filter_not_confirmed},on:{"update:selected":function(t){e.selected_not_confirmed=t}},scopedSlots:e._u([{key:"loading",fn:function(){return[n("q-inner-loading",{attrs:{showing:"",color:"blue-grey-8"}})]},proxy:!0},{key:"top-right",fn:function(){return[n("q-input",{attrs:{debounce:"300",placeholder:"Pesquisar pela senha",color:"blue-grey-10"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter_not_confirmed,callback:function(t){e.filter_not_confirmed=t},expression:"filter_not_confirmed"}})]},proxy:!0}])}),n("q-btn",{staticClass:"q-mt-md",attrs:{color:"blue-grey-10",disable:e.loading,label:"Confirmar presença"},on:{click:function(t){return e.updateNumbers(!0)}}})],1),n("q-tab-panel",{attrs:{name:"confirmed"}},[n("q-table",{attrs:{data:e.confirmed,columns:e.columns,title:"Lista de Presença","row-key":"_id",pagination:e.pagination,selection:"multiple",selected:e.selected_confirmed,loading:e.loading,filter:e.filter_confirmed},on:{"update:selected":function(t){e.selected_confirmed=t}},scopedSlots:e._u([{key:"loading",fn:function(){return[n("q-inner-loading",{attrs:{showing:"",color:"blue-grey-8"}})]},proxy:!0},{key:"top-right",fn:function(){return[n("q-input",{attrs:{debounce:"300",placeholder:"Pesquisar pela senha",color:"blue-grey-10"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter_confirmed,callback:function(t){e.filter_confirmed=t},expression:"filter_confirmed"}})]},proxy:!0}])}),n("q-btn",{staticClass:"q-mt-md",attrs:{color:"blue-grey-10",disable:e.loading,label:"Desconfirmar presença"},on:{click:function(t){return e.updateNumbers(!1)}}})],1)],1)],1):n("q-card",{staticClass:"my-card q-mx-sm"},[n("q-card-section",{staticClass:"bg-blue-grey-6 text-white"},[n("div",{staticClass:"text-h6"},[e._v("\n        Selecione o Culto\n      ")])]),n("q-separator"),e.message?n("q-card-section",[n("div",{staticClass:"my-section q-pa-md"},[n("div",{staticClass:"text-h5 text-weight-bold text-center"},[e._v("\n          "+e._s(e.message)+"\n        ")]),n("q-btn",{staticClass:"full-width q-mt-xl",attrs:{color:"blue-grey-10",label:"Voltar"},on:{click:function(t){return e.$router.go()}}})],1)]):n("q-card-section",[n("q-form",{staticClass:"q-gutter-md q-pa-md",on:{submit:function(t){return e.getServiceLane(e.servico._id,e.tipo)}}},[n("q-select",{attrs:{dense:e.$q.screen.lt.md,disable:0==e.servicos.length,filled:"",options:e.servicos,"option-label":"data",label:"Data do culto",color:"blue-grey-10","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, selecione a data do culto"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"event"}})]},proxy:!0},0==e.servicos.length?{key:"hint",fn:function(){return[e._v("\n            Não existem cultos disponíveis\n          ")]},proxy:!0}:null],null,!0),model:{value:e.servico,callback:function(t){e.servico=t},expression:"servico"}}),n("div",[n("q-btn",{attrs:{disable:!e.servico,label:"Buscar Lista de Senhas",type:"submit",color:"blue-grey-10 full-width"}})],1)],1)],1)],1)],2)},r=[],o=(n("e6cf"),n("ddb0"),n("f3ee")),i=n("2c41"),s={name:"ControlView",props:["tipo"],data(){return{tab:"not-confirmed",pagination:{sortBy:"desc",descending:!1,rowsPerPage:10},filter_not_confirmed:"",filter_confirmed:"",servicos:[],servico:null,loading:!1,message:null,senhas:null,selected_not_confirmed:[],selected_confirmed:[],columns:[{name:"senha",label:"Senha",field:"senha",align:"center"},{name:"tipo",label:"Tipo",field:e=>"irmao"===e.tipo?"Irmão":"Irmã",align:"center",sortable:!1},{name:"status",label:"Chegou?",field:e=>e.status?"Sim":"Não",align:"center",sortable:!1}]}},computed:{serviceDates(){return this.servicos.map((e=>e.data))},notConfirmed(){return this.senhas.filter((e=>!e.status))},confirmed(){return this.senhas.filter((e=>e.status))}},methods:{async getServices(){try{this.loading=!0;const e=await Object(o["f"])("Culto Oficial");this.servicos=[...e]}catch(e){console.error(e),this.message="Erro ao buscar próximos cultos"}finally{this.loading=!1}},async getServiceLane(e,t){try{this.loading=!0;const n=await Object(i["c"])(e,t);0==n.length?this.message="Não existe nenhuma senha para o culto informado":this.senhas=[...n]}catch(n){console.error(n),this.message="Erro ao buscar lista de senhas para o culto"}finally{this.loading=!1}},async updateNumbers(e){try{this.loading=!0;const t=e?this.selected_not_confirmed:this.selected_confirmed,n=t.map((e=>e._id)),a={ids:n,field:"status",value:e};await Object(i["d"])(a);await this.getServiceLane(this.servico._id,this.tipo)}catch(t){}finally{this.selected_not_confirmed=[],this.selected_confirmed=[],this.filter_not_confirmed="",this.filter_confirmed="",this.loading=!1}}},mounted(){this.getServices()}},c=s,l=(n("6faa"),n("2877")),u=n("74f7"),d=n("f09f"),f=n("a370"),m=n("eb85"),p=n("9c40"),b=n("0378"),h=n("ddd8"),g=n("0016"),_=n("429b"),y=n("7460"),v=n("adad"),q=n("823b"),x=n("eaac"),w=n("27f9"),C=n("eebe"),k=n.n(C),S=Object(l["a"])(c,a,r,!1,null,"c7523fdc",null);t["default"]=S.exports;k()(S,"components",{QInnerLoading:u["a"],QCard:d["a"],QCardSection:f["a"],QSeparator:m["a"],QBtn:p["a"],QForm:b["a"],QSelect:h["a"],QIcon:g["a"],QTabs:_["a"],QTab:y["a"],QTabPanels:v["a"],QTabPanel:q["a"],QTable:x["a"],QInput:w["a"]})},"6faa":function(e,t,n){"use strict";n("0653")},a27e:function(e,t,n){"use strict";n("e6cf");const a=n("bc3a"),r="https://ccb-schedules-api.herokuapp.com";function o(e){return new Promise((function(t,n){a.get(r+e).then((({data:e})=>t(e))).catch((e=>{console.error(e),n(e)}))}))}function i(e,t){return new Promise((function(n,o){a.post(r+e,t).then((({data:e})=>n(e))).catch((e=>{console.error(e),o(e)}))}))}function s(e,t){return new Promise((function(n,o){a.put(r+e,t).then((({data:e})=>n(e))).catch((e=>{console.error(e),o(e)}))}))}function c(e,t){return new Promise((function(n,o){a.delete(r+e,t).then((({data:e})=>n(e))).catch((e=>{console.error(e),o(e)}))}))}t["a"]={callUrl:o,postUrl:i,putUrl:s,deleteUrl:c}},f3ee:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return c}));var a=n("a27e");const r="/service";function o(e){return a["a"].callUrl(`${r}/${e}`)}function i(e){return a["a"].callUrl(`${r}/type/${e}`)}function s(e){return a["a"].callUrl(`${r}/available/${e}`)}function c(e){return a["a"].callUrl(`${r}/next/${e}`)}function l(e){return a["a"].postUrl(`${r}`,e)}function u(e){return a["a"].putUrl(`${r}`,e)}}}]);