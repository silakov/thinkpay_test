(function(e){function t(t){for(var n,i,c=t[0],u=t[1],s=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d21de4f":"63ffe2b3"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("19b3"),o=r.n(n);o.a},"19b3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("bc3a"),a=r.n(o);a.a.interceptors.response.use((function(e){return e}),(function(e){if(e.response){var t=e.response.data.errors;console.log(t)}})),n["a"].use(a.a);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{alt:"Vue logo",src:r("cf05"),height:"56px"}})]),n("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),n("a",{staticClass:"display-2 font-weight-bold white--text",attrs:{href:"https://www.linkedin.com/in/igor-silakov-92854285"}},[e._v("Silakov's task")])],1),n("v-content",[n("router-view")],1)],1)},c=[],u={name:"App",data:function(){return{}}},s=u,d=(r("034f"),r("2877")),l=r("6544"),p=r.n(l),f=r("7496"),v=r("40dc"),m=r("a75b"),h=r("ce7e"),b=Object(d["a"])(s,i,c,!1,null,null,null),g=b.exports;p()(b,{VApp:f["a"],VAppBar:v["a"],VContent:m["a"],VDivider:h["a"]});var P=r("9483");Object(P["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var w=r("8c4f"),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{type:"text",label:"Filter by name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{type:"text",label:"Filter by price"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({staticClass:"mt-3",attrs:{color:"primary",dark:"",block:""}},n),[e._v("New Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Name",error:e.$v.editedProduct.name.$error,messages:e.$v.editedProduct.name.$error?"Required. Any string":""},on:{blur:function(t){return e.$v.editedProduct.name.$touch()}},model:{value:e.editedProduct.name,callback:function(t){e.$set(e.editedProduct,"name","string"===typeof t?t.trim():t)},expression:"editedProduct.name"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Code",error:e.$v.editedProduct.code.$error,messages:e.$v.editedProduct.code.$error?"Required. Must be numbers in format ####-####":""},on:{blur:function(t){return e.$v.editedProduct.code.$touch()}},model:{value:e.editedProduct.code,callback:function(t){e.$set(e.editedProduct,"code","string"===typeof t?t.trim():t)},expression:"editedProduct.code"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Price",type:"number",error:e.$v.editedProduct.price.$error,messages:e.$v.editedProduct.price.$error?"Required. Must be numbers":""},on:{blur:function(t){return e.$v.editedProduct.price.$touch()}},model:{value:e.editedProduct.price,callback:function(t){e.$set(e.editedProduct,"price","string"===typeof t?t.trim():t)},expression:"editedProduct.price"}})],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v("Cancel")]),r("v-btn",{attrs:{color:"blue darken-1",disabled:e.$v.$invalid,text:""},on:{click:e.saveProduct}},[e._v(" Save ")])],1)],1)],1)],1)],1),r("v-data-table",{attrs:{dense:"",headers:e.headers,items:e.products,search:e.name,"disable-pagination":"","hide-default-footer":""},scopedSlots:e._u([{key:"item.name",fn:function(t){var n=t.item;return[r("router-link",{attrs:{to:"/product/"+n["_id"]}},[e._v(e._s(n.name))])]}},{key:"item.created_at",fn:function(t){var r=t.item;return[e._v(" "+e._s(e.showDate(r.created_at))+" ")]}},{key:"item.updated_at",fn:function(t){var r=t.item;return[e._v(" "+e._s(e.showDate(r.updated_at))+" ")]}},{key:"item.action",fn:function(t){var n=t.item;return[r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.editProduct(n,n._id)}}},[r("v-icon",[e._v(" mdi-pencil ")])],1),r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.deleteProduct(n._id)}}},[r("v-icon",[e._v(" mdi-delete ")])],1)]}}])})],1)},x=[],y=(r("a4d3"),r("99af"),r("4de4"),r("4160"),r("fb6a"),r("0d03"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("25f0"),r("4d90"),r("159b"),r("96cf"),r("89ba")),_=r("2fa7"),D=r("2f62"),k=r("b5ae");function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach((function(t){Object(_["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=k["helpers"].regex("code",/^[0-9]{4}[-][0-9]{4}$/),C={name:"home",data:function(){return{dialog:!1,name:"",code:"",price:null,isEdit:"",editedProduct:{name:"",code:"",price:null},defaultProduct:{name:"",code:"",price:null}}},validations:function(){return{editedProduct:{name:{required:k["required"]},code:{required:k["required"],code:E},price:{required:k["required"],decimal:k["decimal"]}}}},computed:R({},Object(D["b"])(["products"]),{formTitle:function(){return""!==this.isEdit?"Edit Item":"New Item"},headers:function(){var e=this;return[{text:"Name",value:"name"},{text:"Code",value:"code",filter:function(t){return!e.code||t===e.code}},{text:"Price",value:"price"},{text:"Created",value:"created_at"},{text:"Updated",value:"updated_at"},{text:"Actions",value:"action",sortable:!1,align:"right"}]}}),mounted:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("GET_PRODUCTS");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{showDate:function(e){var t=new Date(e),r=t.getDate(),n=t.toLocaleString("default",{month:"long"}).slice(0,3),o=t.getFullYear().toString(),a=t.getHours().toString().padStart(2,"0"),i=t.getMinutes().toString().padStart(2,"0"),c="".concat(a,".").concat(i," - ").concat(r," ").concat(n," ").concat(o);return c},editProduct:function(e,t){this.isEdit=t,this.editedProduct=Object.assign({},e),this.dialog=!0},deleteProduct:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("DELETE_PRODUCT",t);case 2:return e.next=4,this.$store.dispatch("GET_PRODUCTS");case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),closeDialog:function(){this.dialog=!1,this.isEdit="",this.editedProduct=Object.assign({},this.defaultProduct)},saveProduct:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=R({},this.editedProduct,{price:Number(this.editedProduct.price)}),""===this.isEdit){e.next=6;break}return e.next=4,this.$store.dispatch("EDIT_PRODUCT",{id:this.isEdit,product:t});case 4:e.next=8;break;case 6:return e.next=8,this.$store.dispatch("ADD_PRODUCT",t);case 8:return e.next=10,this.$store.dispatch("GET_PRODUCTS");case 10:this.closeDialog();case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},j=C,$=r("8336"),S=r("b0af"),U=r("99d9"),V=r("62ad"),A=r("a523"),q=r("8fea"),I=r("169a"),N=r("132d"),L=r("0fd9"),M=r("2fa4"),F=r("8654"),G=Object(d["a"])(j,O,x,!1,null,null,null),B=G.exports;p()(G,{VBtn:$["a"],VCard:S["a"],VCardActions:U["a"],VCardText:U["b"],VCardTitle:U["c"],VCol:V["a"],VContainer:A["a"],VDataTable:q["a"],VDialog:I["a"],VIcon:N["a"],VRow:L["a"],VSpacer:M["a"],VTextField:F["a"]}),n["a"].use(w["a"]);var J=[{path:"/",name:"products",component:B},{path:"/product/:id",name:"product",component:function(){return r.e("chunk-2d21de4f").then(r.bind(null,"d2f1"))}}],H=new w["a"]({mode:"history",routes:J}),Y=H;r("c740"),r("a434");n["a"].use(D["a"]);var z="https://thinkpay-test-backend-1.vercel.app/products/",K=new D["a"].Store({state:{products:[],product:{}},mutations:{SET_PRODUCTS:function(e,t){e.products=t},SET_PRODUCT:function(e,t){e.product=t},DELETE_PRODUCT:function(e,t){var r=e.products.findIndex((function(e){return e.id===t}));e.products.splice(r,1)},ADD_PRODUCT:function(e,t){e.products.push(t)},EDIT_PRODUCT:function(e,t){var r=e.products.findIndex((function(e){return e.id===t.id}));Object.assign(e.products[r],t)}},actions:{GET_PRODUCTS:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,a.a.get(z);case 3:n=e.sent,o=n.data,r("SET_PRODUCTS",o);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),GET_PRODUCT:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,r){var n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,a.a.get(z+r);case 3:o=e.sent,i=o.data,n("SET_PRODUCT",i);case 6:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),DELETE_PRODUCT:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,a.a.delete(z+r);case 3:n("DELETE_PRODUCT",r);case 4:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),ADD_PRODUCT:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,a.a.post(z,r);case 3:n("ADD_PRODUCT",r);case 4:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),EDIT_PRODUCT:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,a.a.put(z+r.id,r.product);case 3:n("EDIT_PRODUCT",r.product);case 4:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()}}),Q=r("1dce"),W=r.n(Q);n["a"].use(W.a);var X=r("f309");n["a"].use(X["a"]);var Z=new X["a"]({theme:{dark:!0,options:{customProperties:!0}},icons:{iconfont:"mdi"}});r("d5e8"),r("5363");n["a"].config.productionTip=!1,new n["a"]({router:Y,store:K,vuelidate:void 0,vuetify:Z,render:function(e){return e(g)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8a0f4c15.js.map