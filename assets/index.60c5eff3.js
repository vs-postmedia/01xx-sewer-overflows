(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function j(){}function ge(e,t){for(const n in t)e[n]=t[n];return e}function re(e){return e()}function Y(){return Object.create(null)}function $(e){e.forEach(re)}function oe(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let N;function be(e,t){return N||(N=document.createElement("a")),N.href=t,e===N.href}function ye(e){return Object.keys(e).length===0}function _e(e,t,n,r){if(e){const o=ie(e,t,n,r);return e[0](o)}}function ie(e,t,n,r){return e[1]&&r?ge(n.ctx.slice(),e[1](r(t))):n.ctx}function we(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(t.dirty===void 0)return o;if(typeof o=="object"){const i=[],s=Math.max(t.dirty.length,o.length);for(let a=0;a<s;a+=1)i[a]=t.dirty[a]|o[a];return i}return t.dirty|o}return t.dirty}function ve(e,t,n,r,o,i){if(o){const s=ie(t,n,r,i);e.p(s,o)}}function xe(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function w(e,t){e.appendChild(t)}function x(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode&&e.parentNode.removeChild(e)}function Be(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function se(e){return document.createTextNode(e)}function z(){return se(" ")}function ke(){return se("")}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Se(e){return Array.from(e.childNodes)}function A(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function Z(e,t,n){e.classList[n?"add":"remove"](t)}let F;function D(e){F=e}function Ce(){if(!F)throw new Error("Function called outside component initialization");return F}function Ee(e){Ce().$$.on_mount.push(e)}const C=[],M=[];let E=[];const R=[],Ae=Promise.resolve();let q=!1;function ze(){q||(q=!0,Ae.then(ae))}function H(e){E.push(e)}function le(e){R.push(e)}const V=new Set;let S=0;function ae(){if(S!==0)return;const e=F;do{try{for(;S<C.length;){const t=C[S];S++,D(t),De(t.$$)}}catch(t){throw C.length=0,S=0,t}for(D(null),C.length=0,S=0;M.length;)M.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];V.has(n)||(V.add(n),n())}E.length=0}while(C.length);for(;R.length;)R.pop()();q=!1,V.clear(),D(e)}function De(e){if(e.fragment!==null){e.update(),$(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}function Fe(e){const t=[],n=[];E.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),E=t}const O=new Set;let Me;function L(e,t){e&&e.i&&(O.delete(e),e.i(t))}function W(e,t,n,r){if(e&&e.o){if(O.has(e))return;O.add(e),Me.c.push(()=>{O.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ce(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function fe(e){e&&e.c()}function X(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||H(()=>{const s=e.$$.on_mount.map(re).filter(oe);e.$$.on_destroy?e.$$.on_destroy.push(...s):$(s),e.$$.on_mount=[]}),i.forEach(H)}function G(e,t){const n=e.$$;n.fragment!==null&&(Fe(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ie(e,t){e.$$.dirty[0]===-1&&(C.push(e),ze(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(e,t,n,r,o,i,s,a=[-1]){const u=F;D(e);const c=e.$$={fragment:null,ctx:[],props:i,update:j,not_equal:o,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Y(),dirty:a,skip_bound:!1,root:t.target||u.$$.root};s&&s(c.root);let p=!1;if(c.ctx=n?n(e,t.props||{},(d,g,...b)=>{const m=b.length?b[0]:g;return c.ctx&&o(c.ctx[d],c.ctx[d]=m)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](m),p&&Ie(e,d)),g}):[],c.update(),p=!0,$(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const d=Se(t.target);c.fragment&&c.fragment.l(d),d.forEach(v)}else c.fragment&&c.fragment.c();t.intro&&L(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),ae()}D(u)}class U{$destroy(){G(this,1),this.$destroy=j}$on(t,n){if(!oe(n))return j;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ee=['At least <span class="bold-text">22.8 billion litres</span> of untreated sewage and storm water \u2013 enough to fill B.C. Place four times over \u2013 were released into the waterways surrounding Metro Vancouver in 2023. <span class="graf-break"></span>The releases were mainly a result of heavy or prolonged rainfall that overwhelmed sewer systems. <span class="scroll-more">Scroll for more...</span>',"#2: Nearly half of that volume \u2013 10.7 billion litres \u2013 came from three combined sewer overflows (CSOs) at the north end of Clark Drive in Vancouver.","#3: Eight CSOs dotting the shores of downtown Vancouver \u2013 five of them in False Creek alone \u2013 released two billion litres of untreated sewage and storm water.",'#4: Eight outfalls into the Fraser south of Vancouver discharged of 2.9 billion litres of untreated sewage and storm water.<span class="graf-break"></span>That includes 125 million litres of wastewater discharged from the <span class="yellow-01">Dunbar</span> outfall, just half-a-kilometre southeast of Musqueam First Nation lands.','#5: 1.5 billion litres of combined sewage was released at the <span class="blue-01">Glenbrook</span> outfall in New Westminster, down from a high of 3.6 billion in 2021. <span class="graf-break"></span>The volume of wastewater released in New Westminster increased by nearly 60% from 2014-2023.',"#6: Over 1.2 billion litres of untreated sewage and storm water were released into Burrard Inlet in 2023, just a few kilometres from the Tsleil-Waututh Nation\u2019s traditional XXX grounds."];function Ne(e){let t,n;const r=e[7].default,o=_e(r,e,e[6],null);return{c(){t=h("div"),o&&o.c()},m(i,s){x(i,t,s),o&&o.m(t,null),e[8](t),n=!0},p(i,[s]){o&&o.p&&(!n||s&64)&&ve(o,r,i,i[6],n?we(r,i[6],s,null):xe(i[6]),null)},i(i){n||(L(o,i),n=!0)},o(i){W(o,i),n=!1},d(i){i&&v(t),o&&o.d(i),e[8](null)}}}function Oe(e,t,n){let{$$slots:r={},$$scope:o}=t,{root:i=null}=t,{top:s=0}=t,{bottom:a=0}=t,{increments:u=100}=t,{value:c=void 0}=t;const p=[],d=[];let g=[],b=[],m;const B=()=>{!g.length||g.forEach(I)},T=()=>{let l=0,y=0;for(let k=0;k<p.length;k++)p[k]>l&&(l=p[k],y=k);l>0?n(1,c=y):n(1,c=void 0)},I=(l,y)=>{const k=Q=>{Q[0].isIntersecting;const he=Q[0].intersectionRatio;p[y]=he,T()},ue=s?s*-1:0,de=a?a*-1:0,pe=`${ue}px 0px ${de}px 0px`,me={root:i,rootMargin:pe,threshold:d};b[y]&&b[y].disconnect();const J=new IntersectionObserver(k,me);J.observe(l),b[y]=J};Ee(()=>{for(let l=0;l<u+1;l++)d.push(l/u);g=m.querySelectorAll(":scope > *"),B()});function f(l){M[l?"unshift":"push"](()=>{m=l,n(0,m)})}return e.$$set=l=>{"root"in l&&n(2,i=l.root),"top"in l&&n(3,s=l.top),"bottom"in l&&n(4,a=l.bottom),"increments"in l&&n(5,u=l.increments),"value"in l&&n(1,c=l.value),"$$scope"in l&&n(6,o=l.$$scope)},e.$$.update=()=>{e.$$.dirty&24&&B()},[m,c,i,s,a,u,o,r,f]}class $e extends U{constructor(t){super(),K(this,t,Oe,Ne,P,{root:2,top:3,bottom:4,increments:5,value:1})}}function te(e,t,n){const r=e.slice();return r[2]=t[n],r[4]=n,r}function ne(e){let t,n,r,o=e[2]+"",i;return{c(){t=h("li"),n=h("div"),r=h("p"),i=z(),_(n,"class","step-content svelte-1cz9r95"),_(t,"class","step svelte-1cz9r95"),Z(t,"active",e[0]===e[4])},m(s,a){x(s,t,a),w(t,n),w(n,r),r.innerHTML=o,w(t,i)},p(s,a){a&1&&Z(t,"active",s[0]===s[4])},d(s){s&&v(t)}}}function Le(e){let t,n=ee,r=[];for(let o=0;o<n.length;o+=1)r[o]=ne(te(e,n,o));return{c(){for(let o=0;o<r.length;o+=1)r[o].c();t=ke()},m(o,i){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(o,i);x(o,t,i)},p(o,i){if(i&1){n=ee;let s;for(s=0;s<n.length;s+=1){const a=te(o,n,s);r[s]?r[s].p(a,i):(r[s]=ne(a),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},d(o){Be(r,o),o&&v(t)}}}function Te(e){let t,n,r;function o(s){e[1](s)}let i={$$slots:{default:[Le]},$$scope:{ctx:e}};return e[0]!==void 0&&(i.value=e[0]),t=new $e({props:i}),M.push(()=>ce(t,"value",o)),{c(){fe(t.$$.fragment)},m(s,a){X(t,s,a),r=!0},p(s,[a]){const u={};a&33&&(u.$$scope={dirty:a,ctx:s}),!n&&a&1&&(n=!0,u.value=s[0],le(()=>n=!1)),t.$set(u)},i(s){r||(L(t.$$.fragment,s),r=!0)},o(s){W(t.$$.fragment,s),r=!1},d(s){G(t,s)}}}function Ve(e,t,n){let{currentStep:r}=t;function o(i){r=i,n(0,r)}return e.$$set=i=>{"currentStep"in i&&n(0,r=i.currentStep)},[r,o]}class je extends U{constructor(t){super(),K(this,t,Ve,Te,P,{currentStep:0})}}function Re(e){let t,n,r,o,i,s,a,u,c,p,d,g,b,m,B;function T(f){e[1](f)}let I={};return e[0]!==void 0&&(I.currentStep=e[0]),d=new je({props:I}),M.push(()=>ce(d,"currentStep",T)),{c(){t=h("section"),n=h("header"),n.innerHTML=`<h1>HED</h1> 
        <p class="subhead">Litres of untreated sewage and storm water released into Metro Vancouver waterways in 2023 from combined sewer systems operated by <span class="highlight blue svelte-17xeg0e">Metro Vancouver</span> and the cities of <span class="highlight yellow svelte-17xeg0e">Vancouver</span>, <span class="highlight green svelte-17xeg0e">Burnaby</span> and <span class="highlight purple svelte-17xeg0e">New West</span>.</p>`,r=z(),o=h("div"),i=h("iframe"),a=z(),u=h("div"),u.innerHTML='<a class="flourish-credit" href="https://public.flourish.studio/visualisation/3706064/?utm_source=embed&amp;utm_campaign=visualisation/3706064" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"/></a>',c=z(),p=h("ul"),fe(d.$$.fragment),b=z(),m=h("footer"),m.innerHTML=`<p class="source">Source: Municiple governments, Metro Vancouver</p> 
    
    <div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/3706064/?utm_source=embed&amp;utm_campaign=visualisation/3706064" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"/></a></div>`,be(i.src,s=He)||_(i,"src",s),_(i,"frameborder","0"),_(i,"scrolling","no"),A(i,"width","100%"),A(i,"height",qe),_(i,"title","flourish-embed"),_(o,"class","chart sticky svelte-17xeg0e"),A(u,"width","100%!"),A(u,"margin-top","4px",1),A(u,"text-align","right",1),_(t,"class","scrollyteller sticky svelte-17xeg0e"),_(p,"class","steps svelte-17xeg0e")},m(f,l){x(f,t,l),w(t,n),w(t,r),w(t,o),w(o,i),w(t,a),w(t,u),x(f,c,l),x(f,p,l),X(d,p,null),x(f,b,l),x(f,m,l),B=!0},p(f,[l]){const y={};!g&&l&1&&(g=!0,y.currentStep=f[0],le(()=>g=!1)),d.$set(y)},i(f){B||(L(d.$$.fragment,f),B=!0)},o(f){W(d.$$.fragment,f),B=!1},d(f){f&&v(t),f&&v(c),f&&v(p),G(d),f&&v(b),f&&v(m)}}}const qe="575px",He="https://flo.uri.sh/story/2815166/embed";function Pe(e,t,n){let r,o;const i=function(a){o=document.querySelector("#app .chart > iframe"),o.src=o.src.replace(/#slide-.*/,"")+"#slide-"+a};function s(a){r=a,n(0,r)}return e.$$.update=()=>{e.$$.dirty&1&&(r===0||r===1||r===2||r===3||r===4||r===5||r===6)&&i(r)},console.log(document.querySelectorAll(".step")),[r,s]}class We extends U{constructor(t){super(),K(this,t,Pe,Re,P,{})}}new We({target:document.getElementById("app")});
