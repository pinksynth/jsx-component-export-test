(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var I,u,ce,w,Q,se,B,L={},fe=[],be=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,G=Array.isArray;function x(_,e){for(var t in e)_[t]=e[t];return _}function ue(_){var e=_.parentNode;e&&e.removeChild(_)}function ke(_,e,t){var r,i,o,l={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:l[o]=e[o];if(arguments.length>2&&(l.children=arguments.length>3?I.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)l[o]===void 0&&(l[o]=_.defaultProps[o]);return A(_,l,r,i,null)}function A(_,e,t,r,i){var o={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++ce};return i==null&&u.vnode!=null&&u.vnode(o),o}function T(_){return _.children}function D(_,e){this.props=_,this.context=e}function O(_,e){if(e==null)return _.__?O(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?O(_):null}function ae(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return ae(_)}}function X(_){(!_.__d&&(_.__d=!0)&&w.push(_)&&!V.__r++||Q!==u.debounceRendering)&&((Q=u.debounceRendering)||se)(V)}function V(){var _,e,t,r,i,o,l,s,f;for(w.sort(B);_=w.shift();)_.__d&&(e=w.length,r=void 0,i=void 0,o=void 0,s=(l=(t=_).__v).__e,(f=t.__P)&&(r=[],i=[],(o=x({},l)).__v=l.__v+1,K(f,l,o,t.__n,f.ownerSVGElement!==void 0,l.__h!=null?[s]:null,r,s??O(l),l.__h,i),ve(r,l,i),l.__e!=s&&ae(l)),w.length>e&&w.sort(B));V.__r=0}function pe(_,e,t,r,i,o,l,s,f,y,d){var n,h,p,c,a,C,v,m,S,$,k=0,H=r&&r.__k||fe,E=H.length,N=E,b=e.length;for(t.__k=[],n=0;n<b;n++)(c=t.__k[n]=(c=e[n])==null||typeof c=="boolean"||typeof c=="function"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?A(null,c,null,null,c):G(c)?A(T,{children:c},null,null,null):c.__b>0?A(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null&&(c.__=t,c.__b=t.__b+1,(m=He(c,H,v=n+k,N))===-1?p=L:(p=H[m]||L,H[m]=void 0,N--),K(_,c,p,i,o,l,s,f,y,d),a=c.__e,(h=c.ref)&&p.ref!=h&&(p.ref&&J(p.ref,null,c),d.push(h,c.__c||a,c)),a!=null&&(C==null&&(C=a),$=!(S=p===L||p.__v===null)&&m===v,S?m==-1&&k--:m!==v&&(m===v+1?(k++,$=!0):m>v?N>b-v?(k+=m-v,$=!0):k--:k=m<v&&m==v-1?m-v:0),v=n+k,$=$||m==n&&!S,typeof c.type!="function"||m===v&&p.__k!==c.__k?typeof c.type=="function"||$?c.__d!==void 0?(f=c.__d,c.__d=void 0):f=a.nextSibling:f=he(_,a,f):f=de(c,f,_),typeof t.type=="function"&&(t.__d=f)));for(t.__e=C,n=E;n--;)H[n]!=null&&(typeof t.type=="function"&&H[n].__e!=null&&H[n].__e==t.__d&&(t.__d=H[n].__e.nextSibling),ye(H[n],H[n]))}function de(_,e,t){for(var r,i=_.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=_,e=typeof r.type=="function"?de(r,e,t):he(t,r.__e,e));return e}function he(_,e,t){return t==null||t.parentNode!==_?_.insertBefore(e,null):e==t&&e.parentNode!=null||_.insertBefore(e,t),e.nextSibling}function He(_,e,t,r){var i=_.key,o=_.type,l=t-1,s=t+1,f=e[t];if(f===null||f&&i==f.key&&o===f.type)return t;if(r>(f!=null?1:0))for(;l>=0||s<e.length;){if(l>=0){if((f=e[l])&&i==f.key&&o===f.type)return l;l--}if(s<e.length){if((f=e[s])&&i==f.key&&o===f.type)return s;s++}}return-1}function Pe(_,e,t,r,i){var o;for(o in t)o==="children"||o==="key"||o in e||W(_,o,null,t[o],r);for(o in e)i&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||W(_,o,e[o],t[o],r)}function Y(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||be.test(e)?t:t+"px"}function W(_,e,t,r,i){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||Y(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||Y(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?r||_.addEventListener(e,o?ee:Z,o):_.removeEventListener(e,o?ee:Z,o);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function Z(_){return this.l[_.type+!1](u.event?u.event(_):_)}function ee(_){return this.l[_.type+!0](u.event?u.event(_):_)}function K(_,e,t,r,i,o,l,s,f,y){var d,n,h,p,c,a,C,v,m,S,$,k,H,E,N,b=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(f=t.__h,s=e.__e=t.__e,e.__h=null,o=[s]),(d=u.__b)&&d(e);try{e:if(typeof b=="function"){if(v=e.props,m=(d=b.contextType)&&r[d.__c],S=d?m?m.props.value:d.__:r,t.__c?C=(n=e.__c=t.__c).__=n.__E:("prototype"in b&&b.prototype.render?e.__c=n=new b(v,S):(e.__c=n=new D(v,S),n.constructor=b,n.render=$e),m&&m.sub(n),n.props=v,n.state||(n.state={}),n.context=S,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),b.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=x({},n.__s)),x(n.__s,b.getDerivedStateFromProps(v,n.__s))),p=n.props,c=n.state,n.__v=e,h)b.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==p&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,S),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,S)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(n.props=v,n.state=n.__s,n.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(U){U&&(U.__=e)}),$=0;$<n._sb.length;$++)n.__h.push(n._sb[$]);n._sb=[],n.__h.length&&l.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,S),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(p,c,a)})}if(n.context=S,n.props=v,n.__P=_,n.__e=!1,k=u.__r,H=0,"prototype"in b&&b.prototype.render){for(n.state=n.__s,n.__d=!1,k&&k(e),d=n.render(n.props,n.state,n.context),E=0;E<n._sb.length;E++)n.__h.push(n._sb[E]);n._sb=[]}else do n.__d=!1,k&&k(e),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++H<25);n.state=n.__s,n.getChildContext!=null&&(r=x(x({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(a=n.getSnapshotBeforeUpdate(p,c)),pe(_,G(N=d!=null&&d.type===T&&d.key==null?d.props.children:d)?N:[N],e,t,r,i,o,l,s,f,y),n.base=e.__e,e.__h=null,n.__h.length&&l.push(n),C&&(n.__E=n.__=null)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Se(t.__e,e,t,r,i,o,l,f,y);(d=u.diffed)&&d(e)}catch(U){e.__v=null,(f||o!=null)&&(e.__e=s,e.__h=!!f,o[o.indexOf(s)]=null),u.__e(U,e,t)}}function ve(_,e,t){for(var r=0;r<t.length;r++)J(t[r],t[++r],t[++r]);u.__c&&u.__c(e,_),_.some(function(i){try{_=i.__h,i.__h=[],_.some(function(o){o.call(i)})}catch(o){u.__e(o,i.__v)}})}function Se(_,e,t,r,i,o,l,s,f){var y,d,n,h=t.props,p=e.props,c=e.type,a=0;if(c==="svg"&&(i=!0),o!=null){for(;a<o.length;a++)if((y=o[a])&&"setAttribute"in y==!!c&&(c?y.localName===c:y.nodeType===3)){_=y,o[a]=null;break}}if(_==null){if(c===null)return document.createTextNode(p);_=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,p.is&&p),o=null,s=!1}if(c===null)h===p||s&&_.data===p||(_.data=p);else{if(o=o&&I.call(_.childNodes),d=(h=t.props||L).dangerouslySetInnerHTML,n=p.dangerouslySetInnerHTML,!s){if(o!=null)for(h={},a=0;a<_.attributes.length;a++)h[_.attributes[a].name]=_.attributes[a].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if(Pe(_,p,h,i,s),n)e.__k=[];else if(pe(_,G(a=e.props.children)?a:[a],e,t,r,i&&c!=="foreignObject",o,l,o?o[0]:t.__k&&O(t,0),s,f),o!=null)for(a=o.length;a--;)o[a]!=null&&ue(o[a]);s||("value"in p&&(a=p.value)!==void 0&&(a!==_.value||c==="progress"&&!a||c==="option"&&a!==h.value)&&W(_,"value",a,h.value,!1),"checked"in p&&(a=p.checked)!==void 0&&a!==_.checked&&W(_,"checked",a,h.checked,!1))}return _}function J(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){u.__e(r,t)}}function ye(_,e,t){var r,i;if(u.unmount&&u.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||J(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){u.__e(o,e)}r.base=r.__P=null,_.__c=void 0}if(r=_.__k)for(i=0;i<r.length;i++)r[i]&&ye(r[i],e,t||typeof _.type!="function");t||_.__e==null||ue(_.__e),_.__=_.__e=_.__d=void 0}function $e(_,e,t){return this.constructor(_,t)}function xe(_,e,t){var r,i,o,l;u.__&&u.__(_,e),i=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],l=[],K(e,_=(!r&&t||e).__k=ke(T,null,[_]),i||L,L,e.ownerSVGElement!==void 0,!r&&t?[t]:i?null:e.firstChild?I.call(e.childNodes):null,o,!r&&t?t:i?i.__e:e.firstChild,r,l),ve(o,_,l)}I=fe.slice,u={__e:function(_,e,t,r){for(var i,o,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(_)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(_,r||{}),l=i.__d),l)return i.__E=i}catch(s){_=s}throw _}},ce=0,D.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof _=="function"&&(_=_(x({},t),this.props)),_&&x(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),X(this))},D.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),X(this))},D.prototype.render=T,w=[],se=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B=function(_,e){return _.__v.__b-e.__v.__b},V.__r=0;var q,g,j,_e,R=0,me=[],F=[],te=u.__b,ne=u.__r,oe=u.diffed,re=u.__c,ie=u.unmount;function Ee(_,e){u.__h&&u.__h(g,_,R||e),R=0;var t=g.__H||(g.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:F}),t.__[_]}function Ne(_){return R=1,we(ge,_)}function we(_,e,t){var r=Ee(q++,2);if(r.t=_,!r.__c&&(r.__=[t?t(e):ge(void 0,e),function(s){var f=r.__N?r.__N[0]:r.__[0],y=r.t(f,s);f!==y&&(r.__N=[y,r.__[1]],r.__c.setState({}))}],r.__c=g,!g.u)){var i=function(s,f,y){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(h){return h.__c});if(d.every(function(h){return!h.__N}))return!o||o.call(this,s,f,y);var n=!1;return d.forEach(function(h){if(h.__N){var p=h.__[0];h.__=h.__N,h.__N=void 0,p!==h.__[0]&&(n=!0)}}),!(!n&&r.__c.props===s)&&(!o||o.call(this,s,f,y))};g.u=!0;var o=g.shouldComponentUpdate,l=g.componentWillUpdate;g.componentWillUpdate=function(s,f,y){if(this.__e){var d=o;o=void 0,i(s,f,y),o=d}l&&l.call(this,s,f,y)},g.shouldComponentUpdate=i}return r.__N||r.__}function Ce(){for(var _;_=me.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(M),_.__H.__h.forEach(z),_.__H.__h=[]}catch(e){_.__H.__h=[],u.__e(e,_.__v)}}u.__b=function(_){g=null,te&&te(_)},u.__r=function(_){ne&&ne(_),q=0;var e=(g=_.__c).__H;e&&(j===g?(e.__h=[],g.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=F,t.__N=t.i=void 0})):(e.__h.forEach(M),e.__h.forEach(z),e.__h=[],q=0)),j=g},u.diffed=function(_){oe&&oe(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(me.push(e)!==1&&_e===u.requestAnimationFrame||((_e=u.requestAnimationFrame)||Le)(Ce)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==F&&(t.__=t.__V),t.i=void 0,t.__V=F})),j=g=null},u.__c=function(_,e){e.some(function(t){try{t.__h.forEach(M),t.__h=t.__h.filter(function(r){return!r.__||z(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],u.__e(r,t.__v)}}),re&&re(_,e)},u.unmount=function(_){ie&&ie(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{M(r)}catch(i){e=i}}),t.__H=void 0,e&&u.__e(e,t.__v))};var le=typeof requestAnimationFrame=="function";function Le(_){var e,t=function(){clearTimeout(r),le&&cancelAnimationFrame(e),setTimeout(_)},r=setTimeout(t,100);le&&(e=requestAnimationFrame(t))}function M(_){var e=g,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),g=e}function z(_){var e=g;_.__c=_.__(),g=e}function ge(_,e){return typeof e=="function"?e(_):e}const Te="/assets/preact-48177e6f.svg",Ue="/vite.svg";var Ae=0;function P(_,e,t,r,i,o){var l,s,f={};for(s in e)s=="ref"?l=e[s]:f[s]=e[s];var y={type:_,props:f,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ae,__source:i,__self:o};if(typeof _=="function"&&(l=_.defaultProps))for(s in l)f[s]===void 0&&(f[s]=l[s]);return u.vnode&&u.vnode(y),y}function De(){const[_,e]=Ne(0);return P(T,{children:[P("div",{children:[P("a",{href:"https://vitejs.dev",target:"_blank",children:P("img",{src:Ue,class:"logo",alt:"Vite logo"})}),P("a",{href:"https://preactjs.com",target:"_blank",children:P("img",{src:Te,class:"logo preact",alt:"Preact logo"})})]}),P("h1",{children:"Vite + Preact"}),P("div",{class:"card",children:[P("button",{onClick:()=>e(t=>t+1),children:["count is ",_]}),P("p",{children:["Edit ",P("code",{children:"src/app.jsx"})," and save to test HMR"]})]}),P("p",{class:"read-the-docs",children:"Click on the Vite and Preact logos to learn more"})]})}xe(P(De,{}),document.getElementById("app"));
