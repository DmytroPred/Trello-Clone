(()=>{"use strict";var e,v={},g={};function r(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return v[e](t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,o,f)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,o,f]=e[i],s=!0,l=0;l<t.length;l++)(!1&f||a>=f)&&Object.keys(r.O).every(b=>r.O[b](t[l]))?t.splice(l--,1):(s=!1,f<a&&(a=f));if(s){e.splice(i--,1);var u=o();void 0!==u&&(n=u)}}return n}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,o,f]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{48:"a6c86e2331da2497",93:"b828151e2963c947",107:"a67f2893b446b656",145:"30a31099c6e9ea40",496:"d6b60a8995fbbc20",716:"9c9e0599e7f05b38",984:"695d629b0de13816"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="Trello-Clone:";r.l=(t,o,f,i)=>{if(e[t])e[t].push(o);else{var a,s;if(void 0!==f)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+f){a=d;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+f),a.src=r.tu(t)),e[t]=[o];var c=(h,b)=>{a.onerror=a.onload=null,clearTimeout(p);var m=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),m&&m.forEach(_=>_(b)),h)return h(b)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(o,f)=>{var i=r.o(e,o)?e[o]:void 0;if(0!==i)if(i)f.push(i[2]);else if(666!=o){var a=new Promise((d,c)=>i=e[o]=[d,c]);f.push(i[2]=a);var s=r.p+r.u(o),l=new Error;r.l(s,d=>{if(r.o(e,o)&&(0!==(i=e[o])&&(e[o]=void 0),i)){var c=d&&("load"===d.type?"missing":d.type),p=d&&d.target&&d.target.src;l.message="Loading chunk "+o+" failed.\n("+c+": "+p+")",l.name="ChunkLoadError",l.type=c,l.request=p,i[1](l)}},"chunk-"+o,o)}else e[o]=0},r.O.j=o=>0===e[o];var n=(o,f)=>{var l,u,[i,a,s]=f,d=0;if(i.some(p=>0!==e[p])){for(l in a)r.o(a,l)&&(r.m[l]=a[l]);if(s)var c=s(r)}for(o&&o(f);d<i.length;d++)r.o(e,u=i[d])&&e[u]&&e[u][0](),e[u]=0;return r.O(c)},t=self.webpackChunkTrello_Clone=self.webpackChunkTrello_Clone||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();