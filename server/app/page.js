(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2854:(e,a,i)=>{"use strict";i.r(a),i.d(a,{GlobalError:()=>t.a,__next_app__:()=>g,originalPathname:()=>d,pages:()=>m,routeModule:()=>p,tree:()=>c}),i(2232),i(7764),i(5866);var r=i(3191),s=i(8716),n=i(7922),t=i.n(n),o=i(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);i.d(a,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,2232)),"/home/pooja/food_recipe_app/app/page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,7764)),"/home/pooja/food_recipe_app/app/layout.js"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["/home/pooja/food_recipe_app/app/page.js"],d="/page",g={require:i,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2486:(e,a,i)=>{Promise.resolve().then(i.bind(i,5340))},1664:(e,a,i)=>{Promise.resolve().then(i.t.bind(i,2994,23)),Promise.resolve().then(i.t.bind(i,6114,23)),Promise.resolve().then(i.t.bind(i,9727,23)),Promise.resolve().then(i.t.bind(i,9671,23)),Promise.resolve().then(i.t.bind(i,1868,23)),Promise.resolve().then(i.t.bind(i,4759,23))},9970:()=>{},3880:(e,a,i)=>{"use strict";i.d(a,{Z:()=>s});var r=i(326);i(7577),i(4047);let s=function({onSignOut:e}){return r.jsx("div",{className:"container",children:(0,r.jsxs)("div",{className:"container_header",children:[r.jsx("div",{className:"logo",children:r.jsx("img",{src:"pngegg.png",className:"logo_img",alt:"Logo"})}),(0,r.jsxs)("div",{className:"nav1",children:[(0,r.jsxs)("a",{href:"/search",className:"nav_item",children:[r.jsx("img",{src:"search.png",alt:"Search Icon"}),"SearchBar"]}),(0,r.jsxs)("a",{href:"/",className:"nav_item",children:[r.jsx("img",{src:"home.png",alt:"Home Icon"}),"Home"]}),(0,r.jsxs)("button",{onClick:e,className:"nav_item signout",children:[r.jsx("img",{src:"signin_logo.png",alt:"Sign In Icon"}),"Sign In"]})]})]})})}},5340:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>u});var r=i(326),s=i(7577);/*! js-cookie v3.0.5 | MIT */function n(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var r in i)e[r]=i[r]}return e}i(9973);var t=function e(a,i){function r(e,r,s){if("undefined"!=typeof document){"number"==typeof(s=n({},i,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var t="";for(var o in s)s[o]&&(t+="; "+o,!0!==s[o]&&(t+="="+s[o].split(";")[0]));return document.cookie=e+"="+a.write(r,e)+t}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var i=document.cookie?document.cookie.split("; "):[],r={},s=0;s<i.length;s++){var n=i[s].split("="),t=n.slice(1).join("=");try{var o=decodeURIComponent(n[0]);if(r[o]=a.read(t,o),e===o)break}catch(e){}}return e?r[e]:r}},remove:function(e,a){r(e,"",n({},a,{expires:-1}))},withAttributes:function(a){return e(this.converter,n({},this.attributes,a))},withConverter:function(a){return e(n({},this.converter,a),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(a)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"}),o=i(4825);let l=[{id:1,name:"Spaghetti",image:"pasta sauce.png"},{id:2,name:"Beef Barger",image:"bager.jpg"},{id:3,name:"Caprese Salad",image:"unsplash.jpg"},{id:4,name:"Beef Tacos",image:"beef.png"},{id:5,name:"Margarita Pizza",image:"two.png"},{id:6,name:"Caesar Salad",image:"caesar salad.png"},{id:7,name:"Grilled Salmon",image:"Grilled Salmon.png"},{id:8,name:"French Soup",image:"soup.jpg"},{id:9,name:"Chicken Curry",image:"chicken curry .png"},{id:10,name:"Margarita Pizza",image:"two.png"},{id:11,name:"Pasta",image:"pasta sauce.png"},{id:12,name:"French Soup",image:"soup.jpg"},{id:13,name:"Chicken barger",image:"bager.jpg"},{id:7,name:"Grilled Salmon",image:"Grilled Salmon.png"},{id:15,name:"Beef Tacos",image:"beef.png"},{id:18,name:"Grilled Salmon",image:"Grilled Salmon.png"},{id:19,name:"French Soup",image:"soup.jpg"},{id:20,name:"Caprese Salad",image:"unsplash.jpg"},{id:21,name:"Margarita Pizza",image:"two.png"},,{id:22,name:"Pasta",image:"anna-pelzer-IGfIGP5ONV0-unsplash.jpg"},{id:23,name:"Spaghetti",image:"pasta sauce.png"},{id:24,name:"Beef Barger",image:"bager.jpg"},{id:25,name:"Pasta",image:"pasta sauce.png"},{id:26,name:"Beef Tacos",image:"beef.png"},{id:27,name:"Margarita Pizza",image:"two.png"},{id:28,name:"Caesar Salad",image:"caesar salad.png"},{id:29,name:"Grilled Salmon",image:"Grilled Salmon.png"},{id:30,name:"French Soup",image:"soup.jpg"},{id:31,name:"Caprese Salad",image:"unsplash.jpg"},{id:32,name:"Chicken barger",image:"bager.jpg"},{id:33,name:"Chicken Curry",image:"chicken curry .png"},{id:34,name:"Spaghetti",image:"pasta sauce.png"},{id:35,name:"Beef Barger",image:"bager.jpg"},{id:36,name:"Chicken Curry",image:"chicken curry .png"},{id:37,name:"Beef Tacos",image:"beef.png"},{id:38,name:"Margarita Pizza",image:"two.png"},{id:39,name:"Caesar Salad",image:"caesar salad.png"},{id:40,name:"Grilled Salmon",image:"Grilled Salmon.png"},{id:41,name:"French Soup",image:"soup.jpg"},{id:42,name:"Caprese Salad",image:"unsplash.jpg"},{id:43,name:"Chicken barger",image:"bager.jpg"},{id:44,name:"Pasta",image:"anna-pelzer-IGfIGP5ONV0-unsplash.jpg"},{id:45,name:"Spaghetti",image:"pasta sauce.png"},{id:46,name:"Beef Barger",image:"bager.jpg"},{id:47,name:"Chicken Curry",image:"chicken curry .png"},{id:48,name:"Beef Tacos",image:"beef.png"}],c=()=>r.jsx("div",{className:"food-list-row",children:l.map(e=>(0,r.jsxs)("div",{className:"food-item",children:[r.jsx("div",{className:"image-container_1",children:r.jsx("img",{src:e.image,alt:e.name,className:"food-image"})}),r.jsx("h5",{className:"food-item-title",children:e.name})]},e.id))});var m=i(3397);let d=function(){return r.jsx("div",{className:"image-carousel-container",children:(0,r.jsxs)(m.Z,{interval:2e3,pause:!1,children:[r.jsx(m.Z.Item,{children:r.jsx("img",{className:"carousel-image",src:"one.jpg",alt:"one slide"})}),r.jsx(m.Z.Item,{children:r.jsx("img",{className:"carousel-image",src:"two.png",alt:"two slide"})}),r.jsx(m.Z.Item,{children:r.jsx("img",{className:"carousel-image",src:"two.jpg",alt:"three slide"})}),r.jsx(m.Z.Item,{children:r.jsx("img",{className:"carousel-image",src:"four.jpg",alt:"four slide"})}),r.jsx(m.Z.Item,{children:r.jsx("img",{className:"carousel-image",src:"five.jpg",alt:"five slide"})}),r.jsx(m.Z.Item,{children:r.jsx("img",{className:"carousel-image",src:"nine.jpg",alt:"six slide"})}),r.jsx(m.Z.Item,{children:r.jsx("img",{className:"carousel-image",src:"Banana Bread.jpg",alt:"seven slide"})}),r.jsx(m.Z.Item,{children:r.jsx("img",{className:"carousel-image",src:"eight.jpg",alt:"eight slide"})}),r.jsx(m.Z.Item,{children:r.jsx("img",{className:"carousel-image",src:"nine.jpg",alt:"nine slide"})}),r.jsx(m.Z.Item,{children:r.jsx("img",{className:"carousel-image",src:"ten.jpg",alt:"ten slide"})})]})})},g=function(){let[e,a]=(0,s.useState)([]);return fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(function(e){return e.json()}).then(function(e){a(e.categories.slice(0,12))}).catch(function(e){console.error("Error fetching the data:",e)}),r.jsx("div",{children:r.jsx("div",{className:"row home_imag",children:e.map(e=>{let a=e.strCategoryDescription,i=a.split(" ").slice(0,10).join(" ")+(a.split(" ").length>20?"...":"");return r.jsx("div",{className:"col-md-4 col-lg-4 mb-4 card_container",children:(0,r.jsxs)("div",{className:"card h-100",children:[r.jsx("div",{className:"image-container",children:r.jsx("img",{src:e.strCategoryThumb,alt:e.strCategory,className:"card-img-top hover-image"})}),(0,r.jsxs)("div",{className:"body text-center",children:[r.jsx("h3",{className:"title",children:r.jsx("b",{children:e.strCategory})}),r.jsx("p",{children:i})]})]})},e.idCategory)})})})};var p=i(3880);i(1395);let u=()=>{let[e,a]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{"true"===t.get("isSignedIn")&&a(!0)},[]),r.jsx("div",{className:"container",children:e?(0,r.jsxs)(r.Fragment,{children:[r.jsx(p.Z,{onSignOut:()=>{a(!1),t.set("isSignedIn","false",{expires:7})}}),r.jsx(c,{}),r.jsx(d,{}),r.jsx(g,{})]}):r.jsx(o.default,{onSignIn:()=>{a(!0),t.set("isSignedIn","true",{expires:7})}})})}},1395:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>n});var r=i(326);i(7577);var s=i(7389);let n=()=>{let e=(0,s.useRouter)();return r.jsx("div",{className:"signout-container",children:r.jsx("button",{onClick:()=>{console.log("User signed out"),e.push("/signIn")},children:"Sign Out"})})}},4825:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>n});var r=i(326),s=i(7577);i(5136);let n=function({onSignIn:e}){let[a,i]=(0,s.useState)(""),[n,t]=(0,s.useState)(""),[o,l]=(0,s.useState)(""),[c,m]=(0,s.useState)("");return r.jsx("div",{className:"signin-container d-flex justify-content-center align-items-center",children:(0,r.jsxs)("div",{className:"signin-card card p-4",children:[r.jsx("div",{className:"text-center",children:"SIGN IN"}),(0,r.jsxs)("form",{onSubmit:i=>{i.preventDefault(),e({firstName:a,lastName:n,email:o,password:c})},children:[(0,r.jsxs)("div",{className:"form-group",children:[r.jsx("input",{type:"text",className:"form-control",placeholder:"First Name",value:a,onChange:e=>i(e.target.value),required:!0}),r.jsx("br",{})]}),(0,r.jsxs)("div",{className:"form-group",children:[r.jsx("input",{type:"text",className:"form-control",placeholder:"Last Name",value:n,onChange:e=>t(e.target.value),required:!0}),r.jsx("br",{})]}),(0,r.jsxs)("div",{className:"form-group",children:[r.jsx("input",{type:"email",className:"form-control",placeholder:"Email",value:o,onChange:e=>l(e.target.value),required:!0}),r.jsx("br",{})]}),(0,r.jsxs)("div",{className:"form-group",children:[r.jsx("input",{type:"password",className:"form-control",placeholder:"Password",value:c,onChange:e=>m(e.target.value),required:!0}),r.jsx("br",{})]}),r.jsx("button",{type:"submit",className:"submit-btn",children:"CONTINUE"})]}),r.jsx("div",{className:"signup-option text-center mt-3",children:r.jsx("p",{className:"text-muted",children:"Sign up with"})})]})})}},7764:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>o,metadata:()=>t});var r=i(9510),s=i(167),n=i.n(s);i(7453),i(7272);let t={title:"Create Next App",description:"Generated by create next app"};function o({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:n().className,children:e})})}},2232:(e,a,i)=>{"use strict";i.r(a),i.d(a,{$$typeof:()=>t,__esModule:()=>n,default:()=>o});var r=i(8570);let s=(0,r.createProxy)(String.raw`/home/pooja/food_recipe_app/app/page.js`),{__esModule:n,$$typeof:t}=s;s.default;let o=(0,r.createProxy)(String.raw`/home/pooja/food_recipe_app/app/page.js#default`)},7481:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>s});var r=i(6621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{},4047:()=>{},5136:()=>{},9973:()=>{}};var a=require("../webpack-runtime.js");a.C(e);var i=e=>a(a.s=e),r=a.X(0,[948,224,621,397],()=>i(2854));module.exports=r})();