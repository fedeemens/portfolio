(function(t){function e(e){for(var i,c,o=e[0],r=e[1],l=e[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var r=n[o];0!==a[r]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},s=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d29":function(t,e,n){t.exports=n.p+"img/linkedin.14f7b675.svg"},"179b":function(t,e,n){"use strict";n("33f6")},"2a75":function(t,e,n){"use strict";n("a18f")},"33f6":function(t,e,n){},3617:function(t,e,n){},3776:function(t,e,n){t.exports=n.p+"img/whatsapp.5de06485.svg"},"3b9c":function(t,e,n){t.exports=n.p+"img/contact.c672d702.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.aboutOn?t._e():n("header",{staticClass:"navegador"},[t.menuActive?t._e():n("a",{staticClass:"main-link",on:{click:function(e){return t.changeIndice(0)}}},[t._v("Emens Fede")]),t.menuActive?n("a",{staticClass:"main-link",on:{click:function(e){t.toggleMenu(),t.changeIndice(0)}}},[t._v("Emens Fede")]):t._e(),n("nav",[t._m(0),n("div",{staticClass:"burguer",class:{cruz:t.menuActive},on:{click:function(e){return t.toggleMenu()}}},[n("div",{staticClass:"line1"}),n("div",{staticClass:"line2"})])]),n("div",{staticClass:"menu",class:{"menu-active":t.menuActive}},[n("p",{on:{click:function(e){t.toggleMenu(),t.changeIndice(0)}}},[t._v("HOME")]),n("p",{on:{click:function(e){t.toggleMenu(),t.changeIndice(1)}}},[t._v("ABOUT ME")]),n("p",{on:{click:function(e){t.toggleMenu(),t.changeIndice(2)}}},[t._v("WORK")]),n("p",{on:{click:function(e){t.toggleMenu(),t.changeIndice(3)}}},[t._v("CONTACT")])])]),t.aboutOn?t._e():n("div",{staticClass:"navegador-lateral"},[n("div",{staticClass:"line-container",on:{click:function(e){return t.changeIndice(0)}}},[n("div",{staticClass:"line1",class:{active:0==this.indice}})]),n("div",{staticClass:"line-container",on:{click:function(e){return t.changeIndice(1)}}},[n("div",{staticClass:"line2",class:{active:1==this.indice}})]),n("div",{staticClass:"line-container",on:{click:function(e){return t.changeIndice(2)}}},[n("div",{staticClass:"line3",class:{active:2==this.indice}})]),n("div",{staticClass:"line-container",on:{click:function(e){return t.changeIndice(3)}}},[n("div",{staticClass:"line4",class:{active:3==this.indice}})])]),n("div",{staticClass:"container-visible",class:{overflowOn:t.aboutOn},on:{mousewheel:t.onScroll}},[n("div",{staticClass:"container-primary",style:{top:"-"+100*t.indice+"vh"},on:{transitionend:t.transitionEnd}},[n("Section1",{class:{active:0==this.indice,hiden:t.aboutOn}}),n("Section2",{class:{active:1==this.indice}}),t.aboutOn?t._e():n("Section3",{class:{active:2==this.indice}}),t.aboutOn?t._e():n("Section4",{class:{active:3==this.indice}})],1)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("a",{staticClass:"linkedin",attrs:{href:"https://www.linkedin.com/in/emens-federico/",target:"blank"}},[i("img",{attrs:{src:n("0d29"),alt:""}})]),i("a",{staticClass:"github",attrs:{href:"https://github.com/fedeemens",target:"blank"}},[t._v("GitHub")])])}],c=n("5530"),o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"section1"}},[i("div",{staticClass:"presentation"},[i("h1",[t._v("EMENS"),i("br"),t._v("FEDE")]),i("div",{staticClass:"separador"},[i("div",{staticClass:"linea1"}),i("div",{staticClass:"linea2"})]),i("h3",[t._v("frontend developer /"),i("br"),t._v("web designer")])]),i("img",{staticClass:"img-back-2",attrs:{src:n("73be"),alt:""}}),i("img",{staticClass:"img-back-1",attrs:{src:n("73be"),alt:""}}),i("p",{staticClass:"scrolldown"},[t._v("SCROLLDOWN")])])}],l=(n("99af"),{name:"Section1",mounted:function(){function t(t){var e=document.querySelector(".img-back-1"),n=2,i=(window.innerWidth-t.pageX*n)/200,a=(window.innerHeight-t.pageY*n)/100;e.style.transform="translateX(".concat(i,"px) translateY(").concat(a,"px)")}document.addEventListener("mousemove",t)}}),u=l,d=(n("179b"),n("2877")),f=Object(d["a"])(u,o,r,!1,null,null,null),v=f.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section2",class:{"about-active":t.aboutOn}},[i("img",{staticClass:"left-arrow",attrs:{src:n("f330"),id:"left-arrow-about",alt:""},on:{click:t.aboutToggle}}),i("div",{staticClass:"main"},[i("img",{staticClass:"about-img",attrs:{src:n("df75e"),alt:""}}),i("div",{staticClass:"title-about"},[i("h1",[t._v("About Me")]),t._m(0),t._m(1),t.aboutOn?t._e():i("a",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.aboutToggle(e)}}},[t._v("Show me more")]),t.aboutOn?i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#aboutSecondary",expression:"'#aboutSecondary'"}],staticClass:"btn"},[t._v("Scroll down")]):t._e()])]),t.aboutOn?i("div",{staticClass:"secondary",attrs:{id:"aboutSecondary"}}):t._e()])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"separador"},[n("div",{staticClass:"linea1"}),n("div",{staticClass:"linea2"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("I love Technology, Design,"),n("br"),t._v("and Learn.")])}],h=(n("4de4"),n("2f62")),b={name:"Section2",computed:Object(c["a"])({},Object(h["c"])(["aboutOn"])),methods:Object(c["a"])({},Object(h["b"])(["aboutToggle"])),mounted:function(){document.addEventListener("scroll",(function(){var t=document.querySelector("#aboutSecondary"),e=document.querySelector("#left-arrow-about");t.offsetTop/2<=window.scrollY?e.style.filter="invert(1)":e.style.filter="invert(0)"}))}},g=b,_=(n("2a75"),Object(d["a"])(g,m,p,!1,null,null,null)),O=_.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section3"},[i("img",{staticClass:"work-img",attrs:{src:n("65c3"),alt:""}}),i("div",{staticClass:"title-work"},[i("h1",[t._v("My Work")]),i("div",{staticClass:"separador"},[i("div",{staticClass:"linea1"}),i("div",{staticClass:"linea2"})]),i("h3",[t._v("look at some projects that i made, "),i("br"),t._v("and their stories..")]),i("a",{staticClass:"btn"},[t._v("Take a look")])])])}],k={name:"Section3"},y=k,S=(n("e8ac"),Object(d["a"])(y,C,w,!1,null,null,null)),E=S.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section4"},[i("img",{staticClass:"contact-img",attrs:{src:n("3b9c"),alt:""}}),i("div",{staticClass:"title"},[i("h1",[t._v("Get In Touch")]),i("div",{staticClass:"separador"},[i("div",{staticClass:"linea1"}),i("div",{staticClass:"linea2"})]),i("h3",[t._v("emens.fede@gmail.com")]),i("a",{attrs:{href:""}},[t._v("linkedin")]),i("div",{staticClass:"icons"},[i("a",{attrs:{href:"https://api.whatsapp.com/send?phone=5493446359288",target:"blank"}},[i("img",{attrs:{src:n("3776"),alt:""}})]),i("a",{attrs:{href:"https://telegram.me/emensfede",target:"blank"}},[i("img",{attrs:{src:n("7315"),alt:""}})])])])])}],M={name:"Section4"},T=M,A=(n("5900"),Object(d["a"])(T,j,x,!1,null,null,null)),I=A.exports,$={name:"App",components:{Section1:v,Section2:O,Section3:E,Section4:I},computed:Object(c["a"])({},Object(h["c"])(["aboutOn"])),data:function(){return{indice:0,transitionOn:!1,menuActive:!1}},methods:{onScroll:function(t){100==t.deltaY&&this.indice<3&&!this.transitionOn&&!this.aboutOn&&(this.transitionOn=!0,this.indice=this.indice+1),-100!=t.deltaY||0==this.indice||this.transitionOn||this.aboutOn||(this.transitionOn=!0,this.indice=this.indice-1)},changeIndice:function(t){this.indice=t},transitionEnd:function(){this.transitionOn=!1},toggleMenu:function(){this.menuActive=!this.menuActive}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){"ArrowDown"==e.key&&t.indice<3&&!t.transitionOn&&!t.aboutOn&&(t.transitionOn=!0,t.indice=t.indice+1),"ArrowUp"!=e.key||0==t.indice||t.transitionOn||t.aboutOn||(t.transitionOn=!0,t.indice=t.indice-1)}))}},P=$,L=(n("5c0b"),Object(d["a"])(P,a,s,!1,null,null,null)),D=L.exports;i["a"].use(h["a"]);var Y=new h["a"].Store({state:{aboutOn:!1},mutations:{aboutToggle:function(){this.state.aboutOn=!this.state.aboutOn}},actions:{},modules:{}}),N=n("f13c"),W=n.n(N);i["a"].use(h["a"]),i["a"].use(W.a,{duration:300,easing:"ease-out"}),i["a"].config.productionTip=!1,new i["a"]({store:Y,render:function(t){return t(D)}}).$mount("#app")},5900:function(t,e,n){"use strict";n("ef1d")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"65c3":function(t,e,n){t.exports=n.p+"img/work.4e000c6f.svg"},7315:function(t,e,n){t.exports=n.p+"img/telegram.a888fec0.svg"},"73be":function(t,e,n){t.exports=n.p+"img/fondo.6ad1c1d6.svg"},"9c0c":function(t,e,n){},a18f:function(t,e,n){},df75e:function(t,e,n){t.exports=n.p+"img/about-fondo.63a085ec.jpg"},e8ac:function(t,e,n){"use strict";n("3617")},ef1d:function(t,e,n){},f330:function(t,e,n){t.exports=n.p+"img/left-arrow.55fbb9c4.svg"}});
//# sourceMappingURL=app.026fe4fc.js.map