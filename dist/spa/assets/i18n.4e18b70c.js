var Vt=Object.defineProperty;var Bt=(e,t,n)=>t in e?Vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ce=(e,t,n)=>(Bt(e,typeof t!="symbol"?t+"":t,n),n);import{h as Je,e as xt,r as q,c as Z,w as ie,F as jt,i as $t,g as Qe,a as Gt,o as Ht,b as Kt,d as Xt,T as Yt,f as zt}from"./index.7234b038.js";/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const me=typeof window!="undefined",Jt=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",x=e=>Jt?Symbol(e):e,Qt=(e,t,n)=>qt({l:e,k:t,s:n}),qt=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),S=e=>typeof e=="number"&&isFinite(e),Zt=e=>Ie(e)==="[object Date]",re=e=>Ie(e)==="[object RegExp]",se=e=>I(e)&&Object.keys(e).length===0;function en(e,t){typeof console!="undefined"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const w=Object.assign;function De(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const tn=Object.prototype.hasOwnProperty;function Te(e,t){return tn.call(e,t)}const C=Array.isArray,v=e=>typeof e=="function",_=e=>typeof e=="string",y=e=>typeof e=="boolean",F=e=>e!==null&&typeof e=="object",qe=Object.prototype.toString,Ie=e=>qe.call(e),I=e=>Ie(e)==="[object Object]",nn=e=>e==null?"":C(e)||I(e)&&e.toString===qe?JSON.stringify(e,null,2):String(e);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Ze={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function et(e,t,n={}){const{domain:a,messages:r,args:s}=n,l=e,u=new SyntaxError(String(l));return u.code=e,t&&(u.location=t),u.domain=a,u}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const an={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const j=[];j[0]={w:[0],i:[3,0],["["]:[4],o:[7]};j[1]={w:[1],["."]:[2],["["]:[4],o:[7]};j[2]={w:[2],i:[3,0],[0]:[3,0]};j[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};j[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};j[5]={["'"]:[4,0],o:8,l:[5,0]};j[6]={['"']:[4,0],o:8,l:[6,0]};const rn=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function ln(e){return rn.test(e)}function sn(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function on(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function cn(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:ln(t)?sn(t):"*"+t}function un(e){const t=[];let n=-1,a=0,r=0,s,l,u,c,m,d,E;const g=[];g[0]=()=>{l===void 0?l=u:l+=u},g[1]=()=>{l!==void 0&&(t.push(l),l=void 0)},g[2]=()=>{g[0](),r++},g[3]=()=>{if(r>0)r--,a=4,g[0]();else{if(r=0,l===void 0||(l=cn(l),l===!1))return!1;g[1]()}};function b(){const T=e[n+1];if(a===5&&T==="'"||a===6&&T==='"')return n++,u="\\"+T,g[0](),!0}for(;a!==null;)if(n++,s=e[n],!(s==="\\"&&b())){if(c=on(s),E=j[a],m=E[c]||E.l||8,m===8||(a=m[0],m[1]!==void 0&&(d=g[m[1]],d&&(u=s,d()===!1))))return;if(a===7)return t}}const Re=new Map;function mn(e,t){return F(e)?e[t]:null}function fn(e,t){if(!F(e))return null;let n=Re.get(t);if(n||(n=un(t),n&&Re.set(t,n)),!n)return null;const a=n.length;let r=e,s=0;for(;s<a;){const l=r[n[s]];if(l===void 0)return null;r=l,s++}return r}const _n=e=>e,gn=e=>"",dn="text",En=e=>e.length===0?"":e.join(""),bn=nn;function Se(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Nn(e){const t=S(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(S(e.named.count)||S(e.named.n))?S(e.named.count)?e.named.count:S(e.named.n)?e.named.n:t:t}function Tn(e,t){t.count||(t.count=e),t.n||(t.n=e)}function In(e={}){const t=e.locale,n=Nn(e),a=F(e.pluralRules)&&_(t)&&v(e.pluralRules[t])?e.pluralRules[t]:Se,r=F(e.pluralRules)&&_(t)&&v(e.pluralRules[t])?Se:void 0,s=N=>N[a(n,N.length,r)],l=e.list||[],u=N=>l[N],c=e.named||{};S(e.pluralIndex)&&Tn(n,c);const m=N=>c[N];function d(N){const O=v(e.messages)?e.messages(N):F(e.messages)?e.messages[N]:!1;return O||(e.parent?e.parent.message(N):gn)}const E=N=>e.modifiers?e.modifiers[N]:_n,g=I(e.processor)&&v(e.processor.normalize)?e.processor.normalize:En,b=I(e.processor)&&v(e.processor.interpolate)?e.processor.interpolate:bn,T=I(e.processor)&&_(e.processor.type)?e.processor.type:dn,A={list:u,named:m,plural:s,linked:(N,...O)=>{const[D,p]=O;let f="text",h="";O.length===1?F(D)?(h=D.modifier||h,f=D.type||f):_(D)&&(h=D||h):O.length===2&&(_(D)&&(h=D||h),_(p)&&(f=p||f));let k=d(N)(A);return f==="vnode"&&C(k)&&h&&(k=k[0]),h?E(h)(k,f):k},message:d,type:T,interpolate:b,normalize:g};return A}let pn=null;an.FunctionTranslate;function Ln(e){return t=>pn}const On={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function Fn(e,t,n){return[...new Set([n,...C(t)?t:F(t)?Object.keys(t):_(t)?[t]:[n]])]}function tt(e,t,n){const a=_(n)?n:pe,r=e;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(a);if(!s){s=[];let l=[n];for(;C(l);)l=ve(s,l,t);const u=C(t)||!I(t)?t:t.default?t.default:null;l=_(u)?[u]:u,C(l)&&ve(s,l,!1),r.__localeChainCache.set(a,s)}return s}function ve(e,t,n){let a=!0;for(let r=0;r<t.length&&y(a);r++){const s=t[r];_(s)&&(a=An(e,t[r],n))}return a}function An(e,t,n){let a;const r=t.split("-");do{const s=r.join("-");a=hn(e,s,n),r.splice(-1,1)}while(r.length&&a===!0);return a}function hn(e,t,n){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const r=t.replace(/!/g,"");e.push(r),(C(n)||I(n))&&n[r]&&(a=n[r])}return a}const yn="9.2.2",oe=-1,pe="en-US",ke="",Me=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function Cn(){return{upper:(e,t)=>t==="text"&&_(e)?e.toUpperCase():t==="vnode"&&F(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&_(e)?e.toLowerCase():t==="vnode"&&F(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&_(e)?Me(e):t==="vnode"&&F(e)&&"__v_isVNode"in e?Me(e.children):e}}let Dn,nt;function Rn(e){nt=e}let at;function Sn(e){at=e}let Pe=0;function vn(e={}){const t=_(e.version)?e.version:yn,n=_(e.locale)?e.locale:pe,a=C(e.fallbackLocale)||I(e.fallbackLocale)||_(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,r=I(e.messages)?e.messages:{[n]:{}},s=I(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},l=I(e.numberFormats)?e.numberFormats:{[n]:{}},u=w({},e.modifiers||{},Cn()),c=e.pluralRules||{},m=v(e.missing)?e.missing:null,d=y(e.missingWarn)||re(e.missingWarn)?e.missingWarn:!0,E=y(e.fallbackWarn)||re(e.fallbackWarn)?e.fallbackWarn:!0,g=!!e.fallbackFormat,b=!!e.unresolving,T=v(e.postTranslation)?e.postTranslation:null,L=I(e.processor)?e.processor:null,A=y(e.warnHtmlMessage)?e.warnHtmlMessage:!0,N=!!e.escapeParameter,O=v(e.messageCompiler)?e.messageCompiler:Dn,D=v(e.messageResolver)?e.messageResolver:nt||mn,p=v(e.localeFallbacker)?e.localeFallbacker:at||Fn,f=F(e.fallbackContext)?e.fallbackContext:void 0,h=v(e.onWarn)?e.onWarn:en,k=e,Y=F(k.__datetimeFormatters)?k.__datetimeFormatters:new Map,z=F(k.__numberFormatters)?k.__numberFormatters:new Map,J=F(k.__meta)?k.__meta:{};Pe++;const V={version:t,cid:Pe,locale:n,fallbackLocale:a,messages:r,modifiers:u,pluralRules:c,missing:m,missingWarn:d,fallbackWarn:E,fallbackFormat:g,unresolving:b,postTranslation:T,processor:L,warnHtmlMessage:A,escapeParameter:N,messageCompiler:O,messageResolver:D,localeFallbacker:p,fallbackContext:f,onWarn:h,__meta:J};return V.datetimeFormats=s,V.numberFormats=l,V.__datetimeFormatters=Y,V.__numberFormatters=z,V}function Le(e,t,n,a,r){const{missing:s,onWarn:l}=e;if(s!==null){const u=s(e,n,t,r);return _(u)?u:t}else return t}function ee(e,t,n){const a=e;a.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}let rt=Ze.__EXTEND_POINT__;const ue=()=>++rt,H={INVALID_ARGUMENT:rt,INVALID_DATE_ARGUMENT:ue(),INVALID_ISO_DATE_ARGUMENT:ue(),__EXTEND_POINT__:ue()};function K(e){return et(e,null,void 0)}const we=()=>"",$=e=>v(e);function We(e,...t){const{fallbackFormat:n,postTranslation:a,unresolving:r,messageCompiler:s,fallbackLocale:l,messages:u}=e,[c,m]=fe(...t),d=y(m.missingWarn)?m.missingWarn:e.missingWarn,E=y(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn,g=y(m.escapeParameter)?m.escapeParameter:e.escapeParameter,b=!!m.resolvedMessage,T=_(m.default)||y(m.default)?y(m.default)?s?c:()=>c:m.default:n?s?c:()=>c:"",L=n||T!=="",A=_(m.locale)?m.locale:e.locale;g&&kn(m);let[N,O,D]=b?[c,A,u[A]||{}]:lt(e,c,A,l,E,d),p=N,f=c;if(!b&&!(_(p)||$(p))&&L&&(p=T,f=p),!b&&(!(_(p)||$(p))||!_(O)))return r?oe:c;let h=!1;const k=()=>{h=!0},Y=$(p)?p:st(e,c,O,p,f,k);if(h)return p;const z=wn(e,O,D,m),J=In(z),V=Mn(e,Y,J);return a?a(V,c):V}function kn(e){C(e.list)?e.list=e.list.map(t=>_(t)?De(t):t):F(e.named)&&Object.keys(e.named).forEach(t=>{_(e.named[t])&&(e.named[t]=De(e.named[t]))})}function lt(e,t,n,a,r,s){const{messages:l,onWarn:u,messageResolver:c,localeFallbacker:m}=e,d=m(e,a,n);let E={},g,b=null;const T="translate";for(let L=0;L<d.length&&(g=d[L],E=l[g]||{},(b=c(E,t))===null&&(b=E[t]),!(_(b)||v(b)));L++){const A=Le(e,t,g,s,T);A!==t&&(b=A)}return[b,g,E]}function st(e,t,n,a,r,s){const{messageCompiler:l,warnHtmlMessage:u}=e;if($(a)){const m=a;return m.locale=m.locale||n,m.key=m.key||t,m}if(l==null){const m=()=>a;return m.locale=n,m.key=t,m}const c=l(a,Pn(e,n,r,a,u,s));return c.locale=n,c.key=t,c.source=a,c}function Mn(e,t,n){return t(n)}function fe(...e){const[t,n,a]=e,r={};if(!_(t)&&!S(t)&&!$(t))throw K(H.INVALID_ARGUMENT);const s=S(t)?String(t):($(t),t);return S(n)?r.plural=n:_(n)?r.default=n:I(n)&&!se(n)?r.named=n:C(n)&&(r.list=n),S(a)?r.plural=a:_(a)?r.default=a:I(a)&&w(r,a),[s,r]}function Pn(e,t,n,a,r,s){return{warnHtmlMessage:r,onError:l=>{throw s&&s(l),l},onCacheKey:l=>Qt(t,n,l)}}function wn(e,t,n,a){const{modifiers:r,pluralRules:s,messageResolver:l,fallbackLocale:u,fallbackWarn:c,missingWarn:m,fallbackContext:d}=e,g={locale:t,modifiers:r,pluralRules:s,messages:b=>{let T=l(n,b);if(T==null&&d){const[,,L]=lt(d,b,t,u,c,m);T=l(L,b)}if(_(T)){let L=!1;const N=st(e,b,t,T,b,()=>{L=!0});return L?we:N}else return $(T)?T:we}};return e.processor&&(g.processor=e.processor),a.list&&(g.list=a.list),a.named&&(g.named=a.named),S(a.plural)&&(g.pluralIndex=a.plural),g}function Ue(e,...t){const{datetimeFormats:n,unresolving:a,fallbackLocale:r,onWarn:s,localeFallbacker:l}=e,{__datetimeFormatters:u}=e,[c,m,d,E]=_e(...t),g=y(d.missingWarn)?d.missingWarn:e.missingWarn;y(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const b=!!d.part,T=_(d.locale)?d.locale:e.locale,L=l(e,r,T);if(!_(c)||c==="")return new Intl.DateTimeFormat(T,E).format(m);let A={},N,O=null;const D="datetime format";for(let h=0;h<L.length&&(N=L[h],A=n[N]||{},O=A[c],!I(O));h++)Le(e,c,N,g,D);if(!I(O)||!_(N))return a?oe:c;let p=`${N}__${c}`;se(E)||(p=`${p}__${JSON.stringify(E)}`);let f=u.get(p);return f||(f=new Intl.DateTimeFormat(N,w({},O,E)),u.set(p,f)),b?f.formatToParts(m):f.format(m)}const ot=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function _e(...e){const[t,n,a,r]=e,s={};let l={},u;if(_(t)){const c=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw K(H.INVALID_ISO_DATE_ARGUMENT);const m=c[3]?c[3].trim().startsWith("T")?`${c[1].trim()}${c[3].trim()}`:`${c[1].trim()}T${c[3].trim()}`:c[1].trim();u=new Date(m);try{u.toISOString()}catch{throw K(H.INVALID_ISO_DATE_ARGUMENT)}}else if(Zt(t)){if(isNaN(t.getTime()))throw K(H.INVALID_DATE_ARGUMENT);u=t}else if(S(t))u=t;else throw K(H.INVALID_ARGUMENT);return _(n)?s.key=n:I(n)&&Object.keys(n).forEach(c=>{ot.includes(c)?l[c]=n[c]:s[c]=n[c]}),_(a)?s.locale=a:I(a)&&(l=a),I(r)&&(l=r),[s.key||"",u,s,l]}function Ve(e,t,n){const a=e;for(const r in n){const s=`${t}__${r}`;!a.__datetimeFormatters.has(s)||a.__datetimeFormatters.delete(s)}}function Be(e,...t){const{numberFormats:n,unresolving:a,fallbackLocale:r,onWarn:s,localeFallbacker:l}=e,{__numberFormatters:u}=e,[c,m,d,E]=ge(...t),g=y(d.missingWarn)?d.missingWarn:e.missingWarn;y(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const b=!!d.part,T=_(d.locale)?d.locale:e.locale,L=l(e,r,T);if(!_(c)||c==="")return new Intl.NumberFormat(T,E).format(m);let A={},N,O=null;const D="number format";for(let h=0;h<L.length&&(N=L[h],A=n[N]||{},O=A[c],!I(O));h++)Le(e,c,N,g,D);if(!I(O)||!_(N))return a?oe:c;let p=`${N}__${c}`;se(E)||(p=`${p}__${JSON.stringify(E)}`);let f=u.get(p);return f||(f=new Intl.NumberFormat(N,w({},O,E)),u.set(p,f)),b?f.formatToParts(m):f.format(m)}const ct=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function ge(...e){const[t,n,a,r]=e,s={};let l={};if(!S(t))throw K(H.INVALID_ARGUMENT);const u=t;return _(n)?s.key=n:I(n)&&Object.keys(n).forEach(c=>{ct.includes(c)?l[c]=n[c]:s[c]=n[c]}),_(a)?s.locale=a:I(a)&&(l=a),I(r)&&(l=r),[s.key||"",u,s,l]}function xe(e,t,n){const a=e;for(const r in n){const s=`${t}__${r}`;!a.__numberFormatters.has(s)||a.__numberFormatters.delete(s)}}/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Wn="9.2.2";On.__EXTEND_POINT__;let ut=Ze.__EXTEND_POINT__;const P=()=>++ut,W={UNEXPECTED_RETURN_TYPE:ut,INVALID_ARGUMENT:P(),MUST_BE_CALL_SETUP_TOP:P(),NOT_INSLALLED:P(),NOT_AVAILABLE_IN_LEGACY_MODE:P(),REQUIRED_VALUE:P(),INVALID_VALUE:P(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:P(),NOT_INSLALLED_WITH_PROVIDE:P(),UNEXPECTED_ERROR:P(),NOT_COMPATIBLE_LEGACY_VUE_I18N:P(),BRIDGE_SUPPORT_VUE_2_ONLY:P(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:P(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:P(),__EXTEND_POINT__:P()};function U(e,...t){return et(e,null,void 0)}const de=x("__transrateVNode"),Ee=x("__datetimeParts"),be=x("__numberParts"),Un=x("__setPluralRules");x("__intlifyMeta");const Vn=x("__injectWithOption");function Ne(e){if(!F(e))return e;for(const t in e)if(!!Te(e,t))if(!t.includes("."))F(e[t])&&Ne(e[t]);else{const n=t.split("."),a=n.length-1;let r=e;for(let s=0;s<a;s++)n[s]in r||(r[n[s]]={}),r=r[n[s]];r[n[a]]=e[t],delete e[t],F(r[n[a]])&&Ne(r[n[a]])}return e}function it(e,t){const{messages:n,__i18n:a,messageResolver:r,flatJson:s}=t,l=I(n)?n:C(a)?{}:{[e]:{}};if(C(a)&&a.forEach(u=>{if("locale"in u&&"resource"in u){const{locale:c,resource:m}=u;c?(l[c]=l[c]||{},te(m,l[c])):te(m,l)}else _(u)&&te(JSON.parse(u),l)}),r==null&&s)for(const u in l)Te(l,u)&&Ne(l[u]);return l}const ae=e=>!F(e)||C(e);function te(e,t){if(ae(e)||ae(t))throw U(W.INVALID_VALUE);for(const n in e)Te(e,n)&&(ae(e[n])||ae(t[n])?t[n]=e[n]:te(e[n],t[n]))}function Bn(e){return e.type}function xn(e,t,n){let a=F(t.messages)?t.messages:{};"__i18nGlobal"in n&&(a=it(e.locale.value,{messages:a,__i18n:n.__i18nGlobal}));const r=Object.keys(a);r.length&&r.forEach(s=>{e.mergeLocaleMessage(s,a[s])});{if(F(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(l=>{e.mergeDateTimeFormat(l,t.datetimeFormats[l])})}if(F(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(l=>{e.mergeNumberFormat(l,t.numberFormats[l])})}}}function je(e){return Xt(Yt,null,e,0)}let $e=0;function Ge(e){return(t,n,a,r)=>e(n,a,Qe()||void 0,r)}function mt(e={},t){const{__root:n}=e,a=n===void 0;let r=y(e.inheritLocale)?e.inheritLocale:!0;const s=q(n&&r?n.locale.value:_(e.locale)?e.locale:pe),l=q(n&&r?n.fallbackLocale.value:_(e.fallbackLocale)||C(e.fallbackLocale)||I(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s.value),u=q(it(s.value,e)),c=q(I(e.datetimeFormats)?e.datetimeFormats:{[s.value]:{}}),m=q(I(e.numberFormats)?e.numberFormats:{[s.value]:{}});let d=n?n.missingWarn:y(e.missingWarn)||re(e.missingWarn)?e.missingWarn:!0,E=n?n.fallbackWarn:y(e.fallbackWarn)||re(e.fallbackWarn)?e.fallbackWarn:!0,g=n?n.fallbackRoot:y(e.fallbackRoot)?e.fallbackRoot:!0,b=!!e.fallbackFormat,T=v(e.missing)?e.missing:null,L=v(e.missing)?Ge(e.missing):null,A=v(e.postTranslation)?e.postTranslation:null,N=n?n.warnHtmlMessage:y(e.warnHtmlMessage)?e.warnHtmlMessage:!0,O=!!e.escapeParameter;const D=n?n.modifiers:I(e.modifiers)?e.modifiers:{};let p=e.pluralRules||n&&n.pluralRules,f;f=(()=>{const o={version:Wn,locale:s.value,fallbackLocale:l.value,messages:u.value,modifiers:D,pluralRules:p,missing:L===null?void 0:L,missingWarn:d,fallbackWarn:E,fallbackFormat:b,unresolving:!0,postTranslation:A===null?void 0:A,warnHtmlMessage:N,escapeParameter:O,messageResolver:e.messageResolver,__meta:{framework:"vue"}};return o.datetimeFormats=c.value,o.numberFormats=m.value,o.__datetimeFormatters=I(f)?f.__datetimeFormatters:void 0,o.__numberFormatters=I(f)?f.__numberFormatters:void 0,vn(o)})(),ee(f,s.value,l.value);function k(){return[s.value,l.value,u.value,c.value,m.value]}const Y=Z({get:()=>s.value,set:o=>{s.value=o,f.locale=s.value}}),z=Z({get:()=>l.value,set:o=>{l.value=o,f.fallbackLocale=l.value,ee(f,s.value,o)}}),J=Z(()=>u.value),V=Z(()=>c.value),Ae=Z(()=>m.value);function gt(){return v(A)?A:null}function dt(o){A=o,f.postTranslation=o}function Et(){return T}function bt(o){o!==null&&(L=Ge(o)),T=o,f.missing=L}const G=(o,i,B,M,ce,ne)=>{k();let Q;if(Q=o(f),S(Q)&&Q===oe){const[Ut,ca]=i();return n&&g?M(n):ce(Ut)}else{if(ne(Q))return Q;throw U(W.UNEXPECTED_RETURN_TYPE)}};function he(...o){return G(i=>Reflect.apply(We,null,[i,...o]),()=>fe(...o),"translate",i=>Reflect.apply(i.t,i,[...o]),i=>i,i=>_(i))}function Nt(...o){const[i,B,M]=o;if(M&&!F(M))throw U(W.INVALID_ARGUMENT);return he(i,B,w({resolvedMessage:!0},M||{}))}function Tt(...o){return G(i=>Reflect.apply(Ue,null,[i,...o]),()=>_e(...o),"datetime format",i=>Reflect.apply(i.d,i,[...o]),()=>ke,i=>_(i))}function It(...o){return G(i=>Reflect.apply(Be,null,[i,...o]),()=>ge(...o),"number format",i=>Reflect.apply(i.n,i,[...o]),()=>ke,i=>_(i))}function pt(o){return o.map(i=>_(i)||S(i)||y(i)?je(String(i)):i)}const Lt={normalize:pt,interpolate:o=>o,type:"vnode"};function Ot(...o){return G(i=>{let B;const M=i;try{M.processor=Lt,B=Reflect.apply(We,null,[M,...o])}finally{M.processor=null}return B},()=>fe(...o),"translate",i=>i[de](...o),i=>[je(i)],i=>C(i))}function Ft(...o){return G(i=>Reflect.apply(Be,null,[i,...o]),()=>ge(...o),"number format",i=>i[be](...o),()=>[],i=>_(i)||C(i))}function At(...o){return G(i=>Reflect.apply(Ue,null,[i,...o]),()=>_e(...o),"datetime format",i=>i[Ee](...o),()=>[],i=>_(i)||C(i))}function ht(o){p=o,f.pluralRules=p}function yt(o,i){const B=_(i)?i:s.value,M=ye(B);return f.messageResolver(M,o)!==null}function Ct(o){let i=null;const B=tt(f,l.value,s.value);for(let M=0;M<B.length;M++){const ce=u.value[B[M]]||{},ne=f.messageResolver(ce,o);if(ne!=null){i=ne;break}}return i}function Dt(o){const i=Ct(o);return i!=null?i:n?n.tm(o)||{}:{}}function ye(o){return u.value[o]||{}}function Rt(o,i){u.value[o]=i,f.messages=u.value}function St(o,i){u.value[o]=u.value[o]||{},te(i,u.value[o]),f.messages=u.value}function vt(o){return c.value[o]||{}}function kt(o,i){c.value[o]=i,f.datetimeFormats=c.value,Ve(f,o,i)}function Mt(o,i){c.value[o]=w(c.value[o]||{},i),f.datetimeFormats=c.value,Ve(f,o,i)}function Pt(o){return m.value[o]||{}}function wt(o,i){m.value[o]=i,f.numberFormats=m.value,xe(f,o,i)}function Wt(o,i){m.value[o]=w(m.value[o]||{},i),f.numberFormats=m.value,xe(f,o,i)}$e++,n&&me&&(ie(n.locale,o=>{r&&(s.value=o,f.locale=o,ee(f,s.value,l.value))}),ie(n.fallbackLocale,o=>{r&&(l.value=o,f.fallbackLocale=o,ee(f,s.value,l.value))}));const R={id:$e,locale:Y,fallbackLocale:z,get inheritLocale(){return r},set inheritLocale(o){r=o,o&&n&&(s.value=n.locale.value,l.value=n.fallbackLocale.value,ee(f,s.value,l.value))},get availableLocales(){return Object.keys(u.value).sort()},messages:J,get modifiers(){return D},get pluralRules(){return p||{}},get isGlobal(){return a},get missingWarn(){return d},set missingWarn(o){d=o,f.missingWarn=d},get fallbackWarn(){return E},set fallbackWarn(o){E=o,f.fallbackWarn=E},get fallbackRoot(){return g},set fallbackRoot(o){g=o},get fallbackFormat(){return b},set fallbackFormat(o){b=o,f.fallbackFormat=b},get warnHtmlMessage(){return N},set warnHtmlMessage(o){N=o,f.warnHtmlMessage=o},get escapeParameter(){return O},set escapeParameter(o){O=o,f.escapeParameter=o},t:he,getLocaleMessage:ye,setLocaleMessage:Rt,mergeLocaleMessage:St,getPostTranslationHandler:gt,setPostTranslationHandler:dt,getMissingHandler:Et,setMissingHandler:bt,[Un]:ht};return R.datetimeFormats=V,R.numberFormats=Ae,R.rt=Nt,R.te=yt,R.tm=Dt,R.d=Tt,R.n=It,R.getDateTimeFormat=vt,R.setDateTimeFormat=kt,R.mergeDateTimeFormat=Mt,R.getNumberFormat=Pt,R.setNumberFormat=wt,R.mergeNumberFormat=Wt,R[Vn]=e.__injectWithOption,R[de]=Ot,R[Ee]=At,R[be]=Ft,R}const Oe={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function jn({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((a,r)=>a=[...a,...C(r.children)?r.children:[r]],[]):t.reduce((n,a)=>{const r=e[a];return r&&(n[a]=r()),n},{})}function ft(e){return jt}const He={name:"i18n-t",props:w({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>S(e)||!isNaN(e)}},Oe),setup(e,t){const{slots:n,attrs:a}=t,r=e.i18n||Fe({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(E=>E!=="_"),l={};e.locale&&(l.locale=e.locale),e.plural!==void 0&&(l.plural=_(e.plural)?+e.plural:e.plural);const u=jn(t,s),c=r[de](e.keypath,u,l),m=w({},a),d=_(e.tag)||F(e.tag)?e.tag:ft();return Je(d,m,c)}}};function $n(e){return C(e)&&!_(e[0])}function _t(e,t,n,a){const{slots:r,attrs:s}=t;return()=>{const l={part:!0};let u={};e.locale&&(l.locale=e.locale),_(e.format)?l.key=e.format:F(e.format)&&(_(e.format.key)&&(l.key=e.format.key),u=Object.keys(e.format).reduce((g,b)=>n.includes(b)?w({},g,{[b]:e.format[b]}):g,{}));const c=a(e.value,l,u);let m=[l.key];C(c)?m=c.map((g,b)=>{const T=r[g.type],L=T?T({[g.type]:g.value,index:b,parts:c}):[g.value];return $n(L)&&(L[0].key=`${g.type}-${b}`),L}):_(c)&&(m=[c]);const d=w({},s),E=_(e.tag)||F(e.tag)?e.tag:ft();return Je(E,d,m)}}const Ke={name:"i18n-n",props:w({value:{type:Number,required:!0},format:{type:[String,Object]}},Oe),setup(e,t){const n=e.i18n||Fe({useScope:"parent",__useComponent:!0});return _t(e,t,ct,(...a)=>n[be](...a))}},Xe={name:"i18n-d",props:w({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Oe),setup(e,t){const n=e.i18n||Fe({useScope:"parent",__useComponent:!0});return _t(e,t,ot,(...a)=>n[Ee](...a))}};function Gn(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const a=n.__getInstance(t);return a!=null?a.__composer:e.global.__composer}}function Hn(e){const t=l=>{const{instance:u,modifiers:c,value:m}=l;if(!u||!u.$)throw U(W.UNEXPECTED_ERROR);const d=Gn(e,u.$),E=Ye(m);return[Reflect.apply(d.t,d,[...ze(E)]),d]};return{created:(l,u)=>{const[c,m]=t(u);me&&e.global===m&&(l.__i18nWatcher=ie(m.locale,()=>{u.instance&&u.instance.$forceUpdate()})),l.__composer=m,l.textContent=c},unmounted:l=>{me&&l.__i18nWatcher&&(l.__i18nWatcher(),l.__i18nWatcher=void 0,delete l.__i18nWatcher),l.__composer&&(l.__composer=void 0,delete l.__composer)},beforeUpdate:(l,{value:u})=>{if(l.__composer){const c=l.__composer,m=Ye(u);l.textContent=Reflect.apply(c.t,c,[...ze(m)])}},getSSRProps:l=>{const[u]=t(l);return{textContent:u}}}}function Ye(e){if(_(e))return{path:e};if(I(e)){if(!("path"in e))throw U(W.REQUIRED_VALUE,"path");return e}else throw U(W.INVALID_VALUE)}function ze(e){const{path:t,locale:n,args:a,choice:r,plural:s}=e,l={},u=a||{};return _(n)&&(l.locale=n),S(r)&&(l.plural=r),S(s)&&(l.plural=s),[t,u,l]}function Kn(e,t,...n){const a=I(n[0])?n[0]:{},r=!!a.useI18nComponentName;(y(a.globalInstall)?a.globalInstall:!0)&&(e.component(r?"i18n":He.name,He),e.component(Ke.name,Ke),e.component(Xe.name,Xe)),e.directive("t",Hn(t))}const Xn=x("global-vue-i18n");function Yn(e={},t){const n=y(e.globalInjection)?e.globalInjection:!0,a=!0,r=new Map,[s,l]=zn(e),u=x("");function c(E){return r.get(E)||null}function m(E,g){r.set(E,g)}function d(E){r.delete(E)}{const E={get mode(){return"composition"},get allowComposition(){return a},async install(g,...b){g.__VUE_I18N_SYMBOL__=u,g.provide(g.__VUE_I18N_SYMBOL__,E),n&&aa(g,E.global),Kn(g,E,...b);const T=g.unmount;g.unmount=()=>{E.dispose(),T()}},get global(){return l},dispose(){s.stop()},__instances:r,__getInstance:c,__setInstance:m,__deleteInstance:d};return E}}function Fe(e={}){const t=Qe();if(t==null)throw U(W.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw U(W.NOT_INSLALLED);const n=Jn(t),a=qn(n),r=Bn(t),s=Qn(e,r);if(s==="global")return xn(a,e,r),a;if(s==="parent"){let c=Zn(n,t,e.__useComponent);return c==null&&(c=a),c}const l=n;let u=l.__getInstance(t);if(u==null){const c=w({},e);"__i18n"in r&&(c.__i18n=r.__i18n),a&&(c.__root=a),u=mt(c),ea(l,t),l.__setInstance(t,u)}return u}function zn(e,t,n){const a=xt();{const r=a.run(()=>mt(e));if(r==null)throw U(W.UNEXPECTED_ERROR);return[a,r]}}function Jn(e){{const t=Gt(e.isCE?Xn:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw U(e.isCE?W.NOT_INSLALLED_WITH_PROVIDE:W.UNEXPECTED_ERROR);return t}}function Qn(e,t){return se(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function qn(e){return e.mode==="composition"?e.global:e.global.__composer}function Zn(e,t,n=!1){let a=null;const r=t.root;let s=t.parent;for(;s!=null;){const l=e;if(e.mode==="composition"&&(a=l.__getInstance(s)),a!=null||r===s)break;s=s.parent}return a}function ea(e,t,n){Ht(()=>{},t),Kt(()=>{e.__deleteInstance(t)},t)}const ta=["locale","fallbackLocale","availableLocales"],na=["t","rt","d","n","tm"];function aa(e,t){const n=Object.create(null);ta.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r)throw U(W.UNEXPECTED_ERROR);const s=$t(r.value)?{get(){return r.value.value},set(l){r.value.value=l}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,a,s)}),e.config.globalProperties.$i18n=n,na.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r||!r.value)throw U(W.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,r)})}Rn(fn);Sn(tt);var ra={"app.title":"\u7BA1\u7406\u540E\u53F0\u524D\u7AEF\u811A\u624B\u67B6","message.back-home":"\u8FD4\u56DE\u9996\u9875","route.home":"\u9996\u9875","route.workbench":"\u5DE5\u4F5C\u53F0","route.workbench.home":"\u6211\u7684\u9996\u9875","route.workbench.others":"\u5176\u4ED6","route.orders":"\u8BA2\u5355\u7BA1\u7406","route.orders.pending-orders":"\u5F85\u5904\u7406\u8BA2\u5355","route.orders.orders":"\u5168\u90E8\u8BA2\u5355","route.persons":"\u4EBA\u5458\u7BA1\u7406","route.persons.persons":"\u5168\u90E8\u4EBA\u5458","route.persons.historic-persons":"\u5386\u53F2\u4EBA\u5458","label.credential.username-and-password":"\u624B\u673A\u53F7/\u90AE\u7BB1/\u7528\u6237\u540D","label.credential.secret":"\u5BC6\u7801","label.login.tc":"\u540C\u610F\u300A{0}\u300B\u7528\u6237\u534F\u8BAE","error.login-name-required":"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u3001\u90AE\u7BB1\u6216\u7528\u6237\u540D","error.password-required":"\u8BF7\u8F93\u5165\u5BC6\u7801"},la={"zh-CN":ra};const le=class{static initialize(){le._instance=Yn({legacy:!1,globalInjection:!0,locale:"zh-CN",messages:la})}static translate(t){return le.instance.global.t(t)}static get instance(){return this._instance}};let X=le;Ce(X,"_instance");var sa=zt(({app:e})=>{X.initialize(),e.use(X.instance)}),ma=Object.freeze(Object.defineProperty({__proto__:null,i18n:X,default:sa},Symbol.toStringTag,{value:"Module"}));export{ma as a,X as i,Fe as u};
