(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function vl(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function xl(n){if(De(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=_t(i)?pp(i):xl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(_t(n))return n;if(et(n))return n}}const fp=/;(?![^(]*\))/g,dp=/:([^]+)/,hp=/\/\*.*?\*\//gs;function pp(n){const e={};return n.replace(hp,"").split(fp).forEach(t=>{if(t){const i=t.split(dp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ml(n){let e="";if(_t(n))e=n;else if(De(n))for(let t=0;t<n.length;t++){const i=Ml(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const mp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gp=vl(mp);function Kf(n){return!!n||n===""}function _p(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=_a(n[i],e[i]);return t}function _a(n,e){if(n===e)return!0;let t=ic(n),i=ic(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=es(n),i=es(e),t||i)return n===e;if(t=De(n),i=De(e),t||i)return t&&i?_p(n,e):!1;if(t=et(n),i=et(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!_a(n[a],e[a]))return!1}}return String(n)===String(e)}function Zf(n,e){return n.findIndex(t=>_a(t,e))}const dT=n=>_t(n)?n:n==null?"":De(n)||et(n)&&(n.toString===ed||!ke(n.toString))?JSON.stringify(n,Jf,2):String(n),Jf=(n,e)=>e&&e.__v_isRef?Jf(n,e.value):mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:xa(e)?{[`Set(${e.size})`]:[...e.values()]}:et(e)&&!De(e)&&!td(e)?String(e):e,it={},pr=[],vn=()=>{},vp=()=>!1,xp=/^on[^a-z]/,va=n=>xp.test(n),Sl=n=>n.startsWith("onUpdate:"),Rt=Object.assign,yl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Mp=Object.prototype.hasOwnProperty,qe=(n,e)=>Mp.call(n,e),De=Array.isArray,mr=n=>hs(n)==="[object Map]",xa=n=>hs(n)==="[object Set]",ic=n=>hs(n)==="[object Date]",ke=n=>typeof n=="function",_t=n=>typeof n=="string",es=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",Qf=n=>et(n)&&ke(n.then)&&ke(n.catch),ed=Object.prototype.toString,hs=n=>ed.call(n),Sp=n=>hs(n).slice(8,-1),td=n=>hs(n)==="[object Object]",bl=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ia=vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ma=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},yp=/-(\w)/g,Rn=Ma(n=>n.replace(yp,(e,t)=>t?t.toUpperCase():"")),bp=/\B([A-Z])/g,Ir=Ma(n=>n.replace(bp,"-$1").toLowerCase()),Sa=Ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wa=Ma(n=>n?`on${Sa(n)}`:""),ts=(n,e)=>!Object.is(n,e),ra=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ua=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Do=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let rc;const Ep=()=>rc||(rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let fn;class nd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=fn;try{return fn=this,e()}finally{fn=t}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function id(n){return new nd(n)}function Tp(n,e=fn){e&&e.active&&e.effects.push(n)}function wp(){return fn}const El=n=>{const e=new Set(n);return e.w=0,e.n=0,e},rd=n=>(n.w&ui)>0,sd=n=>(n.n&ui)>0,Ap=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=ui},Cp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];rd(r)&&!sd(r)?r.delete(n):e[t++]=r,r.w&=~ui,r.n&=~ui}e.length=t}},No=new WeakMap;let $r=0,ui=1;const Uo=30;let pn;const Fi=Symbol(""),Oo=Symbol("");class Tl{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Tp(this,i)}run(){if(!this.active)return this.fn();let e=pn,t=oi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=pn,pn=this,oi=!0,ui=1<<++$r,$r<=Uo?Ap(this):sc(this),this.fn()}finally{$r<=Uo&&Cp(this),ui=1<<--$r,pn=this.parent,oi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pn===this?this.deferStop=!0:this.active&&(sc(this),this.onStop&&this.onStop(),this.active=!1)}}function sc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let oi=!0;const ad=[];function Dr(){ad.push(oi),oi=!1}function Nr(){const n=ad.pop();oi=n===void 0?!0:n}function Gt(n,e,t){if(oi&&pn){let i=No.get(n);i||No.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=El()),od(r)}}function od(n,e){let t=!1;$r<=Uo?sd(n)||(n.n|=ui,t=!rd(n)):t=!n.has(pn),t&&(n.add(pn),pn.deps.push(n))}function $n(n,e,t,i,r,s){const a=No.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&De(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":De(n)?bl(t)&&o.push(a.get("length")):(o.push(a.get(Fi)),mr(n)&&o.push(a.get(Oo)));break;case"delete":De(n)||(o.push(a.get(Fi)),mr(n)&&o.push(a.get(Oo)));break;case"set":mr(n)&&o.push(a.get(Fi));break}if(o.length===1)o[0]&&Fo(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Fo(El(l))}}function Fo(n,e){const t=De(n)?n:[...n];for(const i of t)i.computed&&ac(i);for(const i of t)i.computed||ac(i)}function ac(n,e){(n!==pn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Lp=vl("__proto__,__v_isRef,__isVue"),ld=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(es)),Pp=wl(),Rp=wl(!1,!0),Ip=wl(!0),oc=Dp();function Dp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let s=0,a=this.length;s<a;s++)Gt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Dr();const i=je(this)[e].apply(this,t);return Nr(),i}}),n}function Np(n){const e=je(this);return Gt(e,"has",n),e.hasOwnProperty(n)}function wl(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Kp:hd:e?dd:fd).get(i))return i;const a=De(i);if(!n){if(a&&qe(oc,r))return Reflect.get(oc,r,s);if(r==="hasOwnProperty")return Np}const o=Reflect.get(i,r,s);return(es(r)?ld.has(r):Lp(r))||(n||Gt(i,"get",r),e)?o:bt(o)?a&&bl(r)?o:o.value:et(o)?n?pd(o):ps(o):o}}const Up=cd(),Op=cd(!0);function cd(n=!1){return function(t,i,r,s){let a=t[i];if(Sr(a)&&bt(a)&&!bt(r))return!1;if(!n&&(!fa(r)&&!Sr(r)&&(a=je(a),r=je(r)),!De(t)&&bt(a)&&!bt(r)))return a.value=r,!0;const o=De(t)&&bl(i)?Number(i)<t.length:qe(t,i),l=Reflect.set(t,i,r,s);return t===je(s)&&(o?ts(r,a)&&$n(t,"set",i,r):$n(t,"add",i,r)),l}}function Fp(n,e){const t=qe(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&$n(n,"delete",e,void 0),i}function kp(n,e){const t=Reflect.has(n,e);return(!es(e)||!ld.has(e))&&Gt(n,"has",e),t}function zp(n){return Gt(n,"iterate",De(n)?"length":Fi),Reflect.ownKeys(n)}const ud={get:Pp,set:Up,deleteProperty:Fp,has:kp,ownKeys:zp},Bp={get:Ip,set(n,e){return!0},deleteProperty(n,e){return!0}},Hp=Rt({},ud,{get:Rp,set:Op}),Al=n=>n,ya=n=>Reflect.getPrototypeOf(n);function Es(n,e,t=!1,i=!1){n=n.__v_raw;const r=je(n),s=je(e);t||(e!==s&&Gt(r,"get",e),Gt(r,"get",s));const{has:a}=ya(r),o=i?Al:t?Pl:ns;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Ts(n,e=!1){const t=this.__v_raw,i=je(t),r=je(n);return e||(n!==r&&Gt(i,"has",n),Gt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function ws(n,e=!1){return n=n.__v_raw,!e&&Gt(je(n),"iterate",Fi),Reflect.get(n,"size",n)}function lc(n){n=je(n);const e=je(this);return ya(e).has.call(e,n)||(e.add(n),$n(e,"add",n,n)),this}function cc(n,e){e=je(e);const t=je(this),{has:i,get:r}=ya(t);let s=i.call(t,n);s||(n=je(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?ts(e,a)&&$n(t,"set",n,e):$n(t,"add",n,e),this}function uc(n){const e=je(this),{has:t,get:i}=ya(e);let r=t.call(e,n);r||(n=je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&$n(e,"delete",n,void 0),s}function fc(){const n=je(this),e=n.size!==0,t=n.clear();return e&&$n(n,"clear",void 0,void 0),t}function As(n,e){return function(i,r){const s=this,a=s.__v_raw,o=je(a),l=e?Al:n?Pl:ns;return!n&&Gt(o,"iterate",Fi),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Cs(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),a=mr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Al:e?Pl:ns;return!e&&Gt(s,"iterate",l?Oo:Fi),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:o?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Yn(n){return function(...e){return n==="delete"?!1:this}}function Vp(){const n={get(s){return Es(this,s)},get size(){return ws(this)},has:Ts,add:lc,set:cc,delete:uc,clear:fc,forEach:As(!1,!1)},e={get(s){return Es(this,s,!1,!0)},get size(){return ws(this)},has:Ts,add:lc,set:cc,delete:uc,clear:fc,forEach:As(!1,!0)},t={get(s){return Es(this,s,!0)},get size(){return ws(this,!0)},has(s){return Ts.call(this,s,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:As(!0,!1)},i={get(s){return Es(this,s,!0,!0)},get size(){return ws(this,!0)},has(s){return Ts.call(this,s,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:As(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Cs(s,!1,!1),t[s]=Cs(s,!0,!1),e[s]=Cs(s,!1,!0),i[s]=Cs(s,!0,!0)}),[n,t,e,i]}const[Gp,Wp,$p,Xp]=Vp();function Cl(n,e){const t=e?n?Xp:$p:n?Wp:Gp;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(qe(t,r)&&r in i?t:i,r,s)}const qp={get:Cl(!1,!1)},jp={get:Cl(!1,!0)},Yp={get:Cl(!0,!1)},fd=new WeakMap,dd=new WeakMap,hd=new WeakMap,Kp=new WeakMap;function Zp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jp(n){return n.__v_skip||!Object.isExtensible(n)?0:Zp(Sp(n))}function ps(n){return Sr(n)?n:Ll(n,!1,ud,qp,fd)}function Qp(n){return Ll(n,!1,Hp,jp,dd)}function pd(n){return Ll(n,!0,Bp,Yp,hd)}function Ll(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Jp(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function gr(n){return Sr(n)?gr(n.__v_raw):!!(n&&n.__v_isReactive)}function Sr(n){return!!(n&&n.__v_isReadonly)}function fa(n){return!!(n&&n.__v_isShallow)}function md(n){return gr(n)||Sr(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function ba(n){return ua(n,"__v_skip",!0),n}const ns=n=>et(n)?ps(n):n,Pl=n=>et(n)?pd(n):n;function gd(n){oi&&pn&&(n=je(n),od(n.dep||(n.dep=El())))}function _d(n,e){n=je(n);const t=n.dep;t&&Fo(t)}function bt(n){return!!(n&&n.__v_isRef===!0)}function Yt(n){return xd(n,!1)}function vd(n){return xd(n,!0)}function xd(n,e){return bt(n)?n:new em(n,e)}class em{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:ns(e)}get value(){return gd(this),this._value}set value(e){const t=this.__v_isShallow||fa(e)||Sr(e);e=t?e:je(e),ts(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ns(e),_d(this))}}function Gn(n){return bt(n)?n.value:n}const tm={get:(n,e,t)=>Gn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return bt(r)&&!bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Md(n){return gr(n)?n:new Proxy(n,tm)}var Sd;class nm{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Sd]=!1,this._dirty=!0,this.effect=new Tl(e,()=>{this._dirty||(this._dirty=!0,_d(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return gd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Sd="__v_isReadonly";function im(n,e,t=!1){let i,r;const s=ke(n);return s?(i=n,r=vn):(i=n.get,r=n.set),new nm(i,r,s||!r,t)}function li(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Ea(s,e,t)}return r}function sn(n,e,t,i){if(ke(n)){const s=li(n,e,t,i);return s&&Qf(s)&&s.catch(a=>{Ea(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(sn(n[s],e,t,i));return r}function Ea(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){li(l,null,10,[n,a,o]);return}}rm(n,t,r,i)}function rm(n,e,t,i=!0){console.error(n)}let is=!1,ko=!1;const Pt=[];let Ln=0;const _r=[];let Bn=null,Ai=0;const yd=Promise.resolve();let Rl=null;function bd(n){const e=Rl||yd;return n?e.then(this?n.bind(this):n):e}function sm(n){let e=Ln+1,t=Pt.length;for(;e<t;){const i=e+t>>>1;rs(Pt[i])<n?e=i+1:t=i}return e}function Il(n){(!Pt.length||!Pt.includes(n,is&&n.allowRecurse?Ln+1:Ln))&&(n.id==null?Pt.push(n):Pt.splice(sm(n.id),0,n),Ed())}function Ed(){!is&&!ko&&(ko=!0,Rl=yd.then(wd))}function am(n){const e=Pt.indexOf(n);e>Ln&&Pt.splice(e,1)}function om(n){De(n)?_r.push(...n):(!Bn||!Bn.includes(n,n.allowRecurse?Ai+1:Ai))&&_r.push(n),Ed()}function dc(n,e=is?Ln+1:0){for(;e<Pt.length;e++){const t=Pt[e];t&&t.pre&&(Pt.splice(e,1),e--,t())}}function Td(n){if(_r.length){const e=[...new Set(_r)];if(_r.length=0,Bn){Bn.push(...e);return}for(Bn=e,Bn.sort((t,i)=>rs(t)-rs(i)),Ai=0;Ai<Bn.length;Ai++)Bn[Ai]();Bn=null,Ai=0}}const rs=n=>n.id==null?1/0:n.id,lm=(n,e)=>{const t=rs(n)-rs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function wd(n){ko=!1,is=!0,Pt.sort(lm);const e=vn;try{for(Ln=0;Ln<Pt.length;Ln++){const t=Pt[Ln];t&&t.active!==!1&&li(t,null,14)}}finally{Ln=0,Pt.length=0,Td(),is=!1,Rl=null,(Pt.length||_r.length)&&wd()}}function cm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:h}=i[u]||it;h&&(r=t.map(p=>_t(p)?p.trim():p)),d&&(r=t.map(Do))}let o,l=i[o=Wa(e)]||i[o=Wa(Rn(e))];!l&&s&&(l=i[o=Wa(Ir(e))]),l&&sn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,sn(c,n,6,r)}}function Ad(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ke(n)){const l=c=>{const u=Ad(c,e,!0);u&&(o=!0,Rt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(et(n)&&i.set(n,null),null):(De(s)?s.forEach(l=>a[l]=null):Rt(a,s),et(n)&&i.set(n,a),a)}function Ta(n,e){return!n||!va(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(n,e[0].toLowerCase()+e.slice(1))||qe(n,Ir(e))||qe(n,e))}let Kt=null,wa=null;function da(n){const e=Kt;return Kt=n,wa=n&&n.type.__scopeId||null,e}function um(n){wa=n}function fm(){wa=null}function dm(n,e=Kt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&yc(-1);const s=da(e);let a;try{a=n(...r)}finally{da(s),i._d&&yc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function $a(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:p,ctx:v,inheritAttrs:M}=n;let m,f;const b=da(n);try{if(t.shapeFlag&4){const y=r||i;m=An(u.call(y,y,d,s,p,h,v)),f=l}else{const y=e;m=An(y.length>1?y(s,{attrs:l,slots:o,emit:c}):y(s,null)),f=e.props?l:hm(l)}}catch(y){Yr.length=0,Ea(y,n,1),m=Et(Mn)}let S=m;if(f&&M!==!1){const y=Object.keys(f),{shapeFlag:w}=S;y.length&&w&7&&(a&&y.some(Sl)&&(f=pm(f,a)),S=fi(S,f))}return t.dirs&&(S=fi(S),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),m=S,da(b),m}const hm=n=>{let e;for(const t in n)(t==="class"||t==="style"||va(t))&&((e||(e={}))[t]=n[t]);return e},pm=(n,e)=>{const t={};for(const i in n)(!Sl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function mm(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?hc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(a[h]!==i[h]&&!Ta(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?hc(i,a,c):!0:!!a;return!1}function hc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Ta(t,s))return!0}return!1}function gm({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const _m=n=>n.__isSuspense;function vm(n,e){e&&e.pendingBranch?De(n)?e.effects.push(...n):e.effects.push(n):om(n)}function sa(n,e){if(ft){let t=ft.provides;const i=ft.parent&&ft.parent.provides;i===t&&(t=ft.provides=Object.create(i)),t[n]=e}}function xn(n,e,t=!1){const i=ft||Kt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i.proxy):e}}const Ls={};function ki(n,e,t){return Cd(n,e,t)}function Cd(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=it){const o=wp()===(ft==null?void 0:ft.scope)?ft:null;let l,c=!1,u=!1;if(bt(n)?(l=()=>n.value,c=fa(n)):gr(n)?(l=()=>n,i=!0):De(n)?(u=!0,c=n.some(S=>gr(S)||fa(S)),l=()=>n.map(S=>{if(bt(S))return S.value;if(gr(S))return Ii(S);if(ke(S))return li(S,o,2)})):ke(n)?e?l=()=>li(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return d&&d(),sn(n,o,3,[h])}:l=vn,e&&i){const S=l;l=()=>Ii(S())}let d,h=S=>{d=f.onStop=()=>{li(S,o,4)}},p;if(as)if(h=vn,e?t&&sn(e,o,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const S=hg();p=S.__watcherHandles||(S.__watcherHandles=[])}else return vn;let v=u?new Array(n.length).fill(Ls):Ls;const M=()=>{if(f.active)if(e){const S=f.run();(i||c||(u?S.some((y,w)=>ts(y,v[w])):ts(S,v)))&&(d&&d(),sn(e,o,3,[S,v===Ls?void 0:u&&v[0]===Ls?[]:v,h]),v=S)}else f.run()};M.allowRecurse=!!e;let m;r==="sync"?m=M:r==="post"?m=()=>zt(M,o&&o.suspense):(M.pre=!0,o&&(M.id=o.uid),m=()=>Il(M));const f=new Tl(l,m);e?t?M():v=f.run():r==="post"?zt(f.run.bind(f),o&&o.suspense):f.run();const b=()=>{f.stop(),o&&o.scope&&yl(o.scope.effects,f)};return p&&p.push(b),b}function xm(n,e,t){const i=this.proxy,r=_t(n)?n.includes(".")?Ld(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const a=ft;br(this);const o=Cd(r,s.bind(i),t);return a?br(a):zi(),o}function Ld(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ii(n,e){if(!et(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),bt(n))Ii(n.value,e);else if(De(n))for(let t=0;t<n.length;t++)Ii(n[t],e);else if(xa(n)||mr(n))n.forEach(t=>{Ii(t,e)});else if(td(n))for(const t in n)Ii(n[t],e);return n}function Mm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ms(()=>{n.isMounted=!0}),Nd(()=>{n.isUnmounting=!0}),n}const Qt=[Function,Array],Sm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},setup(n,{slots:e}){const t=yr(),i=Mm();let r;return()=>{const s=e.default&&Rd(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const M of s)if(M.type!==Mn){a=M;break}}const o=je(n),{mode:l}=o;if(i.isLeaving)return Xa(a);const c=pc(a);if(!c)return Xa(a);const u=zo(c,o,i,t);Bo(c,u);const d=t.subTree,h=d&&pc(d);let p=!1;const{getTransitionKey:v}=c.type;if(v){const M=v();r===void 0?r=M:M!==r&&(r=M,p=!0)}if(h&&h.type!==Mn&&(!Ci(c,h)||p)){const M=zo(h,o,i,t);if(Bo(h,M),l==="out-in")return i.isLeaving=!0,M.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},Xa(a);l==="in-out"&&c.type!==Mn&&(M.delayLeave=(m,f,b)=>{const S=Pd(i,h);S[String(h.key)]=h,m._leaveCb=()=>{f(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return a}}},ym=Sm;function Pd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function zo(n,e,t,i){const{appear:r,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:M,onAppear:m,onAfterAppear:f,onAppearCancelled:b}=e,S=String(n.key),y=Pd(t,n),w=(U,T)=>{U&&sn(U,i,9,T)},C=(U,T)=>{const I=T[1];w(U,T),De(U)?U.every(K=>K.length<=1)&&I():U.length<=1&&I()},N={mode:s,persisted:a,beforeEnter(U){let T=o;if(!t.isMounted)if(r)T=M||o;else return;U._leaveCb&&U._leaveCb(!0);const I=y[S];I&&Ci(n,I)&&I.el._leaveCb&&I.el._leaveCb(),w(T,[U])},enter(U){let T=l,I=c,K=u;if(!t.isMounted)if(r)T=m||l,I=f||c,K=b||u;else return;let Q=!1;const z=U._enterCb=H=>{Q||(Q=!0,H?w(K,[U]):w(I,[U]),N.delayedLeave&&N.delayedLeave(),U._enterCb=void 0)};T?C(T,[U,z]):z()},leave(U,T){const I=String(n.key);if(U._enterCb&&U._enterCb(!0),t.isUnmounting)return T();w(d,[U]);let K=!1;const Q=U._leaveCb=z=>{K||(K=!0,T(),z?w(v,[U]):w(p,[U]),U._leaveCb=void 0,y[I]===n&&delete y[I])};y[I]=n,h?C(h,[U,Q]):Q()},clone(U){return zo(U,e,t,i)}};return N}function Xa(n){if(Aa(n))return n=fi(n),n.children=null,n}function pc(n){return Aa(n)?n.children?n.children[0]:void 0:n}function Bo(n,e){n.shapeFlag&6&&n.component?Bo(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Rd(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===tn?(a.patchFlag&128&&r++,i=i.concat(Rd(a.children,e,o))):(e||a.type!==Mn)&&i.push(o!=null?fi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function $i(n){return ke(n)?{setup:n,name:n.name}:n}const aa=n=>!!n.type.__asyncLoader,Aa=n=>n.type.__isKeepAlive;function bm(n,e){Id(n,"a",e)}function Em(n,e){Id(n,"da",e)}function Id(n,e,t=ft){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ca(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Aa(r.parent.vnode)&&Tm(i,e,t,r),r=r.parent}}function Tm(n,e,t,i){const r=Ca(e,n,i,!0);Dl(()=>{yl(i[e],r)},t)}function Ca(n,e,t=ft,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Dr(),br(t);const o=sn(e,t,n,a);return zi(),Nr(),o});return i?r.unshift(s):r.push(s),s}}const Xn=n=>(e,t=ft)=>(!as||n==="sp")&&Ca(n,(...i)=>e(...i),t),Dd=Xn("bm"),ms=Xn("m"),wm=Xn("bu"),Am=Xn("u"),Nd=Xn("bum"),Dl=Xn("um"),Cm=Xn("sp"),Lm=Xn("rtg"),Pm=Xn("rtc");function Rm(n,e=ft){Ca("ec",n,e)}function hT(n,e){const t=Kt;if(t===null)return n;const i=Pa(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[a,o,l,c=it]=e[s];a&&(ke(a)&&(a={mounted:a,updated:a}),a.deep&&Ii(o),r.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function xi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Dr(),sn(l,t,8,[n.el,o,n,e]),Nr())}}const Ud="components";function Im(n,e){return Nm(Ud,n,!0,e)||n}const Dm=Symbol();function Nm(n,e,t=!0,i=!1){const r=Kt||ft;if(r){const s=r.type;if(n===Ud){const o=ug(s,!1);if(o&&(o===e||o===Rn(e)||o===Sa(Rn(e))))return s}const a=mc(r[n]||s[n],e)||mc(r.appContext[n],e);return!a&&i?s:a}}function mc(n,e){return n&&(n[e]||n[Rn(e)]||n[Sa(Rn(e))])}function pT(n,e,t,i){let r;const s=t&&t[i];if(De(n)||_t(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s&&s[a])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(et(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s&&s[o])}}else r=[];return t&&(t[i]=r),r}const Ho=n=>n?qd(n)?Pa(n)||n.proxy:Ho(n.parent):null,jr=Rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ho(n.parent),$root:n=>Ho(n.root),$emit:n=>n.emit,$options:n=>Nl(n),$forceUpdate:n=>n.f||(n.f=()=>Il(n.update)),$nextTick:n=>n.n||(n.n=bd.bind(n.proxy)),$watch:n=>xm.bind(n)}),qa=(n,e)=>n!==it&&!n.__isScriptSetup&&qe(n,e),Um={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(qa(i,e))return a[e]=1,i[e];if(r!==it&&qe(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&qe(c,e))return a[e]=3,s[e];if(t!==it&&qe(t,e))return a[e]=4,t[e];Vo&&(a[e]=0)}}const u=jr[e];let d,h;if(u)return e==="$attrs"&&Gt(n,"get",e),u(n);if((d=o.__cssModules)&&(d=d[e]))return d;if(t!==it&&qe(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,qe(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return qa(r,e)?(r[e]=t,!0):i!==it&&qe(i,e)?(i[e]=t,!0):qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==it&&qe(n,a)||qa(e,a)||(o=s[0])&&qe(o,a)||qe(i,a)||qe(jr,a)||qe(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Vo=!0;function Om(n){const e=Nl(n),t=n.proxy,i=n.ctx;Vo=!1,e.beforeCreate&&gc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:v,activated:M,deactivated:m,beforeDestroy:f,beforeUnmount:b,destroyed:S,unmounted:y,render:w,renderTracked:C,renderTriggered:N,errorCaptured:U,serverPrefetch:T,expose:I,inheritAttrs:K,components:Q,directives:z,filters:H}=e;if(c&&Fm(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const te in a){const $=a[te];ke($)&&(i[te]=$.bind(t))}if(r){const te=r.call(t,t);et(te)&&(n.data=ps(te))}if(Vo=!0,s)for(const te in s){const $=s[te],le=ke($)?$.bind(t,t):ke($.get)?$.get.bind(t,t):vn,pe=!ke($)&&ke($.set)?$.set.bind(t):vn,Ee=lt({get:le,set:pe});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:ve=>Ee.value=ve})}if(o)for(const te in o)Od(o[te],i,t,te);if(l){const te=ke(l)?l.call(t):l;Reflect.ownKeys(te).forEach($=>{sa($,te[$])})}u&&gc(u,n,"c");function ae(te,$){De($)?$.forEach(le=>te(le.bind(t))):$&&te($.bind(t))}if(ae(Dd,d),ae(ms,h),ae(wm,p),ae(Am,v),ae(bm,M),ae(Em,m),ae(Rm,U),ae(Pm,C),ae(Lm,N),ae(Nd,b),ae(Dl,y),ae(Cm,T),De(I))if(I.length){const te=n.exposed||(n.exposed={});I.forEach($=>{Object.defineProperty(te,$,{get:()=>t[$],set:le=>t[$]=le})})}else n.exposed||(n.exposed={});w&&n.render===vn&&(n.render=w),K!=null&&(n.inheritAttrs=K),Q&&(n.components=Q),z&&(n.directives=z)}function Fm(n,e,t=vn,i=!1){De(n)&&(n=Go(n));for(const r in n){const s=n[r];let a;et(s)?"default"in s?a=xn(s.from||r,s.default,!0):a=xn(s.from||r):a=xn(s),bt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function gc(n,e,t){sn(De(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Od(n,e,t,i){const r=i.includes(".")?Ld(t,i):()=>t[i];if(_t(n)){const s=e[n];ke(s)&&ki(r,s)}else if(ke(n))ki(r,n.bind(t));else if(et(n))if(De(n))n.forEach(s=>Od(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&ki(r,s,n)}}function Nl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ha(l,c,a,!0)),ha(l,e,a)),et(e)&&s.set(e,l),l}function ha(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ha(n,s,t,!0),r&&r.forEach(a=>ha(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=km[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const km={data:_c,props:Ei,emits:Ei,methods:Ei,computed:Ei,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Ei,directives:Ei,watch:Bm,provide:_c,inject:zm};function _c(n,e){return e?n?function(){return Rt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function zm(n,e){return Ei(Go(n),Go(e))}function Go(n){if(De(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ei(n,e){return n?Rt(Rt(Object.create(null),n),e):e}function Bm(n,e){if(!n)return e;if(!e)return n;const t=Rt(Object.create(null),n);for(const i in e)t[i]=Nt(n[i],e[i]);return t}function Hm(n,e,t,i=!1){const r={},s={};ua(s,La,1),n.propsDefaults=Object.create(null),Fd(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Qp(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Vm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Ta(n.emitsOptions,h))continue;const p=e[h];if(l)if(qe(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=Rn(h);r[v]=Wo(l,o,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Fd(n,e,r,s)&&(c=!0);let u;for(const d in o)(!e||!qe(e,d)&&((u=Ir(d))===d||!qe(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Wo(l,o,d,void 0,n,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!qe(e,d))&&(delete s[d],c=!0)}c&&$n(n,"set","$attrs")}function Fd(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ia(l))continue;const c=e[l];let u;r&&qe(r,u=Rn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Ta(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=je(t),c=o||it;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Wo(r,l,d,c[d],n,!qe(c,d))}}return a}function Wo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&ke(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(br(r),i=c[t]=l.call(null,e),zi())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ir(t))&&(i=!0))}return i}function kd(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ke(n)){const u=d=>{l=!0;const[h,p]=kd(d,e,!0);Rt(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return et(n)&&i.set(n,pr),pr;if(De(s))for(let u=0;u<s.length;u++){const d=Rn(s[u]);vc(d)&&(a[d]=it)}else if(s)for(const u in s){const d=Rn(u);if(vc(d)){const h=s[u],p=a[d]=De(h)||ke(h)?{type:h}:Object.assign({},h);if(p){const v=Sc(Boolean,p.type),M=Sc(String,p.type);p[0]=v>-1,p[1]=M<0||v<M,(v>-1||qe(p,"default"))&&o.push(d)}}}const c=[a,o];return et(n)&&i.set(n,c),c}function vc(n){return n[0]!=="$"}function xc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Mc(n,e){return xc(n)===xc(e)}function Sc(n,e){return De(e)?e.findIndex(t=>Mc(t,n)):ke(e)&&Mc(e,n)?0:-1}const zd=n=>n[0]==="_"||n==="$stable",Ul=n=>De(n)?n.map(An):[An(n)],Gm=(n,e,t)=>{if(e._n)return e;const i=dm((...r)=>Ul(e(...r)),t);return i._c=!1,i},Bd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(zd(r))continue;const s=n[r];if(ke(s))e[r]=Gm(r,s,i);else if(s!=null){const a=Ul(s);e[r]=()=>a}}},Hd=(n,e)=>{const t=Ul(e);n.slots.default=()=>t},Wm=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),ua(e,"_",t)):Bd(e,n.slots={})}else n.slots={},e&&Hd(n,e);ua(n.slots,La,1)},$m=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=it;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(Rt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Bd(e,r)),a=e}else e&&(Hd(n,e),a={default:1});if(s)for(const o in r)!zd(o)&&!(o in a)&&delete r[o]};function Vd(){return{app:null,config:{isNativeTag:vp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xm=0;function qm(n,e){return function(i,r=null){ke(i)||(i=Object.assign({},i)),r!=null&&!et(r)&&(r=null);const s=Vd(),a=new Set;let o=!1;const l=s.app={_uid:Xm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:pg,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&ke(c.install)?(a.add(c),c.install(l,...u)):ke(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!o){const h=Et(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,d),o=!0,l._container=c,c.__vue_app__=l,Pa(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function $o(n,e,t,i,r=!1){if(De(n)){n.forEach((h,p)=>$o(h,e&&(De(e)?e[p]:e),t,i,r));return}if(aa(i)&&!r)return;const s=i.shapeFlag&4?Pa(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===it?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==l&&(_t(c)?(u[c]=null,qe(d,c)&&(d[c]=null)):bt(c)&&(c.value=null)),ke(l))li(l,o,12,[a,u]);else{const h=_t(l),p=bt(l);if(h||p){const v=()=>{if(n.f){const M=h?qe(d,l)?d[l]:u[l]:l.value;r?De(M)&&yl(M,s):De(M)?M.includes(s)||M.push(s):h?(u[l]=[s],qe(d,l)&&(d[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,qe(d,l)&&(d[l]=a)):p&&(l.value=a,n.k&&(u[n.k]=a))};a?(v.id=-1,zt(v,t)):v()}}}const zt=vm;function jm(n){return Ym(n)}function Ym(n,e){const t=Ep();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=vn,insertStaticContent:v}=n,M=(A,_,x,P=null,O=null,V=null,ne=!1,ee=null,ue=!!_.dynamicChildren)=>{if(A===_)return;A&&!Ci(A,_)&&(P=D(A),ve(A,O,V,!0),A=null),_.patchFlag===-2&&(ue=!1,_.dynamicChildren=null);const{type:ce,ref:E,shapeFlag:g}=_;switch(ce){case gs:m(A,_,x,P);break;case Mn:f(A,_,x,P);break;case oa:A==null&&b(_,x,P,ne);break;case tn:Q(A,_,x,P,O,V,ne,ee,ue);break;default:g&1?w(A,_,x,P,O,V,ne,ee,ue):g&6?z(A,_,x,P,O,V,ne,ee,ue):(g&64||g&128)&&ce.process(A,_,x,P,O,V,ne,ee,ue,xe)}E!=null&&O&&$o(E,A&&A.ref,V,_||A,!_)},m=(A,_,x,P)=>{if(A==null)i(_.el=o(_.children),x,P);else{const O=_.el=A.el;_.children!==A.children&&c(O,_.children)}},f=(A,_,x,P)=>{A==null?i(_.el=l(_.children||""),x,P):_.el=A.el},b=(A,_,x,P)=>{[A.el,A.anchor]=v(A.children,_,x,P,A.el,A.anchor)},S=({el:A,anchor:_},x,P)=>{let O;for(;A&&A!==_;)O=h(A),i(A,x,P),A=O;i(_,x,P)},y=({el:A,anchor:_})=>{let x;for(;A&&A!==_;)x=h(A),r(A),A=x;r(_)},w=(A,_,x,P,O,V,ne,ee,ue)=>{ne=ne||_.type==="svg",A==null?C(_,x,P,O,V,ne,ee,ue):T(A,_,O,V,ne,ee,ue)},C=(A,_,x,P,O,V,ne,ee)=>{let ue,ce;const{type:E,props:g,shapeFlag:R,transition:G,dirs:q}=A;if(ue=A.el=a(A.type,V,g&&g.is,g),R&8?u(ue,A.children):R&16&&U(A.children,ue,null,P,O,V&&E!=="foreignObject",ne,ee),q&&xi(A,null,P,"created"),N(ue,A,A.scopeId,ne,P),g){for(const Me in g)Me!=="value"&&!ia(Me)&&s(ue,Me,null,g[Me],V,A.children,P,O,j);"value"in g&&s(ue,"value",null,g.value),(ce=g.onVnodeBeforeMount)&&bn(ce,P,A)}q&&xi(A,null,P,"beforeMount");const he=(!O||O&&!O.pendingBranch)&&G&&!G.persisted;he&&G.beforeEnter(ue),i(ue,_,x),((ce=g&&g.onVnodeMounted)||he||q)&&zt(()=>{ce&&bn(ce,P,A),he&&G.enter(ue),q&&xi(A,null,P,"mounted")},O)},N=(A,_,x,P,O)=>{if(x&&p(A,x),P)for(let V=0;V<P.length;V++)p(A,P[V]);if(O){let V=O.subTree;if(_===V){const ne=O.vnode;N(A,ne,ne.scopeId,ne.slotScopeIds,O.parent)}}},U=(A,_,x,P,O,V,ne,ee,ue=0)=>{for(let ce=ue;ce<A.length;ce++){const E=A[ce]=ee?ii(A[ce]):An(A[ce]);M(null,E,_,x,P,O,V,ne,ee)}},T=(A,_,x,P,O,V,ne)=>{const ee=_.el=A.el;let{patchFlag:ue,dynamicChildren:ce,dirs:E}=_;ue|=A.patchFlag&16;const g=A.props||it,R=_.props||it;let G;x&&Mi(x,!1),(G=R.onVnodeBeforeUpdate)&&bn(G,x,_,A),E&&xi(_,A,x,"beforeUpdate"),x&&Mi(x,!0);const q=O&&_.type!=="foreignObject";if(ce?I(A.dynamicChildren,ce,ee,x,P,q,V):ne||$(A,_,ee,null,x,P,q,V,!1),ue>0){if(ue&16)K(ee,_,g,R,x,P,O);else if(ue&2&&g.class!==R.class&&s(ee,"class",null,R.class,O),ue&4&&s(ee,"style",g.style,R.style,O),ue&8){const he=_.dynamicProps;for(let Me=0;Me<he.length;Me++){const _e=he[Me],J=g[_e],Ae=R[_e];(Ae!==J||_e==="value")&&s(ee,_e,J,Ae,O,A.children,x,P,j)}}ue&1&&A.children!==_.children&&u(ee,_.children)}else!ne&&ce==null&&K(ee,_,g,R,x,P,O);((G=R.onVnodeUpdated)||E)&&zt(()=>{G&&bn(G,x,_,A),E&&xi(_,A,x,"updated")},P)},I=(A,_,x,P,O,V,ne)=>{for(let ee=0;ee<_.length;ee++){const ue=A[ee],ce=_[ee],E=ue.el&&(ue.type===tn||!Ci(ue,ce)||ue.shapeFlag&70)?d(ue.el):x;M(ue,ce,E,null,P,O,V,ne,!0)}},K=(A,_,x,P,O,V,ne)=>{if(x!==P){if(x!==it)for(const ee in x)!ia(ee)&&!(ee in P)&&s(A,ee,x[ee],null,ne,_.children,O,V,j);for(const ee in P){if(ia(ee))continue;const ue=P[ee],ce=x[ee];ue!==ce&&ee!=="value"&&s(A,ee,ce,ue,ne,_.children,O,V,j)}"value"in P&&s(A,"value",x.value,P.value)}},Q=(A,_,x,P,O,V,ne,ee,ue)=>{const ce=_.el=A?A.el:o(""),E=_.anchor=A?A.anchor:o("");let{patchFlag:g,dynamicChildren:R,slotScopeIds:G}=_;G&&(ee=ee?ee.concat(G):G),A==null?(i(ce,x,P),i(E,x,P),U(_.children,x,E,O,V,ne,ee,ue)):g>0&&g&64&&R&&A.dynamicChildren?(I(A.dynamicChildren,R,x,O,V,ne,ee),(_.key!=null||O&&_===O.subTree)&&Gd(A,_,!0)):$(A,_,x,E,O,V,ne,ee,ue)},z=(A,_,x,P,O,V,ne,ee,ue)=>{_.slotScopeIds=ee,A==null?_.shapeFlag&512?O.ctx.activate(_,x,P,ne,ue):H(_,x,P,O,V,ne,ue):Z(A,_,ue)},H=(A,_,x,P,O,V,ne)=>{const ee=A.component=sg(A,P,O);if(Aa(A)&&(ee.ctx.renderer=xe),ag(ee),ee.asyncDep){if(O&&O.registerDep(ee,ae),!A.el){const ue=ee.subTree=Et(Mn);f(null,ue,_,x)}return}ae(ee,A,_,x,O,V,ne)},Z=(A,_,x)=>{const P=_.component=A.component;if(mm(A,_,x))if(P.asyncDep&&!P.asyncResolved){te(P,_,x);return}else P.next=_,am(P.update),P.update();else _.el=A.el,P.vnode=_},ae=(A,_,x,P,O,V,ne)=>{const ee=()=>{if(A.isMounted){let{next:E,bu:g,u:R,parent:G,vnode:q}=A,he=E,Me;Mi(A,!1),E?(E.el=q.el,te(A,E,ne)):E=q,g&&ra(g),(Me=E.props&&E.props.onVnodeBeforeUpdate)&&bn(Me,G,E,q),Mi(A,!0);const _e=$a(A),J=A.subTree;A.subTree=_e,M(J,_e,d(J.el),D(J),A,O,V),E.el=_e.el,he===null&&gm(A,_e.el),R&&zt(R,O),(Me=E.props&&E.props.onVnodeUpdated)&&zt(()=>bn(Me,G,E,q),O)}else{let E;const{el:g,props:R}=_,{bm:G,m:q,parent:he}=A,Me=aa(_);if(Mi(A,!1),G&&ra(G),!Me&&(E=R&&R.onVnodeBeforeMount)&&bn(E,he,_),Mi(A,!0),g&&me){const _e=()=>{A.subTree=$a(A),me(g,A.subTree,A,O,null)};Me?_.type.__asyncLoader().then(()=>!A.isUnmounted&&_e()):_e()}else{const _e=A.subTree=$a(A);M(null,_e,x,P,A,O,V),_.el=_e.el}if(q&&zt(q,O),!Me&&(E=R&&R.onVnodeMounted)){const _e=_;zt(()=>bn(E,he,_e),O)}(_.shapeFlag&256||he&&aa(he.vnode)&&he.vnode.shapeFlag&256)&&A.a&&zt(A.a,O),A.isMounted=!0,_=x=P=null}},ue=A.effect=new Tl(ee,()=>Il(ce),A.scope),ce=A.update=()=>ue.run();ce.id=A.uid,Mi(A,!0),ce()},te=(A,_,x)=>{_.component=A;const P=A.vnode.props;A.vnode=_,A.next=null,Vm(A,_.props,P,x),$m(A,_.children,x),Dr(),dc(),Nr()},$=(A,_,x,P,O,V,ne,ee,ue=!1)=>{const ce=A&&A.children,E=A?A.shapeFlag:0,g=_.children,{patchFlag:R,shapeFlag:G}=_;if(R>0){if(R&128){pe(ce,g,x,P,O,V,ne,ee,ue);return}else if(R&256){le(ce,g,x,P,O,V,ne,ee,ue);return}}G&8?(E&16&&j(ce,O,V),g!==ce&&u(x,g)):E&16?G&16?pe(ce,g,x,P,O,V,ne,ee,ue):j(ce,O,V,!0):(E&8&&u(x,""),G&16&&U(g,x,P,O,V,ne,ee,ue))},le=(A,_,x,P,O,V,ne,ee,ue)=>{A=A||pr,_=_||pr;const ce=A.length,E=_.length,g=Math.min(ce,E);let R;for(R=0;R<g;R++){const G=_[R]=ue?ii(_[R]):An(_[R]);M(A[R],G,x,null,O,V,ne,ee,ue)}ce>E?j(A,O,V,!0,!1,g):U(_,x,P,O,V,ne,ee,ue,g)},pe=(A,_,x,P,O,V,ne,ee,ue)=>{let ce=0;const E=_.length;let g=A.length-1,R=E-1;for(;ce<=g&&ce<=R;){const G=A[ce],q=_[ce]=ue?ii(_[ce]):An(_[ce]);if(Ci(G,q))M(G,q,x,null,O,V,ne,ee,ue);else break;ce++}for(;ce<=g&&ce<=R;){const G=A[g],q=_[R]=ue?ii(_[R]):An(_[R]);if(Ci(G,q))M(G,q,x,null,O,V,ne,ee,ue);else break;g--,R--}if(ce>g){if(ce<=R){const G=R+1,q=G<E?_[G].el:P;for(;ce<=R;)M(null,_[ce]=ue?ii(_[ce]):An(_[ce]),x,q,O,V,ne,ee,ue),ce++}}else if(ce>R)for(;ce<=g;)ve(A[ce],O,V,!0),ce++;else{const G=ce,q=ce,he=new Map;for(ce=q;ce<=R;ce++){const be=_[ce]=ue?ii(_[ce]):An(_[ce]);be.key!=null&&he.set(be.key,ce)}let Me,_e=0;const J=R-q+1;let Ae=!1,Ce=0;const Le=new Array(J);for(ce=0;ce<J;ce++)Le[ce]=0;for(ce=G;ce<=g;ce++){const be=A[ce];if(_e>=J){ve(be,O,V,!0);continue}let Ue;if(be.key!=null)Ue=he.get(be.key);else for(Me=q;Me<=R;Me++)if(Le[Me-q]===0&&Ci(be,_[Me])){Ue=Me;break}Ue===void 0?ve(be,O,V,!0):(Le[Ue-q]=ce+1,Ue>=Ce?Ce=Ue:Ae=!0,M(be,_[Ue],x,null,O,V,ne,ee,ue),_e++)}const we=Ae?Km(Le):pr;for(Me=we.length-1,ce=J-1;ce>=0;ce--){const be=q+ce,Ue=_[be],Ye=be+1<E?_[be+1].el:P;Le[ce]===0?M(null,Ue,x,Ye,O,V,ne,ee,ue):Ae&&(Me<0||ce!==we[Me]?Ee(Ue,x,Ye,2):Me--)}}},Ee=(A,_,x,P,O=null)=>{const{el:V,type:ne,transition:ee,children:ue,shapeFlag:ce}=A;if(ce&6){Ee(A.component.subTree,_,x,P);return}if(ce&128){A.suspense.move(_,x,P);return}if(ce&64){ne.move(A,_,x,xe);return}if(ne===tn){i(V,_,x);for(let g=0;g<ue.length;g++)Ee(ue[g],_,x,P);i(A.anchor,_,x);return}if(ne===oa){S(A,_,x);return}if(P!==2&&ce&1&&ee)if(P===0)ee.beforeEnter(V),i(V,_,x),zt(()=>ee.enter(V),O);else{const{leave:g,delayLeave:R,afterLeave:G}=ee,q=()=>i(V,_,x),he=()=>{g(V,()=>{q(),G&&G()})};R?R(V,q,he):he()}else i(V,_,x)},ve=(A,_,x,P=!1,O=!1)=>{const{type:V,props:ne,ref:ee,children:ue,dynamicChildren:ce,shapeFlag:E,patchFlag:g,dirs:R}=A;if(ee!=null&&$o(ee,null,x,A,!0),E&256){_.ctx.deactivate(A);return}const G=E&1&&R,q=!aa(A);let he;if(q&&(he=ne&&ne.onVnodeBeforeUnmount)&&bn(he,_,A),E&6)k(A.component,x,P);else{if(E&128){A.suspense.unmount(x,P);return}G&&xi(A,null,_,"beforeUnmount"),E&64?A.type.remove(A,_,x,O,xe,P):ce&&(V!==tn||g>0&&g&64)?j(ce,_,x,!1,!0):(V===tn&&g&384||!O&&E&16)&&j(ue,_,x),P&&Y(A)}(q&&(he=ne&&ne.onVnodeUnmounted)||G)&&zt(()=>{he&&bn(he,_,A),G&&xi(A,null,_,"unmounted")},x)},Y=A=>{const{type:_,el:x,anchor:P,transition:O}=A;if(_===tn){oe(x,P);return}if(_===oa){y(A);return}const V=()=>{r(x),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(A.shapeFlag&1&&O&&!O.persisted){const{leave:ne,delayLeave:ee}=O,ue=()=>ne(x,V);ee?ee(A.el,V,ue):ue()}else V()},oe=(A,_)=>{let x;for(;A!==_;)x=h(A),r(A),A=x;r(_)},k=(A,_,x)=>{const{bum:P,scope:O,update:V,subTree:ne,um:ee}=A;P&&ra(P),O.stop(),V&&(V.active=!1,ve(ne,A,_,x)),ee&&zt(ee,_),zt(()=>{A.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},j=(A,_,x,P=!1,O=!1,V=0)=>{for(let ne=V;ne<A.length;ne++)ve(A[ne],_,x,P,O)},D=A=>A.shapeFlag&6?D(A.component.subTree):A.shapeFlag&128?A.suspense.next():h(A.anchor||A.el),de=(A,_,x)=>{A==null?_._vnode&&ve(_._vnode,null,null,!0):M(_._vnode||null,A,_,null,null,null,x),dc(),Td(),_._vnode=A},xe={p:M,um:ve,m:Ee,r:Y,mt:H,mc:U,pc:$,pbc:I,n:D,o:n};let fe,me;return e&&([fe,me]=e(xe)),{render:de,hydrate:fe,createApp:qm(de,fe)}}function Mi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Gd(n,e,t=!1){const i=n.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ii(r[s]),o.el=a.el),t||Gd(a,o)),o.type===gs&&(o.el=a.el)}}function Km(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const Zm=n=>n.__isTeleport,tn=Symbol(void 0),gs=Symbol(void 0),Mn=Symbol(void 0),oa=Symbol(void 0),Yr=[];let _n=null;function Di(n=!1){Yr.push(_n=n?null:[])}function Jm(){Yr.pop(),_n=Yr[Yr.length-1]||null}let ss=1;function yc(n){ss+=n}function Wd(n){return n.dynamicChildren=ss>0?_n||pr:null,Jm(),ss>0&&_n&&_n.push(n),n}function Kr(n,e,t,i,r,s){return Wd(_s(n,e,t,i,r,s,!0))}function $d(n,e,t,i,r){return Wd(Et(n,e,t,i,r,!0))}function Xo(n){return n?n.__v_isVNode===!0:!1}function Ci(n,e){return n.type===e.type&&n.key===e.key}const La="__vInternal",Xd=({key:n})=>n??null,la=({ref:n,ref_key:e,ref_for:t})=>n!=null?_t(n)||bt(n)||ke(n)?{i:Kt,r:n,k:e,f:!!t}:n:null;function _s(n,e=null,t=null,i=0,r=null,s=n===tn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Xd(e),ref:e&&la(e),scopeId:wa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Kt};return o?(Ol(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),ss>0&&!a&&_n&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_n.push(l),l}const Et=Qm;function Qm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Dm)&&(n=Mn),Xo(n)){const o=fi(n,e,!0);return t&&Ol(o,t),ss>0&&!s&&_n&&(o.shapeFlag&6?_n[_n.indexOf(n)]=o:_n.push(o)),o.patchFlag|=-2,o}if(fg(n)&&(n=n.__vccOpts),e){e=eg(e);let{class:o,style:l}=e;o&&!_t(o)&&(e.class=Ml(o)),et(l)&&(md(l)&&!De(l)&&(l=Rt({},l)),e.style=xl(l))}const a=_t(n)?1:_m(n)?128:Zm(n)?64:et(n)?4:ke(n)?2:0;return _s(n,e,t,i,r,a,s,!0)}function eg(n){return n?md(n)||La in n?Rt({},n):n:null}function fi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?ng(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Xd(o),ref:e&&e.ref?t&&r?De(r)?r.concat(la(e)):[r,la(e)]:la(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==tn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fi(n.ssContent),ssFallback:n.ssFallback&&fi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function tg(n=" ",e=0){return Et(gs,null,n,e)}function mT(n,e){const t=Et(oa,null,n);return t.staticCount=e,t}function Ps(n="",e=!1){return e?(Di(),$d(Mn,null,n)):Et(Mn,null,n)}function An(n){return n==null||typeof n=="boolean"?Et(Mn):De(n)?Et(tn,null,n.slice()):typeof n=="object"?ii(n):Et(gs,null,String(n))}function ii(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fi(n)}function Ol(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ol(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(La in e)?e._ctx=Kt:r===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:Kt},t=32):(e=String(e),i&64?(t=16,e=[tg(e)]):t=8);n.children=e,n.shapeFlag|=t}function ng(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ml([e.class,i.class]));else if(r==="style")e.style=xl([e.style,i.style]);else if(va(r)){const s=e[r],a=i[r];a&&s!==a&&!(De(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function bn(n,e,t,i=null){sn(n,e,7,[t,i])}const ig=Vd();let rg=0;function sg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ig,s={uid:rg++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new nd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kd(i,r),emitsOptions:Ad(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=cm.bind(null,s),n.ce&&n.ce(s),s}let ft=null;const yr=()=>ft||Kt,br=n=>{ft=n,n.scope.on()},zi=()=>{ft&&ft.scope.off(),ft=null};function qd(n){return n.vnode.shapeFlag&4}let as=!1;function ag(n,e=!1){as=e;const{props:t,children:i}=n.vnode,r=qd(n);Hm(n,t,r,e),Wm(n,i);const s=r?og(n,e):void 0;return as=!1,s}function og(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=ba(new Proxy(n.ctx,Um));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?cg(n):null;br(n),Dr();const s=li(i,n,0,[n.props,r]);if(Nr(),zi(),Qf(s)){if(s.then(zi,zi),e)return s.then(a=>{bc(n,a,e)}).catch(a=>{Ea(a,n,0)});n.asyncDep=s}else bc(n,s,e)}else jd(n,e)}function bc(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=Md(e)),jd(n,t)}let Ec;function jd(n,e,t){const i=n.type;if(!n.render){if(!e&&Ec&&!i.render){const r=i.template||Nl(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Rt(Rt({isCustomElement:s,delimiters:o},a),l);i.render=Ec(r,c)}}n.render=i.render||vn}br(n),Dr(),Om(n),Nr(),zi()}function lg(n){return new Proxy(n.attrs,{get(e,t){return Gt(n,"get","$attrs"),e[t]}})}function cg(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=lg(n))},slots:n.slots,emit:n.emit,expose:e}}function Pa(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Md(ba(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in jr)return jr[t](n)},has(e,t){return t in e||t in jr}}))}function ug(n,e=!0){return ke(n)?n.displayName||n.name:n.name||e&&n.__name}function fg(n){return ke(n)&&"__vccOpts"in n}const lt=(n,e)=>im(n,e,as);function Ra(n,e,t){const i=arguments.length;return i===2?et(e)&&!De(e)?Xo(e)?Et(n,null,[e]):Et(n,e):Et(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Xo(t)&&(t=[t]),Et(n,e,t))}const dg=Symbol(""),hg=()=>xn(dg),pg="3.2.47",mg="http://www.w3.org/2000/svg",Li=typeof document<"u"?document:null,Tc=Li&&Li.createElement("template"),gg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Li.createElementNS(mg,n):Li.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Li.createTextNode(n),createComment:n=>Li.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Li.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Tc.innerHTML=i?`<svg>${n}</svg>`:n;const o=Tc.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function _g(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function vg(n,e,t){const i=n.style,r=_t(t);if(t&&!r){if(e&&!_t(e))for(const s in e)t[s]==null&&qo(i,s,"");for(const s in t)qo(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const wc=/\s*!important$/;function qo(n,e,t){if(De(t))t.forEach(i=>qo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=xg(n,e);wc.test(t)?n.setProperty(Ir(i),t.replace(wc,""),"important"):n[i]=t}}const Ac=["Webkit","Moz","ms"],ja={};function xg(n,e){const t=ja[e];if(t)return t;let i=Rn(e);if(i!=="filter"&&i in n)return ja[e]=i;i=Sa(i);for(let r=0;r<Ac.length;r++){const s=Ac[r]+i;if(s in n)return ja[e]=s}return e}const Cc="http://www.w3.org/1999/xlink";function Mg(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Cc,e.slice(6,e.length)):n.setAttributeNS(Cc,e,t);else{const s=gp(e);t==null||s&&!Kf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Sg(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Kf(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function Pi(n,e,t,i){n.addEventListener(e,t,i)}function yg(n,e,t,i){n.removeEventListener(e,t,i)}function bg(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Eg(e);if(i){const c=s[e]=Ag(i,r);Pi(n,o,c,l)}else a&&(yg(n,o,a,l),s[e]=void 0)}}const Lc=/(?:Once|Passive|Capture)$/;function Eg(n){let e;if(Lc.test(n)){e={};let i;for(;i=n.match(Lc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ir(n.slice(2)),e]}let Ya=0;const Tg=Promise.resolve(),wg=()=>Ya||(Tg.then(()=>Ya=0),Ya=Date.now());function Ag(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;sn(Cg(i,t.value),e,5,[i])};return t.value=n,t.attached=wg(),t}function Cg(n,e){if(De(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Pc=/^on[a-z]/,Lg=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?_g(n,i,r):e==="style"?vg(n,t,i):va(e)?Sl(e)||bg(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pg(n,e,i,r))?Sg(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Mg(n,e,i,r))};function Pg(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Pc.test(e)&&ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Pc.test(e)&&_t(t)?!1:e in n}const Rg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ym.props;const pa=n=>{const e=n.props["onUpdate:modelValue"]||!1;return De(e)?t=>ra(e,t):e};function Ig(n){n.target.composing=!0}function Rc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gT={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n._assign=pa(r);const s=i||r.props&&r.props.type==="number";Pi(n,e?"change":"input",a=>{if(a.target.composing)return;let o=n.value;t&&(o=o.trim()),s&&(o=Do(o)),n._assign(o)}),t&&Pi(n,"change",()=>{n.value=n.value.trim()}),e||(Pi(n,"compositionstart",Ig),Pi(n,"compositionend",Rc),Pi(n,"change",Rc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n._assign=pa(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(r||n.type==="number")&&Do(n.value)===e))return;const a=e??"";n.value!==a&&(n.value=a)}},_T={deep:!0,created(n,e,t){n._assign=pa(t),Pi(n,"change",()=>{const i=n._modelValue,r=Dg(n),s=n.checked,a=n._assign;if(De(i)){const o=Zf(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(xa(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(Yd(n,s))})},mounted:Ic,beforeUpdate(n,e,t){n._assign=pa(t),Ic(n,e,t)}};function Ic(n,{value:e,oldValue:t},i){n._modelValue=e,De(e)?n.checked=Zf(e,i.props.value)>-1:xa(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=_a(e,Yd(n,!0)))}function Dg(n){return"_value"in n?n._value:n.value}function Yd(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Ng=Rt({patchProp:Lg},gg);let Dc;function Ug(){return Dc||(Dc=jm(Ng))}const Og=(...n)=>{const e=Ug().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Fg(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Fg(n){return _t(n)?document.querySelector(n):n}var kg=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const zg=Symbol();var Nc;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Nc||(Nc={}));function Bg(){const n=id(!0),e=n.run(()=>Yt({}));let t=[],i=[];const r=ba({install(s){r._a=s,s.provide(zg,r),s.config.globalProperties.$pinia=r,i.forEach(a=>t.push(a)),i=[]},use(s){return!this._a&&!kg?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="151",Hg=0,Uc=1,Vg=2,Kd=1,Gg=2,Xr=3,di=0,Ht=1,Hn=2,ci=0,vr=1,Oc=2,Fc=3,kc=4,Wg=5,cr=100,$g=101,Xg=102,zc=103,Bc=104,qg=200,jg=201,Yg=202,Kg=203,Zd=204,Jd=205,Zg=206,Jg=207,Qg=208,e_=209,t_=210,n_=0,i_=1,r_=2,jo=3,s_=4,a_=5,o_=6,l_=7,Qd=0,c_=1,u_=2,Wn=0,f_=1,d_=2,h_=3,p_=4,m_=5,eh=300,Er=301,Tr=302,Yo=303,Ko=304,Ia=306,Zo=1e3,mn=1001,Jo=1002,Ft=1003,Hc=1004,Ka=1005,nn=1006,g_=1007,os=1008,Hi=1009,__=1010,v_=1011,th=1012,x_=1013,Ni=1014,Ui=1015,ls=1016,M_=1017,S_=1018,xr=1020,y_=1021,gn=1023,b_=1024,E_=1025,Bi=1026,wr=1027,T_=1028,w_=1029,A_=1030,C_=1031,L_=1033,Za=33776,Ja=33777,Qa=33778,eo=33779,Vc=35840,Gc=35841,Wc=35842,$c=35843,P_=36196,Xc=37492,qc=37496,jc=37808,Yc=37809,Kc=37810,Zc=37811,Jc=37812,Qc=37813,eu=37814,tu=37815,nu=37816,iu=37817,ru=37818,su=37819,au=37820,ou=37821,to=36492,R_=36283,lu=36284,cu=36285,uu=36286,Vi=3e3,nt=3001,I_=3200,D_=3201,N_=0,U_=1,wn="srgb",cs="srgb-linear",nh="display-p3",no=7680,O_=519,fu=35044,du="300 es",Qo=1035;class Ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],io=Math.PI/180,el=180/Math.PI;function vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function F_(n,e){return(n%e+e)%e}function ro(n,e,t){return(1-t)*n+t*e}function hu(n){return(n&n-1)===0&&n!==0}function k_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rs(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],M=r[0],m=r[3],f=r[6],b=r[1],S=r[4],y=r[7],w=r[2],C=r[5],N=r[8];return s[0]=a*M+o*b+l*w,s[3]=a*m+o*S+l*C,s[6]=a*f+o*y+l*N,s[1]=c*M+u*b+d*w,s[4]=c*m+u*S+d*C,s[7]=c*f+u*y+d*N,s[2]=h*M+p*b+v*w,s[5]=h*m+p*S+v*C,s[8]=h*f+p*y+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=t*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=d*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=h*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=p*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new $e;function ih(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const z_=new $e().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),B_=new $e().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function H_(n){return n.convertSRGBToLinear().applyMatrix3(B_)}function V_(n){return n.applyMatrix3(z_).convertLinearToSRGB()}const G_={[cs]:n=>n,[wn]:n=>n.convertSRGBToLinear(),[nh]:H_},W_={[cs]:n=>n,[wn]:n=>n.convertLinearToSRGB(),[nh]:V_},Xt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return cs},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=G_[e],r=W_[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Xi;class rh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=ma("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mr(t[i]/255)*255):t[i]=Mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class sh{constructor(e=null){this.isSource=!0,this.uuid=vs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(oo(r[a].image)):s.push(oo(r[a]))}else s=oo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $_=0;class Zt extends Ur{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=mn,r=mn,s=nn,a=os,o=gn,l=Hi,c=Zt.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=vs(),this.name="",this.source=new sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zo:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zo:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=eh;Zt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(p+1)/2,w=(f+1)/2,C=(u+h)/4,N=(d+M)/4,U=(v+m)/4;return S>y&&S>w?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=N/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=U/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=N/s,r=U/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-v)*(m-v)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(d-M)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gi extends Ur{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:nn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ah extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class X_ extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],p=s[a+1],v=s[a+2],M=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=M;return}if(d!==M||l!==h||c!==p||u!==v){let m=1-o;const f=l*h+c*p+u*v+d*M,b=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const w=Math.sqrt(S),C=Math.atan2(w,f*b);m=Math.sin(m*C)/w,o=Math.sin(o*C)/w}const y=o*b;if(l=l*m+h*y,c=c*m+p*y,u=u*m+v*y,d=d*m+M*y,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*d+l*p-c*h,e[t+1]=l*v+u*h+c*d-o*p,e[t+2]=c*v+u*p+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,d=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-d*-a,this.y=u*l+h*-a+d*-s-c*-o,this.z=d*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lo.copy(this).projectOnVector(e),this.sub(lo)}reflect(e){return this.sub(lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lo=new X,pu=new xs;class Ms{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),qi.copy(e.boundingBox),qi.applyMatrix4(e.matrixWorld),this.union(qi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Dn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Dn)}else r.boundingBox===null&&r.computeBoundingBox(),qi.copy(r.boundingBox),qi.applyMatrix4(e.matrixWorld),this.union(qi)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Is.subVectors(this.max,zr),ji.subVectors(e.a,zr),Yi.subVectors(e.b,zr),Ki.subVectors(e.c,zr),Kn.subVectors(Yi,ji),Zn.subVectors(Ki,Yi),Si.subVectors(ji,Ki);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-Si.z,Si.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,Si.z,0,-Si.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-Si.y,Si.x,0];return!co(t,ji,Yi,Ki,Is)||(t=[1,0,0,0,1,0,0,0,1],!co(t,ji,Yi,Ki,Is))?!1:(Ds.crossVectors(Kn,Zn),t=[Ds.x,Ds.y,Ds.z],co(t,ji,Yi,Ki,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new X,new X,new X,new X,new X,new X,new X,new X],Dn=new X,qi=new Ms,ji=new X,Yi=new X,Ki=new X,Kn=new X,Zn=new X,Si=new X,zr=new X,Is=new X,Ds=new X,yi=new X;function co(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){yi.fromArray(n,s);const o=r.x*Math.abs(yi.x)+r.y*Math.abs(yi.y)+r.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),u=i.dot(yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const q_=new Ms,Br=new X,uo=new X;class Da{constructor(e=new X,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):q_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(uo)),this.expandByPoint(Br.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new X,fo=new X,Ns=new X,Jn=new X,ho=new X,Us=new X,po=new X;class oh{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fo.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(fo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=Jn.dot(this.direction),l=-Jn.dot(Ns),c=Jn.lengthSq(),u=Math.abs(1-a*a);let d,h,p,v;if(u>0)if(d=a*l-o,h=a*o-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const M=1/u;d*=M,h*=M,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fo).addScaledVector(Ns,h),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){ho.subVectors(t,e),Us.subVectors(i,e),po.crossVectors(ho,Us);let a=this.direction.dot(po),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(Us.crossVectors(Jn,Us));if(l<0)return null;const c=o*this.direction.dot(ho.cross(Jn));if(c<0||l+c>a)return null;const u=-o*Jn.dot(po);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,d,h,p,v,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,v=o*u,M=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,M=c*d;t[0]=h+M*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,M=c*d;t[0]=h-M*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,v=o*u,M=o*d;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+M,t[1]=l*d,t[5]=M*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=M-h*d,t[8]=v*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+v,t[10]=h-M*d}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+M,t[5]=a*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*u,t[10]=M*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j_,e,Y_)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Qn.crossVectors(i,qt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Qn.crossVectors(i,qt)),Qn.normalize(),Os.crossVectors(qt,Qn),r[0]=Qn.x,r[4]=Os.x,r[8]=qt.x,r[1]=Qn.y,r[5]=Os.y,r[9]=qt.y,r[2]=Qn.z,r[6]=Os.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],M=i[6],m=i[10],f=i[14],b=i[3],S=i[7],y=i[11],w=i[15],C=r[0],N=r[4],U=r[8],T=r[12],I=r[1],K=r[5],Q=r[9],z=r[13],H=r[2],Z=r[6],ae=r[10],te=r[14],$=r[3],le=r[7],pe=r[11],Ee=r[15];return s[0]=a*C+o*I+l*H+c*$,s[4]=a*N+o*K+l*Z+c*le,s[8]=a*U+o*Q+l*ae+c*pe,s[12]=a*T+o*z+l*te+c*Ee,s[1]=u*C+d*I+h*H+p*$,s[5]=u*N+d*K+h*Z+p*le,s[9]=u*U+d*Q+h*ae+p*pe,s[13]=u*T+d*z+h*te+p*Ee,s[2]=v*C+M*I+m*H+f*$,s[6]=v*N+M*K+m*Z+f*le,s[10]=v*U+M*Q+m*ae+f*pe,s[14]=v*T+M*z+m*te+f*Ee,s[3]=b*C+S*I+y*H+w*$,s[7]=b*N+S*K+y*Z+w*le,s[11]=b*U+S*Q+y*ae+w*pe,s[15]=b*T+S*z+y*te+w*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],M=e[7],m=e[11],f=e[15];return v*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*p-i*l*p)+M*(+t*l*p-t*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*u-i*c*u)+f*(-r*o*u-t*l*d+t*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],M=e[13],m=e[14],f=e[15],b=d*m*c-M*h*c+M*l*p-o*m*p-d*l*f+o*h*f,S=v*h*c-u*m*c-v*l*p+a*m*p+u*l*f-a*h*f,y=u*M*c-v*d*c+v*o*p-a*M*p-u*o*f+a*d*f,w=v*d*l-u*M*l-v*o*h+a*M*h+u*o*m-a*d*m,C=t*b+i*S+r*y+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=b*N,e[1]=(M*h*s-d*m*s-M*r*p+i*m*p+d*r*f-i*h*f)*N,e[2]=(o*m*s-M*l*s+M*r*c-i*m*c-o*r*f+i*l*f)*N,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*p-i*l*p)*N,e[4]=S*N,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*f+t*h*f)*N,e[6]=(v*l*s-a*m*s-v*r*c+t*m*c+a*r*f-t*l*f)*N,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*p+t*l*p)*N,e[8]=y*N,e[9]=(v*d*s-u*M*s-v*i*p+t*M*p+u*i*f-t*d*f)*N,e[10]=(a*M*s-v*o*s+v*i*c-t*M*c-a*i*f+t*o*f)*N,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*p-t*o*p)*N,e[12]=w*N,e[13]=(u*M*r-v*d*r+v*i*h-t*M*h-u*i*m+t*d*m)*N,e[14]=(v*o*r-a*M*r-v*i*l+t*M*l+a*i*m-t*o*m)*N,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*h+t*o*h)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,v=s*d,M=a*u,m=a*d,f=o*d,b=l*c,S=l*u,y=l*d,w=i.x,C=i.y,N=i.z;return r[0]=(1-(M+f))*w,r[1]=(p+y)*w,r[2]=(v-S)*w,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(h+f))*C,r[6]=(m+b)*C,r[7]=0,r[8]=(v+S)*N,r[9]=(m-b)*N,r[10]=(1-(h+M))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zi.set(r[0],r[1],r[2]).length();const a=Zi.set(r[4],r[5],r[6]).length(),o=Zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);const c=1/s,u=1/a,d=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),h=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),d=(t+e)*l,h=(i+r)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zi=new X,ln=new yt,j_=new X(0,0,0),Y_=new X(1,1,1),Qn=new X,Os=new X,qt=new X,mu=new yt,gu=new xs;class Na{constructor(e=0,t=0,i=0,r=Na.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Na.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let K_=0;const _u=new X,Ji=new xs,Un=new yt,Fs=new X,Hr=new X,Z_=new X,J_=new xs,vu=new X(1,0,0),xu=new X(0,1,0),Mu=new X(0,0,1),Q_={type:"added"},Su={type:"removed"};class Vt extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new X,t=new Na,i=new xs,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new $e}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(Mu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(Mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fs.copy(e):Fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Hr,Fs,this.up):Un.lookAt(Fs,Hr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(Un),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Q_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Su)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Su)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,Z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,J_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new X(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new X,On=new X,mo=new X,Fn=new X,Qi=new X,er=new X,yu=new X,go=new X,_o=new X,vo=new X;let ks=!1;class dn{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){cn.subVectors(r,t),On.subVectors(i,t),mo.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(On),l=cn.dot(mo),c=On.dot(On),u=On.dot(mo),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fn),Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,i,r,s,a,o,l){return ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ks=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Fn),l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l}static isFrontFacing(e,t,i,r){return cn.subVectors(i,t),On.subVectors(e,t),cn.cross(On).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),cn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ks=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Qi.subVectors(r,i),er.subVectors(s,i),go.subVectors(e,i);const l=Qi.dot(go),c=er.dot(go);if(l<=0&&c<=0)return t.copy(i);_o.subVectors(e,r);const u=Qi.dot(_o),d=er.dot(_o);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Qi,a);vo.subVectors(e,s);const p=Qi.dot(vo),v=er.dot(vo);if(v>=0&&p<=v)return t.copy(s);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(er,o);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return yu.subVectors(s,r),o=(d-u)/(d-u+(p-v)),t.copy(r).addScaledVector(yu,o);const f=1/(m+M+h);return a=M*f,o=h*f,t.copy(i).addScaledVector(Qi,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ev=0;class Ss extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=vr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zd,this.blendDst=Jd,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},zs={h:0,s:0,l:0};function xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Xt.workingColorSpace){if(e=F_(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=xo(a,s,e+1/3),this.g=xo(a,s,e),this.b=xo(a,s,e-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(e,t=wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Xt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Xt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const i=ch[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Xt.fromWorkingColorSpace(Lt.copy(this),e),Bt(Lt.r*255,0,255)<<16^Bt(Lt.g*255,0,255)<<8^Bt(Lt.b*255,0,255)<<0}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=wn){Xt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(un),un.h+=e,un.s+=t,un.l+=i,this.setHSL(un.h,un.s,un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(zs);const i=ro(un.h,zs.h,t),r=ro(un.s,zs.s,t),s=ro(un.l,zs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Qe;Qe.NAMES=ch;class uh extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new X,Bs=new st;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class fh extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dh extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pn extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tv=0;const en=new yt,Mo=new Vt,tr=new X,jt=new Ms,Vr=new Ms,St=new X;class qn extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ih(e)?dh:fh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(jt.min,Vr.min),jt.expandByPoint(St),St.addVectors(jt.max,Vr.max),jt.expandByPoint(St)):(jt.expandByPoint(Vr.min),jt.expandByPoint(Vr.max))}jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)St.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(e,c),St.add(tr)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new X,u[I]=new X;const d=new X,h=new X,p=new X,v=new st,M=new st,m=new st,f=new X,b=new X;function S(I,K,Q){d.fromArray(r,I*3),h.fromArray(r,K*3),p.fromArray(r,Q*3),v.fromArray(a,I*2),M.fromArray(a,K*2),m.fromArray(a,Q*2),h.sub(d),p.sub(d),M.sub(v),m.sub(v);const z=1/(M.x*m.y-m.x*M.y);isFinite(z)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-M.y).multiplyScalar(z),b.copy(p).multiplyScalar(M.x).addScaledVector(h,-m.x).multiplyScalar(z),c[I].add(f),c[K].add(f),c[Q].add(f),u[I].add(b),u[K].add(b),u[Q].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let I=0,K=y.length;I<K;++I){const Q=y[I],z=Q.start,H=Q.count;for(let Z=z,ae=z+H;Z<ae;Z+=3)S(i[Z+0],i[Z+1],i[Z+2])}const w=new X,C=new X,N=new X,U=new X;function T(I){N.fromArray(s,I*3),U.copy(N);const K=c[I];w.copy(K),w.sub(N.multiplyScalar(N.dot(K))).normalize(),C.crossVectors(U,K);const z=C.dot(u[I])<0?-1:1;l[I*4]=w.x,l[I*4+1]=w.y,l[I*4+2]=w.z,l[I*4+3]=z}for(let I=0,K=y.length;I<K;++I){const Q=y[I],z=Q.start,H=Q.count;for(let Z=z,ae=z+H;Z<ae;Z+=3)T(i[Z+0]),T(i[Z+1]),T(i[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new an(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new yt,En=new oh,Hs=new Da,Eu=new X,nr=new X,ir=new X,rr=new X,So=new X,Vs=new X,Gs=new st,Ws=new st,$s=new st,Tu=new X,wu=new X,Au=new X,Xs=new X,qs=new X;class si extends Vt{constructor(e=new qn,t=new uh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(So.fromBufferAttribute(d,e),a?Vs.addScaledVector(So,u):Vs.addScaledVector(So.sub(t),u))}t.add(Vs)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(s),En.copy(e.ray).recast(e.near),Hs.containsPoint(En.origin)===!1&&(En.intersectSphere(Hs,Eu)===null||En.origin.distanceToSquared(Eu)>(e.far-e.near)**2))||(bu.copy(s).invert(),En.copy(e.ray).applyMatrix4(bu),i.boundingBox!==null&&En.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,d=i.attributes.normal,h=i.groups,p=i.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=h.length;v<M;v++){const m=h[v],f=r[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,w=S;y<w;y+=3){const C=o.getX(y),N=o.getX(y+1),U=o.getX(y+2);a=js(this,f,e,En,c,u,d,C,N,U),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=v,f=M;m<f;m+=3){const b=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);a=js(this,r,e,En,c,u,d,b,S,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=h.length;v<M;v++){const m=h[v],f=r[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,w=S;y<w;y+=3){const C=y,N=y+1,U=y+2;a=js(this,f,e,En,c,u,d,C,N,U),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=v,f=M;m<f;m+=3){const b=m,S=m+1,y=m+2;a=js(this,r,e,En,c,u,d,b,S,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function nv(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===di,o),l===null)return null;qs.copy(o),qs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:n}}function js(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,nr),n.getVertexPosition(l,ir),n.getVertexPosition(c,rr);const u=nv(n,e,t,i,nr,ir,rr,Xs);if(u){r&&(Gs.fromBufferAttribute(r,o),Ws.fromBufferAttribute(r,l),$s.fromBufferAttribute(r,c),u.uv=dn.getInterpolation(Xs,nr,ir,rr,Gs,Ws,$s,new st)),s&&(Gs.fromBufferAttribute(s,o),Ws.fromBufferAttribute(s,l),$s.fromBufferAttribute(s,c),u.uv2=dn.getInterpolation(Xs,nr,ir,rr,Gs,Ws,$s,new st)),a&&(Tu.fromBufferAttribute(a,o),wu.fromBufferAttribute(a,l),Au.fromBufferAttribute(a,c),u.normal=dn.getInterpolation(Xs,nr,ir,rr,Tu,wu,Au,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new X,materialIndex:0};dn.getNormal(nr,ir,rr,d.normal),u.face=d}return u}class ys extends qn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(u,3)),this.setAttribute("uv",new Pn(d,2));function v(M,m,f,b,S,y,w,C,N,U,T){const I=y/N,K=w/U,Q=y/2,z=w/2,H=C/2,Z=N+1,ae=U+1;let te=0,$=0;const le=new X;for(let pe=0;pe<ae;pe++){const Ee=pe*K-z;for(let ve=0;ve<Z;ve++){const Y=ve*I-Q;le[M]=Y*b,le[m]=Ee*S,le[f]=H,c.push(le.x,le.y,le.z),le[M]=0,le[m]=0,le[f]=C>0?1:-1,u.push(le.x,le.y,le.z),d.push(ve/N),d.push(1-pe/U),te+=1}}for(let pe=0;pe<U;pe++)for(let Ee=0;Ee<N;Ee++){const ve=h+Ee+Z*pe,Y=h+Ee+Z*(pe+1),oe=h+(Ee+1)+Z*(pe+1),k=h+(Ee+1)+Z*pe;l.push(ve,Y,k),l.push(Y,oe,k),$+=6}o.addGroup(p,$,T),p+=$,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=Ar(n[t]);for(const r in i)e[r]=i[r]}return e}function iv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hh(n){return n.getRenderTarget()===null&&n.outputEncoding===nt?wn:cs}const rv={clone:Ar,merge:Ut};var sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sv,this.fragmentShader=av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=iv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ph extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends ph{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=el*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return el*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sr=-90,ar=1;class ov extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new rn(sr,ar,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new rn(sr,ar,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new rn(sr,ar,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new rn(sr,ar,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new rn(sr,ar,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new rn(sr,ar,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Wn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class mh extends Zt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lv extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ys(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:ci});s.uniforms.tEquirect.value=t;const a=new si(r,s),o=t.minFilter;return t.minFilter===os&&(t.minFilter=nn),new ov(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const yo=new X,cv=new X,uv=new $e;class Ti{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=yo.subVectors(i,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uv.getNormalMatrix(e),r=this.coplanarPoint(yo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Da,Ys=new X;class gh{constructor(e=new Ti,t=new Ti,i=new Ti,r=new Ti,s=new Ti,a=new Ti){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],d=i[7],h=i[8],p=i[9],v=i[10],M=i[11],m=i[12],f=i[13],b=i[14],S=i[15];return t[0].setComponents(o-r,d-l,M-h,S-m).normalize(),t[1].setComponents(o+r,d+l,M+h,S+m).normalize(),t[2].setComponents(o+s,d+c,M+p,S+f).normalize(),t[3].setComponents(o-s,d-c,M-p,S-f).normalize(),t[4].setComponents(o-a,d-u,M-v,S-b).normalize(),t[5].setComponents(o+a,d+u,M+v,S+b).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ys.x=r.normal.x>0?e.max.x:e.min.x,Ys.y=r.normal.y>0?e.max.y:e.min.y,Ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _h(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function fv(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,d,h),c.onUploadCallback();let v;if(d instanceof Float32Array)v=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(d instanceof Int16Array)v=5122;else if(d instanceof Uint32Array)v=5125;else if(d instanceof Int32Array)v=5124;else if(d instanceof Int8Array)v=5120;else if(d instanceof Uint8Array)v=5121;else if(d instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,p=u.updateRange;n.bindBuffer(d,c),p.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class kl extends qn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,p=[],v=[],M=[],m=[];for(let f=0;f<u;f++){const b=f*h-a;for(let S=0;S<c;S++){const y=S*d-s;v.push(y,-b,0),M.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const S=b+c*f,y=b+c*(f+1),w=b+1+c*(f+1),C=b+1+c*f;p.push(S,y,C),p.push(y,w,C)}this.setIndex(p),this.setAttribute("position",new Pn(v,3)),this.setAttribute("normal",new Pn(M,3)),this.setAttribute("uv",new Pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vv="vec3 transformed = vec3( position );",xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Iv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kv="gl_FragColor = linearToOutputTexel( gl_FragColor );",zv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,t0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,n0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,o0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,f0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,v0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,b0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,E0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,T0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,I0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,nx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ix=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sx=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sx=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ix=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Be={alphamap_fragment:dv,alphamap_pars_fragment:hv,alphatest_fragment:pv,alphatest_pars_fragment:mv,aomap_fragment:gv,aomap_pars_fragment:_v,begin_vertex:vv,beginnormal_vertex:xv,bsdfs:Mv,iridescence_fragment:Sv,bumpmap_pars_fragment:yv,clipping_planes_fragment:bv,clipping_planes_pars_fragment:Ev,clipping_planes_pars_vertex:Tv,clipping_planes_vertex:wv,color_fragment:Av,color_pars_fragment:Cv,color_pars_vertex:Lv,color_vertex:Pv,common:Rv,cube_uv_reflection_fragment:Iv,defaultnormal_vertex:Dv,displacementmap_pars_vertex:Nv,displacementmap_vertex:Uv,emissivemap_fragment:Ov,emissivemap_pars_fragment:Fv,encodings_fragment:kv,encodings_pars_fragment:zv,envmap_fragment:Bv,envmap_common_pars_fragment:Hv,envmap_pars_fragment:Vv,envmap_pars_vertex:Gv,envmap_physical_pars_fragment:t0,envmap_vertex:Wv,fog_vertex:$v,fog_pars_vertex:Xv,fog_fragment:qv,fog_pars_fragment:jv,gradientmap_pars_fragment:Yv,lightmap_fragment:Kv,lightmap_pars_fragment:Zv,lights_lambert_fragment:Jv,lights_lambert_pars_fragment:Qv,lights_pars_begin:e0,lights_toon_fragment:n0,lights_toon_pars_fragment:i0,lights_phong_fragment:r0,lights_phong_pars_fragment:s0,lights_physical_fragment:a0,lights_physical_pars_fragment:o0,lights_fragment_begin:l0,lights_fragment_maps:c0,lights_fragment_end:u0,logdepthbuf_fragment:f0,logdepthbuf_pars_fragment:d0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:_0,map_particle_pars_fragment:v0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:M0,morphcolor_vertex:S0,morphnormal_vertex:y0,morphtarget_pars_vertex:b0,morphtarget_vertex:E0,normal_fragment_begin:T0,normal_fragment_maps:w0,normal_pars_fragment:A0,normal_pars_vertex:C0,normal_vertex:L0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:I0,clearcoat_pars_fragment:D0,iridescence_pars_fragment:N0,output_fragment:U0,packing:O0,premultiplied_alpha_fragment:F0,project_vertex:k0,dithering_fragment:z0,dithering_pars_fragment:B0,roughnessmap_fragment:H0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:W0,shadowmap_vertex:$0,shadowmask_pars_fragment:X0,skinbase_vertex:q0,skinning_pars_vertex:j0,skinning_vertex:Y0,skinnormal_vertex:K0,specularmap_fragment:Z0,specularmap_pars_fragment:J0,tonemapping_fragment:Q0,tonemapping_pars_fragment:ex,transmission_fragment:tx,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:rx,uv_vertex:sx,worldpos_vertex:ax,background_vert:ox,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:ux,cube_vert:fx,cube_frag:dx,depth_vert:hx,depth_frag:px,distanceRGBA_vert:mx,distanceRGBA_frag:gx,equirect_vert:_x,equirect_frag:vx,linedashed_vert:xx,linedashed_frag:Mx,meshbasic_vert:Sx,meshbasic_frag:yx,meshlambert_vert:bx,meshlambert_frag:Ex,meshmatcap_vert:Tx,meshmatcap_frag:wx,meshnormal_vert:Ax,meshnormal_frag:Cx,meshphong_vert:Lx,meshphong_frag:Px,meshphysical_vert:Rx,meshphysical_frag:Ix,meshtoon_vert:Dx,meshtoon_frag:Nx,points_vert:Ux,points_frag:Ox,shadow_vert:Fx,shadow_frag:kx,sprite_vert:zx,sprite_frag:Bx},Se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaTest:{value:0}}},Cn={basic:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ut([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ut([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ut([Se.points,Se.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ut([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ut([Se.common,Se.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ut([Se.sprite,Se.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ut([Se.common,Se.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ut([Se.lights,Se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Cn.physical={uniforms:Ut([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ks={r:0,b:0,g:0};function Hx(n,e,t,i,r,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function v(m,f){let b=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=(f.backgroundBlurriness>0?t:e).get(S));const y=n.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(S=null),S===null?M(o,l):S&&S.isColor&&(M(S,1),b=!0),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Ia)?(u===void 0&&(u=new si(new ys(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Ar(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=S.encoding!==nt,(d!==S||h!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new si(new kl(2,2),new Wi({name:"BackgroundMaterial",uniforms:Ar(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=S.encoding!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function M(m,f){m.getRGB(Ks,hh(n)),i.buffers.color.setClear(Ks.r,Ks.g,Ks.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,M(o,l)},render:v}}function Vx(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function d(H,Z,ae,te,$){let le=!1;if(a){const pe=M(te,ae,Z);c!==pe&&(c=pe,p(c.object)),le=f(H,te,ae,$),le&&b(H,te,ae,$)}else{const pe=Z.wireframe===!0;(c.geometry!==te.id||c.program!==ae.id||c.wireframe!==pe)&&(c.geometry=te.id,c.program=ae.id,c.wireframe=pe,le=!0)}$!==null&&t.update($,34963),(le||u)&&(u=!1,U(H,Z,ae,te),$!==null&&n.bindBuffer(34963,t.get($).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(H){return i.isWebGL2?n.bindVertexArray(H):s.bindVertexArrayOES(H)}function v(H){return i.isWebGL2?n.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function M(H,Z,ae){const te=ae.wireframe===!0;let $=o[H.id];$===void 0&&($={},o[H.id]=$);let le=$[Z.id];le===void 0&&(le={},$[Z.id]=le);let pe=le[te];return pe===void 0&&(pe=m(h()),le[te]=pe),pe}function m(H){const Z=[],ae=[],te=[];for(let $=0;$<r;$++)Z[$]=0,ae[$]=0,te[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ae,attributeDivisors:te,object:H,attributes:{},index:null}}function f(H,Z,ae,te){const $=c.attributes,le=Z.attributes;let pe=0;const Ee=ae.getAttributes();for(const ve in Ee)if(Ee[ve].location>=0){const oe=$[ve];let k=le[ve];if(k===void 0&&(ve==="instanceMatrix"&&H.instanceMatrix&&(k=H.instanceMatrix),ve==="instanceColor"&&H.instanceColor&&(k=H.instanceColor)),oe===void 0||oe.attribute!==k||k&&oe.data!==k.data)return!0;pe++}return c.attributesNum!==pe||c.index!==te}function b(H,Z,ae,te){const $={},le=Z.attributes;let pe=0;const Ee=ae.getAttributes();for(const ve in Ee)if(Ee[ve].location>=0){let oe=le[ve];oe===void 0&&(ve==="instanceMatrix"&&H.instanceMatrix&&(oe=H.instanceMatrix),ve==="instanceColor"&&H.instanceColor&&(oe=H.instanceColor));const k={};k.attribute=oe,oe&&oe.data&&(k.data=oe.data),$[ve]=k,pe++}c.attributes=$,c.attributesNum=pe,c.index=te}function S(){const H=c.newAttributes;for(let Z=0,ae=H.length;Z<ae;Z++)H[Z]=0}function y(H){w(H,0)}function w(H,Z){const ae=c.newAttributes,te=c.enabledAttributes,$=c.attributeDivisors;ae[H]=1,te[H]===0&&(n.enableVertexAttribArray(H),te[H]=1),$[H]!==Z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,Z),$[H]=Z)}function C(){const H=c.newAttributes,Z=c.enabledAttributes;for(let ae=0,te=Z.length;ae<te;ae++)Z[ae]!==H[ae]&&(n.disableVertexAttribArray(ae),Z[ae]=0)}function N(H,Z,ae,te,$,le){i.isWebGL2===!0&&(ae===5124||ae===5125)?n.vertexAttribIPointer(H,Z,ae,$,le):n.vertexAttribPointer(H,Z,ae,te,$,le)}function U(H,Z,ae,te){if(i.isWebGL2===!1&&(H.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const $=te.attributes,le=ae.getAttributes(),pe=Z.defaultAttributeValues;for(const Ee in le){const ve=le[Ee];if(ve.location>=0){let Y=$[Ee];if(Y===void 0&&(Ee==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),Ee==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),Y!==void 0){const oe=Y.normalized,k=Y.itemSize,j=t.get(Y);if(j===void 0)continue;const D=j.buffer,de=j.type,xe=j.bytesPerElement;if(Y.isInterleavedBufferAttribute){const fe=Y.data,me=fe.stride,A=Y.offset;if(fe.isInstancedInterleavedBuffer){for(let _=0;_<ve.locationSize;_++)w(ve.location+_,fe.meshPerAttribute);H.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let _=0;_<ve.locationSize;_++)y(ve.location+_);n.bindBuffer(34962,D);for(let _=0;_<ve.locationSize;_++)N(ve.location+_,k/ve.locationSize,de,oe,me*xe,(A+k/ve.locationSize*_)*xe)}else{if(Y.isInstancedBufferAttribute){for(let fe=0;fe<ve.locationSize;fe++)w(ve.location+fe,Y.meshPerAttribute);H.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let fe=0;fe<ve.locationSize;fe++)y(ve.location+fe);n.bindBuffer(34962,D);for(let fe=0;fe<ve.locationSize;fe++)N(ve.location+fe,k/ve.locationSize,de,oe,k*xe,k/ve.locationSize*fe*xe)}}else if(pe!==void 0){const oe=pe[Ee];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(ve.location,oe);break;case 3:n.vertexAttrib3fv(ve.location,oe);break;case 4:n.vertexAttrib4fv(ve.location,oe);break;default:n.vertexAttrib1fv(ve.location,oe)}}}}C()}function T(){Q();for(const H in o){const Z=o[H];for(const ae in Z){const te=Z[ae];for(const $ in te)v(te[$].object),delete te[$];delete Z[ae]}delete o[H]}}function I(H){if(o[H.id]===void 0)return;const Z=o[H.id];for(const ae in Z){const te=Z[ae];for(const $ in te)v(te[$].object),delete te[$];delete Z[ae]}delete o[H.id]}function K(H){for(const Z in o){const ae=o[Z];if(ae[H.id]===void 0)continue;const te=ae[H.id];for(const $ in te)v(te[$].object),delete te[$];delete ae[H.id]}}function Q(){z(),u=!0,c!==l&&(c=l,p(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:K,initAttributes:S,enableAttribute:y,disableUnusedAttributes:C}}function Gx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function Wx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(N){if(N==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),h=n.getParameter(35660),p=n.getParameter(3379),v=n.getParameter(34076),M=n.getParameter(34921),m=n.getParameter(36347),f=n.getParameter(36348),b=n.getParameter(36349),S=h>0,y=a||e.has("OES_texture_float"),w=S&&y,C=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:M,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:C}}function $x(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ti,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,S=b*4;let y=f.clippingState||null;l.value=y,y=u(v,h,S,p);for(let w=0;w!==S;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,v!==!0||m===null){const f=p+M*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,y=p;S!==M;++S,y+=4)a.copy(d[S]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function Xx(n){let e=new WeakMap;function t(a,o){return o===Yo?a.mapping=Er:o===Ko&&(a.mapping=Tr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Yo||o===Ko)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lv(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class qx extends ph{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const dr=4,Cu=[.125,.215,.35,.446,.526,.582],Ri=20,bo=new qx,Lu=new Qe;let Eo=null;const wi=(1+Math.sqrt(5))/2,or=1/wi,Pu=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,wi,or),new X(0,wi,-or),new X(or,0,wi),new X(-or,0,wi),new X(wi,or,0),new X(-wi,or,0)];class Ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Eo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ls,format:gn,encoding:Vi,depthBuffer:!1},r=Iu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jx(s)),this._blurMaterial=Yx(s,e,t)}return r}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,i,r){const o=new rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Lu),u.toneMapping=Wn,u.autoClear=!1;const p=new uh({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),v=new si(new ys,p);let M=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy(Lu),M=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;Zs(r,b*S,f>2?S:0,S,S),u.setRenderTarget(r),M&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Er||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Du());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new si(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,bo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pu[(r-1)%Pu.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new si(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),M=s/v,m=isFinite(s)?1+Math.floor(u*M):Ri;m>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const f=[];let b=0;for(let N=0;N<Ri;++N){const U=N/M,T=Math.exp(-U*U/2);f.push(T),N===0?b+=T:N<m&&(b+=2*T)}for(let N=0;N<f.length;N++)f[N]=f[N]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=v,h.mipInt.value=S-i;const y=this._sizeLods[r],w=3*y*(r>S-dr?r-S+dr:0),C=4*(this._cubeSize-y);Zs(t,w,C,3*y,2*y),l.setRenderTarget(t),l.render(d,bo)}}function jx(n){const e=[],t=[],i=[];let r=n;const s=n-dr+1+Cu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-dr?l=Cu[a-n+dr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,M=3,m=2,f=1,b=new Float32Array(M*v*p),S=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let C=0;C<p;C++){const N=C%3*2/3-1,U=C>2?0:-1,T=[N,U,0,N+2/3,U,0,N+2/3,U+1,0,N,U,0,N+2/3,U+1,0,N,U+1,0];b.set(T,M*v*C),S.set(h,m*v*C);const I=[C,C,C,C,C,C];y.set(I,f*v*C)}const w=new qn;w.setAttribute("position",new an(b,M)),w.setAttribute("uv",new an(S,m)),w.setAttribute("faceIndex",new an(y,f)),e.push(w),r>dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Iu(n,e,t){const i=new Gi(n,e,t);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Yx(n,e,t){const i=new Float32Array(Ri),r=new X(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Du(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Nu(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Yo||l===Ko,u=l===Er||l===Tr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ru(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Ru(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Zx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Jx(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],34962);const p=d.morphAttributes;for(const v in p){const M=p[v];for(let m=0,f=M.length;m<f;m++)e.update(M[m],34962)}}function c(d){const h=[],p=d.index,v=d.attributes.position;let M=0;if(p!==null){const b=p.array;M=p.version;for(let S=0,y=b.length;S<y;S+=3){const w=b[S+0],C=b[S+1],N=b[S+2];h.push(w,C,C,N,N,w)}}else{const b=v.array;M=v.version;for(let S=0,y=b.length/3-1;S<y;S+=3){const w=S+0,C=S+1,N=S+2;h.push(w,C,C,N,N,w)}}const m=new(ih(h)?dh:fh)(h,1);m.version=M;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Qx(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){n.drawElements(s,p,o,h*l),t.update(p,s,1)}function d(h,p,v){if(v===0)return;let M,m;if(r)M=n,m="drawElementsInstanced";else if(M=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[m](s,p,o,h*l,v),t.update(p,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function eM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tM(n,e){return n[0]-e[0]}function nM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function iM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Tt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let M=s.get(u);if(M===void 0||M.count!==v){let H=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",H)};M!==void 0&&M.texture.dispose();const b=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let U=0;b===!0&&(U=1),S===!0&&(U=2),y===!0&&(U=3);let T=u.attributes.position.count*U,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const K=new Float32Array(T*I*4*v),Q=new ah(K,T,I,v);Q.type=Ui,Q.needsUpdate=!0;const z=U*4;for(let Z=0;Z<v;Z++){const ae=w[Z],te=C[Z],$=N[Z],le=T*I*4*Z;for(let pe=0;pe<ae.count;pe++){const Ee=pe*z;b===!0&&(a.fromBufferAttribute(ae,pe),K[le+Ee+0]=a.x,K[le+Ee+1]=a.y,K[le+Ee+2]=a.z,K[le+Ee+3]=0),S===!0&&(a.fromBufferAttribute(te,pe),K[le+Ee+4]=a.x,K[le+Ee+5]=a.y,K[le+Ee+6]=a.z,K[le+Ee+7]=0),y===!0&&(a.fromBufferAttribute($,pe),K[le+Ee+8]=a.x,K[le+Ee+9]=a.y,K[le+Ee+10]=a.z,K[le+Ee+11]=$.itemSize===4?a.w:1)}}M={count:v,texture:Q,size:new st(T,I)},s.set(u,M),u.addEventListener("dispose",H)}let m=0;for(let b=0;b<h.length;b++)m+=h[b];const f=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",f),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",M.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",M.size)}else{const p=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==p){v=[];for(let S=0;S<p;S++)v[S]=[S,0];i[u.id]=v}for(let S=0;S<p;S++){const y=v[S];y[0]=S,y[1]=h[S]}v.sort(nM);for(let S=0;S<8;S++)S<p&&v[S][1]?(o[S][0]=v[S][0],o[S][1]=v[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(tM);const M=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let S=0;S<8;S++){const y=o[S],w=y[0],C=y[1];w!==Number.MAX_SAFE_INTEGER&&C?(M&&u.getAttribute("morphTarget"+S)!==M[w]&&u.setAttribute("morphTarget"+S,M[w]),m&&u.getAttribute("morphNormal"+S)!==m[w]&&u.setAttribute("morphNormal"+S,m[w]),r[S]=C,f+=C):(M&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),m&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const b=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function rM(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const vh=new Zt,xh=new ah,Mh=new X_,Sh=new mh,Uu=[],Ou=[],Fu=new Float32Array(16),ku=new Float32Array(9),zu=new Float32Array(4);function Or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Uu[r];if(s===void 0&&(s=new Float32Array(r),Uu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ua(n,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function lM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function cM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;zu.set(i),n.uniformMatrix2fv(this.addr,!1,zu),xt(t,i)}}function uM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;ku.set(i),n.uniformMatrix3fv(this.addr,!1,ku),xt(t,i)}}function fM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Fu.set(i),n.uniformMatrix4fv(this.addr,!1,Fu),xt(t,i)}}function dM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function mM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function gM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function MM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||vh,r)}function SM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Mh,r)}function yM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Sh,r)}function bM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||xh,r)}function EM(n){switch(n){case 5126:return sM;case 35664:return aM;case 35665:return oM;case 35666:return lM;case 35674:return cM;case 35675:return uM;case 35676:return fM;case 5124:case 35670:return dM;case 35667:case 35671:return hM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return _M;case 36295:return vM;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return bM}}function TM(n,e){n.uniform1fv(this.addr,e)}function wM(n,e){const t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function AM(n,e){const t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function CM(n,e){const t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function LM(n,e){const t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function PM(n,e){const t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RM(n,e){const t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function IM(n,e){n.uniform1iv(this.addr,e)}function DM(n,e){n.uniform2iv(this.addr,e)}function NM(n,e){n.uniform3iv(this.addr,e)}function UM(n,e){n.uniform4iv(this.addr,e)}function OM(n,e){n.uniform1uiv(this.addr,e)}function FM(n,e){n.uniform2uiv(this.addr,e)}function kM(n,e){n.uniform3uiv(this.addr,e)}function zM(n,e){n.uniform4uiv(this.addr,e)}function BM(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||vh,s[a])}function HM(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Mh,s[a])}function VM(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Sh,s[a])}function GM(n,e,t){const i=this.cache,r=e.length,s=Ua(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xh,s[a])}function WM(n){switch(n){case 5126:return TM;case 35664:return wM;case 35665:return AM;case 35666:return CM;case 35674:return LM;case 35675:return PM;case 35676:return RM;case 5124:case 35670:return IM;case 35667:case 35671:return DM;case 35668:case 35672:return NM;case 35669:case 35673:return UM;case 5125:return OM;case 36294:return FM;case 36295:return kM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return GM}}class $M{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=EM(t.type)}}class XM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=WM(t.type)}}class qM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const To=/(\w+)(\])?(\[|\.)?/g;function Bu(n,e){n.seq.push(e),n.map[e.id]=e}function jM(n,e,t){const i=n.name,r=i.length;for(To.lastIndex=0;;){const s=To.exec(i),a=To.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Bu(t,c===void 0?new $M(o,n,e):new XM(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new qM(o),Bu(t,d)),t=d}}}class ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);jM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Hu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let YM=0;function KM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function ZM(n){switch(n){case Vi:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Vu(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+KM(n.getShaderSource(e),a)}else return r}function JM(n,e){const t=ZM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function QM(n,e){let t;switch(e){case f_:t="Linear";break;case d_:t="Reinhard";break;case h_:t="OptimizedCineon";break;case p_:t="ACESFilmic";break;case m_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function eS(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qr).join(`
`)}function tS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nS(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qr(n){return n!==""}function Gu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iS=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(n){return n.replace(iS,rS)}function rS(n,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return tl(t)}const sS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(n){return n.replace(sS,aS)}function aS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xr&&(e="SHADOWMAP_TYPE_VSM"),e}function lS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case Tr:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function uS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qd:e="ENVMAP_BLENDING_MULTIPLY";break;case c_:e="ENVMAP_BLENDING_MIX";break;case u_:e="ENVMAP_BLENDING_ADD";break}return e}function fS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=oS(t),c=lS(t),u=cS(t),d=uS(t),h=fS(t),p=t.isWebGL2?"":eS(t),v=tS(s),M=r.createProgram();let m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[v].filter(qr).join(`
`),m.length>0&&(m+=`
`),f=[p,v].filter(qr).join(`
`),f.length>0&&(f+=`
`)):(m=[Xu(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),f=[p,Xu(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Wn?QM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,JM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),a=tl(a),a=Gu(a,t),a=Wu(a,t),o=tl(o),o=Gu(o,t),o=Wu(o,t),a=$u(a),o=$u(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=b+m+a,y=b+f+o,w=Hu(r,35633,S),C=Hu(r,35632,y);if(r.attachShader(M,w),r.attachShader(M,C),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M),n.debug.checkShaderErrors){const T=r.getProgramInfoLog(M).trim(),I=r.getShaderInfoLog(w).trim(),K=r.getShaderInfoLog(C).trim();let Q=!0,z=!0;if(r.getProgramParameter(M,35714)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,w,C);else{const H=Vu(r,w,"vertex"),Z=Vu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,35715)+`

Program Info Log: `+T+`
`+H+`
`+Z)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||K==="")&&(z=!1);z&&(this.diagnostics={runnable:Q,programLog:T,vertexShader:{log:I,prefix:m},fragmentShader:{log:K,prefix:f}})}r.deleteShader(w),r.deleteShader(C);let N;this.getUniforms=function(){return N===void 0&&(N=new ca(r,M)),N};let U;return this.getAttributes=function(){return U===void 0&&(U=nS(r,M)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.name=t.shaderName,this.id=YM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=C,this}let hS=0;class pS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mS(e),t.set(e,i)),i}}class mS{constructor(e){this.id=hS++,this.code=e,this.usedTimes=0}}function gS(n,e,t,i,r,s,a){const o=new lh,l=new pS,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return T===1?"uv2":"uv"}function m(T,I,K,Q,z){const H=Q.fog,Z=z.geometry,ae=T.isMeshStandardMaterial?Q.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||ae),$=te&&te.mapping===Ia?te.image.height:null,le=v[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const pe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ee=pe!==void 0?pe.length:0;let ve=0;Z.morphAttributes.position!==void 0&&(ve=1),Z.morphAttributes.normal!==void 0&&(ve=2),Z.morphAttributes.color!==void 0&&(ve=3);let Y,oe,k,j;if(le){const Te=Cn[le];Y=Te.vertexShader,oe=Te.fragmentShader}else Y=T.vertexShader,oe=T.fragmentShader,l.update(T),k=l.getVertexShaderID(T),j=l.getFragmentShaderID(T);const D=n.getRenderTarget(),de=z.isInstancedMesh===!0,xe=!!T.map,fe=!!T.matcap,me=!!te,A=!!T.aoMap,_=!!T.lightMap,x=!!T.bumpMap,P=!!T.normalMap,O=!!T.displacementMap,V=!!T.emissiveMap,ne=!!T.metalnessMap,ee=!!T.roughnessMap,ue=T.clearcoat>0,ce=T.iridescence>0,E=T.sheen>0,g=T.transmission>0,R=ue&&!!T.clearcoatMap,G=ue&&!!T.clearcoatNormalMap,q=ue&&!!T.clearcoatRoughnessMap,he=ce&&!!T.iridescenceMap,Me=ce&&!!T.iridescenceThicknessMap,_e=E&&!!T.sheenColorMap,J=E&&!!T.sheenRoughnessMap,Ae=!!T.specularMap,Ce=!!T.specularColorMap,Le=!!T.specularIntensityMap,we=g&&!!T.transmissionMap,be=g&&!!T.thicknessMap,Ue=!!T.gradientMap,Ye=!!T.alphaMap,ct=T.alphaTest>0,F=!!T.extensions,re=!!Z.attributes.uv2;return{isWebGL2:u,shaderID:le,shaderName:T.type,vertexShader:Y,fragmentShader:oe,defines:T.defines,customVertexShaderID:k,customFragmentShaderID:j,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,instancing:de,instancingColor:de&&z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:D===null?n.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:Vi,map:xe,matcap:fe,envMap:me,envMapMode:me&&te.mapping,envMapCubeUVHeight:$,aoMap:A,lightMap:_,bumpMap:x,normalMap:P,displacementMap:h&&O,emissiveMap:V,normalMapObjectSpace:P&&T.normalMapType===U_,normalMapTangentSpace:P&&T.normalMapType===N_,decodeVideoTexture:xe&&T.map.isVideoTexture===!0&&T.map.encoding===nt,metalnessMap:ne,roughnessMap:ee,clearcoat:ue,clearcoatMap:R,clearcoatNormalMap:G,clearcoatRoughnessMap:q,iridescence:ce,iridescenceMap:he,iridescenceThicknessMap:Me,sheen:E,sheenColorMap:_e,sheenRoughnessMap:J,specularMap:Ae,specularColorMap:Ce,specularIntensityMap:Le,transmission:g,transmissionMap:we,thicknessMap:be,gradientMap:Ue,opaque:T.transparent===!1&&T.blending===vr,alphaMap:Ye,alphaTest:ct,combine:T.combine,mapUv:xe&&M(T.map.channel),aoMapUv:A&&M(T.aoMap.channel),lightMapUv:_&&M(T.lightMap.channel),bumpMapUv:x&&M(T.bumpMap.channel),normalMapUv:P&&M(T.normalMap.channel),displacementMapUv:O&&M(T.displacementMap.channel),emissiveMapUv:V&&M(T.emissiveMap.channel),metalnessMapUv:ne&&M(T.metalnessMap.channel),roughnessMapUv:ee&&M(T.roughnessMap.channel),clearcoatMapUv:R&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:G&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:J&&M(T.sheenRoughnessMap.channel),specularMapUv:Ae&&M(T.specularMap.channel),specularColorMapUv:Ce&&M(T.specularColorMap.channel),specularIntensityMapUv:Le&&M(T.specularIntensityMap.channel),transmissionMapUv:we&&M(T.transmissionMap.channel),thicknessMapUv:be&&M(T.thicknessMap.channel),alphaMapUv:Ye&&M(T.alphaMap.channel),vertexTangents:P&&!!Z.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUvs2:re,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(xe||Ye),fog:!!H,useFog:T.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ve,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:T.toneMapped?n.toneMapping:Wn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Hn,flipSided:T.side===Ht,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:F&&T.extensions.derivatives===!0,extensionFragDepth:F&&T.extensions.fragDepth===!0,extensionDrawBuffers:F&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:F&&T.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function f(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const K in T.defines)I.push(K),I.push(T.defines[K]);return T.isRawShaderMaterial===!1&&(b(I,T),S(I,T),I.push(n.outputEncoding)),I.push(T.customProgramCacheKey),I.join()}function b(T,I){T.push(I.precision),T.push(I.outputEncoding),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function S(T,I){o.disableAll(),I.isWebGL2&&o.enable(0),I.supportsVertexTextures&&o.enable(1),I.instancing&&o.enable(2),I.instancingColor&&o.enable(3),I.matcap&&o.enable(4),I.envMap&&o.enable(5),I.normalMapObjectSpace&&o.enable(6),I.normalMapTangentSpace&&o.enable(7),I.clearcoat&&o.enable(8),I.iridescence&&o.enable(9),I.alphaTest&&o.enable(10),I.vertexColors&&o.enable(11),I.vertexAlphas&&o.enable(12),I.vertexUvs2&&o.enable(13),I.vertexTangents&&o.enable(14),T.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.skinning&&o.enable(4),I.morphTargets&&o.enable(5),I.morphNormals&&o.enable(6),I.morphColors&&o.enable(7),I.premultipliedAlpha&&o.enable(8),I.shadowMapEnabled&&o.enable(9),I.useLegacyLights&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.transmission&&o.enable(15),I.sheen&&o.enable(16),I.decodeVideoTexture&&o.enable(17),I.opaque&&o.enable(18),I.pointsUvs&&o.enable(19),T.push(o.mask)}function y(T){const I=v[T.type];let K;if(I){const Q=Cn[I];K=rv.clone(Q.uniforms)}else K=T.uniforms;return K}function w(T,I){let K;for(let Q=0,z=c.length;Q<z;Q++){const H=c[Q];if(H.cacheKey===I){K=H,++K.usedTimes;break}}return K===void 0&&(K=new dS(n,I,T,s),c.push(K)),K}function C(T){if(--T.usedTimes===0){const I=c.indexOf(T);c[I]=c[c.length-1],c.pop(),T.destroy()}}function N(T){l.remove(T)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:C,releaseShaderCache:N,programs:c,dispose:U}}function _S(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function vS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ju(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,p,v,M,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:M,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=M,f.group=m),e++,f}function o(d,h,p,v,M,m){const f=a(d,h,p,v,M,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,v,M,m){const f=a(d,h,p,v,M,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||vS),i.length>1&&i.sort(h||qu),r.length>1&&r.sort(h||qu)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function xS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ju,n.set(i,[a])):r>=s.length?(a=new ju,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function MS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Qe};break;case"SpotLight":t={position:new X,direction:new X,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function SS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yS=0;function bS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ES(n,e){const t=new MS,i=SS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new X);const s=new X,a=new yt,o=new yt;function l(u,d){let h=0,p=0,v=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let M=0,m=0,f=0,b=0,S=0,y=0,w=0,C=0,N=0,U=0;u.sort(bS);const T=d===!0?Math.PI:1;for(let K=0,Q=u.length;K<Q;K++){const z=u[K],H=z.color,Z=z.intensity,ae=z.distance,te=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=H.r*Z*T,p+=H.g*Z*T,v+=H.b*Z*T;else if(z.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(z.sh.coefficients[$],Z);else if(z.isDirectionalLight){const $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const le=z.shadow,pe=i.get(z);pe.shadowBias=le.bias,pe.shadowNormalBias=le.normalBias,pe.shadowRadius=le.radius,pe.shadowMapSize=le.mapSize,r.directionalShadow[M]=pe,r.directionalShadowMap[M]=te,r.directionalShadowMatrix[M]=z.shadow.matrix,y++}r.directional[M]=$,M++}else if(z.isSpotLight){const $=t.get(z);$.position.setFromMatrixPosition(z.matrixWorld),$.color.copy(H).multiplyScalar(Z*T),$.distance=ae,$.coneCos=Math.cos(z.angle),$.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),$.decay=z.decay,r.spot[f]=$;const le=z.shadow;if(z.map&&(r.spotLightMap[N]=z.map,N++,le.updateMatrices(z),z.castShadow&&U++),r.spotLightMatrix[f]=le.matrix,z.castShadow){const pe=i.get(z);pe.shadowBias=le.bias,pe.shadowNormalBias=le.normalBias,pe.shadowRadius=le.radius,pe.shadowMapSize=le.mapSize,r.spotShadow[f]=pe,r.spotShadowMap[f]=te,C++}f++}else if(z.isRectAreaLight){const $=t.get(z);$.color.copy(H).multiplyScalar(Z),$.halfWidth.set(z.width*.5,0,0),$.halfHeight.set(0,z.height*.5,0),r.rectArea[b]=$,b++}else if(z.isPointLight){const $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*T),$.distance=z.distance,$.decay=z.decay,z.castShadow){const le=z.shadow,pe=i.get(z);pe.shadowBias=le.bias,pe.shadowNormalBias=le.normalBias,pe.shadowRadius=le.radius,pe.shadowMapSize=le.mapSize,pe.shadowCameraNear=le.camera.near,pe.shadowCameraFar=le.camera.far,r.pointShadow[m]=pe,r.pointShadowMap[m]=te,r.pointShadowMatrix[m]=z.shadow.matrix,w++}r.point[m]=$,m++}else if(z.isHemisphereLight){const $=t.get(z);$.skyColor.copy(z.color).multiplyScalar(Z*T),$.groundColor.copy(z.groundColor).multiplyScalar(Z*T),r.hemi[S]=$,S++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const I=r.hash;(I.directionalLength!==M||I.pointLength!==m||I.spotLength!==f||I.rectAreaLength!==b||I.hemiLength!==S||I.numDirectionalShadows!==y||I.numPointShadows!==w||I.numSpotShadows!==C||I.numSpotMaps!==N)&&(r.directional.length=M,r.spot.length=f,r.rectArea.length=b,r.point.length=m,r.hemi.length=S,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+N-U,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=U,I.directionalLength=M,I.pointLength=m,I.spotLength=f,I.rectAreaLength=b,I.hemiLength=S,I.numDirectionalShadows=y,I.numPointShadows=w,I.numSpotShadows=C,I.numSpotMaps=N,r.version=yS++)}function c(u,d){let h=0,p=0,v=0,M=0,m=0;const f=d.matrixWorldInverse;for(let b=0,S=u.length;b<S;b++){const y=u[b];if(y.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),h++}else if(y.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const w=r.rectArea[M];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),M++}else if(y.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Yu(n,e){const t=new ES(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function TS(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Yu(n,e),t.set(s,[l])):a>=o.length?(l=new Yu(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class wS extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AS extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PS(n,e,t){let i=new gh;const r=new st,s=new st,a=new Tt,o=new wS({depthPacking:D_}),l=new AS,c={},u=t.maxTextureSize,d={[di]:Ht,[Ht]:di,[Hn]:Hn},h=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:CS,fragmentShader:LS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new qn;v.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new si(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kd,this.render=function(y,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const N=n.getRenderTarget(),U=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ci),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let K=0,Q=y.length;K<Q;K++){const z=y[K],H=z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Z=H.getFrameExtents();if(r.multiply(Z),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,H.mapSize.y=s.y)),H.map===null){const te=this.type!==Xr?{minFilter:Ft,magFilter:Ft}:{};H.map=new Gi(r.x,r.y,te),H.map.texture.name=z.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ae=H.getViewportCount();for(let te=0;te<ae;te++){const $=H.getViewport(te);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),I.viewport(a),H.updateMatrices(z,te),i=H.getFrustum(),S(w,C,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Xr&&f(H,C),H.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(N,U,T)};function f(y,w){const C=e.update(M);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Gi(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(w,null,C,h,M,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(w,null,C,p,M,null)}function b(y,w,C,N){let U=null;const T=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(T!==void 0)U=T;else if(U=C.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=U.uuid,K=w.uuid;let Q=c[I];Q===void 0&&(Q={},c[I]=Q);let z=Q[K];z===void 0&&(z=U.clone(),Q[K]=z),U=z}if(U.visible=w.visible,U.wireframe=w.wireframe,N===Xr?U.side=w.shadowSide!==null?w.shadowSide:w.side:U.side=w.shadowSide!==null?w.shadowSide:d[w.side],U.alphaMap=w.alphaMap,U.alphaTest=w.alphaTest,U.map=w.map,U.clipShadows=w.clipShadows,U.clippingPlanes=w.clippingPlanes,U.clipIntersection=w.clipIntersection,U.displacementMap=w.displacementMap,U.displacementScale=w.displacementScale,U.displacementBias=w.displacementBias,U.wireframeLinewidth=w.wireframeLinewidth,U.linewidth=w.linewidth,C.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const I=n.properties.get(U);I.light=C}return U}function S(y,w,C,N,U){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&U===Xr)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const K=e.update(y),Q=y.material;if(Array.isArray(Q)){const z=K.groups;for(let H=0,Z=z.length;H<Z;H++){const ae=z[H],te=Q[ae.materialIndex];if(te&&te.visible){const $=b(y,te,N,U);n.renderBufferDirect(C,null,K,$,y,ae)}}}else if(Q.visible){const z=b(y,Q,N,U);n.renderBufferDirect(C,null,K,z,y,null)}}const I=y.children;for(let K=0,Q=I.length;K<Q;K++)S(I[K],w,C,N,U)}}function RS(n,e,t){const i=t.isWebGL2;function r(){let F=!1;const re=new Tt;let ge=null;const Te=new Tt(0,0,0,0);return{setMask:function(Pe){ge!==Pe&&!F&&(n.colorMask(Pe,Pe,Pe,Pe),ge=Pe)},setLocked:function(Pe){F=Pe},setClear:function(Pe,tt,at,At,jn){jn===!0&&(Pe*=At,tt*=At,at*=At),re.set(Pe,tt,at,At),Te.equals(re)===!1&&(n.clearColor(Pe,tt,at,At),Te.copy(re))},reset:function(){F=!1,ge=null,Te.set(-1,0,0,0)}}}function s(){let F=!1,re=null,ge=null,Te=null;return{setTest:function(Pe){Pe?D(2929):de(2929)},setMask:function(Pe){re!==Pe&&!F&&(n.depthMask(Pe),re=Pe)},setFunc:function(Pe){if(ge!==Pe){switch(Pe){case n_:n.depthFunc(512);break;case i_:n.depthFunc(519);break;case r_:n.depthFunc(513);break;case jo:n.depthFunc(515);break;case s_:n.depthFunc(514);break;case a_:n.depthFunc(518);break;case o_:n.depthFunc(516);break;case l_:n.depthFunc(517);break;default:n.depthFunc(515)}ge=Pe}},setLocked:function(Pe){F=Pe},setClear:function(Pe){Te!==Pe&&(n.clearDepth(Pe),Te=Pe)},reset:function(){F=!1,re=null,ge=null,Te=null}}}function a(){let F=!1,re=null,ge=null,Te=null,Pe=null,tt=null,at=null,At=null,jn=null;return{setTest:function(ut){F||(ut?D(2960):de(2960))},setMask:function(ut){re!==ut&&!F&&(n.stencilMask(ut),re=ut)},setFunc:function(ut,Jt,yn){(ge!==ut||Te!==Jt||Pe!==yn)&&(n.stencilFunc(ut,Jt,yn),ge=ut,Te=Jt,Pe=yn)},setOp:function(ut,Jt,yn){(tt!==ut||at!==Jt||At!==yn)&&(n.stencilOp(ut,Jt,yn),tt=ut,at=Jt,At=yn)},setLocked:function(ut){F=ut},setClear:function(ut){jn!==ut&&(n.clearStencil(ut),jn=ut)},reset:function(){F=!1,re=null,ge=null,Te=null,Pe=null,tt=null,at=null,At=null,jn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let h={},p={},v=new WeakMap,M=[],m=null,f=!1,b=null,S=null,y=null,w=null,C=null,N=null,U=null,T=!1,I=null,K=null,Q=null,z=null,H=null;const Z=n.getParameter(35661);let ae=!1,te=0;const $=n.getParameter(7938);$.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec($)[1]),ae=te>=1):$.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ae=te>=2);let le=null,pe={};const Ee=n.getParameter(3088),ve=n.getParameter(2978),Y=new Tt().fromArray(Ee),oe=new Tt().fromArray(ve);function k(F,re,ge){const Te=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(F,Pe),n.texParameteri(F,10241,9728),n.texParameteri(F,10240,9728);for(let tt=0;tt<ge;tt++)n.texImage2D(re+tt,0,6408,1,1,0,6408,5121,Te);return Pe}const j={};j[3553]=k(3553,3553,1),j[34067]=k(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),D(2929),l.setFunc(jo),O(!1),V(Uc),D(2884),x(ci);function D(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function de(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function xe(F,re){return p[F]!==re?(n.bindFramebuffer(F,re),p[F]=re,i&&(F===36009&&(p[36160]=re),F===36160&&(p[36009]=re)),!0):!1}function fe(F,re){let ge=M,Te=!1;if(F)if(ge=v.get(re),ge===void 0&&(ge=[],v.set(re,ge)),F.isWebGLMultipleRenderTargets){const Pe=F.texture;if(ge.length!==Pe.length||ge[0]!==36064){for(let tt=0,at=Pe.length;tt<at;tt++)ge[tt]=36064+tt;ge.length=Pe.length,Te=!0}}else ge[0]!==36064&&(ge[0]=36064,Te=!0);else ge[0]!==1029&&(ge[0]=1029,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function me(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const A={[cr]:32774,[$g]:32778,[Xg]:32779};if(i)A[zc]=32775,A[Bc]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(A[zc]=F.MIN_EXT,A[Bc]=F.MAX_EXT)}const _={[qg]:0,[jg]:1,[Yg]:768,[Zd]:770,[t_]:776,[Qg]:774,[Zg]:772,[Kg]:769,[Jd]:771,[e_]:775,[Jg]:773};function x(F,re,ge,Te,Pe,tt,at,At){if(F===ci){f===!0&&(de(3042),f=!1);return}if(f===!1&&(D(3042),f=!0),F!==Wg){if(F!==b||At!==T){if((S!==cr||C!==cr)&&(n.blendEquation(32774),S=cr,C=cr),At)switch(F){case vr:n.blendFuncSeparate(1,771,1,771);break;case Oc:n.blendFunc(1,1);break;case Fc:n.blendFuncSeparate(0,769,0,1);break;case kc:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case vr:n.blendFuncSeparate(770,771,1,771);break;case Oc:n.blendFunc(770,1);break;case Fc:n.blendFuncSeparate(0,769,0,1);break;case kc:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,w=null,N=null,U=null,b=F,T=At}return}Pe=Pe||re,tt=tt||ge,at=at||Te,(re!==S||Pe!==C)&&(n.blendEquationSeparate(A[re],A[Pe]),S=re,C=Pe),(ge!==y||Te!==w||tt!==N||at!==U)&&(n.blendFuncSeparate(_[ge],_[Te],_[tt],_[at]),y=ge,w=Te,N=tt,U=at),b=F,T=!1}function P(F,re){F.side===Hn?de(2884):D(2884);let ge=F.side===Ht;re&&(ge=!ge),O(ge),F.blending===vr&&F.transparent===!1?x(ci):x(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const Te=F.stencilWrite;c.setTest(Te),Te&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ee(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?D(32926):de(32926)}function O(F){I!==F&&(F?n.frontFace(2304):n.frontFace(2305),I=F)}function V(F){F!==Hg?(D(2884),F!==K&&(F===Uc?n.cullFace(1029):F===Vg?n.cullFace(1028):n.cullFace(1032))):de(2884),K=F}function ne(F){F!==Q&&(ae&&n.lineWidth(F),Q=F)}function ee(F,re,ge){F?(D(32823),(z!==re||H!==ge)&&(n.polygonOffset(re,ge),z=re,H=ge)):de(32823)}function ue(F){F?D(3089):de(3089)}function ce(F){F===void 0&&(F=33984+Z-1),le!==F&&(n.activeTexture(F),le=F)}function E(F,re,ge){ge===void 0&&(le===null?ge=33984+Z-1:ge=le);let Te=pe[ge];Te===void 0&&(Te={type:void 0,texture:void 0},pe[ge]=Te),(Te.type!==F||Te.texture!==re)&&(le!==ge&&(n.activeTexture(ge),le=ge),n.bindTexture(F,re||j[F]),Te.type=F,Te.texture=re)}function g(){const F=pe[le];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function R(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(F){Y.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Y.copy(F))}function be(F){oe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),oe.copy(F))}function Ue(F,re){let ge=d.get(re);ge===void 0&&(ge=new WeakMap,d.set(re,ge));let Te=ge.get(F);Te===void 0&&(Te=n.getUniformBlockIndex(re,F.name),ge.set(F,Te))}function Ye(F,re){const Te=d.get(re).get(F);u.get(re)!==Te&&(n.uniformBlockBinding(re,Te,F.__bindingPointIndex),u.set(re,Te))}function ct(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},le=null,pe={},p={},v=new WeakMap,M=[],m=null,f=!1,b=null,S=null,y=null,w=null,C=null,N=null,U=null,T=!1,I=null,K=null,Q=null,z=null,H=null,Y.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:D,disable:de,bindFramebuffer:xe,drawBuffers:fe,useProgram:me,setBlending:x,setMaterial:P,setFlipSided:O,setCullFace:V,setLineWidth:ne,setPolygonOffset:ee,setScissorTest:ue,activeTexture:ce,bindTexture:E,unbindTexture:g,compressedTexImage2D:R,compressedTexImage3D:G,texImage2D:Ce,texImage3D:Le,updateUBOMapping:Ue,uniformBlockBinding:Ye,texStorage2D:J,texStorage3D:Ae,texSubImage2D:q,texSubImage3D:he,compressedTexSubImage2D:Me,compressedTexSubImage3D:_e,scissor:we,viewport:be,reset:ct}}function IS(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let M;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,g){return f?new OffscreenCanvas(E,g):ma("canvas")}function S(E,g,R,G){let q=1;if((E.width>G||E.height>G)&&(q=G/Math.max(E.width,E.height)),q<1||g===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const he=g?k_:Math.floor,Me=he(q*E.width),_e=he(q*E.height);M===void 0&&(M=b(Me,_e));const J=R?b(Me,_e):M;return J.width=Me,J.height=_e,J.getContext("2d").drawImage(E,0,0,Me,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Me+"x"+_e+")."),J}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return hu(E.width)&&hu(E.height)}function w(E){return o?!1:E.wrapS!==mn||E.wrapT!==mn||E.minFilter!==Ft&&E.minFilter!==nn}function C(E,g){return E.generateMipmaps&&g&&E.minFilter!==Ft&&E.minFilter!==nn}function N(E){n.generateMipmap(E)}function U(E,g,R,G,q=!1){if(o===!1)return g;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let he=g;return g===6403&&(R===5126&&(he=33326),R===5131&&(he=33325),R===5121&&(he=33321)),g===33319&&(R===5126&&(he=33328),R===5131&&(he=33327),R===5121&&(he=33323)),g===6408&&(R===5126&&(he=34836),R===5131&&(he=34842),R===5121&&(he=G===nt&&q===!1?35907:32856),R===32819&&(he=32854),R===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function T(E,g,R){return C(E,R)===!0||E.isFramebufferTexture&&E.minFilter!==Ft&&E.minFilter!==nn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function I(E){return E===Ft||E===Hc||E===Ka?9728:9729}function K(E){const g=E.target;g.removeEventListener("dispose",K),z(g),g.isVideoTexture&&v.delete(g)}function Q(E){const g=E.target;g.removeEventListener("dispose",Q),Z(g)}function z(E){const g=i.get(E);if(g.__webglInit===void 0)return;const R=E.source,G=m.get(R);if(G){const q=G[g.__cacheKey];q.usedTimes--,q.usedTimes===0&&H(E),Object.keys(G).length===0&&m.delete(R)}i.remove(E)}function H(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const R=E.source,G=m.get(R);delete G[g.__cacheKey],a.memory.textures--}function Z(E){const g=E.texture,R=i.get(E),G=i.get(g);if(G.__webglTexture!==void 0&&(n.deleteTexture(G.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++)n.deleteFramebuffer(R.__webglFramebuffer[q]),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[q]);else{if(n.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let q=0;q<R.__webglColorRenderbuffer.length;q++)R.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[q]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let q=0,he=g.length;q<he;q++){const Me=i.get(g[q]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(g[q])}i.remove(g),i.remove(E)}let ae=0;function te(){ae=0}function $(){const E=ae;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),ae+=1,E}function le(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.encoding),g.join()}function pe(E,g){const R=i.get(E);if(E.isVideoTexture&&ue(E),E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(R,E,g);return}}t.bindTexture(3553,R.__webglTexture,33984+g)}function Ee(E,g){const R=i.get(E);if(E.version>0&&R.__version!==E.version){de(R,E,g);return}t.bindTexture(35866,R.__webglTexture,33984+g)}function ve(E,g){const R=i.get(E);if(E.version>0&&R.__version!==E.version){de(R,E,g);return}t.bindTexture(32879,R.__webglTexture,33984+g)}function Y(E,g){const R=i.get(E);if(E.version>0&&R.__version!==E.version){xe(R,E,g);return}t.bindTexture(34067,R.__webglTexture,33984+g)}const oe={[Zo]:10497,[mn]:33071,[Jo]:33648},k={[Ft]:9728,[Hc]:9984,[Ka]:9986,[nn]:9729,[g_]:9985,[os]:9987};function j(E,g,R){if(R?(n.texParameteri(E,10242,oe[g.wrapS]),n.texParameteri(E,10243,oe[g.wrapT]),(E===32879||E===35866)&&n.texParameteri(E,32882,oe[g.wrapR]),n.texParameteri(E,10240,k[g.magFilter]),n.texParameteri(E,10241,k[g.minFilter])):(n.texParameteri(E,10242,33071),n.texParameteri(E,10243,33071),(E===32879||E===35866)&&n.texParameteri(E,32882,33071),(g.wrapS!==mn||g.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,10240,I(g.magFilter)),n.texParameteri(E,10241,I(g.minFilter)),g.minFilter!==Ft&&g.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Ft||g.minFilter!==Ka&&g.minFilter!==os||g.type===Ui&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===ls&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function D(E,g){let R=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",K));const G=g.source;let q=m.get(G);q===void 0&&(q={},m.set(G,q));const he=le(g);if(he!==E.__cacheKey){q[he]===void 0&&(q[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),q[he].usedTimes++;const Me=q[E.__cacheKey];Me!==void 0&&(q[E.__cacheKey].usedTimes--,Me.usedTimes===0&&H(g)),E.__cacheKey=he,E.__webglTexture=q[he].texture}return R}function de(E,g,R){let G=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=35866),g.isData3DTexture&&(G=32879);const q=D(E,g),he=g.source;t.bindTexture(G,E.__webglTexture,33984+R);const Me=i.get(he);if(he.version!==Me.__version||q===!0){t.activeTexture(33984+R),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const _e=w(g)&&y(g.image)===!1;let J=S(g.image,_e,!1,u);J=ce(g,J);const Ae=y(J)||o,Ce=s.convert(g.format,g.encoding);let Le=s.convert(g.type),we=U(g.internalFormat,Ce,Le,g.encoding,g.isVideoTexture);j(G,g,Ae);let be;const Ue=g.mipmaps,Ye=o&&g.isVideoTexture!==!0,ct=Me.__version===void 0||q===!0,F=T(g,J,Ae);if(g.isDepthTexture)we=6402,o?g.type===Ui?we=36012:g.type===Ni?we=33190:g.type===xr?we=35056:we=33189:g.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Bi&&we===6402&&g.type!==th&&g.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Ni,Le=s.convert(g.type)),g.format===wr&&we===6402&&(we=34041,g.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=xr,Le=s.convert(g.type))),ct&&(Ye?t.texStorage2D(3553,1,we,J.width,J.height):t.texImage2D(3553,0,we,J.width,J.height,0,Ce,Le,null));else if(g.isDataTexture)if(Ue.length>0&&Ae){Ye&&ct&&t.texStorage2D(3553,F,we,Ue[0].width,Ue[0].height);for(let re=0,ge=Ue.length;re<ge;re++)be=Ue[re],Ye?t.texSubImage2D(3553,re,0,0,be.width,be.height,Ce,Le,be.data):t.texImage2D(3553,re,we,be.width,be.height,0,Ce,Le,be.data);g.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(3553,F,we,J.width,J.height),t.texSubImage2D(3553,0,0,0,J.width,J.height,Ce,Le,J.data)):t.texImage2D(3553,0,we,J.width,J.height,0,Ce,Le,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ye&&ct&&t.texStorage3D(35866,F,we,Ue[0].width,Ue[0].height,J.depth);for(let re=0,ge=Ue.length;re<ge;re++)be=Ue[re],g.format!==gn?Ce!==null?Ye?t.compressedTexSubImage3D(35866,re,0,0,0,be.width,be.height,J.depth,Ce,be.data,0,0):t.compressedTexImage3D(35866,re,we,be.width,be.height,J.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(35866,re,0,0,0,be.width,be.height,J.depth,Ce,Le,be.data):t.texImage3D(35866,re,we,be.width,be.height,J.depth,0,Ce,Le,be.data)}else{Ye&&ct&&t.texStorage2D(3553,F,we,Ue[0].width,Ue[0].height);for(let re=0,ge=Ue.length;re<ge;re++)be=Ue[re],g.format!==gn?Ce!==null?Ye?t.compressedTexSubImage2D(3553,re,0,0,be.width,be.height,Ce,be.data):t.compressedTexImage2D(3553,re,we,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(3553,re,0,0,be.width,be.height,Ce,Le,be.data):t.texImage2D(3553,re,we,be.width,be.height,0,Ce,Le,be.data)}else if(g.isDataArrayTexture)Ye?(ct&&t.texStorage3D(35866,F,we,J.width,J.height,J.depth),t.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,Ce,Le,J.data)):t.texImage3D(35866,0,we,J.width,J.height,J.depth,0,Ce,Le,J.data);else if(g.isData3DTexture)Ye?(ct&&t.texStorage3D(32879,F,we,J.width,J.height,J.depth),t.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,Ce,Le,J.data)):t.texImage3D(32879,0,we,J.width,J.height,J.depth,0,Ce,Le,J.data);else if(g.isFramebufferTexture){if(ct)if(Ye)t.texStorage2D(3553,F,we,J.width,J.height);else{let re=J.width,ge=J.height;for(let Te=0;Te<F;Te++)t.texImage2D(3553,Te,we,re,ge,0,Ce,Le,null),re>>=1,ge>>=1}}else if(Ue.length>0&&Ae){Ye&&ct&&t.texStorage2D(3553,F,we,Ue[0].width,Ue[0].height);for(let re=0,ge=Ue.length;re<ge;re++)be=Ue[re],Ye?t.texSubImage2D(3553,re,0,0,Ce,Le,be):t.texImage2D(3553,re,we,Ce,Le,be);g.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(3553,F,we,J.width,J.height),t.texSubImage2D(3553,0,0,0,Ce,Le,J)):t.texImage2D(3553,0,we,Ce,Le,J);C(g,Ae)&&N(G),Me.__version=he.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function xe(E,g,R){if(g.image.length!==6)return;const G=D(E,g),q=g.source;t.bindTexture(34067,E.__webglTexture,33984+R);const he=i.get(q);if(q.version!==he.__version||G===!0){t.activeTexture(33984+R),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const Me=g.isCompressedTexture||g.image[0].isCompressedTexture,_e=g.image[0]&&g.image[0].isDataTexture,J=[];for(let re=0;re<6;re++)!Me&&!_e?J[re]=S(g.image[re],!1,!0,c):J[re]=_e?g.image[re].image:g.image[re],J[re]=ce(g,J[re]);const Ae=J[0],Ce=y(Ae)||o,Le=s.convert(g.format,g.encoding),we=s.convert(g.type),be=U(g.internalFormat,Le,we,g.encoding),Ue=o&&g.isVideoTexture!==!0,Ye=he.__version===void 0||G===!0;let ct=T(g,Ae,Ce);j(34067,g,Ce);let F;if(Me){Ue&&Ye&&t.texStorage2D(34067,ct,be,Ae.width,Ae.height);for(let re=0;re<6;re++){F=J[re].mipmaps;for(let ge=0;ge<F.length;ge++){const Te=F[ge];g.format!==gn?Le!==null?Ue?t.compressedTexSubImage2D(34069+re,ge,0,0,Te.width,Te.height,Le,Te.data):t.compressedTexImage2D(34069+re,ge,be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(34069+re,ge,0,0,Te.width,Te.height,Le,we,Te.data):t.texImage2D(34069+re,ge,be,Te.width,Te.height,0,Le,we,Te.data)}}}else{F=g.mipmaps,Ue&&Ye&&(F.length>0&&ct++,t.texStorage2D(34067,ct,be,J[0].width,J[0].height));for(let re=0;re<6;re++)if(_e){Ue?t.texSubImage2D(34069+re,0,0,0,J[re].width,J[re].height,Le,we,J[re].data):t.texImage2D(34069+re,0,be,J[re].width,J[re].height,0,Le,we,J[re].data);for(let ge=0;ge<F.length;ge++){const Pe=F[ge].image[re].image;Ue?t.texSubImage2D(34069+re,ge+1,0,0,Pe.width,Pe.height,Le,we,Pe.data):t.texImage2D(34069+re,ge+1,be,Pe.width,Pe.height,0,Le,we,Pe.data)}}else{Ue?t.texSubImage2D(34069+re,0,0,0,Le,we,J[re]):t.texImage2D(34069+re,0,be,Le,we,J[re]);for(let ge=0;ge<F.length;ge++){const Te=F[ge];Ue?t.texSubImage2D(34069+re,ge+1,0,0,Le,we,Te.image[re]):t.texImage2D(34069+re,ge+1,be,Le,we,Te.image[re])}}}C(g,Ce)&&N(34067),he.__version=q.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function fe(E,g,R,G,q){const he=s.convert(R.format,R.encoding),Me=s.convert(R.type),_e=U(R.internalFormat,he,Me,R.encoding);i.get(g).__hasExternalTextures||(q===32879||q===35866?t.texImage3D(q,0,_e,g.width,g.height,g.depth,0,he,Me,null):t.texImage2D(q,0,_e,g.width,g.height,0,he,Me,null)),t.bindFramebuffer(36160,E),ee(g)?h.framebufferTexture2DMultisampleEXT(36160,G,q,i.get(R).__webglTexture,0,ne(g)):(q===3553||q>=34069&&q<=34074)&&n.framebufferTexture2D(36160,G,q,i.get(R).__webglTexture,0),t.bindFramebuffer(36160,null)}function me(E,g,R){if(n.bindRenderbuffer(36161,E),g.depthBuffer&&!g.stencilBuffer){let G=33189;if(R||ee(g)){const q=g.depthTexture;q&&q.isDepthTexture&&(q.type===Ui?G=36012:q.type===Ni&&(G=33190));const he=ne(g);ee(g)?h.renderbufferStorageMultisampleEXT(36161,he,G,g.width,g.height):n.renderbufferStorageMultisample(36161,he,G,g.width,g.height)}else n.renderbufferStorage(36161,G,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,E)}else if(g.depthBuffer&&g.stencilBuffer){const G=ne(g);R&&ee(g)===!1?n.renderbufferStorageMultisample(36161,G,35056,g.width,g.height):ee(g)?h.renderbufferStorageMultisampleEXT(36161,G,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,E)}else{const G=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let q=0;q<G.length;q++){const he=G[q],Me=s.convert(he.format,he.encoding),_e=s.convert(he.type),J=U(he.internalFormat,Me,_e,he.encoding),Ae=ne(g);R&&ee(g)===!1?n.renderbufferStorageMultisample(36161,Ae,J,g.width,g.height):ee(g)?h.renderbufferStorageMultisampleEXT(36161,Ae,J,g.width,g.height):n.renderbufferStorage(36161,J,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function A(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),pe(g.depthTexture,0);const G=i.get(g.depthTexture).__webglTexture,q=ne(g);if(g.depthTexture.format===Bi)ee(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,G,0,q):n.framebufferTexture2D(36160,36096,3553,G,0);else if(g.depthTexture.format===wr)ee(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,G,0,q):n.framebufferTexture2D(36160,33306,3553,G,0);else throw new Error("Unknown depthTexture format")}function _(E){const g=i.get(E),R=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");A(g.__webglFramebuffer,E)}else if(R){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)t.bindFramebuffer(36160,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]=n.createRenderbuffer(),me(g.__webglDepthbuffer[G],E,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),me(g.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function x(E,g,R){const G=i.get(E);g!==void 0&&fe(G.__webglFramebuffer,E,E.texture,36064,3553),R!==void 0&&_(E)}function P(E){const g=E.texture,R=i.get(E),G=i.get(g);E.addEventListener("dispose",Q),E.isWebGLMultipleRenderTargets!==!0&&(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,a.memory.textures++);const q=E.isWebGLCubeRenderTarget===!0,he=E.isWebGLMultipleRenderTargets===!0,Me=y(E)||o;if(q){R.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)R.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(R.__webglFramebuffer=n.createFramebuffer(),he)if(r.drawBuffers){const _e=E.texture;for(let J=0,Ae=_e.length;J<Ae;J++){const Ce=i.get(_e[J]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&ee(E)===!1){const _e=he?g:[g];R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer);for(let J=0;J<_e.length;J++){const Ae=_e[J];R.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(36161,R.__webglColorRenderbuffer[J]);const Ce=s.convert(Ae.format,Ae.encoding),Le=s.convert(Ae.type),we=U(Ae.internalFormat,Ce,Le,Ae.encoding,E.isXRRenderTarget===!0),be=ne(E);n.renderbufferStorageMultisample(36161,be,we,E.width,E.height),n.framebufferRenderbuffer(36160,36064+J,36161,R.__webglColorRenderbuffer[J])}n.bindRenderbuffer(36161,null),E.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),me(R.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(q){t.bindTexture(34067,G.__webglTexture),j(34067,g,Me);for(let _e=0;_e<6;_e++)fe(R.__webglFramebuffer[_e],E,g,36064,34069+_e);C(g,Me)&&N(34067),t.unbindTexture()}else if(he){const _e=E.texture;for(let J=0,Ae=_e.length;J<Ae;J++){const Ce=_e[J],Le=i.get(Ce);t.bindTexture(3553,Le.__webglTexture),j(3553,Ce,Me),fe(R.__webglFramebuffer,E,Ce,36064+J,3553),C(Ce,Me)&&N(3553)}t.unbindTexture()}else{let _e=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?_e=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,G.__webglTexture),j(_e,g,Me),fe(R.__webglFramebuffer,E,g,36064,_e),C(g,Me)&&N(_e),t.unbindTexture()}E.depthBuffer&&_(E)}function O(E){const g=y(E)||o,R=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let G=0,q=R.length;G<q;G++){const he=R[G];if(C(he,g)){const Me=E.isWebGLCubeRenderTarget?34067:3553,_e=i.get(he).__webglTexture;t.bindTexture(Me,_e),N(Me),t.unbindTexture()}}}function V(E){if(o&&E.samples>0&&ee(E)===!1){const g=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],R=E.width,G=E.height;let q=16384;const he=[],Me=E.stencilBuffer?33306:36096,_e=i.get(E),J=E.isWebGLMultipleRenderTargets===!0;if(J)for(let Ae=0;Ae<g.length;Ae++)t.bindFramebuffer(36160,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ae,36161,null),t.bindFramebuffer(36160,_e.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ae,3553,null,0);t.bindFramebuffer(36008,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,_e.__webglFramebuffer);for(let Ae=0;Ae<g.length;Ae++){he.push(36064+Ae),E.depthBuffer&&he.push(Me);const Ce=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Ce===!1&&(E.depthBuffer&&(q|=256),E.stencilBuffer&&(q|=1024)),J&&n.framebufferRenderbuffer(36008,36064,36161,_e.__webglColorRenderbuffer[Ae]),Ce===!0&&(n.invalidateFramebuffer(36008,[Me]),n.invalidateFramebuffer(36009,[Me])),J){const Le=i.get(g[Ae]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Le,0)}n.blitFramebuffer(0,0,R,G,0,0,R,G,q,9728),p&&n.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),J)for(let Ae=0;Ae<g.length;Ae++){t.bindFramebuffer(36160,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ae,36161,_e.__webglColorRenderbuffer[Ae]);const Ce=i.get(g[Ae]).__webglTexture;t.bindFramebuffer(36160,_e.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ae,3553,Ce,0)}t.bindFramebuffer(36009,_e.__webglMultisampledFramebuffer)}}function ne(E){return Math.min(d,E.samples)}function ee(E){const g=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ue(E){const g=a.render.frame;v.get(E)!==g&&(v.set(E,g),E.update())}function ce(E,g){const R=E.encoding,G=E.format,q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Qo||R!==Vi&&(R===nt?o===!1?e.has("EXT_sRGB")===!0&&G===gn?(E.format=Qo,E.minFilter=nn,E.generateMipmaps=!1):g=rh.sRGBToLinear(g):(G!==gn||q!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",R)),g}this.allocateTextureUnit=$,this.resetTextureUnits=te,this.setTexture2D=pe,this.setTexture2DArray=Ee,this.setTexture3D=ve,this.setTextureCube=Y,this.rebindTextures=x,this.setupRenderTarget=P,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=_,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ee}function DS(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===Hi)return 5121;if(s===M_)return 32819;if(s===S_)return 32820;if(s===__)return 5120;if(s===v_)return 5122;if(s===th)return 5123;if(s===x_)return 5124;if(s===Ni)return 5125;if(s===Ui)return 5126;if(s===ls)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===y_)return 6406;if(s===gn)return 6408;if(s===b_)return 6409;if(s===E_)return 6410;if(s===Bi)return 6402;if(s===wr)return 34041;if(s===Qo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===T_)return 6403;if(s===w_)return 36244;if(s===A_)return 33319;if(s===C_)return 33320;if(s===L_)return 36249;if(s===Za||s===Ja||s===Qa||s===eo)if(a===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Za)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Za)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vc||s===Gc||s===Wc||s===$c)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Vc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$c)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===P_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xc||s===qc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Xc)return a===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===qc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jc||s===Yc||s===Kc||s===Zc||s===Jc||s===Qc||s===eu||s===tu||s===nu||s===iu||s===ru||s===su||s===au||s===ou)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===jc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Jc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qc)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===eu)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tu)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nu)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===iu)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ru)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===su)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===au)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ou)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===to)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===to)return a===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===R_||s===lu||s===cu||s===uu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===to)return o.COMPRESSED_RED_RGTC1_EXT;if(s===lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xr?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class NS extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Js extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const US={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(US)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class OS extends Zt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Bi,u!==Bi&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Bi&&(i=Ni),i===void 0&&u===wr&&(i=xr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1}}class FS extends Ur{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const M=t.getContextAttributes();let m=null,f=null;const b=[],S=[],y=new Set,w=new Map,C=new rn;C.layers.enable(1),C.viewport=new Tt;const N=new rn;N.layers.enable(2),N.viewport=new Tt;const U=[C,N],T=new NS;T.layers.enable(1),T.layers.enable(2);let I=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let oe=b[Y];return oe===void 0&&(oe=new wo,b[Y]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Y){let oe=b[Y];return oe===void 0&&(oe=new wo,b[Y]=oe),oe.getGripSpace()},this.getHand=function(Y){let oe=b[Y];return oe===void 0&&(oe=new wo,b[Y]=oe),oe.getHandSpace()};function Q(Y){const oe=S.indexOf(Y.inputSource);if(oe===-1)return;const k=b[oe];k!==void 0&&k.dispatchEvent({type:Y.type,data:Y.inputSource})}function z(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let Y=0;Y<b.length;Y++){const oe=S[Y];oe!==null&&(S[Y]=null,b[Y].disconnect(oe))}I=null,K=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,ve.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const oe={antialias:r.renderState.layers===void 0?M.antialias:!0,alpha:M.alpha,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),f=new Gi(p.framebufferWidth,p.framebufferHeight,{format:gn,type:Hi,encoding:e.outputEncoding,stencilBuffer:M.stencil})}else{let oe=null,k=null,j=null;M.depth&&(j=M.stencil?35056:33190,oe=M.stencil?wr:Bi,k=M.stencil?xr:Ni);const D={colorFormat:32856,depthFormat:j,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(D),r.updateRenderState({layers:[h]}),f=new Gi(h.textureWidth,h.textureHeight,{format:gn,type:Hi,depthTexture:new OS(h.textureWidth,h.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,encoding:e.outputEncoding,samples:M.antialias?4:0});const de=e.properties.get(f);de.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function H(Y){for(let oe=0;oe<Y.removed.length;oe++){const k=Y.removed[oe],j=S.indexOf(k);j>=0&&(S[j]=null,b[j].disconnect(k))}for(let oe=0;oe<Y.added.length;oe++){const k=Y.added[oe];let j=S.indexOf(k);if(j===-1){for(let de=0;de<b.length;de++)if(de>=S.length){S.push(k),j=de;break}else if(S[de]===null){S[de]=k,j=de;break}if(j===-1)break}const D=b[j];D&&D.connect(k)}}const Z=new X,ae=new X;function te(Y,oe,k){Z.setFromMatrixPosition(oe.matrixWorld),ae.setFromMatrixPosition(k.matrixWorld);const j=Z.distanceTo(ae),D=oe.projectionMatrix.elements,de=k.projectionMatrix.elements,xe=D[14]/(D[10]-1),fe=D[14]/(D[10]+1),me=(D[9]+1)/D[5],A=(D[9]-1)/D[5],_=(D[8]-1)/D[0],x=(de[8]+1)/de[0],P=xe*_,O=xe*x,V=j/(-_+x),ne=V*-_;oe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ne),Y.translateZ(V),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const ee=xe+V,ue=fe+V,ce=P-ne,E=O+(j-ne),g=me*fe/ue*ee,R=A*fe/ue*ee;Y.projectionMatrix.makePerspective(ce,E,g,R,ee,ue),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function $(Y,oe){oe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(oe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;T.near=N.near=C.near=Y.near,T.far=N.far=C.far=Y.far,(I!==T.near||K!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,K=T.far);const oe=Y.parent,k=T.cameras;$(T,oe);for(let j=0;j<k.length;j++)$(k[j],oe);k.length===2?te(T,C,N):T.projectionMatrix.copy(C.projectionMatrix),le(Y,T,oe)};function le(Y,oe,k){k===null?Y.matrix.copy(oe.matrixWorld):(Y.matrix.copy(k.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(oe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0);const j=Y.children;for(let D=0,de=j.length;D<de;D++)j[D].updateMatrixWorld(!0);Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=el*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.getPlanes=function(){return y};let pe=null;function Ee(Y,oe){if(u=oe.getViewerPose(c||a),v=oe,u!==null){const k=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let j=!1;k.length!==T.cameras.length&&(T.cameras.length=0,j=!0);for(let D=0;D<k.length;D++){const de=k[D];let xe=null;if(p!==null)xe=p.getViewport(de);else{const me=d.getViewSubImage(h,de);xe=me.viewport,D===0&&(e.setRenderTargetTextures(f,me.colorTexture,h.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(f))}let fe=U[D];fe===void 0&&(fe=new rn,fe.layers.enable(D),fe.viewport=new Tt,U[D]=fe),fe.matrix.fromArray(de.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(de.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(xe.x,xe.y,xe.width,xe.height),D===0&&(T.matrix.copy(fe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),j===!0&&T.cameras.push(fe)}}for(let k=0;k<b.length;k++){const j=S[k],D=b[k];j!==null&&D!==void 0&&D.update(j,oe,c||a)}if(pe&&pe(Y,oe),oe.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:oe.detectedPlanes});let k=null;for(const j of y)oe.detectedPlanes.has(j)||(k===null&&(k=[]),k.push(j));if(k!==null)for(const j of k)y.delete(j),w.delete(j),i.dispatchEvent({type:"planeremoved",data:j});for(const j of oe.detectedPlanes)if(!y.has(j))y.add(j),w.set(j,oe.lastChangedTime),i.dispatchEvent({type:"planeadded",data:j});else{const D=w.get(j);j.lastChangedTime>D&&(w.set(j,j.lastChangedTime),i.dispatchEvent({type:"planechanged",data:j}))}}v=null}const ve=new _h;ve.setAnimationLoop(Ee),this.setAnimationLoop=function(Y){pe=Y},this.dispose=function(){}}}function kS(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,hh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,S,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ht&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ht&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const S=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*S,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zS(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(b,S){const y=S.program;i.uniformBlockBinding(b,y)}function c(b,S){let y=r[b.id];y===void 0&&(v(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",m));const w=S.program;i.updateUBOMapping(b,w);const C=e.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){const S=d();b.__bindingPointIndex=S;const y=n.createBuffer(),w=b.__size,C=b.usage;return n.bindBuffer(35345,y),n.bufferData(35345,w,C),n.bindBuffer(35345,null),n.bindBufferBase(35345,S,y),y}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const S=r[b.id],y=b.uniforms,w=b.__cache;n.bindBuffer(35345,S);for(let C=0,N=y.length;C<N;C++){const U=y[C];if(p(U,C,w)===!0){const T=U.__offset,I=Array.isArray(U.value)?U.value:[U.value];let K=0;for(let Q=0;Q<I.length;Q++){const z=I[Q],H=M(z);typeof z=="number"?(U.__data[0]=z,n.bufferSubData(35345,T+K,U.__data)):z.isMatrix3?(U.__data[0]=z.elements[0],U.__data[1]=z.elements[1],U.__data[2]=z.elements[2],U.__data[3]=z.elements[0],U.__data[4]=z.elements[3],U.__data[5]=z.elements[4],U.__data[6]=z.elements[5],U.__data[7]=z.elements[0],U.__data[8]=z.elements[6],U.__data[9]=z.elements[7],U.__data[10]=z.elements[8],U.__data[11]=z.elements[0]):(z.toArray(U.__data,K),K+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,T,U.__data)}}n.bindBuffer(35345,null)}function p(b,S,y){const w=b.value;if(y[S]===void 0){if(typeof w=="number")y[S]=w;else{const C=Array.isArray(w)?w:[w],N=[];for(let U=0;U<C.length;U++)N.push(C[U].clone());y[S]=N}return!0}else if(typeof w=="number"){if(y[S]!==w)return y[S]=w,!0}else{const C=Array.isArray(y[S])?y[S]:[y[S]],N=Array.isArray(w)?w:[w];for(let U=0;U<C.length;U++){const T=C[U];if(T.equals(N[U])===!1)return T.copy(N[U]),!0}}return!1}function v(b){const S=b.uniforms;let y=0;const w=16;let C=0;for(let N=0,U=S.length;N<U;N++){const T=S[N],I={boundary:0,storage:0},K=Array.isArray(T.value)?T.value:[T.value];for(let Q=0,z=K.length;Q<z;Q++){const H=K[Q],Z=M(H);I.boundary+=Z.boundary,I.storage+=Z.storage}if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,N>0){C=y%w;const Q=w-C;C!==0&&Q-I.boundary<0&&(y+=w-C,T.__offset=y)}y+=I.storage}return C=y%w,C>0&&(y+=w-C),b.__size=y,b.__cache={},this}function M(b){const S={boundary:0,storage:0};return typeof b=="number"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}function BS(){const n=ma("canvas");return n.style.display="block",n}class yh{constructor(e={}){const{canvas:t=BS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;let p=null,v=null;const M=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Vi,this.useLegacyLights=!0,this.toneMapping=Wn,this.toneMappingExposure=1;const f=this;let b=!1,S=0,y=0,w=null,C=-1,N=null;const U=new Tt,T=new Tt;let I=null,K=t.width,Q=t.height,z=1,H=null,Z=null;const ae=new Tt(0,0,K,Q),te=new Tt(0,0,K,Q);let $=!1;const le=new gh;let pe=!1,Ee=!1,ve=null;const Y=new yt,oe=new X,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function j(){return w===null?z:1}let D=i;function de(L,W){for(let ie=0;ie<L.length;ie++){const B=L[ie],se=t.getContext(B,W);if(se!==null)return se}return null}try{const L={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fl}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ye,!1),D===null){const W=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&W.shift(),D=de(W,L),D===null)throw de(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let xe,fe,me,A,_,x,P,O,V,ne,ee,ue,ce,E,g,R,G,q,he,Me,_e,J,Ae,Ce;function Le(){xe=new Zx(D),fe=new Wx(D,xe,e),xe.init(fe),J=new DS(D,xe,fe),me=new RS(D,xe,fe),A=new eM,_=new _S,x=new IS(D,xe,me,_,fe,J,A),P=new Xx(f),O=new Kx(f),V=new fv(D,fe),Ae=new Vx(D,xe,V,fe),ne=new Jx(D,V,A,Ae),ee=new rM(D,ne,V,A),he=new iM(D,fe,x),R=new $x(_),ue=new gS(f,P,O,xe,fe,Ae,R),ce=new kS(f,_),E=new xS,g=new TS(xe,fe),q=new Hx(f,P,O,me,ee,h,l),G=new PS(f,ee,fe),Ce=new zS(D,A,fe,me),Me=new Gx(D,xe,A,fe),_e=new Qx(D,xe,A,fe),A.programs=ue.programs,f.capabilities=fe,f.extensions=xe,f.properties=_,f.renderLists=E,f.shadowMap=G,f.state=me,f.info=A}Le();const we=new FS(f,D);this.xr=we,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const L=xe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=xe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize(K,Q,!1))},this.getSize=function(L){return L.set(K,Q)},this.setSize=function(L,W,ie=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=L,Q=W,t.width=Math.floor(L*z),t.height=Math.floor(W*z),ie===!0&&(t.style.width=L+"px",t.style.height=W+"px"),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(K*z,Q*z).floor()},this.setDrawingBufferSize=function(L,W,ie){K=L,Q=W,z=ie,t.width=Math.floor(L*ie),t.height=Math.floor(W*ie),this.setViewport(0,0,L,W)},this.getCurrentViewport=function(L){return L.copy(U)},this.getViewport=function(L){return L.copy(ae)},this.setViewport=function(L,W,ie,B){L.isVector4?ae.set(L.x,L.y,L.z,L.w):ae.set(L,W,ie,B),me.viewport(U.copy(ae).multiplyScalar(z).floor())},this.getScissor=function(L){return L.copy(te)},this.setScissor=function(L,W,ie,B){L.isVector4?te.set(L.x,L.y,L.z,L.w):te.set(L,W,ie,B),me.scissor(T.copy(te).multiplyScalar(z).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(L){me.setScissorTest($=L)},this.setOpaqueSort=function(L){H=L},this.setTransparentSort=function(L){Z=L},this.getClearColor=function(L){return L.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(L=!0,W=!0,ie=!0){let B=0;L&&(B|=16384),W&&(B|=256),ie&&(B|=1024),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ye,!1),E.dispose(),g.dispose(),_.dispose(),P.dispose(),O.dispose(),ee.dispose(),Ae.dispose(),Ce.dispose(),ue.dispose(),we.dispose(),we.removeEventListener("sessionstart",Pe),we.removeEventListener("sessionend",tt),ve&&(ve.dispose(),ve=null),at.stop()};function be(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const L=A.autoReset,W=G.enabled,ie=G.autoUpdate,B=G.needsUpdate,se=G.type;Le(),A.autoReset=L,G.enabled=W,G.autoUpdate=ie,G.needsUpdate=B,G.type=se}function Ye(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ct(L){const W=L.target;W.removeEventListener("dispose",ct),F(W)}function F(L){re(L),_.remove(L)}function re(L){const W=_.get(L).programs;W!==void 0&&(W.forEach(function(ie){ue.releaseProgram(ie)}),L.isShaderMaterial&&ue.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,ie,B,se,Re){W===null&&(W=k);const Ne=se.isMesh&&se.matrixWorld.determinant()<0,Fe=op(L,W,ie,B,se);me.setMaterial(B,Ne);let ze=ie.index,He=1;B.wireframe===!0&&(ze=ne.getWireframeAttribute(ie),He=2);const Ve=ie.drawRange,We=ie.attributes.position;let Je=Ve.start*He,It=(Ve.start+Ve.count)*He;Re!==null&&(Je=Math.max(Je,Re.start*He),It=Math.min(It,(Re.start+Re.count)*He)),ze!==null?(Je=Math.max(Je,0),It=Math.min(It,ze.count)):We!=null&&(Je=Math.max(Je,0),It=Math.min(It,We.count));const on=It-Je;if(on<0||on===1/0)return;Ae.setup(se,B,Fe,ie,ze);let gi,dt=Me;if(ze!==null&&(gi=V.get(ze),dt=_e,dt.setIndex(gi)),se.isMesh)B.wireframe===!0?(me.setLineWidth(B.wireframeLinewidth*j()),dt.setMode(1)):dt.setMode(4);else if(se.isLine){let Xe=B.linewidth;Xe===void 0&&(Xe=1),me.setLineWidth(Xe*j()),se.isLineSegments?dt.setMode(1):se.isLineLoop?dt.setMode(2):dt.setMode(3)}else se.isPoints?dt.setMode(0):se.isSprite&&dt.setMode(4);if(se.isInstancedMesh)dt.renderInstances(Je,on,se.count);else if(ie.isInstancedBufferGeometry){const Xe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ba=Math.min(ie.instanceCount,Xe);dt.renderInstances(Je,on,Ba)}else dt.render(Je,on)},this.compile=function(L,W){function ie(B,se,Re){B.transparent===!0&&B.side===Hn&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,bs(B,se,Re),B.side=di,B.needsUpdate=!0,bs(B,se,Re),B.side=Hn):bs(B,se,Re)}v=g.get(L),v.init(),m.push(v),L.traverseVisible(function(B){B.isLight&&B.layers.test(W.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),v.setupLights(f.useLegacyLights),L.traverse(function(B){const se=B.material;if(se)if(Array.isArray(se))for(let Re=0;Re<se.length;Re++){const Ne=se[Re];ie(Ne,L,B)}else ie(se,L,B)}),m.pop(),v=null};let ge=null;function Te(L){ge&&ge(L)}function Pe(){at.stop()}function tt(){at.start()}const at=new _h;at.setAnimationLoop(Te),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(L){ge=L,we.setAnimationLoop(L),L===null?at.stop():at.start()},we.addEventListener("sessionstart",Pe),we.addEventListener("sessionend",tt),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(W),W=we.getCamera()),L.isScene===!0&&L.onBeforeRender(f,L,W,w),v=g.get(L,m.length),v.init(),m.push(v),Y.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),le.setFromProjectionMatrix(Y),Ee=this.localClippingEnabled,pe=R.init(this.clippingPlanes,Ee),p=E.get(L,M.length),p.init(),M.push(p),At(L,W,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(H,Z),pe===!0&&R.beginShadows();const ie=v.state.shadowsArray;if(G.render(ie,L,W),pe===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(p,L),v.setupLights(f.useLegacyLights),W.isArrayCamera){const B=W.cameras;for(let se=0,Re=B.length;se<Re;se++){const Ne=B[se];jn(p,L,Ne,Ne.viewport)}}else jn(p,L,W);w!==null&&(x.updateMultisampleRenderTarget(w),x.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(f,L,W),Ae.resetDefaultState(),C=-1,N=null,m.pop(),m.length>0?v=m[m.length-1]:v=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function At(L,W,ie,B){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)ie=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)v.pushLight(L),L.castShadow&&v.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||le.intersectsSprite(L)){B&&oe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Y);const Ne=ee.update(L),Fe=L.material;Fe.visible&&p.push(L,Ne,Fe,ie,oe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==A.render.frame&&(L.skeleton.update(),L.skeleton.frame=A.render.frame),!L.frustumCulled||le.intersectsObject(L))){B&&oe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Y);const Ne=ee.update(L),Fe=L.material;if(Array.isArray(Fe)){const ze=Ne.groups;for(let He=0,Ve=ze.length;He<Ve;He++){const We=ze[He],Je=Fe[We.materialIndex];Je&&Je.visible&&p.push(L,Ne,Je,ie,oe.z,We)}}else Fe.visible&&p.push(L,Ne,Fe,ie,oe.z,null)}}const Re=L.children;for(let Ne=0,Fe=Re.length;Ne<Fe;Ne++)At(Re[Ne],W,ie,B)}function jn(L,W,ie,B){const se=L.opaque,Re=L.transmissive,Ne=L.transparent;v.setupLightsView(ie),pe===!0&&R.setGlobalState(f.clippingPlanes,ie),Re.length>0&&ut(se,Re,W,ie),B&&me.viewport(U.copy(B)),se.length>0&&Jt(se,W,ie),Re.length>0&&Jt(Re,W,ie),Ne.length>0&&Jt(Ne,W,ie),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ut(L,W,ie,B){if(ve===null){const Fe=fe.isWebGL2;ve=new Gi(1024,1024,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?ls:Hi,minFilter:os,samples:Fe&&o===!0?4:0})}const se=f.getRenderTarget();f.setRenderTarget(ve),f.clear();const Re=f.toneMapping;f.toneMapping=Wn,Jt(L,ie,B),x.updateMultisampleRenderTarget(ve),x.updateRenderTargetMipmap(ve);let Ne=!1;for(let Fe=0,ze=W.length;Fe<ze;Fe++){const He=W[Fe],Ve=He.object,We=He.geometry,Je=He.material,It=He.group;if(Je.side===Hn&&Ve.layers.test(B.layers)){const on=Je.side;Je.side=Ht,Je.needsUpdate=!0,yn(Ve,ie,B,We,Je,It),Je.side=on,Je.needsUpdate=!0,Ne=!0}}Ne===!0&&(x.updateMultisampleRenderTarget(ve),x.updateRenderTargetMipmap(ve)),f.setRenderTarget(se),f.toneMapping=Re}function Jt(L,W,ie){const B=W.isScene===!0?W.overrideMaterial:null;for(let se=0,Re=L.length;se<Re;se++){const Ne=L[se],Fe=Ne.object,ze=Ne.geometry,He=B===null?Ne.material:B,Ve=Ne.group;Fe.layers.test(ie.layers)&&yn(Fe,W,ie,ze,He,Ve)}}function yn(L,W,ie,B,se,Re){L.onBeforeRender(f,W,ie,B,se,Re),L.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),se.onBeforeRender(f,W,ie,B,L,Re),se.transparent===!0&&se.side===Hn&&se.forceSinglePass===!1?(se.side=Ht,se.needsUpdate=!0,f.renderBufferDirect(ie,W,B,se,L,Re),se.side=di,se.needsUpdate=!0,f.renderBufferDirect(ie,W,B,se,L,Re),se.side=Hn):f.renderBufferDirect(ie,W,B,se,L,Re),L.onAfterRender(f,W,ie,B,se,Re)}function bs(L,W,ie){W.isScene!==!0&&(W=k);const B=_.get(L),se=v.state.lights,Re=v.state.shadowsArray,Ne=se.state.version,Fe=ue.getParameters(L,se.state,Re,W,ie),ze=ue.getProgramCacheKey(Fe);let He=B.programs;B.environment=L.isMeshStandardMaterial?W.environment:null,B.fog=W.fog,B.envMap=(L.isMeshStandardMaterial?O:P).get(L.envMap||B.environment),He===void 0&&(L.addEventListener("dispose",ct),He=new Map,B.programs=He);let Ve=He.get(ze);if(Ve!==void 0){if(B.currentProgram===Ve&&B.lightsStateVersion===Ne)return ec(L,Fe),Ve}else Fe.uniforms=ue.getUniforms(L),L.onBuild(ie,Fe,f),L.onBeforeCompile(Fe,f),Ve=ue.acquireProgram(Fe,ze),He.set(ze,Ve),B.uniforms=Fe.uniforms;const We=B.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=R.uniform),ec(L,Fe),B.needsLights=cp(L),B.lightsStateVersion=Ne,B.needsLights&&(We.ambientLightColor.value=se.state.ambient,We.lightProbe.value=se.state.probe,We.directionalLights.value=se.state.directional,We.directionalLightShadows.value=se.state.directionalShadow,We.spotLights.value=se.state.spot,We.spotLightShadows.value=se.state.spotShadow,We.rectAreaLights.value=se.state.rectArea,We.ltc_1.value=se.state.rectAreaLTC1,We.ltc_2.value=se.state.rectAreaLTC2,We.pointLights.value=se.state.point,We.pointLightShadows.value=se.state.pointShadow,We.hemisphereLights.value=se.state.hemi,We.directionalShadowMap.value=se.state.directionalShadowMap,We.directionalShadowMatrix.value=se.state.directionalShadowMatrix,We.spotShadowMap.value=se.state.spotShadowMap,We.spotLightMatrix.value=se.state.spotLightMatrix,We.spotLightMap.value=se.state.spotLightMap,We.pointShadowMap.value=se.state.pointShadowMap,We.pointShadowMatrix.value=se.state.pointShadowMatrix);const Je=Ve.getUniforms(),It=ca.seqWithValue(Je.seq,We);return B.currentProgram=Ve,B.uniformsList=It,Ve}function ec(L,W){const ie=_.get(L);ie.outputEncoding=W.outputEncoding,ie.instancing=W.instancing,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function op(L,W,ie,B,se){W.isScene!==!0&&(W=k),x.resetTextureUnits();const Re=W.fog,Ne=B.isMeshStandardMaterial?W.environment:null,Fe=w===null?f.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Vi,ze=(B.isMeshStandardMaterial?O:P).get(B.envMap||Ne),He=B.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ve=!!B.normalMap&&!!ie.attributes.tangent,We=!!ie.morphAttributes.position,Je=!!ie.morphAttributes.normal,It=!!ie.morphAttributes.color,on=B.toneMapped?f.toneMapping:Wn,gi=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,dt=gi!==void 0?gi.length:0,Xe=_.get(B),Ba=v.state.lights;if(pe===!0&&(Ee===!0||L!==N)){const Wt=L===N&&B.id===C;R.setState(B,L,Wt)}let Mt=!1;B.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ba.state.version||Xe.outputEncoding!==Fe||se.isInstancedMesh&&Xe.instancing===!1||!se.isInstancedMesh&&Xe.instancing===!0||se.isSkinnedMesh&&Xe.skinning===!1||!se.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==ze||B.fog===!0&&Xe.fog!==Re||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==R.numPlanes||Xe.numIntersection!==R.numIntersection)||Xe.vertexAlphas!==He||Xe.vertexTangents!==Ve||Xe.morphTargets!==We||Xe.morphNormals!==Je||Xe.morphColors!==It||Xe.toneMapping!==on||fe.isWebGL2===!0&&Xe.morphTargetsCount!==dt)&&(Mt=!0):(Mt=!0,Xe.__version=B.version);let _i=Xe.currentProgram;Mt===!0&&(_i=bs(B,W,se));let tc=!1,kr=!1,Ha=!1;const Dt=_i.getUniforms(),vi=Xe.uniforms;if(me.useProgram(_i.program)&&(tc=!0,kr=!0,Ha=!0),B.id!==C&&(C=B.id,kr=!0),tc||N!==L){if(Dt.setValue(D,"projectionMatrix",L.projectionMatrix),fe.logarithmicDepthBuffer&&Dt.setValue(D,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),N!==L&&(N=L,kr=!0,Ha=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Wt=Dt.map.cameraPosition;Wt!==void 0&&Wt.setValue(D,oe.setFromMatrixPosition(L.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Dt.setValue(D,"isOrthographic",L.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||se.isSkinnedMesh)&&Dt.setValue(D,"viewMatrix",L.matrixWorldInverse)}if(se.isSkinnedMesh){Dt.setOptional(D,se,"bindMatrix"),Dt.setOptional(D,se,"bindMatrixInverse");const Wt=se.skeleton;Wt&&(fe.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Dt.setValue(D,"boneTexture",Wt.boneTexture,x),Dt.setValue(D,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Va=ie.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0&&fe.isWebGL2===!0)&&he.update(se,ie,_i),(kr||Xe.receiveShadow!==se.receiveShadow)&&(Xe.receiveShadow=se.receiveShadow,Dt.setValue(D,"receiveShadow",se.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(vi.envMap.value=ze,vi.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),kr&&(Dt.setValue(D,"toneMappingExposure",f.toneMappingExposure),Xe.needsLights&&lp(vi,Ha),Re&&B.fog===!0&&ce.refreshFogUniforms(vi,Re),ce.refreshMaterialUniforms(vi,B,z,Q,ve),ca.upload(D,Xe.uniformsList,vi,x)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ca.upload(D,Xe.uniformsList,vi,x),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Dt.setValue(D,"center",se.center),Dt.setValue(D,"modelViewMatrix",se.modelViewMatrix),Dt.setValue(D,"normalMatrix",se.normalMatrix),Dt.setValue(D,"modelMatrix",se.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Wt=B.uniformsGroups;for(let Ga=0,up=Wt.length;Ga<up;Ga++)if(fe.isWebGL2){const nc=Wt[Ga];Ce.update(nc,_i),Ce.bind(nc,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function lp(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function cp(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,W,ie){_.get(L.texture).__webglTexture=W,_.get(L.depthTexture).__webglTexture=ie;const B=_.get(L);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=ie===void 0,B.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,W){const ie=_.get(L);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,ie=0){w=L,S=W,y=ie;let B=!0,se=null,Re=!1,Ne=!1;if(L){const ze=_.get(L);ze.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),B=!1):ze.__webglFramebuffer===void 0?x.setupRenderTarget(L):ze.__hasExternalTextures&&x.rebindTextures(L,_.get(L.texture).__webglTexture,_.get(L.depthTexture).__webglTexture);const He=L.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ne=!0);const Ve=_.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(se=Ve[W],Re=!0):fe.isWebGL2&&L.samples>0&&x.useMultisampledRTT(L)===!1?se=_.get(L).__webglMultisampledFramebuffer:se=Ve,U.copy(L.viewport),T.copy(L.scissor),I=L.scissorTest}else U.copy(ae).multiplyScalar(z).floor(),T.copy(te).multiplyScalar(z).floor(),I=$;if(me.bindFramebuffer(36160,se)&&fe.drawBuffers&&B&&me.drawBuffers(L,se),me.viewport(U),me.scissor(T),me.setScissorTest(I),Re){const ze=_.get(L.texture);D.framebufferTexture2D(36160,36064,34069+W,ze.__webglTexture,ie)}else if(Ne){const ze=_.get(L.texture),He=W||0;D.framebufferTextureLayer(36160,36064,ze.__webglTexture,ie||0,He)}C=-1},this.readRenderTargetPixels=function(L,W,ie,B,se,Re,Ne){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=_.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){me.bindFramebuffer(36160,Fe);try{const ze=L.texture,He=ze.format,Ve=ze.type;if(He!==gn&&J.convert(He)!==D.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===ls&&(xe.has("EXT_color_buffer_half_float")||fe.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ve!==Hi&&J.convert(Ve)!==D.getParameter(35738)&&!(Ve===Ui&&(fe.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-B&&ie>=0&&ie<=L.height-se&&D.readPixels(W,ie,B,se,J.convert(He),J.convert(Ve),Re)}finally{const ze=w!==null?_.get(w).__webglFramebuffer:null;me.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(L,W,ie=0){const B=Math.pow(2,-ie),se=Math.floor(W.image.width*B),Re=Math.floor(W.image.height*B);x.setTexture2D(W,0),D.copyTexSubImage2D(3553,ie,0,0,L.x,L.y,se,Re),me.unbindTexture()},this.copyTextureToTexture=function(L,W,ie,B=0){const se=W.image.width,Re=W.image.height,Ne=J.convert(ie.format),Fe=J.convert(ie.type);x.setTexture2D(ie,0),D.pixelStorei(37440,ie.flipY),D.pixelStorei(37441,ie.premultiplyAlpha),D.pixelStorei(3317,ie.unpackAlignment),W.isDataTexture?D.texSubImage2D(3553,B,L.x,L.y,se,Re,Ne,Fe,W.image.data):W.isCompressedTexture?D.compressedTexSubImage2D(3553,B,L.x,L.y,W.mipmaps[0].width,W.mipmaps[0].height,Ne,W.mipmaps[0].data):D.texSubImage2D(3553,B,L.x,L.y,Ne,Fe,W.image),B===0&&ie.generateMipmaps&&D.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(L,W,ie,B,se=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=L.max.x-L.min.x+1,Ne=L.max.y-L.min.y+1,Fe=L.max.z-L.min.z+1,ze=J.convert(B.format),He=J.convert(B.type);let Ve;if(B.isData3DTexture)x.setTexture3D(B,0),Ve=32879;else if(B.isDataArrayTexture)x.setTexture2DArray(B,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(37440,B.flipY),D.pixelStorei(37441,B.premultiplyAlpha),D.pixelStorei(3317,B.unpackAlignment);const We=D.getParameter(3314),Je=D.getParameter(32878),It=D.getParameter(3316),on=D.getParameter(3315),gi=D.getParameter(32877),dt=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;D.pixelStorei(3314,dt.width),D.pixelStorei(32878,dt.height),D.pixelStorei(3316,L.min.x),D.pixelStorei(3315,L.min.y),D.pixelStorei(32877,L.min.z),ie.isDataTexture||ie.isData3DTexture?D.texSubImage3D(Ve,se,W.x,W.y,W.z,Re,Ne,Fe,ze,He,dt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ve,se,W.x,W.y,W.z,Re,Ne,Fe,ze,dt.data)):D.texSubImage3D(Ve,se,W.x,W.y,W.z,Re,Ne,Fe,ze,He,dt),D.pixelStorei(3314,We),D.pixelStorei(32878,Je),D.pixelStorei(3316,It),D.pixelStorei(3315,on),D.pixelStorei(32877,gi),se===0&&B.generateMipmaps&&D.generateMipmap(Ve),me.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?x.setTextureCube(L,0):L.isData3DTexture?x.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?x.setTexture2DArray(L,0):x.setTexture2D(L,0),me.unbindTexture()},this.resetState=function(){S=0,y=0,w=null,me.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class HS extends yh{}HS.prototype.isWebGL1Renderer=!0;class Bl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=t}clone(){return new Bl(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class VS extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class bh extends Ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ku=new yt,nl=new oh,Qs=new Da,ea=new X;class GS extends Vt{constructor(e=new qn,t=new bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(r),Qs.radius+=s,e.ray.intersectsSphere(Qs)===!1)return;Ku.copy(r).invert(),nl.copy(e.ray).applyMatrix4(Ku);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,M=p;v<M;v++){const m=c.getX(v);ea.fromBufferAttribute(d,m),Zu(ea,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=h,M=p;v<M;v++)ea.fromBufferAttribute(d,v),Zu(ea,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zu(n,e,t,i,r,s,a){const o=nl.distanceSqToPoint(n);if(o<t){const l=new X;nl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Hl extends qn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new X,h=new X,p=[],v=[],M=[],m=[];for(let f=0;f<=i;f++){const b=[],S=f/i;let y=0;f===0&&a===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const C=w/t;d.x=-e*Math.cos(r+C*s)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(r+C*s)*Math.sin(a+S*o),v.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),m.push(C+y,1-S),b.push(c++)}u.push(b)}for(let f=0;f<i;f++)for(let b=0;b<t;b++){const S=u[f][b+1],y=u[f][b],w=u[f+1][b],C=u[f+1][b+1];(f!==0||a>0)&&p.push(S,y,C),(f!==i-1||l<Math.PI)&&p.push(y,w,C)}this.setIndex(p),this.setAttribute("position",new Pn(v,3)),this.setAttribute("normal",new Pn(M,3)),this.setAttribute("uv",new Pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ur=typeof window<"u";function WS(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ke=Object.assign;function Ao(n,e){const t={};for(const i in e){const r=e[i];t[i]=Sn(r)?r.map(n):n(r)}return t}const Zr=()=>{},Sn=Array.isArray,$S=/\/$/,XS=n=>n.replace($S,"");function Co(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=KS(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function qS(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ju(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function jS(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Cr(e.matched[i],t.matched[r])&&Eh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Cr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Eh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!YS(n[t],e[t]))return!1;return!0}function YS(n,e){return Sn(n)?Qu(n,e):Sn(e)?Qu(e,n):n===e}function Qu(n,e){return Sn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function KS(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var us;(function(n){n.pop="pop",n.push="push"})(us||(us={}));var Jr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Jr||(Jr={}));function ZS(n){if(!n)if(ur){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),XS(n)}const JS=/^[^#]+#/;function QS(n,e){return n.replace(JS,"#")+e}function ey(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Oa=()=>({left:window.pageXOffset,top:window.pageYOffset});function ty(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=ey(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ef(n,e){return(history.state?history.state.position-e:-1)+n}const il=new Map;function ny(n,e){il.set(n,e)}function iy(n){const e=il.get(n);return il.delete(n),e}let ry=()=>location.protocol+"//"+location.host;function Th(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Ju(l,"")}return Ju(t,n)+i+r}function sy(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const p=Th(n,location),v=t.value,M=e.value;let m=0;if(h){if(t.value=p,e.value=h,a&&a===v){a=null;return}m=M?h.position-M.position:0}else i(p);r.forEach(f=>{f(t.value,v,{delta:m,type:us.pop,direction:m?m>0?Jr.forward:Jr.back:Jr.unknown})})};function l(){a=t.value}function c(h){r.push(h);const p=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(Ke({},h.state,{scroll:Oa()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function tf(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Oa():null}}function ay(n){const{history:e,location:t}=window,i={value:Th(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=n.indexOf("#"),h=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:ry()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function a(l,c){const u=Ke({},e.state,tf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Ke({},r.value,e.state,{forward:l,scroll:Oa()});s(u.current,u,!0);const d=Ke({},tf(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function oy(n){n=ZS(n);const e=ay(n),t=sy(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Ke({location:"",base:n,go:i,createHref:QS.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ly(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),oy(n)}function cy(n){return typeof n=="string"||n&&typeof n=="object"}function wh(n){return typeof n=="string"||typeof n=="symbol"}const ei={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ah=Symbol("");var nf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(nf||(nf={}));function Lr(n,e){return Ke(new Error,{type:n,[Ah]:!0},e)}function kn(n,e){return n instanceof Error&&Ah in n&&(e==null||!!(n.type&e))}const rf="[^/]+?",uy={sensitive:!1,strict:!1,start:!0,end:!0},fy=/[.+*?^${}()[\]/\\]/g;function dy(n,e){const t=Ke({},uy,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const h=c[d];let p=40+(t.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(fy,"\\$&"),p+=40;else if(h.type===1){const{value:v,repeatable:M,optional:m,regexp:f}=h;s.push({name:v,repeatable:M,optional:m});const b=f||rf;if(b!==rf){p+=10;try{new RegExp(`(${b})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${v}" (${b}): `+y.message)}}let S=M?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,p+=20,m&&(p+=-8),M&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),d={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",v=s[h-1];d[v.name]=p&&v.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const h of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:M,optional:m}=p,f=v in c?c[v]:"";if(Sn(f)&&!M)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const b=Sn(f)?f.join("/"):f;if(!b)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=b}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function hy(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function py(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=hy(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(sf(i))return 1;if(sf(r))return-1}return r.length-i.length}function sf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const my={type:0,value:""},gy=/[a-zA-Z0-9_]/;function _y(n){if(!n)return[[]];if(n==="/")return[[my]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function d(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&d(),a()):l===":"?(d(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:gy.test(l)?h():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),a(),r}function vy(n,e,t){const i=dy(_y(n.path),t),r=Ke(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function xy(n,e){const t=[],i=new Map;e=lf({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,h){const p=!h,v=My(u);v.aliasOf=h&&h.record;const M=lf(e,u),m=[v];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of S)m.push(Ke({},v,{components:h?h.record.components:v.components,path:y,aliasOf:h?h.record:v}))}let f,b;for(const S of m){const{path:y}=S;if(d&&y[0]!=="/"){const w=d.record.path,C=w[w.length-1]==="/"?"":"/";S.path=d.record.path+(y&&C+y)}if(f=vy(S,d,M),h?h.alias.push(f):(b=b||f,b!==f&&b.alias.push(f),p&&u.name&&!of(f)&&a(u.name)),v.children){const w=v.children;for(let C=0;C<w.length;C++)s(w[C],f,h&&h.children[C])}h=h||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return b?()=>{a(b)}:Zr}function a(u){if(wh(u)){const d=i.get(u);d&&(i.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let d=0;for(;d<t.length&&py(u,t[d])>=0&&(u.record.path!==t[d].record.path||!Ch(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!of(u)&&i.set(u.record.name,u)}function c(u,d){let h,p={},v,M;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Lr(1,{location:u});M=h.record.name,p=Ke(af(d.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&af(u.params,h.keys.map(b=>b.name))),v=h.stringify(p)}else if("path"in u)v=u.path,h=t.find(b=>b.re.test(v)),h&&(p=h.parse(v),M=h.record.name);else{if(h=d.name?i.get(d.name):t.find(b=>b.re.test(d.path)),!h)throw Lr(1,{location:u,currentLocation:d});M=h.record.name,p=Ke({},d.params,u.params),v=h.stringify(p)}const m=[];let f=h;for(;f;)m.unshift(f.record),f=f.parent;return{name:M,path:v,params:p,matched:m,meta:yy(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function af(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function My(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Sy(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Sy(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function of(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function yy(n){return n.reduce((e,t)=>Ke(e,t.meta),{})}function lf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Ch(n,e){return e.children.some(t=>t===n||Ch(n,t))}const Lh=/#/g,by=/&/g,Ey=/\//g,Ty=/=/g,wy=/\?/g,Ph=/\+/g,Ay=/%5B/g,Cy=/%5D/g,Rh=/%5E/g,Ly=/%60/g,Ih=/%7B/g,Py=/%7C/g,Dh=/%7D/g,Ry=/%20/g;function Vl(n){return encodeURI(""+n).replace(Py,"|").replace(Ay,"[").replace(Cy,"]")}function Iy(n){return Vl(n).replace(Ih,"{").replace(Dh,"}").replace(Rh,"^")}function rl(n){return Vl(n).replace(Ph,"%2B").replace(Ry,"+").replace(Lh,"%23").replace(by,"%26").replace(Ly,"`").replace(Ih,"{").replace(Dh,"}").replace(Rh,"^")}function Dy(n){return rl(n).replace(Ty,"%3D")}function Ny(n){return Vl(n).replace(Lh,"%23").replace(wy,"%3F")}function Uy(n){return n==null?"":Ny(n).replace(Ey,"%2F")}function ga(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Oy(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Ph," "),a=s.indexOf("="),o=ga(a<0?s:s.slice(0,a)),l=a<0?null:ga(s.slice(a+1));if(o in e){let c=e[o];Sn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function cf(n){let e="";for(let t in n){const i=n[t];if(t=Dy(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Sn(i)?i.map(s=>s&&rl(s)):[i&&rl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Fy(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Sn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const ky=Symbol(""),uf=Symbol(""),Gl=Symbol(""),Wl=Symbol(""),sl=Symbol("");function Gr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function ri(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=d=>{d===!1?o(Lr(4,{from:t,to:e})):d instanceof Error?o(d):cy(d)?o(Lr(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(d=>o(d))})}function Lo(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(zy(o)){const c=(o.__vccOpts||o)[e];c&&r.push(ri(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=WS(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&ri(h,t,i,s,a)()}))}}return r}function zy(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function ff(n){const e=xn(Gl),t=xn(Wl),i=lt(()=>e.resolve(Gn(n.to))),r=lt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const h=d.findIndex(Cr.bind(null,u));if(h>-1)return h;const p=df(l[c-2]);return c>1&&df(u)===p&&d[d.length-1].path!==p?d.findIndex(Cr.bind(null,l[c-2])):h}),s=lt(()=>r.value>-1&&Gy(t.params,i.value.params)),a=lt(()=>r.value>-1&&r.value===t.matched.length-1&&Eh(t.params,i.value.params));function o(l={}){return Vy(l)?e[Gn(n.replace)?"replace":"push"](Gn(n.to)).catch(Zr):Promise.resolve()}return{route:i,href:lt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const By=$i({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ff,setup(n,{slots:e}){const t=ps(ff(n)),{options:i}=xn(Gl),r=lt(()=>({[hf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[hf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Ra("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Hy=By;function Vy(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Gy(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Sn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function df(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const hf=(n,e,t)=>n??e??t,Wy=$i({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=xn(sl),r=lt(()=>n.route||i.value),s=xn(uf,0),a=lt(()=>{let c=Gn(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),o=lt(()=>r.value.matched[a.value]);sa(uf,lt(()=>a.value+1)),sa(ky,o),sa(sl,r);const l=Yt();return ki(()=>[l.value,o.value,n.name],([c,u,d],[h,p,v])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Cr(u,p)||!h)&&(u.enterCallbacks[d]||[]).forEach(M=>M(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,d=o.value,h=d&&d.components[u];if(!h)return pf(t.default,{Component:h,route:c});const p=d.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Ra(h,Ke({},v,e,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return pf(t.default,{Component:m,route:c})||m}}});function pf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const $y=Wy;function Xy(n){const e=xy(n.routes,n),t=n.parseQuery||Oy,i=n.stringifyQuery||cf,r=n.history,s=Gr(),a=Gr(),o=Gr(),l=vd(ei);let c=ei;ur&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ao.bind(null,k=>""+k),d=Ao.bind(null,Uy),h=Ao.bind(null,ga);function p(k,j){let D,de;return wh(k)?(D=e.getRecordMatcher(k),de=j):de=k,e.addRoute(de,D)}function v(k){const j=e.getRecordMatcher(k);j&&e.removeRoute(j)}function M(){return e.getRoutes().map(k=>k.record)}function m(k){return!!e.getRecordMatcher(k)}function f(k,j){if(j=Ke({},j||l.value),typeof k=="string"){const A=Co(t,k,j.path),_=e.resolve({path:A.path},j),x=r.createHref(A.fullPath);return Ke(A,_,{params:h(_.params),hash:ga(A.hash),redirectedFrom:void 0,href:x})}let D;if("path"in k)D=Ke({},k,{path:Co(t,k.path,j.path).path});else{const A=Ke({},k.params);for(const _ in A)A[_]==null&&delete A[_];D=Ke({},k,{params:d(k.params)}),j.params=d(j.params)}const de=e.resolve(D,j),xe=k.hash||"";de.params=u(h(de.params));const fe=qS(i,Ke({},k,{hash:Iy(xe),path:de.path})),me=r.createHref(fe);return Ke({fullPath:fe,hash:xe,query:i===cf?Fy(k.query):k.query||{}},de,{redirectedFrom:void 0,href:me})}function b(k){return typeof k=="string"?Co(t,k,l.value.path):Ke({},k)}function S(k,j){if(c!==k)return Lr(8,{from:j,to:k})}function y(k){return N(k)}function w(k){return y(Ke(b(k),{replace:!0}))}function C(k){const j=k.matched[k.matched.length-1];if(j&&j.redirect){const{redirect:D}=j;let de=typeof D=="function"?D(k):D;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=b(de):{path:de},de.params={}),Ke({query:k.query,hash:k.hash,params:"path"in de?{}:k.params},de)}}function N(k,j){const D=c=f(k),de=l.value,xe=k.state,fe=k.force,me=k.replace===!0,A=C(D);if(A)return N(Ke(b(A),{state:typeof A=="object"?Ke({},xe,A.state):xe,force:fe,replace:me}),j||D);const _=D;_.redirectedFrom=j;let x;return!fe&&jS(i,de,D)&&(x=Lr(16,{to:_,from:de}),pe(de,de,!0,!1)),(x?Promise.resolve(x):T(_,de)).catch(P=>kn(P)?kn(P,2)?P:le(P):te(P,_,de)).then(P=>{if(P){if(kn(P,2))return N(Ke({replace:me},b(P.to),{state:typeof P.to=="object"?Ke({},xe,P.to.state):xe,force:fe}),j||_)}else P=K(_,de,!0,me,xe);return I(_,de,P),P})}function U(k,j){const D=S(k,j);return D?Promise.reject(D):Promise.resolve()}function T(k,j){let D;const[de,xe,fe]=qy(k,j);D=Lo(de.reverse(),"beforeRouteLeave",k,j);for(const A of de)A.leaveGuards.forEach(_=>{D.push(ri(_,k,j))});const me=U.bind(null,k,j);return D.push(me),lr(D).then(()=>{D=[];for(const A of s.list())D.push(ri(A,k,j));return D.push(me),lr(D)}).then(()=>{D=Lo(xe,"beforeRouteUpdate",k,j);for(const A of xe)A.updateGuards.forEach(_=>{D.push(ri(_,k,j))});return D.push(me),lr(D)}).then(()=>{D=[];for(const A of k.matched)if(A.beforeEnter&&!j.matched.includes(A))if(Sn(A.beforeEnter))for(const _ of A.beforeEnter)D.push(ri(_,k,j));else D.push(ri(A.beforeEnter,k,j));return D.push(me),lr(D)}).then(()=>(k.matched.forEach(A=>A.enterCallbacks={}),D=Lo(fe,"beforeRouteEnter",k,j),D.push(me),lr(D))).then(()=>{D=[];for(const A of a.list())D.push(ri(A,k,j));return D.push(me),lr(D)}).catch(A=>kn(A,8)?A:Promise.reject(A))}function I(k,j,D){for(const de of o.list())de(k,j,D)}function K(k,j,D,de,xe){const fe=S(k,j);if(fe)return fe;const me=j===ei,A=ur?history.state:{};D&&(de||me?r.replace(k.fullPath,Ke({scroll:me&&A&&A.scroll},xe)):r.push(k.fullPath,xe)),l.value=k,pe(k,j,D,me),le()}let Q;function z(){Q||(Q=r.listen((k,j,D)=>{if(!oe.listening)return;const de=f(k),xe=C(de);if(xe){N(Ke(xe,{replace:!0}),de).catch(Zr);return}c=de;const fe=l.value;ur&&ny(ef(fe.fullPath,D.delta),Oa()),T(de,fe).catch(me=>kn(me,12)?me:kn(me,2)?(N(me.to,de).then(A=>{kn(A,20)&&!D.delta&&D.type===us.pop&&r.go(-1,!1)}).catch(Zr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),te(me,de,fe))).then(me=>{me=me||K(de,fe,!1),me&&(D.delta&&!kn(me,8)?r.go(-D.delta,!1):D.type===us.pop&&kn(me,20)&&r.go(-1,!1)),I(de,fe,me)}).catch(Zr)}))}let H=Gr(),Z=Gr(),ae;function te(k,j,D){le(k);const de=Z.list();return de.length?de.forEach(xe=>xe(k,j,D)):console.error(k),Promise.reject(k)}function $(){return ae&&l.value!==ei?Promise.resolve():new Promise((k,j)=>{H.add([k,j])})}function le(k){return ae||(ae=!k,z(),H.list().forEach(([j,D])=>k?D(k):j()),H.reset()),k}function pe(k,j,D,de){const{scrollBehavior:xe}=n;if(!ur||!xe)return Promise.resolve();const fe=!D&&iy(ef(k.fullPath,0))||(de||!D)&&history.state&&history.state.scroll||null;return bd().then(()=>xe(k,j,fe)).then(me=>me&&ty(me)).catch(me=>te(me,k,j))}const Ee=k=>r.go(k);let ve;const Y=new Set,oe={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,hasRoute:m,getRoutes:M,resolve:f,options:n,push:y,replace:w,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Z.add,isReady:$,install(k){const j=this;k.component("RouterLink",Hy),k.component("RouterView",$y),k.config.globalProperties.$router=j,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Gn(l)}),ur&&!ve&&l.value===ei&&(ve=!0,y(r.location).catch(xe=>{}));const D={};for(const xe in ei)D[xe]=lt(()=>l.value[xe]);k.provide(Gl,j),k.provide(Wl,ps(D)),k.provide(sl,l);const de=k.unmount;Y.add(k),k.unmount=function(){Y.delete(k),Y.size<1&&(c=ei,Q&&Q(),Q=null,l.value=ei,ve=!1,ae=!1),de()}}};return oe}function lr(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function qy(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>Cr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Cr(c,l))||r.push(l))}return[t,i,r]}function jy(){return xn(Wl)}const $l=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Yy={},Ky={class:"homepage-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64","enable-background":"new 0 0 64 64"},Zy=_s("polygon",{fill:"#fff",stroke:"#000000","stroke-width":"2","stroke-miterlimit":"10",points:`32,3 2,33 11,33 11,63 23,63 23,47 39,47 
	39,63 51,63 51,33 62,33 `},null,-1),Jy=[Zy];function Qy(n,e){return Di(),Kr("svg",Ky,Jy)}const eb=$l(Yy,[["render",Qy]]),tb={key:0,id:"Header"},nb={class:"nav"},ib=$i({__name:"index",setup(n){const e=jy(),t=Yt(!1);return ms(()=>{setTimeout(()=>{t.value=!0},50)}),(i,r)=>t.value?(Di(),Kr("div",tb,[Gn(e).name!=="/"?(Di(),$d(eb,{key:0,onClick:r[0]||(r[0]=s=>i.$router.push("/"))})):Ps("",!0),_s("div",nb,[Gn(e).name!=="/vocabulary"?(Di(),Kr("span",{key:0,onClick:r[1]||(r[1]=s=>i.$router.push("/vocabulary"))},"vocabulary")):Ps("",!0),Gn(e).name!=="/ig-lottery"?(Di(),Kr("span",{key:1,onClick:r[2]||(r[2]=s=>i.$router.push("/ig-lottery"))},"ig-lottery")):Ps("",!0)])])):Ps("",!0)}});const rb=$l(ib,[["__scopeId","data-v-458cafea"]]),sb=n=>(um("data-v-b8d873f2"),n=n(),fm(),n),ab={class:"container"},ob=sb(()=>_s("div",{id:"canvas"},null,-1)),lb=$i({__name:"App",setup(n){return ms(()=>{var e,t,i,r,s,a,o,l;l=.001,c(),u();function c(){t=new VS,t.fog=new Bl("#222",.001),e=new rn(90,window.innerWidth/window.innerHeight,1,1500),e.position.z=60,s=new bh({color:6342416,size:3,transparent:!0}),a=1500,r=new Hl;const p=new Float32Array(a*3),v=new Float32Array(a*3),M=new Qe;for(var m=0;m<a;m++){const b=new X;b.x=Math.random()*2e3-1e3,b.y=Math.random()*2e3-1e3,b.z=Math.random()*2e3-1e3,p[m*3]=b.x,p[m*3+1]=b.y,p[m*3+2]=b.z,M.setHSL(m/a,1,.5),v[m*3]=M.r,v[m*3+1]=M.g,v[m*3+2]=M.b}r.setAttribute("position",new an(p,3)),r.setAttribute("color",new an(v,3)),o=new GS(r,s),t.add(o),i=new yh({antialias:!0}),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor("#222",1),document.getElementById("canvas").appendChild(i.domElement),document.addEventListener("mousemove",b=>{const S=b.clientX,y=b.clientY,w=S/window.innerWidth,C=y/window.innerHeight;e.position.x=-w*5,e.position.y=C*5,e.lookAt(t.position),i.render(t,e)})}function u(){requestAnimationFrame(u),t.rotation.x-=l,o.geometry.verticesNeedUpdate=!0,d()}function d(){e.lookAt(t.position),i.render(t,e)}window.addEventListener("resize",h,!1);function h(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}}),(e,t)=>{const i=Im("router-view");return Di(),Kr("div",ab,[ob,Et(rb),Et(i)])}}});const cb=$l(lb,[["__scopeId","data-v-b8d873f2"]]);/*!
  * shared v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const al=typeof window<"u",pi=(n,e=!1)=>e?Symbol.for(n):Symbol(n),ub=(n,e,t)=>fb({l:n,k:e,s:t}),fb=n=>JSON.stringify(n).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),mt=n=>typeof n=="number"&&isFinite(n),db=n=>Uh(n)==="[object Date]",hi=n=>Uh(n)==="[object RegExp]",Fa=n=>Oe(n)&&Object.keys(n).length===0,wt=Object.assign;let mf;const Vn=()=>mf||(mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gf(n){return n.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const hb=Object.prototype.hasOwnProperty;function Xl(n,e){return hb.call(n,e)}const rt=Array.isArray,ot=n=>typeof n=="function",ye=n=>typeof n=="string",Ge=n=>typeof n=="boolean",Ze=n=>n!==null&&typeof n=="object",Nh=Object.prototype.toString,Uh=n=>Nh.call(n),Oe=n=>{if(!Ze(n))return!1;const e=Object.getPrototypeOf(n);return e===null||e.constructor===Object},pb=n=>n==null?"":rt(n)||Oe(n)&&n.toString===Nh?JSON.stringify(n,null,2):String(n);function mb(n,e=""){return n.reduce((t,i,r)=>r===0?t+i:t+e+i,"")}function ql(n){let e=n;return()=>++e}function gb(n,e){typeof console<"u"&&(console.warn("[intlify] "+n),e&&console.warn(e.stack))}/*!
  * message-compiler v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function _b(n,e,t){return{line:n,column:e,offset:t}}function ol(n,e,t){const i={start:n,end:e};return t!=null&&(i.source=t),i}const vb=/\{([0-9a-zA-Z]+)\}/g;function xb(n,...e){return e.length===1&&Mb(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),n.replace(vb,(t,i)=>e.hasOwnProperty(i)?e[i]:"")}const Oh=Object.assign,_f=n=>typeof n=="string",Mb=n=>n!==null&&typeof n=="object";function Fh(n,e=""){return n.reduce((t,i,r)=>r===0?t+i:t+e+i,"")}const Ie={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},Sb={[Ie.EXPECTED_TOKEN]:"Expected token: '{0}'",[Ie.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Ie.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Ie.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Ie.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Ie.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Ie.EMPTY_PLACEHOLDER]:"Empty placeholder",[Ie.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Ie.INVALID_LINKED_FORMAT]:"Invalid linked format",[Ie.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Ie.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Ie.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Ie.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Ie.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Fr(n,e,t={}){const{domain:i,messages:r,args:s}=t,a=xb((r||Sb)[n]||"",...s||[]),o=new SyntaxError(String(a));return o.code=n,e&&(o.location=e),o.domain=i,o}function yb(n){throw n}const zn=" ",bb="\r",Ot=`
`,Eb=String.fromCharCode(8232),Tb=String.fromCharCode(8233);function wb(n){const e=n;let t=0,i=1,r=1,s=0;const a=N=>e[N]===bb&&e[N+1]===Ot,o=N=>e[N]===Ot,l=N=>e[N]===Tb,c=N=>e[N]===Eb,u=N=>a(N)||o(N)||l(N)||c(N),d=()=>t,h=()=>i,p=()=>r,v=()=>s,M=N=>a(N)||l(N)||c(N)?Ot:e[N],m=()=>M(t),f=()=>M(t+s);function b(){return s=0,u(t)&&(i++,r=0),a(t)&&t++,t++,r++,e[t]}function S(){return a(t+s)&&s++,s++,e[t+s]}function y(){t=0,i=1,r=1,s=0}function w(N=0){s=N}function C(){const N=t+s;for(;N!==t;)b();s=0}return{index:d,line:h,column:p,peekOffset:v,charAt:M,currentChar:m,currentPeek:f,next:b,peek:S,reset:y,resetPeek:w,skipToPeek:C}}const ti=void 0,Ab=".",vf="'",Cb="tokenizer";function Lb(n,e={}){const t=e.location!==!1,i=wb(n),r=()=>i.index(),s=()=>_b(i.line(),i.column(),i.index()),a=s(),o=r(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function d(_,x,P,...O){const V=c();if(x.column+=P,x.offset+=P,u){const ne=t?ol(V.startLoc,x):null,ee=Fr(_,ne,{domain:Cb,args:O});u(ee)}}function h(_,x,P){_.endLoc=s(),_.currentType=x;const O={type:x};return t&&(O.loc=ol(_.startLoc,_.endLoc)),P!=null&&(O.value=P),O}const p=_=>h(_,14);function v(_,x){return _.currentChar()===x?(_.next(),x):(d(Ie.EXPECTED_TOKEN,s(),0,x),"")}function M(_){let x="";for(;_.currentPeek()===zn||_.currentPeek()===Ot;)x+=_.currentPeek(),_.peek();return x}function m(_){const x=M(_);return _.skipToPeek(),x}function f(_){if(_===ti)return!1;const x=_.charCodeAt(0);return x>=97&&x<=122||x>=65&&x<=90||x===95}function b(_){if(_===ti)return!1;const x=_.charCodeAt(0);return x>=48&&x<=57}function S(_,x){const{currentType:P}=x;if(P!==2)return!1;M(_);const O=f(_.currentPeek());return _.resetPeek(),O}function y(_,x){const{currentType:P}=x;if(P!==2)return!1;M(_);const O=_.currentPeek()==="-"?_.peek():_.currentPeek(),V=b(O);return _.resetPeek(),V}function w(_,x){const{currentType:P}=x;if(P!==2)return!1;M(_);const O=_.currentPeek()===vf;return _.resetPeek(),O}function C(_,x){const{currentType:P}=x;if(P!==8)return!1;M(_);const O=_.currentPeek()===".";return _.resetPeek(),O}function N(_,x){const{currentType:P}=x;if(P!==9)return!1;M(_);const O=f(_.currentPeek());return _.resetPeek(),O}function U(_,x){const{currentType:P}=x;if(!(P===8||P===12))return!1;M(_);const O=_.currentPeek()===":";return _.resetPeek(),O}function T(_,x){const{currentType:P}=x;if(P!==10)return!1;const O=()=>{const ne=_.currentPeek();return ne==="{"?f(_.peek()):ne==="@"||ne==="%"||ne==="|"||ne===":"||ne==="."||ne===zn||!ne?!1:ne===Ot?(_.peek(),O()):f(ne)},V=O();return _.resetPeek(),V}function I(_){M(_);const x=_.currentPeek()==="|";return _.resetPeek(),x}function K(_){const x=M(_),P=_.currentPeek()==="%"&&_.peek()==="{";return _.resetPeek(),{isModulo:P,hasSpace:x.length>0}}function Q(_,x=!0){const P=(V=!1,ne="",ee=!1)=>{const ue=_.currentPeek();return ue==="{"?ne==="%"?!1:V:ue==="@"||!ue?ne==="%"?!0:V:ue==="%"?(_.peek(),P(V,"%",!0)):ue==="|"?ne==="%"||ee?!0:!(ne===zn||ne===Ot):ue===zn?(_.peek(),P(!0,zn,ee)):ue===Ot?(_.peek(),P(!0,Ot,ee)):!0},O=P();return x&&_.resetPeek(),O}function z(_,x){const P=_.currentChar();return P===ti?ti:x(P)?(_.next(),P):null}function H(_){return z(_,P=>{const O=P.charCodeAt(0);return O>=97&&O<=122||O>=65&&O<=90||O>=48&&O<=57||O===95||O===36})}function Z(_){return z(_,P=>{const O=P.charCodeAt(0);return O>=48&&O<=57})}function ae(_){return z(_,P=>{const O=P.charCodeAt(0);return O>=48&&O<=57||O>=65&&O<=70||O>=97&&O<=102})}function te(_){let x="",P="";for(;x=Z(_);)P+=x;return P}function $(_){m(_);const x=_.currentChar();return x!=="%"&&d(Ie.EXPECTED_TOKEN,s(),0,x),_.next(),"%"}function le(_){let x="";for(;;){const P=_.currentChar();if(P==="{"||P==="}"||P==="@"||P==="|"||!P)break;if(P==="%")if(Q(_))x+=P,_.next();else break;else if(P===zn||P===Ot)if(Q(_))x+=P,_.next();else{if(I(_))break;x+=P,_.next()}else x+=P,_.next()}return x}function pe(_){m(_);let x="",P="";for(;x=H(_);)P+=x;return _.currentChar()===ti&&d(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),P}function Ee(_){m(_);let x="";return _.currentChar()==="-"?(_.next(),x+=`-${te(_)}`):x+=te(_),_.currentChar()===ti&&d(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),x}function ve(_){m(_),v(_,"'");let x="",P="";const O=ne=>ne!==vf&&ne!==Ot;for(;x=z(_,O);)x==="\\"?P+=Y(_):P+=x;const V=_.currentChar();return V===Ot||V===ti?(d(Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),V===Ot&&(_.next(),v(_,"'")),P):(v(_,"'"),P)}function Y(_){const x=_.currentChar();switch(x){case"\\":case"'":return _.next(),`\\${x}`;case"u":return oe(_,x,4);case"U":return oe(_,x,6);default:return d(Ie.UNKNOWN_ESCAPE_SEQUENCE,s(),0,x),""}}function oe(_,x,P){v(_,x);let O="";for(let V=0;V<P;V++){const ne=ae(_);if(!ne){d(Ie.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${x}${O}${_.currentChar()}`);break}O+=ne}return`\\${x}${O}`}function k(_){m(_);let x="",P="";const O=V=>V!=="{"&&V!=="}"&&V!==zn&&V!==Ot;for(;x=z(_,O);)P+=x;return P}function j(_){let x="",P="";for(;x=H(_);)P+=x;return P}function D(_){const x=(P=!1,O)=>{const V=_.currentChar();return V==="{"||V==="%"||V==="@"||V==="|"||V==="("||V===")"||!V||V===zn?O:V===Ot||V===Ab?(O+=V,_.next(),x(P,O)):(O+=V,_.next(),x(!0,O))};return x(!1,"")}function de(_){m(_);const x=v(_,"|");return m(_),x}function xe(_,x){let P=null;switch(_.currentChar()){case"{":return x.braceNest>=1&&d(Ie.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),_.next(),P=h(x,2,"{"),m(_),x.braceNest++,P;case"}":return x.braceNest>0&&x.currentType===2&&d(Ie.EMPTY_PLACEHOLDER,s(),0),_.next(),P=h(x,3,"}"),x.braceNest--,x.braceNest>0&&m(_),x.inLinked&&x.braceNest===0&&(x.inLinked=!1),P;case"@":return x.braceNest>0&&d(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),P=fe(_,x)||p(x),x.braceNest=0,P;default:let V=!0,ne=!0,ee=!0;if(I(_))return x.braceNest>0&&d(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),P=h(x,1,de(_)),x.braceNest=0,x.inLinked=!1,P;if(x.braceNest>0&&(x.currentType===5||x.currentType===6||x.currentType===7))return d(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),x.braceNest=0,me(_,x);if(V=S(_,x))return P=h(x,5,pe(_)),m(_),P;if(ne=y(_,x))return P=h(x,6,Ee(_)),m(_),P;if(ee=w(_,x))return P=h(x,7,ve(_)),m(_),P;if(!V&&!ne&&!ee)return P=h(x,13,k(_)),d(Ie.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,P.value),m(_),P;break}return P}function fe(_,x){const{currentType:P}=x;let O=null;const V=_.currentChar();switch((P===8||P===9||P===12||P===10)&&(V===Ot||V===zn)&&d(Ie.INVALID_LINKED_FORMAT,s(),0),V){case"@":return _.next(),O=h(x,8,"@"),x.inLinked=!0,O;case".":return m(_),_.next(),h(x,9,".");case":":return m(_),_.next(),h(x,10,":");default:return I(_)?(O=h(x,1,de(_)),x.braceNest=0,x.inLinked=!1,O):C(_,x)||U(_,x)?(m(_),fe(_,x)):N(_,x)?(m(_),h(x,12,j(_))):T(_,x)?(m(_),V==="{"?xe(_,x)||O:h(x,11,D(_))):(P===8&&d(Ie.INVALID_LINKED_FORMAT,s(),0),x.braceNest=0,x.inLinked=!1,me(_,x))}}function me(_,x){let P={type:14};if(x.braceNest>0)return xe(_,x)||p(x);if(x.inLinked)return fe(_,x)||p(x);switch(_.currentChar()){case"{":return xe(_,x)||p(x);case"}":return d(Ie.UNBALANCED_CLOSING_BRACE,s(),0),_.next(),h(x,3,"}");case"@":return fe(_,x)||p(x);default:if(I(_))return P=h(x,1,de(_)),x.braceNest=0,x.inLinked=!1,P;const{isModulo:V,hasSpace:ne}=K(_);if(V)return ne?h(x,0,le(_)):h(x,4,$(_));if(Q(_))return h(x,0,le(_));break}return P}function A(){const{currentType:_,offset:x,startLoc:P,endLoc:O}=l;return l.lastType=_,l.lastOffset=x,l.lastStartLoc=P,l.lastEndLoc=O,l.offset=r(),l.startLoc=s(),i.currentChar()===ti?h(l,14):me(i,l)}return{nextToken:A,currentOffset:r,currentPosition:s,context:c}}const Pb="parser",Rb=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Ib(n,e,t){switch(n){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||t,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function Db(n={}){const e=n.location!==!1,{onError:t}=n;function i(f,b,S,y,...w){const C=f.currentPosition();if(C.offset+=y,C.column+=y,t){const N=e?ol(S,C):null,U=Fr(b,N,{domain:Pb,args:w});t(U)}}function r(f,b,S){const y={type:f};return e&&(y.start=b,y.end=b,y.loc={start:S,end:S}),y}function s(f,b,S,y){y&&(f.type=y),e&&(f.end=b,f.loc&&(f.loc.end=S))}function a(f,b){const S=f.context(),y=r(3,S.offset,S.startLoc);return y.value=b,s(y,f.currentOffset(),f.currentPosition()),y}function o(f,b){const S=f.context(),{lastOffset:y,lastStartLoc:w}=S,C=r(5,y,w);return C.index=parseInt(b,10),f.nextToken(),s(C,f.currentOffset(),f.currentPosition()),C}function l(f,b){const S=f.context(),{lastOffset:y,lastStartLoc:w}=S,C=r(4,y,w);return C.key=b,f.nextToken(),s(C,f.currentOffset(),f.currentPosition()),C}function c(f,b){const S=f.context(),{lastOffset:y,lastStartLoc:w}=S,C=r(9,y,w);return C.value=b.replace(Rb,Ib),f.nextToken(),s(C,f.currentOffset(),f.currentPosition()),C}function u(f){const b=f.nextToken(),S=f.context(),{lastOffset:y,lastStartLoc:w}=S,C=r(8,y,w);return b.type!==12?(i(f,Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER,S.lastStartLoc,0),C.value="",s(C,y,w),{nextConsumeToken:b,node:C}):(b.value==null&&i(f,Ie.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Tn(b)),C.value=b.value||"",s(C,f.currentOffset(),f.currentPosition()),{node:C})}function d(f,b){const S=f.context(),y=r(7,S.offset,S.startLoc);return y.value=b,s(y,f.currentOffset(),f.currentPosition()),y}function h(f){const b=f.context(),S=r(6,b.offset,b.startLoc);let y=f.nextToken();if(y.type===9){const w=u(f);S.modifier=w.node,y=w.nextConsumeToken||f.nextToken()}switch(y.type!==10&&i(f,Ie.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Tn(y)),y=f.nextToken(),y.type===2&&(y=f.nextToken()),y.type){case 11:y.value==null&&i(f,Ie.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Tn(y)),S.key=d(f,y.value||"");break;case 5:y.value==null&&i(f,Ie.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Tn(y)),S.key=l(f,y.value||"");break;case 6:y.value==null&&i(f,Ie.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Tn(y)),S.key=o(f,y.value||"");break;case 7:y.value==null&&i(f,Ie.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Tn(y)),S.key=c(f,y.value||"");break;default:i(f,Ie.UNEXPECTED_EMPTY_LINKED_KEY,b.lastStartLoc,0);const w=f.context(),C=r(7,w.offset,w.startLoc);return C.value="",s(C,w.offset,w.startLoc),S.key=C,s(S,w.offset,w.startLoc),{nextConsumeToken:y,node:S}}return s(S,f.currentOffset(),f.currentPosition()),{node:S}}function p(f){const b=f.context(),S=b.currentType===1?f.currentOffset():b.offset,y=b.currentType===1?b.endLoc:b.startLoc,w=r(2,S,y);w.items=[];let C=null;do{const T=C||f.nextToken();switch(C=null,T.type){case 0:T.value==null&&i(f,Ie.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Tn(T)),w.items.push(a(f,T.value||""));break;case 6:T.value==null&&i(f,Ie.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Tn(T)),w.items.push(o(f,T.value||""));break;case 5:T.value==null&&i(f,Ie.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Tn(T)),w.items.push(l(f,T.value||""));break;case 7:T.value==null&&i(f,Ie.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Tn(T)),w.items.push(c(f,T.value||""));break;case 8:const I=h(f);w.items.push(I.node),C=I.nextConsumeToken||null;break}}while(b.currentType!==14&&b.currentType!==1);const N=b.currentType===1?b.lastOffset:f.currentOffset(),U=b.currentType===1?b.lastEndLoc:f.currentPosition();return s(w,N,U),w}function v(f,b,S,y){const w=f.context();let C=y.items.length===0;const N=r(1,b,S);N.cases=[],N.cases.push(y);do{const U=p(f);C||(C=U.items.length===0),N.cases.push(U)}while(w.currentType!==14);return C&&i(f,Ie.MUST_HAVE_MESSAGES_IN_PLURAL,S,0),s(N,f.currentOffset(),f.currentPosition()),N}function M(f){const b=f.context(),{offset:S,startLoc:y}=b,w=p(f);return b.currentType===14?w:v(f,S,y,w)}function m(f){const b=Lb(f,Oh({},n)),S=b.context(),y=r(0,S.offset,S.startLoc);return e&&y.loc&&(y.loc.source=f),y.body=M(b),n.onCacheKey&&(y.cacheKey=n.onCacheKey(f)),S.currentType!==14&&i(b,Ie.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,f[S.offset]||""),s(y,b.currentOffset(),b.currentPosition()),y}return{parse:m}}function Tn(n){if(n.type===14)return"EOF";const e=(n.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Nb(n,e={}){const t={ast:n,helpers:new Set};return{context:()=>t,helper:s=>(t.helpers.add(s),s)}}function xf(n,e){for(let t=0;t<n.length;t++)jl(n[t],e)}function jl(n,e){switch(n.type){case 1:xf(n.cases,e),e.helper("plural");break;case 2:xf(n.items,e);break;case 6:jl(n.key,e),e.helper("linked"),e.helper("type");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Ub(n,e={}){const t=Nb(n);t.helper("normalize"),n.body&&jl(n.body,t);const i=t.context();n.helpers=Array.from(i.helpers)}function Ob(n){const e=n.body;return e.type===2?Mf(e):e.cases.forEach(t=>Mf(t)),n}function Mf(n){if(n.items.length===1){const e=n.items[0];(e.type===3||e.type===9)&&(n.static=e.value,delete e.value)}else{const e=[];for(let t=0;t<n.items.length;t++){const i=n.items[t];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===n.items.length){n.static=Fh(e);for(let t=0;t<n.items.length;t++){const i=n.items[t];(i.type===3||i.type===9)&&delete i.value}}}}const Fb="minifier";function fr(n){switch(n.t=n.type,n.type){case 0:const e=n;fr(e.body),e.b=e.body,delete e.body;break;case 1:const t=n,i=t.cases;for(let u=0;u<i.length;u++)fr(i[u]);t.c=i,delete t.cases;break;case 2:const r=n,s=r.items;for(let u=0;u<s.length;u++)fr(s[u]);r.i=s,delete r.items,r.static&&(r.s=r.static,delete r.static);break;case 3:case 9:case 8:case 7:const a=n;a.value&&(a.v=a.value,delete a.value);break;case 6:const o=n;fr(o.key),o.k=o.key,delete o.key,o.modifier&&(fr(o.modifier),o.m=o.modifier,delete o.modifier);break;case 5:const l=n;l.i=l.index,delete l.index;break;case 4:const c=n;c.k=c.key,delete c.key;break;default:throw Fr(Ie.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:Fb,args:[n.type]})}delete n.type}const kb="parser";function zb(n,e){const{sourceMap:t,filename:i,breakLineCode:r,needIndent:s}=e,a=e.location!==!1,o={filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};a&&n.loc&&(o.source=n.loc.source);const l=()=>o;function c(m,f){o.code+=m}function u(m,f=!0){const b=f?r:"";c(s?b+"  ".repeat(m):b)}function d(m=!0){const f=++o.indentLevel;m&&u(f)}function h(m=!0){const f=--o.indentLevel;m&&u(f)}function p(){u(o.indentLevel)}return{context:l,push:c,indent:d,deindent:h,newline:p,helper:m=>`_${m}`,needIndent:()=>o.needIndent}}function Bb(n,e){const{helper:t}=n;n.push(`${t("linked")}(`),Pr(n,e.key),e.modifier?(n.push(", "),Pr(n,e.modifier),n.push(", _type")):n.push(", undefined, _type"),n.push(")")}function Hb(n,e){const{helper:t,needIndent:i}=n;n.push(`${t("normalize")}([`),n.indent(i());const r=e.items.length;for(let s=0;s<r&&(Pr(n,e.items[s]),s!==r-1);s++)n.push(", ");n.deindent(i()),n.push("])")}function Vb(n,e){const{helper:t,needIndent:i}=n;if(e.cases.length>1){n.push(`${t("plural")}([`),n.indent(i());const r=e.cases.length;for(let s=0;s<r&&(Pr(n,e.cases[s]),s!==r-1);s++)n.push(", ");n.deindent(i()),n.push("])")}}function Gb(n,e){e.body?Pr(n,e.body):n.push("null")}function Pr(n,e){const{helper:t}=n;switch(e.type){case 0:Gb(n,e);break;case 1:Vb(n,e);break;case 2:Hb(n,e);break;case 6:Bb(n,e);break;case 8:n.push(JSON.stringify(e.value),e);break;case 7:n.push(JSON.stringify(e.value),e);break;case 5:n.push(`${t("interpolate")}(${t("list")}(${e.index}))`,e);break;case 4:n.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:n.push(JSON.stringify(e.value),e);break;case 3:n.push(JSON.stringify(e.value),e);break;default:throw Fr(Ie.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:kb,args:[e.type]})}}const Wb=(n,e={})=>{const t=_f(e.mode)?e.mode:"normal",i=_f(e.filename)?e.filename:"message.intl",r=!!e.sourceMap,s=e.breakLineCode!=null?e.breakLineCode:t==="arrow"?";":`
`,a=e.needIndent?e.needIndent:t!=="arrow",o=n.helpers||[],l=zb(n,{mode:t,filename:i,sourceMap:r,breakLineCode:s,needIndent:a});l.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),o.length>0&&(l.push(`const { ${Fh(o.map(d=>`${d}: _${d}`),", ")} } = ctx`),l.newline()),l.push("return "),Pr(l,n),l.deindent(a),l.push("}"),delete n.helpers;const{code:c,map:u}=l.context();return{ast:n,code:c,map:u?u.toJSON():void 0}};function $b(n,e={}){const t=Oh({},e),i=!!t.jit,r=!!t.minify,s=t.optimize==null?!0:t.optimize,o=Db(t).parse(n);return i?(s&&Ob(o),r&&fr(o),{ast:o,code:""}):(Ub(o,t),Wb(o,t))}/*!
  * core-base v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function Xb(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Vn().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Vn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Vn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const mi=[];mi[0]={w:[0],i:[3,0],["["]:[4],o:[7]};mi[1]={w:[1],["."]:[2],["["]:[4],o:[7]};mi[2]={w:[2],i:[3,0],[0]:[3,0]};mi[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};mi[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};mi[5]={["'"]:[4,0],o:8,l:[5,0]};mi[6]={['"']:[4,0],o:8,l:[6,0]};const qb=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function jb(n){return qb.test(n)}function Yb(n){const e=n.charCodeAt(0),t=n.charCodeAt(n.length-1);return e===t&&(e===34||e===39)?n.slice(1,-1):n}function Kb(n){if(n==null)return"o";switch(n.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return n;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Zb(n){const e=n.trim();return n.charAt(0)==="0"&&isNaN(parseInt(n))?!1:jb(e)?Yb(e):"*"+e}function Jb(n){const e=[];let t=-1,i=0,r=0,s,a,o,l,c,u,d;const h=[];h[0]=()=>{a===void 0?a=o:a+=o},h[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,a===void 0||(a=Zb(a),a===!1))return!1;h[1]()}};function p(){const v=n[t+1];if(i===5&&v==="'"||i===6&&v==='"')return t++,o="\\"+v,h[0](),!0}for(;i!==null;)if(t++,s=n[t],!(s==="\\"&&p())){if(l=Kb(s),d=mi[i],c=d[l]||d.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(o=s,u()===!1))))return;if(i===7)return e}}const Sf=new Map;function Qb(n,e){return Ze(n)?n[e]:null}function eE(n,e){if(!Ze(n))return null;let t=Sf.get(e);if(t||(t=Jb(e),t&&Sf.set(e,t)),!t)return null;const i=t.length;let r=n,s=0;for(;s<i;){const a=r[t[s]];if(a===void 0)return null;r=a,s++}return r}const tE=n=>n,nE=n=>"",iE="text",rE=n=>n.length===0?"":mb(n),sE=pb;function yf(n,e){return n=Math.abs(n),e===2?n?n>1?1:0:1:n?Math.min(n,2):0}function aE(n){const e=mt(n.pluralIndex)?n.pluralIndex:-1;return n.named&&(mt(n.named.count)||mt(n.named.n))?mt(n.named.count)?n.named.count:mt(n.named.n)?n.named.n:e:e}function oE(n,e){e.count||(e.count=n),e.n||(e.n=n)}function lE(n={}){const e=n.locale,t=aE(n),i=Ze(n.pluralRules)&&ye(e)&&ot(n.pluralRules[e])?n.pluralRules[e]:yf,r=Ze(n.pluralRules)&&ye(e)&&ot(n.pluralRules[e])?yf:void 0,s=f=>f[i(t,f.length,r)],a=n.list||[],o=f=>a[f],l=n.named||{};mt(n.pluralIndex)&&oE(t,l);const c=f=>l[f];function u(f){const b=ot(n.messages)?n.messages(f):Ze(n.messages)?n.messages[f]:!1;return b||(n.parent?n.parent.message(f):nE)}const d=f=>n.modifiers?n.modifiers[f]:tE,h=Oe(n.processor)&&ot(n.processor.normalize)?n.processor.normalize:rE,p=Oe(n.processor)&&ot(n.processor.interpolate)?n.processor.interpolate:sE,v=Oe(n.processor)&&ye(n.processor.type)?n.processor.type:iE,m={list:o,named:c,plural:s,linked:(f,...b)=>{const[S,y]=b;let w="text",C="";b.length===1?Ze(S)?(C=S.modifier||C,w=S.type||w):ye(S)&&(C=S||C):b.length===2&&(ye(S)&&(C=S||C),ye(y)&&(w=y||w));const N=u(f)(m),U=w==="vnode"&&rt(N)&&C?N[0]:N;return C?d(C)(U,w):U},message:u,type:v,interpolate:p,normalize:h,values:wt({},a,l)};return m}let fs=null;function cE(n){fs=n}function uE(n,e,t){fs&&fs.emit("i18n:init",{timestamp:Date.now(),i18n:n,version:e,meta:t})}const fE=dE("function:translate");function dE(n){return e=>fs&&fs.emit(n,e)}const hE={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};function Yl(n,e){return e.locale!=null?bf(e.locale):bf(n.locale)}let Po;function bf(n){return ye(n)?n:Po!=null&&n.resolvedOnce?Po:Po=n()}function pE(n,e,t){return[...new Set([t,...rt(e)?e:Ze(e)?Object.keys(e):ye(e)?[e]:[t]])]}function kh(n,e,t){const i=ye(t)?t:Rr,r=n;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let a=[t];for(;rt(a);)a=Ef(s,a,e);const o=rt(e)||!Oe(e)?e:e.default?e.default:null;a=ye(o)?[o]:o,rt(a)&&Ef(s,a,!1),r.__localeChainCache.set(i,s)}return s}function Ef(n,e,t){let i=!0;for(let r=0;r<e.length&&Ge(i);r++){const s=e[r];ye(s)&&(i=mE(n,e[r],t))}return i}function mE(n,e,t){let i;const r=e.split("-");do{const s=r.join("-");i=gE(n,s,t),r.splice(-1,1)}while(r.length&&i===!0);return i}function gE(n,e,t){let i=!1;if(!n.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");n.push(r),(rt(t)||Oe(t))&&t[r]&&(i=t[r])}return i}const _E="9.5.0",ka=-1,Rr="en-US",Tf="",wf=n=>`${n.charAt(0).toLocaleUpperCase()}${n.substr(1)}`;function vE(){return{upper:(n,e)=>e==="text"&&ye(n)?n.toUpperCase():e==="vnode"&&Ze(n)&&"__v_isVNode"in n?n.children.toUpperCase():n,lower:(n,e)=>e==="text"&&ye(n)?n.toLowerCase():e==="vnode"&&Ze(n)&&"__v_isVNode"in n?n.children.toLowerCase():n,capitalize:(n,e)=>e==="text"&&ye(n)?wf(n):e==="vnode"&&Ze(n)&&"__v_isVNode"in n?wf(n.children):n}}let zh;function Af(n){zh=n}let Bh;function xE(n){Bh=n}let Hh;function ME(n){Hh=n}let Vh=null;const Cf=n=>{Vh=n},SE=()=>Vh;let Gh=null;const Lf=n=>{Gh=n},yE=()=>Gh;let Pf=0;function bE(n={}){const e=ot(n.onWarn)?n.onWarn:gb,t=ye(n.version)?n.version:_E,i=ye(n.locale)||ot(n.locale)?n.locale:Rr,r=ot(i)?Rr:i,s=rt(n.fallbackLocale)||Oe(n.fallbackLocale)||ye(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:r,a=Oe(n.messages)?n.messages:{[r]:{}},o=Oe(n.datetimeFormats)?n.datetimeFormats:{[r]:{}},l=Oe(n.numberFormats)?n.numberFormats:{[r]:{}},c=wt({},n.modifiers||{},vE()),u=n.pluralRules||{},d=ot(n.missing)?n.missing:null,h=Ge(n.missingWarn)||hi(n.missingWarn)?n.missingWarn:!0,p=Ge(n.fallbackWarn)||hi(n.fallbackWarn)?n.fallbackWarn:!0,v=!!n.fallbackFormat,M=!!n.unresolving,m=ot(n.postTranslation)?n.postTranslation:null,f=Oe(n.processor)?n.processor:null,b=Ge(n.warnHtmlMessage)?n.warnHtmlMessage:!0,S=!!n.escapeParameter,y=ot(n.messageCompiler)?n.messageCompiler:zh,w=ot(n.messageResolver)?n.messageResolver:Bh||Qb,C=ot(n.localeFallbacker)?n.localeFallbacker:Hh||pE,N=Ze(n.fallbackContext)?n.fallbackContext:void 0,U=n,T=Ze(U.__datetimeFormatters)?U.__datetimeFormatters:new Map,I=Ze(U.__numberFormatters)?U.__numberFormatters:new Map,K=Ze(U.__meta)?U.__meta:{};Pf++;const Q={version:t,cid:Pf,locale:i,fallbackLocale:s,messages:a,modifiers:c,pluralRules:u,missing:d,missingWarn:h,fallbackWarn:p,fallbackFormat:v,unresolving:M,postTranslation:m,processor:f,warnHtmlMessage:b,escapeParameter:S,messageCompiler:y,messageResolver:w,localeFallbacker:C,fallbackContext:N,onWarn:e,__meta:K};return Q.datetimeFormats=o,Q.numberFormats=l,Q.__datetimeFormatters=T,Q.__numberFormatters=I,__INTLIFY_PROD_DEVTOOLS__&&uE(Q,t,K),Q}function Kl(n,e,t,i,r){const{missing:s,onWarn:a}=n;if(s!==null){const o=s(n,t,e,r);return ye(o)?o:e}else return e}function Wr(n,e,t){const i=n;i.__localeChainCache=new Map,n.localeFallbacker(n,t,e)}function Ro(n){return t=>EE(t,n)}function EE(n,e){const t=e.b||e.body;if((t.t||t.type)===1){const i=t,r=i.c||i.cases;return n.plural(r.reduce((s,a)=>[...s,Rf(n,a)],[]))}else return Rf(n,t)}function Rf(n,e){const t=e.s||e.static;if(t)return n.type==="text"?t:n.normalize([t]);{const i=(e.i||e.items).reduce((r,s)=>[...r,ll(n,s)],[]);return n.normalize(i)}}function ll(n,e){const t=e.t||e.type;switch(t){case 3:const i=e;return i.v||i.value;case 9:const r=e;return r.v||r.value;case 4:const s=e;return n.interpolate(n.named(s.k||s.key));case 5:const a=e;return n.interpolate(n.list(a.i!=null?a.i:a.index));case 6:const o=e,l=o.m||o.modifier;return n.linked(ll(n,o.k||o.key),l?ll(n,l):void 0,n.type);case 7:const c=e;return c.v||c.value;case 8:const u=e;return u.v||u.value;default:throw new Error(`unhandled node type on format message part: ${t}`)}}const Wh=Ie.__EXTEND_POINT__,ta=ql(Wh),ai={INVALID_ARGUMENT:Wh,INVALID_DATE_ARGUMENT:ta(),INVALID_ISO_DATE_ARGUMENT:ta(),NOT_SUPPORT_NON_STRING_MESSAGE:ta(),__EXTEND_POINT__:ta()};function Oi(n){return Fr(n,null,void 0)}const $h=n=>n;let hr=Object.create(null);const ds=n=>Ze(n)&&(n.t===0||n.type===0)&&("b"in n||"body"in n);function Xh(n,e={}){let t=!1;const i=e.onError||yb;return e.onError=r=>{t=!0,i(r)},{...$b(n,e),detectError:t}}const TE=(n,e)=>{if(!ye(n))throw Oi(ai.NOT_SUPPORT_NON_STRING_MESSAGE);{Ge(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||$h)(n),r=hr[i];if(r)return r;const{code:s,detectError:a}=Xh(n,e),o=new Function(`return ${s}`)();return a?o:hr[i]=o}};function wE(n,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&ye(n)){Ge(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||$h)(n),r=hr[i];if(r)return r;const{ast:s,detectError:a}=Xh(n,{...e,location:!1,jit:!0}),o=Ro(s);return a?o:hr[i]=o}else{const t=n.cacheKey;if(t){const i=hr[t];return i||(hr[t]=Ro(n))}else return Ro(n)}}const If=()=>"",hn=n=>ot(n);function Df(n,...e){const{fallbackFormat:t,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:a,messages:o}=n,[l,c]=cl(...e),u=Ge(c.missingWarn)?c.missingWarn:n.missingWarn,d=Ge(c.fallbackWarn)?c.fallbackWarn:n.fallbackWarn,h=Ge(c.escapeParameter)?c.escapeParameter:n.escapeParameter,p=!!c.resolvedMessage,v=ye(c.default)||Ge(c.default)?Ge(c.default)?s?l:()=>l:c.default:t?s?l:()=>l:"",M=t||v!=="",m=Yl(n,c);h&&AE(c);let[f,b,S]=p?[l,m,o[m]||{}]:qh(n,l,m,a,d,u),y=f,w=l;if(!p&&!(ye(y)||ds(y)||hn(y))&&M&&(y=v,w=y),!p&&(!(ye(y)||ds(y)||hn(y))||!ye(b)))return r?ka:l;let C=!1;const N=()=>{C=!0},U=hn(y)?y:jh(n,l,b,y,w,N);if(C)return y;const T=PE(n,b,S,c),I=lE(T),K=CE(n,U,I),Q=i?i(K,l):K;if(__INTLIFY_PROD_DEVTOOLS__){const z={timestamp:Date.now(),key:ye(l)?l:hn(y)?y.key:"",locale:b||(hn(y)?y.locale:""),format:ye(y)?y:hn(y)?y.source:"",message:Q};z.meta=wt({},n.__meta,SE()||{}),fE(z)}return Q}function AE(n){rt(n.list)?n.list=n.list.map(e=>ye(e)?gf(e):e):Ze(n.named)&&Object.keys(n.named).forEach(e=>{ye(n.named[e])&&(n.named[e]=gf(n.named[e]))})}function qh(n,e,t,i,r,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=n,u=c(n,i,t);let d={},h,p=null;const v="translate";for(let M=0;M<u.length&&(h=u[M],d=a[h]||{},(p=l(d,e))===null&&(p=d[e]),!(ye(p)||ds(p)||hn(p)));M++){const m=Kl(n,e,h,s,v);m!==e&&(p=m)}return[p,h,d]}function jh(n,e,t,i,r,s){const{messageCompiler:a,warnHtmlMessage:o}=n;if(hn(i)){const c=i;return c.locale=c.locale||t,c.key=c.key||e,c}if(a==null){const c=()=>i;return c.locale=t,c.key=e,c}const l=a(i,LE(n,t,r,i,o,s));return l.locale=t,l.key=e,l.source=i,l}function CE(n,e,t){return e(t)}function cl(...n){const[e,t,i]=n,r={};if(!ye(e)&&!mt(e)&&!hn(e)&&!ds(e))throw Oi(ai.INVALID_ARGUMENT);const s=mt(e)?String(e):(hn(e),e);return mt(t)?r.plural=t:ye(t)?r.default=t:Oe(t)&&!Fa(t)?r.named=t:rt(t)&&(r.list=t),mt(i)?r.plural=i:ye(i)?r.default=i:Oe(i)&&wt(r,i),[s,r]}function LE(n,e,t,i,r,s){return{locale:e,key:t,warnHtmlMessage:r,onError:a=>{throw s&&s(a),a},onCacheKey:a=>ub(e,t,a)}}function PE(n,e,t,i){const{modifiers:r,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=n,h={locale:e,modifiers:r,pluralRules:s,messages:p=>{let v=a(t,p);if(v==null&&u){const[,,M]=qh(u,p,e,o,l,c);v=a(M,p)}if(ye(v)||ds(v)){let M=!1;const f=jh(n,p,e,v,p,()=>{M=!0});return M?If:f}else return hn(v)?v:If}};return n.processor&&(h.processor=n.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),mt(i.plural)&&(h.pluralIndex=i.plural),h}function Nf(n,...e){const{datetimeFormats:t,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=n,{__datetimeFormatters:o}=n,[l,c,u,d]=ul(...e),h=Ge(u.missingWarn)?u.missingWarn:n.missingWarn;Ge(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const p=!!u.part,v=Yl(n,u),M=a(n,r,v);if(!ye(l)||l==="")return new Intl.DateTimeFormat(v,d).format(c);let m={},f,b=null;const S="datetime format";for(let C=0;C<M.length&&(f=M[C],m=t[f]||{},b=m[l],!Oe(b));C++)Kl(n,l,f,h,S);if(!Oe(b)||!ye(f))return i?ka:l;let y=`${f}__${l}`;Fa(d)||(y=`${y}__${JSON.stringify(d)}`);let w=o.get(y);return w||(w=new Intl.DateTimeFormat(f,wt({},b,d)),o.set(y,w)),p?w.formatToParts(c):w.format(c)}const Yh=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function ul(...n){const[e,t,i,r]=n,s={};let a={},o;if(ye(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Oi(ai.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw Oi(ai.INVALID_ISO_DATE_ARGUMENT)}}else if(db(e)){if(isNaN(e.getTime()))throw Oi(ai.INVALID_DATE_ARGUMENT);o=e}else if(mt(e))o=e;else throw Oi(ai.INVALID_ARGUMENT);return ye(t)?s.key=t:Oe(t)&&Object.keys(t).forEach(l=>{Yh.includes(l)?a[l]=t[l]:s[l]=t[l]}),ye(i)?s.locale=i:Oe(i)&&(a=i),Oe(r)&&(a=r),[s.key||"",o,s,a]}function Uf(n,e,t){const i=n;for(const r in t){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Of(n,...e){const{numberFormats:t,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=n,{__numberFormatters:o}=n,[l,c,u,d]=fl(...e),h=Ge(u.missingWarn)?u.missingWarn:n.missingWarn;Ge(u.fallbackWarn)?u.fallbackWarn:n.fallbackWarn;const p=!!u.part,v=Yl(n,u),M=a(n,r,v);if(!ye(l)||l==="")return new Intl.NumberFormat(v,d).format(c);let m={},f,b=null;const S="number format";for(let C=0;C<M.length&&(f=M[C],m=t[f]||{},b=m[l],!Oe(b));C++)Kl(n,l,f,h,S);if(!Oe(b)||!ye(f))return i?ka:l;let y=`${f}__${l}`;Fa(d)||(y=`${y}__${JSON.stringify(d)}`);let w=o.get(y);return w||(w=new Intl.NumberFormat(f,wt({},b,d)),o.set(y,w)),p?w.formatToParts(c):w.format(c)}const Kh=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function fl(...n){const[e,t,i,r]=n,s={};let a={};if(!mt(e))throw Oi(ai.INVALID_ARGUMENT);const o=e;return ye(t)?s.key=t:Oe(t)&&Object.keys(t).forEach(l=>{Kh.includes(l)?a[l]=t[l]:s[l]=t[l]}),ye(i)?s.locale=i:Oe(i)&&(a=i),Oe(r)&&(a=r),[s.key||"",o,s,a]}function Ff(n,e,t){const i=n;for(const r in t){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}Xb();/*!
  * vue-i18n v9.5.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const RE="9.5.0";function IE(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Vn().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Vn().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Vn().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Vn().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Vn().__INTLIFY_PROD_DEVTOOLS__=!1)}const Zh=hE.__EXTEND_POINT__,ni=ql(Zh);ni(),ni(),ni(),ni(),ni(),ni(),ni(),ni();const Jh=ai.__EXTEND_POINT__,kt=ql(Jh),pt={UNEXPECTED_RETURN_TYPE:Jh,INVALID_ARGUMENT:kt(),MUST_BE_CALL_SETUP_TOP:kt(),NOT_INSTALLED:kt(),NOT_AVAILABLE_IN_LEGACY_MODE:kt(),REQUIRED_VALUE:kt(),INVALID_VALUE:kt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:kt(),NOT_INSTALLED_WITH_PROVIDE:kt(),UNEXPECTED_ERROR:kt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:kt(),BRIDGE_SUPPORT_VUE_2_ONLY:kt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:kt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:kt(),__EXTEND_POINT__:kt()};function gt(n,...e){return Fr(n,null,void 0)}const dl=pi("__translateVNode"),hl=pi("__datetimeParts"),pl=pi("__numberParts"),Qh=pi("__setPluralRules"),ep=pi("__injectWithOption"),ml=pi("__dispose");function gl(n){if(!Ze(n))return n;for(const e in n)if(Xl(n,e))if(!e.includes("."))Ze(n[e])&&gl(n[e]);else{const t=e.split("."),i=t.length-1;let r=n,s=!1;for(let a=0;a<i;a++){if(t[a]in r||(r[t[a]]={}),!Ze(r[t[a]])){s=!0;break}r=r[t[a]]}s||(r[t[i]]=n[e],delete n[e]),Ze(r[t[i]])&&gl(r[t[i]])}return n}function za(n,e){const{messages:t,__i18n:i,messageResolver:r,flatJson:s}=e,a=Oe(t)?t:rt(i)?{}:{[n]:{}};if(rt(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||{},Qr(c,a[l])):Qr(c,a)}else ye(o)&&Qr(JSON.parse(o),a)}),r==null&&s)for(const o in a)Xl(a,o)&&gl(a[o]);return a}const na=n=>!Ze(n)||rt(n);function Qr(n,e){if(na(n)||na(e))throw gt(pt.INVALID_VALUE);for(const t in n)Xl(n,t)&&(na(n[t])||na(e[t])?e[t]=n[t]:Qr(n[t],e[t]))}function tp(n){return n.type}function np(n,e,t){let i=Ze(e.messages)?e.messages:{};"__i18nGlobal"in t&&(i=za(n.locale.value,{messages:i,__i18n:t.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{n.mergeLocaleMessage(s,i[s])});{if(Ze(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(a=>{n.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(Ze(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(a=>{n.mergeNumberFormat(a,e.numberFormats[a])})}}}function kf(n){return Et(gs,null,n,0)}const zf="__INTLIFY_META__";let Bf=0;function Hf(n){return(e,t,i,r)=>n(t,i,yr()||void 0,r)}const DE=()=>{const n=yr();let e=null;return n&&(e=tp(n)[zf])?{[zf]:e}:null};function Zl(n={},e){const{__root:t,__injectWithOption:i}=n,r=t===void 0;let s=Ge(n.inheritLocale)?n.inheritLocale:!0;const a=Yt(t&&s?t.locale.value:ye(n.locale)?n.locale:Rr),o=Yt(t&&s?t.fallbackLocale.value:ye(n.fallbackLocale)||rt(n.fallbackLocale)||Oe(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:a.value),l=Yt(za(a.value,n)),c=Yt(Oe(n.datetimeFormats)?n.datetimeFormats:{[a.value]:{}}),u=Yt(Oe(n.numberFormats)?n.numberFormats:{[a.value]:{}});let d=t?t.missingWarn:Ge(n.missingWarn)||hi(n.missingWarn)?n.missingWarn:!0,h=t?t.fallbackWarn:Ge(n.fallbackWarn)||hi(n.fallbackWarn)?n.fallbackWarn:!0,p=t?t.fallbackRoot:Ge(n.fallbackRoot)?n.fallbackRoot:!0,v=!!n.fallbackFormat,M=ot(n.missing)?n.missing:null,m=ot(n.missing)?Hf(n.missing):null,f=ot(n.postTranslation)?n.postTranslation:null,b=t?t.warnHtmlMessage:Ge(n.warnHtmlMessage)?n.warnHtmlMessage:!0,S=!!n.escapeParameter;const y=t?t.modifiers:Oe(n.modifiers)?n.modifiers:{};let w=n.pluralRules||t&&t.pluralRules,C;C=(()=>{r&&Lf(null);const g={version:RE,locale:a.value,fallbackLocale:o.value,messages:l.value,modifiers:y,pluralRules:w,missing:m===null?void 0:m,missingWarn:d,fallbackWarn:h,fallbackFormat:v,unresolving:!0,postTranslation:f===null?void 0:f,warnHtmlMessage:b,escapeParameter:S,messageResolver:n.messageResolver,messageCompiler:n.messageCompiler,__meta:{framework:"vue"}};g.datetimeFormats=c.value,g.numberFormats=u.value,g.__datetimeFormatters=Oe(C)?C.__datetimeFormatters:void 0,g.__numberFormatters=Oe(C)?C.__numberFormatters:void 0;const R=bE(g);return r&&Lf(R),R})(),Wr(C,a.value,o.value);function U(){return[a.value,o.value,l.value,c.value,u.value]}const T=lt({get:()=>a.value,set:g=>{a.value=g,C.locale=a.value}}),I=lt({get:()=>o.value,set:g=>{o.value=g,C.fallbackLocale=o.value,Wr(C,a.value,g)}}),K=lt(()=>l.value),Q=lt(()=>c.value),z=lt(()=>u.value);function H(){return ot(f)?f:null}function Z(g){f=g,C.postTranslation=g}function ae(){return M}function te(g){g!==null&&(m=Hf(g)),M=g,C.missing=m}const $=(g,R,G,q,he,Me)=>{U();let _e;try{__INTLIFY_PROD_DEVTOOLS__&&Cf(DE()),r||(C.fallbackContext=t?yE():void 0),_e=g(C)}finally{__INTLIFY_PROD_DEVTOOLS__&&Cf(null),r||(C.fallbackContext=void 0)}if(mt(_e)&&_e===ka){const[J,Ae]=R();return t&&p?q(t):he(J)}else{if(Me(_e))return _e;throw gt(pt.UNEXPECTED_RETURN_TYPE)}};function le(...g){return $(R=>Reflect.apply(Df,null,[R,...g]),()=>cl(...g),"translate",R=>Reflect.apply(R.t,R,[...g]),R=>R,R=>ye(R))}function pe(...g){const[R,G,q]=g;if(q&&!Ze(q))throw gt(pt.INVALID_ARGUMENT);return le(R,G,wt({resolvedMessage:!0},q||{}))}function Ee(...g){return $(R=>Reflect.apply(Nf,null,[R,...g]),()=>ul(...g),"datetime format",R=>Reflect.apply(R.d,R,[...g]),()=>Tf,R=>ye(R))}function ve(...g){return $(R=>Reflect.apply(Of,null,[R,...g]),()=>fl(...g),"number format",R=>Reflect.apply(R.n,R,[...g]),()=>Tf,R=>ye(R))}function Y(g){return g.map(R=>ye(R)||mt(R)||Ge(R)?kf(String(R)):R)}const k={normalize:Y,interpolate:g=>g,type:"vnode"};function j(...g){return $(R=>{let G;const q=R;try{q.processor=k,G=Reflect.apply(Df,null,[q,...g])}finally{q.processor=null}return G},()=>cl(...g),"translate",R=>R[dl](...g),R=>[kf(R)],R=>rt(R))}function D(...g){return $(R=>Reflect.apply(Of,null,[R,...g]),()=>fl(...g),"number format",R=>R[pl](...g),()=>[],R=>ye(R)||rt(R))}function de(...g){return $(R=>Reflect.apply(Nf,null,[R,...g]),()=>ul(...g),"datetime format",R=>R[hl](...g),()=>[],R=>ye(R)||rt(R))}function xe(g){w=g,C.pluralRules=w}function fe(g,R){if(!g)return!1;const G=ye(R)?R:a.value,q=_(G);return C.messageResolver(q,g)!==null}function me(g){let R=null;const G=kh(C,o.value,a.value);for(let q=0;q<G.length;q++){const he=l.value[G[q]]||{},Me=C.messageResolver(he,g);if(Me!=null){R=Me;break}}return R}function A(g){const R=me(g);return R??(t?t.tm(g)||{}:{})}function _(g){return l.value[g]||{}}function x(g,R){l.value[g]=R,C.messages=l.value}function P(g,R){l.value[g]=l.value[g]||{},Qr(R,l.value[g]),C.messages=l.value}function O(g){return c.value[g]||{}}function V(g,R){c.value[g]=R,C.datetimeFormats=c.value,Uf(C,g,R)}function ne(g,R){c.value[g]=wt(c.value[g]||{},R),C.datetimeFormats=c.value,Uf(C,g,R)}function ee(g){return u.value[g]||{}}function ue(g,R){u.value[g]=R,C.numberFormats=u.value,Ff(C,g,R)}function ce(g,R){u.value[g]=wt(u.value[g]||{},R),C.numberFormats=u.value,Ff(C,g,R)}Bf++,t&&al&&(ki(t.locale,g=>{s&&(a.value=g,C.locale=g,Wr(C,a.value,o.value))}),ki(t.fallbackLocale,g=>{s&&(o.value=g,C.fallbackLocale=g,Wr(C,a.value,o.value))}));const E={id:Bf,locale:T,fallbackLocale:I,get inheritLocale(){return s},set inheritLocale(g){s=g,g&&t&&(a.value=t.locale.value,o.value=t.fallbackLocale.value,Wr(C,a.value,o.value))},get availableLocales(){return Object.keys(l.value).sort()},messages:K,get modifiers(){return y},get pluralRules(){return w||{}},get isGlobal(){return r},get missingWarn(){return d},set missingWarn(g){d=g,C.missingWarn=d},get fallbackWarn(){return h},set fallbackWarn(g){h=g,C.fallbackWarn=h},get fallbackRoot(){return p},set fallbackRoot(g){p=g},get fallbackFormat(){return v},set fallbackFormat(g){v=g,C.fallbackFormat=v},get warnHtmlMessage(){return b},set warnHtmlMessage(g){b=g,C.warnHtmlMessage=g},get escapeParameter(){return S},set escapeParameter(g){S=g,C.escapeParameter=g},t:le,getLocaleMessage:_,setLocaleMessage:x,mergeLocaleMessage:P,getPostTranslationHandler:H,setPostTranslationHandler:Z,getMissingHandler:ae,setMissingHandler:te,[Qh]:xe};return E.datetimeFormats=Q,E.numberFormats=z,E.rt=pe,E.te=fe,E.tm=A,E.d=Ee,E.n=ve,E.getDateTimeFormat=O,E.setDateTimeFormat=V,E.mergeDateTimeFormat=ne,E.getNumberFormat=ee,E.setNumberFormat=ue,E.mergeNumberFormat=ce,E[ep]=i,E[dl]=j,E[hl]=de,E[pl]=D,E}function NE(n){const e=ye(n.locale)?n.locale:Rr,t=ye(n.fallbackLocale)||rt(n.fallbackLocale)||Oe(n.fallbackLocale)||n.fallbackLocale===!1?n.fallbackLocale:e,i=ot(n.missing)?n.missing:void 0,r=Ge(n.silentTranslationWarn)||hi(n.silentTranslationWarn)?!n.silentTranslationWarn:!0,s=Ge(n.silentFallbackWarn)||hi(n.silentFallbackWarn)?!n.silentFallbackWarn:!0,a=Ge(n.fallbackRoot)?n.fallbackRoot:!0,o=!!n.formatFallbackMessages,l=Oe(n.modifiers)?n.modifiers:{},c=n.pluralizationRules,u=ot(n.postTranslation)?n.postTranslation:void 0,d=ye(n.warnHtmlInMessage)?n.warnHtmlInMessage!=="off":!0,h=!!n.escapeParameterHtml,p=Ge(n.sync)?n.sync:!0;let v=n.messages;if(Oe(n.sharedMessages)){const w=n.sharedMessages;v=Object.keys(w).reduce((N,U)=>{const T=N[U]||(N[U]={});return wt(T,w[U]),N},v||{})}const{__i18n:M,__root:m,__injectWithOption:f}=n,b=n.datetimeFormats,S=n.numberFormats,y=n.flatJson;return{locale:e,fallbackLocale:t,messages:v,flatJson:y,datetimeFormats:b,numberFormats:S,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:d,escapeParameter:h,messageResolver:n.messageResolver,inheritLocale:p,__i18n:M,__root:m,__injectWithOption:f}}function _l(n={},e){{const t=Zl(NE(n)),{__extender:i}=n,r={id:t.id,get locale(){return t.locale.value},set locale(s){t.locale.value=s},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(s){t.fallbackLocale.value=s},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(s){},get missing(){return t.getMissingHandler()},set missing(s){t.setMissingHandler(s)},get silentTranslationWarn(){return Ge(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(s){t.missingWarn=Ge(s)?!s:s},get silentFallbackWarn(){return Ge(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(s){t.fallbackWarn=Ge(s)?!s:s},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(s){t.fallbackFormat=s},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(s){t.setPostTranslationHandler(s)},get sync(){return t.inheritLocale},set sync(s){t.inheritLocale=s},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){t.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(s){t.escapeParameter=s},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(s){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...s){const[a,o,l]=s,c={};let u=null,d=null;if(!ye(a))throw gt(pt.INVALID_ARGUMENT);const h=a;return ye(o)?c.locale=o:rt(o)?u=o:Oe(o)&&(d=o),rt(l)?u=l:Oe(l)&&(d=l),Reflect.apply(t.t,t,[h,u||d||{},c])},rt(...s){return Reflect.apply(t.rt,t,[...s])},tc(...s){const[a,o,l]=s,c={plural:1};let u=null,d=null;if(!ye(a))throw gt(pt.INVALID_ARGUMENT);const h=a;return ye(o)?c.locale=o:mt(o)?c.plural=o:rt(o)?u=o:Oe(o)&&(d=o),ye(l)?c.locale=l:rt(l)?u=l:Oe(l)&&(d=l),Reflect.apply(t.t,t,[h,u||d||{},c])},te(s,a){return t.te(s,a)},tm(s){return t.tm(s)},getLocaleMessage(s){return t.getLocaleMessage(s)},setLocaleMessage(s,a){t.setLocaleMessage(s,a)},mergeLocaleMessage(s,a){t.mergeLocaleMessage(s,a)},d(...s){return Reflect.apply(t.d,t,[...s])},getDateTimeFormat(s){return t.getDateTimeFormat(s)},setDateTimeFormat(s,a){t.setDateTimeFormat(s,a)},mergeDateTimeFormat(s,a){t.mergeDateTimeFormat(s,a)},n(...s){return Reflect.apply(t.n,t,[...s])},getNumberFormat(s){return t.getNumberFormat(s)},setNumberFormat(s,a){t.setNumberFormat(s,a)},mergeNumberFormat(s,a){t.mergeNumberFormat(s,a)},getChoiceIndex(s,a){return-1}};return r.__extender=i,r}}const Jl={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:n=>n==="parent"||n==="global",default:"parent"},i18n:{type:Object}};function UE({slots:n},e){return e.length===1&&e[0]==="default"?(n.default?n.default():[]).reduce((i,r)=>[...i,...r.type===tn?r.children:[r]],[]):e.reduce((t,i)=>{const r=n[i];return r&&(t[i]=r()),t},{})}function ip(n){return tn}const OE=$i({name:"i18n-t",props:wt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:n=>mt(n)||!isNaN(n)}},Jl),setup(n,e){const{slots:t,attrs:i}=e,r=n.i18n||Ql({useScope:n.scope,__useComponent:!0});return()=>{const s=Object.keys(t).filter(d=>d!=="_"),a={};n.locale&&(a.locale=n.locale),n.plural!==void 0&&(a.plural=ye(n.plural)?+n.plural:n.plural);const o=UE(e,s),l=r[dl](n.keypath,o,a),c=wt({},i),u=ye(n.tag)||Ze(n.tag)?n.tag:ip();return Ra(u,c,l)}}}),Vf=OE;function FE(n){return rt(n)&&!ye(n[0])}function rp(n,e,t,i){const{slots:r,attrs:s}=e;return()=>{const a={part:!0};let o={};n.locale&&(a.locale=n.locale),ye(n.format)?a.key=n.format:Ze(n.format)&&(ye(n.format.key)&&(a.key=n.format.key),o=Object.keys(n.format).reduce((h,p)=>t.includes(p)?wt({},h,{[p]:n.format[p]}):h,{}));const l=i(n.value,a,o);let c=[a.key];rt(l)?c=l.map((h,p)=>{const v=r[h.type],M=v?v({[h.type]:h.value,index:p,parts:l}):[h.value];return FE(M)&&(M[0].key=`${h.type}-${p}`),M}):ye(l)&&(c=[l]);const u=wt({},s),d=ye(n.tag)||Ze(n.tag)?n.tag:ip();return Ra(d,u,c)}}const kE=$i({name:"i18n-n",props:wt({value:{type:Number,required:!0},format:{type:[String,Object]}},Jl),setup(n,e){const t=n.i18n||Ql({useScope:"parent",__useComponent:!0});return rp(n,e,Kh,(...i)=>t[pl](...i))}}),Gf=kE,zE=$i({name:"i18n-d",props:wt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Jl),setup(n,e){const t=n.i18n||Ql({useScope:"parent",__useComponent:!0});return rp(n,e,Yh,(...i)=>t[hl](...i))}}),Wf=zE;function BE(n,e){const t=n;if(n.mode==="composition")return t.__getInstance(e)||n.global;{const i=t.__getInstance(e);return i!=null?i.__composer:n.global.__composer}}function HE(n){const e=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw gt(pt.UNEXPECTED_ERROR);const u=BE(n,o.$),d=$f(c);return[Reflect.apply(u.t,u,[...Xf(d)]),u]};return{created:(a,o)=>{const[l,c]=e(o);al&&n.global===c&&(a.__i18nWatcher=ki(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{al&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=$f(o);a.textContent=Reflect.apply(l.t,l,[...Xf(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function $f(n){if(ye(n))return{path:n};if(Oe(n)){if(!("path"in n))throw gt(pt.REQUIRED_VALUE,"path");return n}else throw gt(pt.INVALID_VALUE)}function Xf(n){const{path:e,locale:t,args:i,choice:r,plural:s}=n,a={},o=i||{};return ye(t)&&(a.locale=t),mt(r)&&(a.plural=r),mt(s)&&(a.plural=s),[e,o,a]}function VE(n,e,...t){const i=Oe(t[0])?t[0]:{},r=!!i.useI18nComponentName;(Ge(i.globalInstall)?i.globalInstall:!0)&&([r?"i18n":Vf.name,"I18nT"].forEach(a=>n.component(a,Vf)),[Gf.name,"I18nN"].forEach(a=>n.component(a,Gf)),[Wf.name,"I18nD"].forEach(a=>n.component(a,Wf))),n.directive("t",HE(e))}function GE(n,e,t){return{beforeCreate(){const i=yr();if(!i)throw gt(pt.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=qf(n,s);else{s.__injectWithOption=!0,s.__extender=t.__vueI18nExtend,this.$i18n=_l(s);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=qf(n,r);else{this.$i18n=_l({__i18n:r.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=n;r.__i18nGlobal&&np(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,a)=>this.$i18n.te(s,a),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),t.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=yr();if(!i)throw gt(pt.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),t.__deleteInstance(i),delete this.$i18n}}}function qf(n,e){n.locale=e.locale||n.locale,n.fallbackLocale=e.fallbackLocale||n.fallbackLocale,n.missing=e.missing||n.missing,n.silentTranslationWarn=e.silentTranslationWarn||n.silentFallbackWarn,n.silentFallbackWarn=e.silentFallbackWarn||n.silentFallbackWarn,n.formatFallbackMessages=e.formatFallbackMessages||n.formatFallbackMessages,n.postTranslation=e.postTranslation||n.postTranslation,n.warnHtmlInMessage=e.warnHtmlInMessage||n.warnHtmlInMessage,n.escapeParameterHtml=e.escapeParameterHtml||n.escapeParameterHtml,n.sync=e.sync||n.sync,n.__composer[Qh](e.pluralizationRules||n.pluralizationRules);const t=za(n.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(t).forEach(i=>n.mergeLocaleMessage(i,t[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>n.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>n.mergeNumberFormat(i,e.numberFormats[i])),n}const WE=pi("global-vue-i18n");function $E(n={},e){const t=__VUE_I18N_LEGACY_API__&&Ge(n.legacy)?n.legacy:__VUE_I18N_LEGACY_API__,i=Ge(n.globalInjection)?n.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&t?!!n.allowComposition:!0,s=new Map,[a,o]=XE(n,t),l=pi("");function c(h){return s.get(h)||null}function u(h,p){s.set(h,p)}function d(h){s.delete(h)}{const h={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},get allowComposition(){return r},async install(p,...v){if(p.__VUE_I18N_SYMBOL__=l,p.provide(p.__VUE_I18N_SYMBOL__,h),Oe(v[0])){const f=v[0];h.__composerExtend=f.__composerExtend,h.__vueI18nExtend=f.__vueI18nExtend}let M=null;!t&&i&&(M=tT(p,h.global)),__VUE_I18N_FULL_INSTALL__&&VE(p,h,...v),__VUE_I18N_LEGACY_API__&&t&&p.mixin(GE(o,o.__composer,h));const m=p.unmount;p.unmount=()=>{M&&M(),h.dispose(),m()}},get global(){return o},dispose(){a.stop()},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:d};return h}}function Ql(n={}){const e=yr();if(e==null)throw gt(pt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw gt(pt.NOT_INSTALLED);const t=qE(e),i=YE(t),r=tp(e),s=jE(n,r);if(__VUE_I18N_LEGACY_API__&&t.mode==="legacy"&&!n.__useComponent){if(!t.allowComposition)throw gt(pt.NOT_AVAILABLE_IN_LEGACY_MODE);return QE(e,s,i,n)}if(s==="global")return np(i,n,r),i;if(s==="parent"){let l=KE(t,e,n.__useComponent);return l==null&&(l=i),l}const a=t;let o=a.__getInstance(e);if(o==null){const l=wt({},n);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),o=Zl(l),a.__composerExtend&&(o[ml]=a.__composerExtend(o)),JE(a,e,o),a.__setInstance(e,o)}return o}function XE(n,e,t){const i=id();{const r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>_l(n)):i.run(()=>Zl(n));if(r==null)throw gt(pt.UNEXPECTED_ERROR);return[i,r]}}function qE(n){{const e=xn(n.isCE?WE:n.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw gt(n.isCE?pt.NOT_INSTALLED_WITH_PROVIDE:pt.UNEXPECTED_ERROR);return e}}function jE(n,e){return Fa(n)?"__i18n"in e?"local":"global":n.useScope?n.useScope:"local"}function YE(n){return n.mode==="composition"?n.global:n.global.__composer}function KE(n,e,t=!1){let i=null;const r=e.root;let s=ZE(e,t);for(;s!=null;){const a=n;if(n.mode==="composition")i=a.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(s);o!=null&&(i=o.__composer,t&&i&&!i[ep]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function ZE(n,e=!1){return n==null?null:e&&n.vnode.ctx||n.parent}function JE(n,e,t){ms(()=>{},e),Dl(()=>{const i=t;n.__deleteInstance(e);const r=i[ml];r&&(r(),delete i[ml])},e)}function QE(n,e,t,i={}){const r=e==="local",s=vd(null);if(r&&n.proxy&&!(n.proxy.$options.i18n||n.proxy.$options.__i18n))throw gt(pt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=Ge(i.inheritLocale)?i.inheritLocale:!ye(i.locale),o=Yt(!r||a?t.locale.value:ye(i.locale)?i.locale:Rr),l=Yt(!r||a?t.fallbackLocale.value:ye(i.fallbackLocale)||rt(i.fallbackLocale)||Oe(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:o.value),c=Yt(za(o.value,i)),u=Yt(Oe(i.datetimeFormats)?i.datetimeFormats:{[o.value]:{}}),d=Yt(Oe(i.numberFormats)?i.numberFormats:{[o.value]:{}}),h=r?t.missingWarn:Ge(i.missingWarn)||hi(i.missingWarn)?i.missingWarn:!0,p=r?t.fallbackWarn:Ge(i.fallbackWarn)||hi(i.fallbackWarn)?i.fallbackWarn:!0,v=r?t.fallbackRoot:Ge(i.fallbackRoot)?i.fallbackRoot:!0,M=!!i.fallbackFormat,m=ot(i.missing)?i.missing:null,f=ot(i.postTranslation)?i.postTranslation:null,b=r?t.warnHtmlMessage:Ge(i.warnHtmlMessage)?i.warnHtmlMessage:!0,S=!!i.escapeParameter,y=r?t.modifiers:Oe(i.modifiers)?i.modifiers:{},w=i.pluralRules||r&&t.pluralRules;function C(){return[o.value,l.value,c.value,u.value,d.value]}const N=lt({get:()=>s.value?s.value.locale.value:o.value,set:x=>{s.value&&(s.value.locale.value=x),o.value=x}}),U=lt({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:x=>{s.value&&(s.value.fallbackLocale.value=x),l.value=x}}),T=lt(()=>s.value?s.value.messages.value:c.value),I=lt(()=>u.value),K=lt(()=>d.value);function Q(){return s.value?s.value.getPostTranslationHandler():f}function z(x){s.value&&s.value.setPostTranslationHandler(x)}function H(){return s.value?s.value.getMissingHandler():m}function Z(x){s.value&&s.value.setMissingHandler(x)}function ae(x){return C(),x()}function te(...x){return s.value?ae(()=>Reflect.apply(s.value.t,null,[...x])):ae(()=>"")}function $(...x){return s.value?Reflect.apply(s.value.rt,null,[...x]):""}function le(...x){return s.value?ae(()=>Reflect.apply(s.value.d,null,[...x])):ae(()=>"")}function pe(...x){return s.value?ae(()=>Reflect.apply(s.value.n,null,[...x])):ae(()=>"")}function Ee(x){return s.value?s.value.tm(x):{}}function ve(x,P){return s.value?s.value.te(x,P):!1}function Y(x){return s.value?s.value.getLocaleMessage(x):{}}function oe(x,P){s.value&&(s.value.setLocaleMessage(x,P),c.value[x]=P)}function k(x,P){s.value&&s.value.mergeLocaleMessage(x,P)}function j(x){return s.value?s.value.getDateTimeFormat(x):{}}function D(x,P){s.value&&(s.value.setDateTimeFormat(x,P),u.value[x]=P)}function de(x,P){s.value&&s.value.mergeDateTimeFormat(x,P)}function xe(x){return s.value?s.value.getNumberFormat(x):{}}function fe(x,P){s.value&&(s.value.setNumberFormat(x,P),d.value[x]=P)}function me(x,P){s.value&&s.value.mergeNumberFormat(x,P)}const A={get id(){return s.value?s.value.id:-1},locale:N,fallbackLocale:U,messages:T,datetimeFormats:I,numberFormats:K,get inheritLocale(){return s.value?s.value.inheritLocale:a},set inheritLocale(x){s.value&&(s.value.inheritLocale=x)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(c.value)},get modifiers(){return s.value?s.value.modifiers:y},get pluralRules(){return s.value?s.value.pluralRules:w},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:h},set missingWarn(x){s.value&&(s.value.missingWarn=x)},get fallbackWarn(){return s.value?s.value.fallbackWarn:p},set fallbackWarn(x){s.value&&(s.value.missingWarn=x)},get fallbackRoot(){return s.value?s.value.fallbackRoot:v},set fallbackRoot(x){s.value&&(s.value.fallbackRoot=x)},get fallbackFormat(){return s.value?s.value.fallbackFormat:M},set fallbackFormat(x){s.value&&(s.value.fallbackFormat=x)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:b},set warnHtmlMessage(x){s.value&&(s.value.warnHtmlMessage=x)},get escapeParameter(){return s.value?s.value.escapeParameter:S},set escapeParameter(x){s.value&&(s.value.escapeParameter=x)},t:te,getPostTranslationHandler:Q,setPostTranslationHandler:z,getMissingHandler:H,setMissingHandler:Z,rt:$,d:le,n:pe,tm:Ee,te:ve,getLocaleMessage:Y,setLocaleMessage:oe,mergeLocaleMessage:k,getDateTimeFormat:j,setDateTimeFormat:D,mergeDateTimeFormat:de,getNumberFormat:xe,setNumberFormat:fe,mergeNumberFormat:me};function _(x){x.locale.value=o.value,x.fallbackLocale.value=l.value,Object.keys(c.value).forEach(P=>{x.mergeLocaleMessage(P,c.value[P])}),Object.keys(u.value).forEach(P=>{x.mergeDateTimeFormat(P,u.value[P])}),Object.keys(d.value).forEach(P=>{x.mergeNumberFormat(P,d.value[P])}),x.escapeParameter=S,x.fallbackFormat=M,x.fallbackRoot=v,x.fallbackWarn=p,x.missingWarn=h,x.warnHtmlMessage=b}return Dd(()=>{if(n.proxy==null||n.proxy.$i18n==null)throw gt(pt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const x=s.value=n.proxy.$i18n.__composer;e==="global"?(o.value=x.locale.value,l.value=x.fallbackLocale.value,c.value=x.messages.value,u.value=x.datetimeFormats.value,d.value=x.numberFormats.value):r&&_(x)}),A}const eT=["locale","fallbackLocale","availableLocales"],jf=["t","rt","d","n","tm","te"];function tT(n,e){const t=Object.create(null);return eT.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw gt(pt.UNEXPECTED_ERROR);const a=bt(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(t,r,a)}),n.config.globalProperties.$i18n=t,jf.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw gt(pt.UNEXPECTED_ERROR);Object.defineProperty(n.config.globalProperties,`$${r}`,s)}),()=>{delete n.config.globalProperties.$i18n,jf.forEach(r=>{delete n.config.globalProperties[`$${r}`]})}}IE();__INTLIFY_JIT_COMPILATION__?Af(wE):Af(TE);xE(eE);ME(kh);if(__INTLIFY_PROD_DEVTOOLS__){const n=Vn();n.__INTLIFY__=!0,cE(n.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const nT="MainPage",iT={MAINPAGE__TEXT:nT},rT="MainPage",sT={MAINPAGE__TEXT:rT},aT="首頁",oT={MAINPAGE__TEXT:aT},lT=$E({locale:"jp",messages:{jp:iT,en:sT,tw:oT}}),cT="modulepreload",uT=function(n){return"/personal-website-gcp-backup/"+n},Yf={},Io=function(e,t,i){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=uT(s),s in Yf)return;Yf[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const d=r[u];if(d.href===s&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":cT,a||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),a)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},fT=[{path:"/",name:"/",component:()=>Io(()=>import("./mainpage-e09c85f4.js"),["assets/mainpage-e09c85f4.js","assets/mainpage-8f9394f3.css"])},{path:"/ig-lottery",name:"Ig-lottery",component:()=>Io(()=>import("./ig-lottery-02abacf4.js"),["assets/ig-lottery-02abacf4.js","assets/ig-lottery-bf5524ab.css"])},{path:"/vocabulary",name:"Vocabulary",component:()=>Io(()=>import("./vocabulary-553d71a2.js"),["assets/vocabulary-553d71a2.js","assets/vocabulary-7545c8df.css"])}],sp=Xy({history:ly(),routes:fT});const ap=Bg();ap.use(({store:n})=>{n.$router=ba(sp)});Og(cb).use(lT).use(sp).use(ap).mount("#app");export{tn as F,$l as _,fm as a,_s as b,Kr as c,$i as d,ms as e,Et as f,ps as g,tg as h,_T as i,pT as j,Ps as k,lt as l,Dl as m,Ml as n,Di as o,um as p,xl as q,Yt as r,mT as s,dT as t,Gn as u,gT as v,hT as w,$d as x};
