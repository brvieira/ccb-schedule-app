(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0472":function(e,t,a){"use strict";a("c6f3")},"2c41":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return l})),a.d(t,"f",(function(){return u}));var n=a("a27e");const s="/lane";function r(e){return n["a"].postUrl(`${s}`,e)}function o(e){return n["a"].deleteUrl(`${s}/number/${e}`)}function i(e){return n["a"].callUrl(`${s}/number/${e}`)}function c(e){return n["a"].postUrl(`${s}/number/deleteAndCreateNew`,e)}function l(e,t){return n["a"].callUrl(`${s}/service/${e}/${t}`)}function u(e){return n["a"].putUrl(`${s}/number`,e)}},7564:function(e,t,a){"use strict";a("9636")},9636:function(e,t,a){},a27e:function(e,t,a){"use strict";a("e6cf");const n=a("bc3a"),s="https://ccb-schedules-api.herokuapp.com";function r(e){return new Promise((function(t,a){n.get(s+e).then((({data:e})=>t(e))).catch((e=>{console.error(e),a(e)}))}))}function o(e,t){return new Promise((function(a,r){n.post(s+e,t).then((({data:e})=>a(e))).catch((e=>{console.error(e),r(e)}))}))}function i(e,t){return new Promise((function(a,r){n.put(s+e,t).then((({data:e})=>a(e))).catch((e=>{console.error(e),r(e)}))}))}function c(e,t){return new Promise((function(a,r){n.delete(s+e,t).then((({data:e})=>a(e))).catch((e=>{console.error(e),r(e)}))}))}function l(e){return new Promise((function(t,a){n.get(e).then((({data:e})=>t(e))).catch((e=>{console.error(e),a(e)}))}))}t["a"]={callUrl:r,postUrl:o,putUrl:i,deleteUrl:c,callAnyUrl:l}},c6f3:function(e,t,a){},cf33:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var n=a("a27e");const s="/users";function r(e){return n["a"].postUrl(`${s}/login`,e)}function o(){return n["a"].callAnyUrl("http://www.geoplugin.net/json.gp")}},de0a:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row justify-center"},[e.loading?[a("q-inner-loading",{attrs:{showing:"",color:"blue-grey-6"}})]:e.mensagem?a("div",{staticClass:"q-pa-md q-mt-lg"},[a("q-card",{staticClass:"my-card q-pa-lg"},[a("q-card-section",{staticClass:"text-blue-grey-10 text-center q-gutter-md"},[a("div",{staticClass:"text-h5 text-weight-bold"},[e._v("\n          "+e._s(e.mensagem)+"\n        ")]),a("div",{staticClass:"text-h6"},[e._v(e._s(e.sub_mensagem))]),a("q-btn",{staticClass:"q-ml-sm",attrs:{dense:e.$q.screen.lt.md,label:"Voltar ao início",color:"blue-grey-8"},on:{click:function(t){return e.$router.go(-1)}}})],1)],1)],1):e.senhas?a("Number",{attrs:{senhas:e.senhas}}):a("div",{staticClass:"q-pa-md q-mt-lg col"},[a("q-card",{staticClass:"my-card"},[a("q-card-section",{staticClass:"bg-blue-grey-6 text-white"},[a("div",{staticClass:"text-h6"},[e._v("\n          Retirar Senha\n        ")])]),a("q-separator"),a("q-card-section",[a("q-form",{staticClass:"q-gutter-md"},[a("q-select",{attrs:{dense:e.$q.screen.lt.md,filled:"",disable:"",options:e.options,color:"blue-grey-10",label:"Tipo de Serviço","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, selecione o tipo de serviço"}]},model:{value:e.servico.tipo_servico,callback:function(t){e.$set(e.servico,"tipo_servico",t)},expression:"servico.tipo_servico"}}),a("q-input",{attrs:{dense:e.$q.screen.lt.md,filled:"",disable:"",mask:"##/##/####",label:"Data",color:"blue-grey-10","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, preencha a data"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"today"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"DD/MM/YYYY"},model:{value:e.servico.data,callback:function(t){e.$set(e.servico,"data",t)},expression:"servico.data"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Fechar",color:"blue-grey-10",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.servico.data,callback:function(t){e.$set(e.servico,"data",t)},expression:"servico.data"}}),a("q-input",{attrs:{dense:e.$q.screen.lt.md,filled:"",disable:"",label:"Dia da Semana",color:"blue-grey-10","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, preencha o dia da semana"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"today"}})]},proxy:!0}]),model:{value:e.servico.dia_da_semana,callback:function(t){e.$set(e.servico,"dia_da_semana",t)},expression:"servico.dia_da_semana"}}),a("q-input",{attrs:{dense:e.$q.screen.lt.md,filled:"",disable:"",color:"blue-grey-10",mask:"time",label:"Horário","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, preencha o horário"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{model:{value:e.servico.horario,callback:function(t){e.$set(e.servico,"horario",t)},expression:"servico.horario"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Fechar",color:"blue-grey-10",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.servico.horario,callback:function(t){e.$set(e.servico,"horario",t)},expression:"servico.horario"}}),a("q-select",{attrs:{dense:e.$q.screen.lt.md,options:e.getOptions(e.availBrothers),label:"Quantidade de Irmãos",color:"blue-grey-10","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, informe a quantidade de irmãos"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"people_alt"}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n              Lugares disponíveis:\n              "+e._s(e.availBrothers-e.quantidade_irmaos)+"\n            ")]},proxy:!0}]),model:{value:e.quantidade_irmaos,callback:function(t){e.quantidade_irmaos=t},expression:"quantidade_irmaos"}}),a("q-select",{attrs:{dense:e.$q.screen.lt.md,options:e.getOptions(e.availSisters),label:"Quantidade de Irmãs",color:"blue-grey-10","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, informe a quantidade de irmãs"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"people_alt"}})]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n              Lugares disponíveis:\n              "+e._s(e.availSisters-e.quantidade_irmas)+"\n            ")]},proxy:!0}]),model:{value:e.quantidade_irmas,callback:function(t){e.quantidade_irmas=t},expression:"quantidade_irmas"}}),a("div",{staticClass:"q-mt-lg"},[a("q-btn",{attrs:{dense:e.$q.screen.lt.md,label:"Solicitar",color:"blue-grey-10"},on:{click:e.createNewNumber}}),a("q-btn",{staticClass:"q-ml-sm",attrs:{dense:e.$q.screen.lt.md,label:"Cancelar",color:"blue-grey-10",flat:""},on:{click:function(t){return e.$router.go(-1)}}})],1)],1)],1)],1)],1)],2)},s=[],r=(a("e6cf"),a("ded3")),o=a.n(r),i=a("f3ee"),c=a("2c41"),l=a("cf33"),u=a("f18f"),d={name:"General",props:["tipo"],components:{Number:u["a"]},data(){return{ip:null,mensagem:null,sub_mensagem:null,loading:!0,quantidade_irmaos:null,quantidade_irmas:null,options:["Culto Oficial","Reunião de Jovens e Menores","Ensaio","Outros"],servico:null,senhas:null}},computed:{availSisters(){return this.servico.irmas-this.servico.senhas_irmas},availBrothers(){return this.servico.irmaos-this.servico.senhas_irmaos}},methods:{getOptions(e){let t=0,a=[];for(t;t<=e&&t<=5;t++)a.push(t);return a},async getAvailableService(e){try{const t=await Object(i["c"])(e);Object.keys(t).length>0?this.servico=o()({},t):(this.mensagem="Não existem senhas disponíveis",this.sub_mensagem="Tente novamente mais tarde")}catch(t){this.mensagem="Não existem senhas disponíveis",this.sub_mensagem="Tente novamente mais tarde",this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Erro ao carregar serviços disponíveis!"}),console.error(t)}finally{this.loading=!1}},async createNewNumber(){this.loading=!0;try{if(this.quantidade_irmaos>0||this.quantidade_irmas>0){const e={culto_id:this.servico._id,irmaos:this.quantidade_irmaos,irmas:this.quantidade_irmas,data:this.servico.data,horario:this.servico.horario,dia_da_semana:this.servico.dia_da_semana,ip:this.ip},t=await Object(c["a"])(e);this.senhas=o()({},t)}else this.mensagem="A quantidade de irmãos ou irmãs deve ser maior que 0";this.loading=!1}catch(e){this.mensagem="Houve um erro ao criar a senha",this.sub_mensagem="Tente novamente mais tarde",this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Erro ao criar senha!"}),console.error(e)}},async getCurrentUserIp(){try{const e=await Object(l["a"])(),t=e.geoplugin_request;this.ip=t}catch(e){console.error(e)}}},mounted(){this.getCurrentUserIp(),this.getAvailableService(this.tipo)}},m=d,p=(a("0472"),a("2877")),f=a("74f7"),v=a("f09f"),h=a("a370"),b=a("9c40"),g=a("eb85"),q=a("0378"),_=a("ddd8"),y=a("27f9"),x=a("0016"),C=a("7cbe"),$=a("52ee"),w=a("ca78"),k=a("7f67"),S=a("eebe"),U=a.n(S),Q=Object(p["a"])(m,n,s,!1,null,"44c98085",null);t["default"]=Q.exports;U()(Q,"components",{QInnerLoading:f["a"],QCard:v["a"],QCardSection:h["a"],QBtn:b["a"],QSeparator:g["a"],QForm:q["a"],QSelect:_["a"],QInput:y["a"],QIcon:x["a"],QPopupProxy:C["a"],QDate:$["a"],QTime:w["a"]}),U()(Q,"directives",{ClosePopup:k["a"]})},f18f:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"full-width q-mt-lg q-pa-md"},[a("div",{ref:"content",staticClass:"my-ref"},[a("q-card",{staticClass:"my-card"},[a("q-card-section",{staticClass:"my-img"},[a("img",{attrs:{src:"\n          https://upload.wikimedia.org/wikipedia/commons/f/fe/Logoccb.jpg\n        "}})]),a("q-card-section",{staticClass:"mid-section"},[a("div",{staticClass:"text-h5 text-weight-medium text-center"},[e._v("\n            Parque Industrial\n          ")]),a("div",{staticClass:"text-body1 text-center"},[e._v("\n            Campinas/SP\n          ")])]),a("q-card-section",[a("div",{staticClass:"text-h1 text-weight-bolder text-center"},[e._v("\n            "+e._s(e.senhas.senha)+"\n          ")])]),a("q-card-section",{staticClass:"last-section"},[a("q-card-actions",{attrs:{align:"around"}},[a("div",{staticClass:"text-h4  text-center text-weight-bolder",staticStyle:{"text-decoration":"underline"}},[e._v("\n              "+e._s(e.senhas.dia_da_semana)+"\n            ")])]),a("q-card-section",[a("div",{staticClass:"text-negative text-body2 text-center text-weight-bold"},[e._v("\n              Caso não for possível ir ao culto no dia agendado, por favor\n              fazer a devolução da senha, até às 18:00 (às quartas e sextas\n              feiras) e até às 17:00 aos domingos, assim, outros poderão\n              ocupar o lugar.\n            ")])]),a("q-card-actions",{attrs:{align:"around"}},[a("div",{staticClass:"text-body1 text-center"},[e._v("Data: "+e._s(e.senhas.data))]),a("div",{staticClass:"text-body1 text-center"},[e._v("\n              Horário: "+e._s(e.senhas.horario)+"\n            ")])]),a("q-card-actions",{attrs:{align:"around"}},[a("div",{staticClass:"text-body1 text-center"},[e._v("\n              Irmãos: "+e._s(e.senhas.irmaos)+"\n            ")]),a("div",{staticClass:"text-body1 text-center"},[e._v("\n              Irmãs: "+e._s(e.senhas.irmas)+"\n            ")])])],1)],1)],1)]),a("div",{staticClass:"q-px-md q-gutter-md q-mb-lg"},[e.salvar?a("q-btn",{attrs:{label:"Salvar",color:"blue-grey-10"},on:{click:e.saveNumber}}):e._e(),e.voltar?a("q-btn",{attrs:{label:"Voltar",color:"blue-grey-10"},on:{click:function(t){return e.$router.push({name:"index"})}}}):e._e()],1)])},s=[],r=a("c0e9"),o=a.n(r),i={name:"Number",props:{senhas:{type:Object,default:{}},salvar:{type:Boolean,default:!0},voltar:{type:Boolean,default:!0}},methods:{saveNumber(){o()(this.$refs.content,{useCORS:!0,scrollY:-window.scrollY}).then((e=>{let t=document.createElement("a");t.href=e.toDataURL(),t.download=`senha-${this.senhas.data.replaceAll("/","-")}.png`,t.click(),this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Senha salva com sucesso!"})}))}}},c=i,l=(a("7564"),a("2877")),u=a("f09f"),d=a("a370"),m=a("4b7e"),p=a("9c40"),f=a("eebe"),v=a.n(f),h=Object(l["a"])(c,n,s,!1,null,"6891af38",null);t["a"]=h.exports;v()(h,"components",{QCard:u["a"],QCardSection:d["a"],QCardActions:m["a"],QBtn:p["a"]})},f3ee:function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"f",(function(){return c}));var n=a("a27e");const s="/service";function r(e){return n["a"].callUrl(`${s}/${e}`)}function o(e){return n["a"].callUrl(`${s}/type/${e}`)}function i(e){return n["a"].callUrl(`${s}/available/${e}`)}function c(e){return n["a"].callUrl(`${s}/next/${e}`)}function l(e){return n["a"].postUrl(`${s}`,e)}function u(e){return n["a"].putUrl(`${s}`,e)}}}]);