(function(t){function e(e){for(var n,s,u=e[0],i=e[1],c=e[2],_=0,p=[];_<u.length;_++)s=u[_],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={index:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},6261:function(t,e,r){},7073:function(t,e,r){},8627:function(t,e,r){"use strict";r("6261")},"96a4":function(t,e,r){"use strict";r("7073")},cd49:function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),o=r("a584"),a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),e("router-view")],1)},s=[],u=n["a"].extend({name:"App"}),i=u,c=(r("8627"),r("2877")),l=Object(c["a"])(i,a,s,!1,null,null,null),_=l.exports,p=r("8c4f"),f=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._m(0),e("p",[t._v("ボタンクリックカウンター: "+t._s(t.count))]),e("button",{on:{click:t.increment}},[t._v("クリック")]),e("button",{on:{click:t.initCount}},[t._v("リセット")]),t.animals[0]?[e("p",[t._v("今日のLucky Animalは..."+t._s(t.animals[0].name)+"!!!")])]:t._e(),e("h3",[t._v("Installed CLI Plugins")]),t._m(1),e("h3",[t._v("Essential Links")]),t._m(2),e("h3",[t._v("Ecosystem")]),t._m(3)],2)},v=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),e("br"),t._v(" check out the "),e("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[t._v("typescript")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),e("li",[e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",[e("li",[e("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),e("li",[e("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),e("li",[e("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],h=n["a"].extend({name:"HelloWorld",props:{msg:String},computed:{count(){return this.$store.state.count},animals(){return this.$store.state.animals}},async created(){this.$store.dispatch("getAnimals")},methods:{increment(){this.$store.commit("increment")},initCount(){this.$store.dispatch("resetCount")}}}),m=h,d=(r("96a4"),Object(c["a"])(m,f,v,!1,null,"32390c29",null)),g=d.exports;n["a"].use(p["a"]);const b=[{path:"/",name:"HelloWorld",component:g}],E=new p["a"]({routes:b});var j=E,O=(r("14d9"),r("2f62")),y=r("bc7b"),P=r("1494");n["a"].use(O["a"]);const A={apiKey:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FB_API_KEY,authDomain:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FB_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FB_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FB_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FB_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FB_APP_ID,measurementId:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FB_MEASUREMENT_ID},S=Object(y["a"])(A),k=Object(P["c"])(S),w=localStorage.getItem("count"),N=new O["a"].Store({state:{count:w?JSON.parse(w):0,animals:[]},getters:{count:t=>t.count,animals:t=>t.animals},mutations:{increment(t){t.count++},resetCount(t){t.count=0},getAnimals(t,e){t.animals=e}},actions:{increment({commit:t}){t("increment")},resetCount({commit:t}){t("resetCount")},async getAnimals({commit:t}){const e=[],r=await Object(P["b"])(Object(P["a"])(k,"animals"));r.forEach(t=>{const{name:r,sound:n}=t.data();e.push({name:r,sound:n})}),t("getAnimals",e)}}});N.subscribe((t,e)=>{localStorage.setItem("count",JSON.stringify(e.count))});var x=N;n["a"].config.productionTip=!1,n["a"].use(o["a"],{config:{id:"G-6YRHW4W42Z"}},j),new n["a"]({router:j,store:x,render:t=>t(_)}).$mount("#app")},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=index.860ecbcc.js.map