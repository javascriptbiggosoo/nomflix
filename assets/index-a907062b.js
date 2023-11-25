import{j as a,s as g,r as x,L as se}from"./index-43df6bb4.js";import{m as X,u as le,A as fe,T as ue,a as W,E as J,g as de,b as ce,c as ve}from"./Error-099b3fe3.js";import{m as pe}from"./motion-7f872bcd.js";import{p as he}from"./index-0ecb3582.js";function me({bannerMovie:r}){return a.jsxs(ge,{bgPhoto:r.backdrop_path,children:[a.jsx(be,{children:r.title}),a.jsx(ye,{children:r.overview})]})}const ge=g.section`
  height: 80vh;
  display: flex;

  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.625)),
    url(${r=>X(r.bgPhoto)});
  background-size: cover;
  background-position: center top;
`,be=g.h2`
  font-size: 60px;
  margin-bottom: 10px;
`,ye=g.p`
  font-size: 30px;
`;function F({allMedia:r,sliderTitle:e}){const{width:i}=le(),[t,n]=x.useState(6),[o,s]=x.useState(0),[f,u]=x.useState(!1),[p,v]=x.useState(1),j=Math.ceil(r.length/t)-1;x.useEffect(()=>{i>1200?n(6):i>800&&n(3)},[i]);const P=()=>{f||(v(1),s(d=>d===j?0:d+1),E())},S=()=>{f||(v(-1),s(d=>d===0?j:d-1),E())},E=()=>{u(d=>!d)};return a.jsxs(we,{children:[a.jsx(xe,{children:e}),a.jsx(Ee,{onClick:S,children:"<"}),a.jsx(_e,{onClick:P,children:">"}),a.jsx(fe,{initial:!1,onExitComplete:E,children:a.jsx(je,{offset:t,initial:{x:p*(window.outerWidth-A)},animate:{x:0},exit:{x:p*(-window.outerWidth+A)},transition:{type:"tween"},children:r.slice(t*o,t*o+t).map(d=>a.jsx(ue,{movieId:d.id,movieTitle:d.title,movieBackdropPath:X(d.backdrop_path,"w400")},d.id))},o)})]})}const A=5,we=g.section`
  position: relative;
  height: 300px;
  margin: 0px 20px;
`,xe=g.h3`
  position: absolute;
  top: -120px;
  font-size: 28px;
  font-weight: 400;
`,je=g(pe.div)`
  position: absolute;
  width: 100%;
  display: grid;
  top: -80px;

  grid-template-columns: repeat(${r=>r.offset}, 1fr);
  grid-gap: ${A}px;
  margin-bottom: 5px;
`,Z=g.button`
  position: absolute;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`,Ee=g(Z)`
  left: 10px;
  z-index: 2;
`,_e=g(Z)`
  right: 10px;
  z-index: 2;
`;function Le(){const{isLoading:r,data:e,isError:i}=W(["movies","nowPlaying"],de);return r?a.jsx(se,{}):i?a.jsx(J,{}):a.jsx(a.Fragment,{children:e?a.jsxs(a.Fragment,{children:[a.jsx(me,{bannerMovie:e.results[0]}),a.jsx(F,{sliderTitle:"현재 상영작",allMedia:e.results.slice(1,19)})]}):a.jsx(J,{})})}function Pe(){const{data:r}=W(["movies","upcoming"],ce);return a.jsx(a.Fragment,{children:r&&a.jsx(F,{sliderTitle:"상영 예정작",allMedia:r.results.slice(1,19)})})}function Te(){const{data:r}=W(["movies","topRated"],ve);return a.jsx(a.Fragment,{children:r&&a.jsx(F,{sliderTitle:"불후의 명작",allMedia:r.results.slice(1,19)})})}var y={},R={};Object.defineProperty(R,"__esModule",{value:!0});R.on=Oe;R.off=ze;function Oe(r,e,i,t){t=t||!1,r.addEventListener?r.addEventListener(e,i,t):r.attachEvent&&r.attachEvent("on"+e,function(n){i.call(r,n||window.event)})}function ze(r,e,i,t){t=t||!1,r.removeEventListener?r.removeEventListener(e,i,t):r.detachEvent&&r.detachEvent("on"+e,i)}var C={};Object.defineProperty(C,"__esModule",{value:!0});C.default=function(r){if(!(r instanceof HTMLElement))return document.documentElement;for(var e=r.style.position==="absolute",i=/(scroll|auto)/,t=r;t;){if(!t.parentNode)return r.ownerDocument||document.documentElement;var n=window.getComputedStyle(t),o=n.position,s=n.overflow,f=n["overflow-x"],u=n["overflow-y"];if(o==="static"&&e){t=t.parentNode;continue}if(i.test(s)&&i.test(f)&&i.test(u))return t;t=t.parentNode}return r.ownerDocument||r.documentElement||document.documentElement};var q={};Object.defineProperty(q,"__esModule",{value:!0});q.default=ke;function ke(r,e,i){var t=void 0,n=void 0,o=void 0,s=void 0,f=void 0,u=function p(){var v=+new Date-s;v<e&&v>=0?t=setTimeout(p,e-v):(t=null,i||(f=r.apply(o,n),t||(o=null,n=null)))};return function(){o=this,n=arguments,s=+new Date;var v=i&&!t;return t||(t=setTimeout(u,e)),v&&(f=r.apply(o,n),o=null,n=null),f}}var B={};Object.defineProperty(B,"__esModule",{value:!0});B.default=Ne;function Ne(r,e,i){e||(e=250);var t,n;return function(){var o=i||this,s=+new Date,f=arguments;t&&s<t+e?(clearTimeout(n),n=setTimeout(function(){t=s,r.apply(o,f)},e)):(t=s,r.apply(o,f))}}Object.defineProperty(y,"__esModule",{value:!0});y.forceVisible=y.forceCheck=y.lazyload=void 0;var $=function(){function r(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,t){return i&&r(e.prototype,i),t&&r(e,t),e}}(),G=x,N=L(G),Re=he,l=L(Re),w=R,Me=C,V=L(Me),Se=q,De=L(Se),He=B,Ie=L(He);function L(r){return r&&r.__esModule?r:{default:r}}function ee(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function te(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r}function re(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}var m={top:0,right:0,bottom:0,left:0,width:0,height:0},_="data-lazyload-listened",h=[],U=[],ie=!1;try{var Ae=Object.defineProperty({},"passive",{get:function(){ie=!0}});window.addEventListener("test",null,Ae)}catch{}var b=ie?{capture:!1,passive:!0}:!1,Ve=function(e,i){var t=e.ref,n=void 0,o=void 0,s=void 0,f=void 0;try{var u=i.getBoundingClientRect();n=u.top,o=u.left,s=u.height,f=u.width}catch{n=m.top,o=m.left,s=m.height,f=m.width}var p=window.innerHeight||document.documentElement.clientHeight,v=window.innerWidth||document.documentElement.clientWidth,j=Math.max(n,0),P=Math.max(o,0),S=Math.min(p,n+s)-j,E=Math.min(v,o+f)-P,d=void 0,D=void 0,H=void 0,I=void 0;try{var T=t.getBoundingClientRect();d=T.top,D=T.left,H=T.height,I=T.width}catch{d=m.top,D=m.left,H=m.height,I=m.width}var Q=d-j,Y=D-P,O=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return Q-O[0]<=S&&Q+H+O[1]>=0&&Y-O[0]<=E&&Y+I+O[1]>=0},Ue=function(e){var i=e.ref;if(!(i.offsetWidth||i.offsetHeight||i.getClientRects().length))return!1;var t=void 0,n=void 0;try{var o=i.getBoundingClientRect();t=o.top,n=o.height}catch{t=m.top,n=m.height}var s=window.innerHeight||document.documentElement.clientHeight,f=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return t-f[0]<=s&&t+n+f[1]>=0},ne=function(e){var i=e.ref;if(i instanceof HTMLElement){var t=(0,V.default)(i),n=e.props.overflow&&t!==i.ownerDocument&&t!==document&&t!==document.documentElement,o=n?Ve(e,t):Ue(e);o?e.visible||(e.props.once&&U.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},oe=function(){U.forEach(function(e){var i=h.indexOf(e);i!==-1&&h.splice(i,1)}),U=[]},k=function(){for(var e=0;e<h.length;++e){var i=h[e];ne(i)}oe()},We=function(){for(var e=0;e<h.length;++e){var i=h[e];i.visible=!0,i.forceUpdate()}oe()},z=void 0,c=null,Fe=function(e){return typeof e=="string"},M=function(r){re(e,r);function e(i){ee(this,e);var t=te(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i));return t.visible=!1,t.setRef=t.setRef.bind(t),t}return $(e,[{key:"componentDidMount",value:function(){var t=window,n=this.props.scrollContainer;n&&Fe(n)&&(t=t.document.querySelector(n));var o=this.props.debounce!==void 0&&z==="throttle"||z==="debounce"&&this.props.debounce===void 0;if(o&&((0,w.off)(t,"scroll",c,b),(0,w.off)(window,"resize",c,b),c=null),c||(this.props.debounce!==void 0?(c=(0,De.default)(k,typeof this.props.debounce=="number"?this.props.debounce:300),z="debounce"):this.props.throttle!==void 0?(c=(0,Ie.default)(k,typeof this.props.throttle=="number"?this.props.throttle:300),z="throttle"):c=k),this.props.overflow){var s=(0,V.default)(this.ref);if(s&&typeof s.getAttribute=="function"){var f=1+ +s.getAttribute(_);f===1&&s.addEventListener("scroll",c,b),s.setAttribute(_,f)}}else if(h.length===0||o){var u=this.props,p=u.scroll,v=u.resize;p&&(0,w.on)(t,"scroll",c,b),v&&(0,w.on)(window,"resize",c,b)}h.push(this),ne(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var t=(0,V.default)(this.ref);if(t&&typeof t.getAttribute=="function"){var n=+t.getAttribute(_)-1;n===0?(t.removeEventListener("scroll",c,b),t.removeAttribute(_)):t.setAttribute(_,n)}}var o=h.indexOf(this);o!==-1&&h.splice(o,1),h.length===0&&typeof window<"u"&&((0,w.off)(window,"resize",c,b),(0,w.off)(window,"scroll",c,b))}},{key:"setRef",value:function(t){t&&(this.ref=t)}},{key:"render",value:function(){var t=this.props,n=t.height,o=t.children,s=t.placeholder,f=t.className,u=t.classNamePrefix,p=t.style;return N.default.createElement("div",{className:u+"-wrapper "+f,ref:this.setRef,style:p},this.visible?o:s||N.default.createElement("div",{style:{height:n},className:u+"-placeholder"}))}}]),e}(G.Component);M.propTypes={className:l.default.string,classNamePrefix:l.default.string,once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool,style:l.default.object};M.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var Ce=function(e){return e.displayName||e.name||"Component"},qe=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function(t){return function(n){re(o,n);function o(){ee(this,o);var s=te(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return s.displayName="LazyLoad"+Ce(t),s}return $(o,[{key:"render",value:function(){return N.default.createElement(M,e,N.default.createElement(t,this.props))}}]),o}(G.Component)}};y.lazyload=qe;var K=y.default=M;y.forceCheck=k;y.forceVisible=We;function Ke(){return a.jsxs(Be,{children:[a.jsx(Le,{}),a.jsx(K,{height:200,offset:100,children:a.jsx(Pe,{})}),a.jsx(K,{height:200,offset:100,children:a.jsx(Te,{})})]})}const Be=g.main`
  /* position: relative; */
`;export{Ke as default};
