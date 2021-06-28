(function(){"use strict";var t={4315:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var i=a(144),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},o=[],s={name:"App"},r=s,l=a(1001),c=a(3453),u=a.n(c),m=a(4363),d=(0,l.Z)(r,n,o,!1,null,null,null),v=d.exports;u()(d,{VApp:m.Z});var f=a(8345),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Nav"}},[a("div",{staticClass:"left"},[a("v-card",{staticClass:"menu",attrs:{elevation:"2"}},[a("v-row",{staticClass:"spacer spacing-playground mt-5",attrs:{align:"center","no-gutters":""},on:{click:function(e){t.dialog=!0}}},[a("v-col",{attrs:{cols:"4",sm:"4",md:"4"}},[a("v-avatar",{attrs:{elevation:"2",color:"primary",size:"30"}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-account ")])],1)],1),a("v-col",{attrs:{cols:"4",sm:"6",md:"6"}},[t._v(" "+t._s(t.Name)+" ")])],1),t._l(t.menuList,(function(e,i){return a("v-row",{key:i,staticClass:"spacer spacing-playground mt-5",attrs:{align:"center","no-gutters":""},on:{click:function(a){return t.clickItem(e)}}},[a("v-col",{attrs:{cols:"4",sm:"4",md:"4"}},[a("v-avatar",{attrs:{elevation:"2",color:"primary",size:"30"}},[a("v-icon",{attrs:{dark:""}},[t._v(" "+t._s(e.icon)+" ")])],1)],1),a("v-col",{attrs:{cols:"4",sm:"6",md:"6"}},[t._v(" "+t._s(e.name)+" ")])],1)}))],2),a("div",[a("v-switch",{attrs:{label:"Dark","hide-details":""},on:{change:t.change},model:{value:t.dark,callback:function(e){t.dark=e},expression:"dark"}})],1)],1),a("div",{staticClass:"right"},[a("div",{staticClass:"content"},[a("router-view")],1)]),a("v-dialog",{attrs:{persistent:"",width:"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"pa-7"},[a("v-text-field",{attrs:{label:"昵称",required:"",rules:t.rules},model:{value:t.Name,callback:function(e){t.Name=e},expression:"Name"}}),a("v-btn",{attrs:{depressed:"",elevation:"2"},on:{click:t.save}},[t._v(" 确定 ")])],1)],1)],1)},p=[],g={name:"Nav",data:function(){return{dark:!1,Name:"",dialog:!1,rules:[function(t){return!!t||"请输入昵称！"}],menuList:[{name:"计时器",icon:"mdi-alarm",path:"/index"},{name:"统计",icon:"mdi-alarm",path:"/index"}]}},components:{},computed:{},methods:{save:function(){this.Name.length<1||(localStorage.setItem("Name",this.Name),this.dialog=!1)},clickItem:function(t){this.$router.push({path:t.path})},change:function(){this.$vuetify.theme.dark=this.dark,localStorage.setItem("dark",this.dark)},init:function(){localStorage.getItem("dark")&&(this.$vuetify.theme.dark="true"===localStorage.getItem("dark"),this.dark=this.$vuetify.theme.dark),localStorage.getItem("Name")?this.Name=localStorage.getItem("Name"):this.dialog=!0}},created:function(){},mounted:function(){this.init()}},b=g,k=a(6235),y=a(2525),_=a(3560),Z=a(3121),C=a(3910),T=a(770),S=a(4722),x=a(7677),w=a(6579),N=(0,l.Z)(b,h,p,!1,null,"48e3fcdd",null),O=N.exports;u()(N,{VAvatar:k.Z,VBtn:y.Z,VCard:_.Z,VCol:Z.Z,VDialog:C.Z,VIcon:T.Z,VRow:S.Z,VSwitch:x.Z,VTextField:w.Z});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"left"},[a("div",{staticClass:"top"},[a("v-card",{staticClass:"menu",attrs:{elevation:"2"}},[a("div",{staticClass:"input"},[a("div",{staticClass:"box"},[a("v-slider",{attrs:{label:"计时时长(小时)",max:24,min:1,"thumb-label":"always"},model:{value:t.timeNum,callback:function(e){t.timeNum=e},expression:"timeNum"}}),a("v-btn",{staticClass:"btn",attrs:{depressed:"",elevation:"2",color:"primary"},on:{click:t.save}},[t._v(" 开始 ")]),a("v-btn",{staticClass:"btn",attrs:{depressed:"",elevation:"2",color:"#993232"},on:{click:t.cancel}},[t._v(" 重置 ")]),a("v-btn",{staticClass:"btn",attrs:{depressed:"",elevation:"2",color:"secondary"},on:{click:t.stop}},[t._v(" "+t._s(t.isStop?"恢复":"暂停")+" ")])],1)])])],1),a("div",{staticClass:"bottom"},[a("v-card",{staticClass:"menu",attrs:{elevation:"2"}})],1)]),a("div",{staticClass:"right"},[a("v-card",{staticClass:"menu",attrs:{elevation:"2"}},[a("div",{staticClass:"content",style:{color:t.timeOut?"#993232":""}},[t.timeOut?a("span",{staticClass:"timeout"},[t._v("超时")]):t._e(),t._v(" "+t._s(t.date)+" ")])])],1),a("v-dialog",{attrs:{persistent:"",width:"250"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"pa-7",staticStyle:{"text-align":"center"}},[a("p",{staticStyle:{"margin-bottom":"20px"}},[t._v("是否继续上次计时")]),a("v-btn",{staticClass:"btn",attrs:{color:"primary",depressed:"",elevation:"2"},on:{click:function(e){return t.ok(!0)}}},[t._v(" 确定 ")]),a("v-btn",{staticClass:"btn",attrs:{color:"blue-grey",depressed:"",elevation:"2"},on:{click:function(e){return t.ok(!1)}}},[t._v(" 取消 ")])],1)],1)],1)},V=[],j=(a(1539),a(9714),a(4916),a(3123),a(2222),{name:"home",data:function(){return{dialog:!1,timeNum:4,date:"00:00:00",timerBox:null,timeOut:!1,isStop:!1,isLastTime:!1,lastTime:{zTime:0,nTime:0,time:0}}},components:{},computed:{},methods:{ok:function(t){t&&(this.isLastTime=t,this.lastTime=JSON.parse(localStorage.getItem("lastTime")),this.timer()),this.dialog=!1},stop:function(){this.isStop=!this.isStop},cancel:function(){this.date="00:00:00",this.timeOut=!1,clearInterval(this.timerBox)},save:function(){this.date="00:00:00",this.timeOut=!1,clearInterval(this.timerBox),this.timer(this.timeNum)},timer:function(t){var e=this,a=0,i=0;this.isLastTime?(a=this.lastTime.zTime,i=this.lastTime.nTime):(a=(new Date).getTime()+36e5*t,i=(new Date).getTime()),this.timerBox=setInterval((function(){if(!e.isStop){a-=1e3,e.lastTime={time:a-i,zTime:a,nTime:i},localStorage.setItem("lastTime",JSON.stringify(e.lastTime));var t=Math.floor(e.lastTime.time/36e5%24),n=Math.floor(e.lastTime.time/6e4%60),o=Math.floor(e.lastTime.time/1e3%60);e.date=e.fDate(t,n,o)}}),1e3)},fNum:function(t){return 1*t<=0?"00":1*t<10?"0"+t:t},fDate:function(t,e,a){var i=this;function n(t){return t.toString().indexOf("-")>-1?(i.timeOut=!0,1*t.toString().split("-")[1]-1):(i.timeOut=!1,t)}return"".concat(this.fNum(n(t)),":").concat(this.fNum(n(e)),":").concat(this.fNum(Math.abs(a)))}},created:function(){},mounted:function(){localStorage.getItem("lastTime")&&(this.dialog=!0)}}),$=j,D=a(9558),M=(0,l.Z)($,I,V,!1,null,"2b73b143",null),B=M.exports;u()(M,{VBtn:y.Z,VCard:_.Z,VDialog:C.Z,VSlider:D.Z});var P=f.Z.prototype.push;f.Z.prototype.push=function(t){return P.call(this,t).catch((function(t){return t}))},i.Z.use(f.Z);var z=new f.Z({mode:"hash",routes:[{path:"/",component:O,children:[{name:"home",path:"/",component:B},{name:"clock",path:"index",component:B}]}]}),L=z,E=a(629);i.Z.use(E.ZP);var A=new E.ZP.Store({state:{},mutations:{},actions:{},modules:{}}),F=a(8313);i.Z.use(F.Z);var J=new F.Z({theme:{themes:{light:{}}}});i.Z.config.productionTip=!1,new i.Z({router:L,store:A,vuetify:J,render:function(t){return t(v)}}).$mount("#app")}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,i,n,o){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],n=t[c][1],o=t[c][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(r=!1,o<s&&(s=o));r&&(t.splice(c--,1),e=n())}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,n,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,o,s=i[0],r=i[1],l=i[2],c=0;for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(l)var u=l(a);for(e&&e(i);c<s.length;c++)o=s[c],a.o(t,o)&&t[o]&&t[o][0](),t[s[c]]=0;return a.O(u)},i=self["webpackChunkclock_hub"]=self["webpackChunkclock_hub"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(4315)}));i=a.O(i)})();
//# sourceMappingURL=app-legacy.5305b65c.js.map