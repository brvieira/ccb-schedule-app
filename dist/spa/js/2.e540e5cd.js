(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{5198:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"row justify-center"},[e.loading?[t("q-inner-loading",{attrs:{showing:"",color:"blue-grey-6"}})]:t("div",{staticClass:"q-pa-md q-mt-lg col"},[t("q-card",{staticClass:"my-card"},[t("q-card-section",{staticClass:"bg-blue-grey-6 text-white"},[t("div",{staticClass:"text-h6"},[e._v("\n          "+e._s(e.id?"Editar Serviço":"Novo Serviço")+"\n        ")])]),t("q-separator"),t("q-card-section",[t("q-form",{staticClass:"q-gutter-md",on:{submit:e.doSubmit}},[t("q-select",{attrs:{dense:e.$q.screen.lt.md,filled:"",options:e.options,label:"Tipo de Serviço",color:"blue-grey-10","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, selecione o tipo de serviço"}]},model:{value:e.servico.tipo_servico,callback:function(r){e.$set(e.servico,"tipo_servico",r)},expression:"servico.tipo_servico"}}),t("q-input",{attrs:{filled:"",dense:e.$q.screen.lt.md,color:"blue-grey-10",mask:"##/##/####",label:"Data","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, preencha a data"}]},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{attrs:{mask:"DD/MM/YYYY",options:e.optionsFn,color:"blue-grey-8"},model:{value:e.servico.data,callback:function(r){e.$set(e.servico,"data",r)},expression:"servico.data"}},[t("div",{staticClass:"row items-center justify-end"},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Fechar",color:"blue-grey-8",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.servico.data,callback:function(r){e.$set(e.servico,"data",r)},expression:"servico.data"}}),t("q-input",{attrs:{filled:"",dense:e.$q.screen.lt.md,mask:"time",color:"blue-grey-10",label:"Horário","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, preencha o horário"}]},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[t("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-time",{attrs:{color:"blue-grey-8"},model:{value:e.servico.horario,callback:function(r){e.$set(e.servico,"horario",r)},expression:"servico.horario"}},[t("div",{staticClass:"row items-center justify-end"},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Fechar",color:"blue-grey-8",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.servico.horario,callback:function(r){e.$set(e.servico,"horario",r)},expression:"servico.horario"}}),t("q-input",{attrs:{dense:e.$q.screen.lt.md,type:"number",label:"Lugares disponíveis para Irmãos",color:"blue-grey-10","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, preencha a quantidade de lugares disponíveis"},function(e){return e>0||"A quantidade de lugares disponíveis deve ser maior que 0"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"people_alt"}})]},proxy:!0}]),model:{value:e.servico.irmaos,callback:function(r){e.$set(e.servico,"irmaos",e._n(r))},expression:"servico.irmaos"}}),t("q-input",{attrs:{dense:e.$q.screen.lt.md,color:"blue-grey-10",type:"number",label:"Lugares disponíveis para Irmãs","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, preencha a quantidade de lugares disponíveis"},function(e){return e>0||"A quantidade de lugares disponíveis deve ser maior que 0"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"people_alt"}})]},proxy:!0}]),model:{value:e.servico.irmas,callback:function(r){e.$set(e.servico,"irmas",e._n(r))},expression:"servico.irmas"}}),t("q-input",{attrs:{dense:e.$q.screen.lt.md,type:"number",color:"blue-grey-10",label:"Lugares reservados para Músicos","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, preencha a quantidade de lugares reservados"},function(e){return e>0||"A quantidade de lugares reservados deve ser maior que 0"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"music_note"}})]},proxy:!0}]),model:{value:e.servico.musicos,callback:function(r){e.$set(e.servico,"musicos",e._n(r))},expression:"servico.musicos"}}),t("q-input",{attrs:{dense:e.$q.screen.lt.md,type:"number",color:"blue-grey-10",label:"Lugares reservados para Outros Colaboradores","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Por favor, preencha a quantidade de lugares reservados"},function(e){return e>0||"A quantidade de lugares reservados deve ser maior que 0"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"groups"}})]},proxy:!0}]),model:{value:e.servico.outros,callback:function(r){e.$set(e.servico,"outros",e._n(r))},expression:"servico.outros"}}),t("div",{staticClass:"q-mt-lg"},[t("q-btn",{attrs:{dense:e.$q.screen.lt.md,label:e.id?"Salvar":"Criar",type:"submit",color:"blue-grey-10"}}),t("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Cancelar",dense:e.$q.screen.lt.md,color:"blue-grey-10",flat:""},on:{click:function(r){return e.$router.go(-1)}}})],1)],1)],1)],1)],1)],2)},a=[],s=(t("e6cf"),t("ded3")),n=t.n(s),i=t("f3ee"),c={name:"ServiceForm",props:["id"],data(){return{loading:!0,options:["Culto Oficial","Reunião de Jovens e Menores","Ensaio","Outros"],servico:{tipo_servico:null,data:null,horario:null,irmaos:null,irmas:null,musicos:null,outros:null}}},methods:{doSubmit(){this.id?this.saveEdition():this.createNew()},optionsFn(e){return e>=this.getDate(new Date)},getDayName(e){const r=e.split("/"),t=`${r[2]}/${r[1]}/${r[0]}`,o=new Date(t),a=["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],s=o.getDay();return a[s]},getDate(e){const r=e.getDate(),t=e.getMonth()+1,o=e.getYear()+1900,a=r<10?`0${r}`:r,s=t<10?`0${t}`:t;return`${o}/${s}/${a}`},async createNew(){const e=this.convertDate(this.servico.data),r=e.getTime(),t=n()(n()({},this.servico),{},{data_timestamp:r,dia_da_semana:this.getDayName(this.servico.data)});try{await Object(i["a"])(t);this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Serviço criado com sucesso!"}),this.$router.go(-1)}catch(o){this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Erro ao criar serviço!"}),console.error(o)}},convertDate(e){const r=e.split("/"),t=`${r[2]}/${r[1]}/${r[0]}`,o=new Date(t);return o},async saveEdition(){const e=this.convertDate(this.servico.data),r=e.getTime();let t=n()(n()({},this.servico),{},{data_timestamp:r,dia_da_semana:this.getDayName(this.servico.data)});try{await Object(i["b"])(t);this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Serviço editado com sucesso!"}),this.$router.go(-1)}catch(o){this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Erro ao editar serviço!"}),console.error(o)}},async getServiceData(e){try{const r=await Object(i["d"])(e);if(r.length>0){let t=r.find((r=>r._id===e));this.servico=n()({},t),this.loading=!1}}catch(r){console.error(r),this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Erro ao carregar informações do serviço!"}),this.loading=!1}}},mounted(){this.id?this.getServiceData(this.id):this.loading=!1}},l=c,u=(t("91a4"),t("2877")),d=t("74f7"),p=t("f09f"),v=t("a370"),m=t("eb85"),f=t("0378"),h=t("ddd8"),g=t("27f9"),b=t("0016"),y=t("7cbe"),q=t("52ee"),$=t("9c40"),w=t("ca78"),_=t("7f67"),x=t("eebe"),C=t.n(x),S=Object(u["a"])(l,o,a,!1,null,"2c9abc58",null);r["default"]=S.exports;C()(S,"components",{QInnerLoading:d["a"],QCard:p["a"],QCardSection:v["a"],QSeparator:m["a"],QForm:f["a"],QSelect:h["a"],QInput:g["a"],QIcon:b["a"],QPopupProxy:y["a"],QDate:q["a"],QBtn:$["a"],QTime:w["a"]}),C()(S,"directives",{ClosePopup:_["a"]})},7153:function(e,r,t){},"91a4":function(e,r,t){"use strict";t("7153")},a27e:function(e,r,t){"use strict";t("e6cf");const o=t("bc3a"),a="https://ccb-schedules-api.herokuapp.com";function s(e){return new Promise((function(r,t){o.get(a+e).then((({data:e})=>r(e))).catch((e=>{console.error(e),t(e)}))}))}function n(e,r){return new Promise((function(t,s){o.post(a+e,r).then((({data:e})=>t(e))).catch((e=>{console.error(e),s(e)}))}))}function i(e,r){return new Promise((function(t,s){o.put(a+e,r).then((({data:e})=>t(e))).catch((e=>{console.error(e),s(e)}))}))}function c(e,r){return new Promise((function(t,s){o.delete(a+e,r).then((({data:e})=>t(e))).catch((e=>{console.error(e),s(e)}))}))}r["a"]={callUrl:s,postUrl:n,putUrl:i,deleteUrl:c}},f3ee:function(e,r,t){"use strict";t.d(r,"d",(function(){return s})),t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return u})),t.d(r,"e",(function(){return n})),t.d(r,"c",(function(){return i})),t.d(r,"f",(function(){return c}));var o=t("a27e");const a="/service";function s(e){return o["a"].callUrl(`${a}/${e}`)}function n(e){return o["a"].callUrl(`${a}/type/${e}`)}function i(e){return o["a"].callUrl(`${a}/available/${e}`)}function c(e){return o["a"].callUrl(`${a}/next/${e}`)}function l(e){return o["a"].postUrl(`${a}`,e)}function u(e){return o["a"].putUrl(`${a}`,e)}}}]);