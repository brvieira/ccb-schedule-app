(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"2c41":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return l}));var s=a("a27e");const n="/lane";function r(e){return s["a"].postUrl(`${n}`,e)}function o(e){return s["a"].deleteUrl(`${n}/number/${e}`)}function i(e){return s["a"].callUrl(`${n}/number/${e}`)}function c(e){return s["a"].postUrl(`${n}/number/deleteAndCreateNew`,e)}function l(e,t){return s["a"].callUrl(`${n}/service/${e}/${t}`)}},"71ae":function(e,t,a){},"746c":function(e,t,a){"use strict";a("71ae")},"763a":function(e,t,a){},"7b5b":function(e,t,a){"use strict";a("763a")},a27e:function(e,t,a){"use strict";a("e6cf");const s=a("bc3a"),n="http://localhost:3000";function r(e){return new Promise((function(t,a){s.get(n+e).then((({data:e})=>t(e))).catch((e=>{console.error(e),a(e)}))}))}function o(e,t){return new Promise((function(a,r){s.post(n+e,t).then((({data:e})=>a(e))).catch((e=>{console.error(e),r(e)}))}))}function i(e,t){return new Promise((function(a,r){s.put(n+e,t).then((({data:e})=>a(e))).catch((e=>{console.error(e),r(e)}))}))}function c(e,t){return new Promise((function(a,r){s.delete(n+e,t).then((({data:e})=>a(e))).catch((e=>{console.error(e),r(e)}))}))}t["a"]={callUrl:r,postUrl:o,putUrl:i,deleteUrl:c}},de0a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-center"},[e.loading?[a("q-inner-loading",{attrs:{showing:"",color:"blue-grey-6"}})]:e.mensagem?a("div",{staticClass:"q-pa-md q-mt-lg"},[a("q-card",{staticClass:"my-card q-pa-lg"},[a("q-card-section",{staticClass:"text-blue-grey-10 text-center q-gutter-md"},[a("div",{staticClass:"text-h5 text-weight-bold"},[e._v("\n          "+e._s(e.mensagem)+"\n        ")]),a("div",{staticClass:"text-h6"},[e._v(e._s(e.sub_mensagem))]),a("q-btn",{staticClass:"q-ml-sm",attrs:{dense:e.$q.screen.lt.md,label:"Voltar ao início",color:"blue-grey-8"},on:{click:function(t){return e.$router.go(-1)}}})],1)],1)],1):e.senhas?a("Number",{attrs:{senhas:e.senhas}}):a("div",{staticClass:"q-pa-md q-mt-lg col"},[a("q-card",{staticClass:"my-card"},[a("q-card-section",{staticClass:"bg-blue-grey-6 text-white"},[a("div",{staticClass:"text-h6"},[e._v("\n          Retirar Senha\n        ")])]),a("q-separator"),a("q-card-section",[a("q-form",{staticClass:"q-gutter-md"},[a("q-select",{attrs:{dense:e.$q.screen.lt.md,filled:"",disable:"",options:e.options,color:"blue-grey-10",label:"Tipo de Serviço","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, selecione o tipo de serviço"}]},model:{value:e.servico.tipo_servico,callback:function(t){e.$set(e.servico,"tipo_servico",t)},expression:"servico.tipo_servico"}}),a("q-input",{attrs:{dense:e.$q.screen.lt.md,filled:"",disable:"",mask:"##/##/####",label:"Data",color:"blue-grey-10","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, preencha a data"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY"},model:{value:e.servico.data,callback:function(t){e.$set(e.servico,"data",t)},expression:"servico.data"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Fechar",color:"blue-grey-10",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.servico.data,callback:function(t){e.$set(e.servico,"data",t)},expression:"servico.data"}}),a("q-input",{attrs:{dense:e.$q.screen.lt.md,filled:"",disable:"",color:"blue-grey-10",mask:"time",label:"Horário","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, preencha o horário"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{model:{value:e.servico.horario,callback:function(t){e.$set(e.servico,"horario",t)},expression:"servico.horario"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Fechar",color:"blue-grey-10",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.servico.horario,callback:function(t){e.$set(e.servico,"horario",t)},expression:"servico.horario"}}),a("q-select",{attrs:{dense:e.$q.screen.lt.md,options:e.getOptions(e.availBrothers),label:"Quantidade de Irmãos",color:"blue-grey-10","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, informe a quantidade de irmãos"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"people_alt"}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n              Senhas disponíveis:\n              "+e._s(e.availBrothers-e.quantidade_irmaos)+"\n            ")]},proxy:!0}]),model:{value:e.quantidade_irmaos,callback:function(t){e.quantidade_irmaos=t},expression:"quantidade_irmaos"}}),a("q-select",{attrs:{dense:e.$q.screen.lt.md,options:e.getOptions(e.availSisters),label:"Quantidade de Irmãs",color:"blue-grey-10","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, informe a quantidade de irmãs"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"people_alt"}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n              Senhas disponíveis:\n              "+e._s(e.availSisters-e.quantidade_irmas)+"\n            ")]},proxy:!0}]),model:{value:e.quantidade_irmas,callback:function(t){e.quantidade_irmas=t},expression:"quantidade_irmas"}}),a("div",{staticClass:"q-mt-lg"},[a("q-btn",{attrs:{dense:e.$q.screen.lt.md,label:"Solicitar",color:"blue-grey-10"},on:{click:e.createNewNumber}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{dense:e.$q.screen.lt.md,label:"Cancelar",color:"blue-grey-10",flat:""},on:{click:function(t){return e.$router.go(-1)}}})],1)],1)],1)],1)],1)],2)},n=[],r=(a("e6cf"),a("ded3")),o=a.n(r),i=a("f3ee"),c=a("2c41"),l=a("f18f"),u={name:"General",props:["tipo"],components:{Number:l["a"]},data(){return{mensagem:null,sub_mensagem:null,loading:!0,quantidade_irmaos:null,quantidade_irmas:null,options:["Culto Oficial","Reunião de Jovens e Menores","Ensaio","Outros"],servico:null,senhas:null}},computed:{availSisters(){return this.servico.irmas-this.servico.senhas_irmas},availBrothers(){return this.servico.irmaos-this.servico.senhas_irmaos}},methods:{getOptions(e){let t=0,a=[];for(t;t<=e&&t<=5;t++)a.push(t);return a},async getAvailableService(e){try{const t=await Object(i["c"])(e);Object.keys(t).length>0?this.servico=o()({},t):(this.mensagem="Não existem senhas disponíveis",this.sub_mensagem="Tente novamente mais tarde")}catch(t){this.mensagem="Não existem senhas disponíveis",this.sub_mensagem="Tente novamente mais tarde",this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Erro ao carregar serviços disponíveis!"}),console.error(t)}finally{this.loading=!1}},async createNewNumber(){this.loading=!0;try{if(this.quantidade_irmaos>0||this.quantidade_irmas>0){const e={culto_id:this.servico._id,irmaos:this.quantidade_irmaos,irmas:this.quantidade_irmas,data:this.servico.data,horario:this.servico.horario},t=await Object(c["a"])(e);this.senhas=o()({},t)}else this.mensagem="A quantidade de irmãos ou irmãs deve ser maior que 0";this.loading=!1}catch(e){this.mensagem="Houve um erro ao criar a senha",this.sub_mensagem="Tente novamente mais tarde",this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Erro ao criar senha!"}),console.error(e)}}},mounted(){this.getAvailableService(this.tipo)}},d=u,m=(a("746c"),a("2877")),p=a("74f7"),f=a("f09f"),v=a("a370"),h=a("9c40"),b=a("eb85"),q=a("0378"),g=a("ddd8"),y=a("27f9"),_=a("0016"),x=a("7cbe"),C=a("52ee"),$=a("ca78"),w=a("7f67"),k=a("eebe"),S=a.n(k),Q=Object(m["a"])(d,s,n,!1,null,"52f30a11",null);t["default"]=Q.exports;S()(Q,"components",{QInnerLoading:p["a"],QCard:f["a"],QCardSection:v["a"],QBtn:h["a"],QSeparator:b["a"],QForm:q["a"],QSelect:g["a"],QInput:y["a"],QIcon:_["a"],QPopupProxy:x["a"],QDate:C["a"],QTime:$["a"]}),S()(Q,"directives",{ClosePopup:w["a"]})},f18f:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{ref:"content",staticClass:"full-width q-mt-lg q-pa-md"},[a("q-card",{staticClass:"my-card"},[a("q-card-section",{staticClass:"my-img"},[a("img",{attrs:{src:"\n          https://upload.wikimedia.org/wikipedia/commons/f/fe/Logoccb.jpg\n        "}})]),a("q-card-section",{staticClass:"mid-section"},[a("div",{staticClass:"text-h5 text-weight-medium text-center"},[e._v("\n          Parque Industrial\n        ")]),a("div",{staticClass:"text-body1 text-center"},[e._v("\n          Campinas/SP\n        ")])]),a("q-card-section",[a("div",{staticClass:"text-h1 text-weight-bolder text-center"},[e._v("\n          "+e._s(e.senhas.senha)+"\n        ")])]),a("q-card-section",{staticClass:"last-section"},[a("q-card-actions",{attrs:{align:"around"}},[a("div",{staticClass:"text-body1 text-center"},[e._v("Data: "+e._s(e.senhas.data))]),a("div",{staticClass:"text-body1 text-center"},[e._v("\n            Horário: "+e._s(e.senhas.horario)+"\n          ")])]),a("q-card-actions",{attrs:{align:"around"}},[a("div",{staticClass:"text-body1 text-center"},[e._v("\n            Irmãos: "+e._s(e.senhas.irmaos)+"\n          ")]),a("div",{staticClass:"text-body1 text-center"},[e._v("Irmãs: "+e._s(e.senhas.irmas))])])],1)],1)],1),a("div",{staticClass:"q-px-md q-gutter-md"},[e.salvar?a("q-btn",{attrs:{label:"Salvar",color:"blue-grey-10"},on:{click:e.saveNumber}}):e._e(),e.voltar?a("q-btn",{attrs:{label:"Voltar",color:"blue-grey-10"},on:{click:function(t){return e.$router.push({name:"index"})}}}):e._e()],1)])},n=[],r=a("c0e9"),o=a.n(r),i={name:"Number",props:{senhas:{type:Object,default:{}},salvar:{type:Boolean,default:!0},voltar:{type:Boolean,default:!0}},methods:{saveNumber(){o()(this.$refs.content,{useCORS:!0}).then((e=>{let t=document.createElement("a");t.href=e.toDataURL(),t.download=`senha-${this.senhas.data.replaceAll("/","-")}.png`,t.click()}))}}},c=i,l=(a("7b5b"),a("2877")),u=a("f09f"),d=a("a370"),m=a("4b7e"),p=a("9c40"),f=a("eebe"),v=a.n(f),h=Object(l["a"])(c,s,n,!1,null,"b5c79f3a",null);t["a"]=h.exports;v()(h,"components",{QCard:u["a"],QCardSection:d["a"],QCardActions:m["a"],QBtn:p["a"]})},f3ee:function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"f",(function(){return c}));var s=a("a27e");const n="/service";function r(e){return s["a"].callUrl(`${n}/${e}`)}function o(e){return s["a"].callUrl(`${n}/type/${e}`)}function i(e){return s["a"].callUrl(`${n}/available/${e}`)}function c(e){return s["a"].callUrl(`${n}/next/${e}`)}function l(e){return s["a"].postUrl(`${n}`,e)}function u(e){return s["a"].putUrl(`${n}`,e)}}}]);