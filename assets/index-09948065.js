import{r as j,j as s,s as m,L as P}from"./index-ecdd9314.js";import{p as se}from"./index-03b9a169.js";import{u as le,A as fe,T as ue,m as X,a as N,E as de,g as ce,b as ve,c as pe,d as he}from"./tmdbApiHelper.js-d251b34d.js";import{m as ge}from"./motion-f75208d7.js";var y={},S={};Object.defineProperty(S,"__esModule",{value:!0});S.on=me;S.off=be;function me(r,e,i,t){t=t||!1,r.addEventListener?r.addEventListener(e,i,t):r.attachEvent&&r.attachEvent("on"+e,function(o){i.call(r,o||window.event)})}function be(r,e,i,t){t=t||!1,r.removeEventListener?r.removeEventListener(e,i,t):r.detachEvent&&r.detachEvent("on"+e,i)}var B={};Object.defineProperty(B,"__esModule",{value:!0});B.default=function(r){if(!(r instanceof HTMLElement))return document.documentElement;for(var e=r.style.position==="absolute",i=/(scroll|auto)/,t=r;t;){if(!t.parentNode)return r.ownerDocument||document.documentElement;var o=window.getComputedStyle(t),n=o.position,a=o.overflow,l=o["overflow-x"],u=o["overflow-y"];if(n==="static"&&e){t=t.parentNode;continue}if(i.test(a)&&i.test(l)&&i.test(u))return t;t=t.parentNode}return r.ownerDocument||r.documentElement||document.documentElement};var G={};Object.defineProperty(G,"__esModule",{value:!0});G.default=ye;function ye(r,e,i){var t=void 0,o=void 0,n=void 0,a=void 0,l=void 0,u=function v(){var c=+new Date-a;c<e&&c>=0?t=setTimeout(v,e-c):(t=null,i||(l=r.apply(n,o),t||(n=null,o=null)))};return function(){n=this,o=arguments,a=+new Date;var c=i&&!t;return t||(t=setTimeout(u,e)),c&&(l=r.apply(n,o),n=null,o=null),l}}var Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.default=we;function we(r,e,i){e||(e=250);var t,o;return function(){var n=i||this,a=+new Date,l=arguments;t&&a<t+e?(clearTimeout(o),o=setTimeout(function(){t=a,r.apply(n,l)},e)):(t=a,r.apply(n,l))}}Object.defineProperty(y,"__esModule",{value:!0});y.forceVisible=y.forceCheck=y.lazyload=void 0;var Z=function(){function r(e,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,i,t){return i&&r(e.prototype,i),t&&r(e,t),e}}(),Y=j,I=O(Y),xe=se,f=O(xe),E=S,Ee=B,C=O(Ee),je=G,Le=O(je),_e=Q,Pe=O(_e);function O(r){return r&&r.__esModule?r:{default:r}}function $(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ee(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r}function te(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}var g={top:0,right:0,bottom:0,left:0,width:0,height:0},T="data-lazyload-listened",h=[],F=[],re=!1;try{var Te=Object.defineProperty({},"passive",{get:function(){re=!0}});window.addEventListener("test",null,Te)}catch{}var b=re?{capture:!1,passive:!0}:!1,Oe=function(e,i){var t=e.ref,o=void 0,n=void 0,a=void 0,l=void 0;try{var u=i.getBoundingClientRect();o=u.top,n=u.left,a=u.height,l=u.width}catch{o=g.top,n=g.left,a=g.height,l=g.width}var v=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,w=Math.max(o,0),x=Math.max(n,0),L=Math.min(v,o+a)-w,_=Math.min(c,n+l)-x,d=void 0,V=void 0,U=void 0,W=void 0;try{var z=t.getBoundingClientRect();d=z.top,V=z.left,U=z.height,W=z.width}catch{d=g.top,V=g.left,U=g.height,W=g.width}var J=d-w,K=V-x,k=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return J-k[0]<=L&&J+U+k[1]>=0&&K-k[0]<=_&&K+W+k[1]>=0},ze=function(e){var i=e.ref;if(!(i.offsetWidth||i.offsetHeight||i.getClientRects().length))return!1;var t=void 0,o=void 0;try{var n=i.getBoundingClientRect();t=n.top,o=n.height}catch{t=g.top,o=g.height}var a=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return t-l[0]<=a&&t+o+l[1]>=0},ie=function(e){var i=e.ref;if(i instanceof HTMLElement){var t=(0,C.default)(i),o=e.props.overflow&&t!==i.ownerDocument&&t!==document&&t!==document.documentElement,n=o?Oe(e,t):ze(e);n?e.visible||(e.props.once&&F.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},oe=function(){F.forEach(function(e){var i=h.indexOf(e);i!==-1&&h.splice(i,1)}),F=[]},H=function(){for(var e=0;e<h.length;++e){var i=h[e];ie(i)}oe()},ke=function(){for(var e=0;e<h.length;++e){var i=h[e];i.visible=!0,i.forceUpdate()}oe()},R=void 0,p=null,Ne=function(e){return typeof e=="string"},A=function(r){te(e,r);function e(i){$(this,e);var t=ee(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i));return t.visible=!1,t.setRef=t.setRef.bind(t),t}return Z(e,[{key:"componentDidMount",value:function(){var t=window,o=this.props.scrollContainer;o&&Ne(o)&&(t=t.document.querySelector(o));var n=this.props.debounce!==void 0&&R==="throttle"||R==="debounce"&&this.props.debounce===void 0;if(n&&((0,E.off)(t,"scroll",p,b),(0,E.off)(window,"resize",p,b),p=null),p||(this.props.debounce!==void 0?(p=(0,Le.default)(H,typeof this.props.debounce=="number"?this.props.debounce:300),R="debounce"):this.props.throttle!==void 0?(p=(0,Pe.default)(H,typeof this.props.throttle=="number"?this.props.throttle:300),R="throttle"):p=H),this.props.overflow){var a=(0,C.default)(this.ref);if(a&&typeof a.getAttribute=="function"){var l=1+ +a.getAttribute(T);l===1&&a.addEventListener("scroll",p,b),a.setAttribute(T,l)}}else if(h.length===0||n){var u=this.props,v=u.scroll,c=u.resize;v&&(0,E.on)(t,"scroll",p,b),c&&(0,E.on)(window,"resize",p,b)}h.push(this),ie(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var t=(0,C.default)(this.ref);if(t&&typeof t.getAttribute=="function"){var o=+t.getAttribute(T)-1;o===0?(t.removeEventListener("scroll",p,b),t.removeAttribute(T)):t.setAttribute(T,o)}}var n=h.indexOf(this);n!==-1&&h.splice(n,1),h.length===0&&typeof window<"u"&&((0,E.off)(window,"resize",p,b),(0,E.off)(window,"scroll",p,b))}},{key:"setRef",value:function(t){t&&(this.ref=t)}},{key:"render",value:function(){var t=this.props,o=t.height,n=t.children,a=t.placeholder,l=t.className,u=t.classNamePrefix,v=t.style;return I.default.createElement("div",{className:u+"-wrapper "+l,ref:this.setRef,style:v},this.visible?n:a||I.default.createElement("div",{style:{height:o},className:u+"-placeholder"}))}}]),e}(Y.Component);A.propTypes={className:f.default.string,classNamePrefix:f.default.string,once:f.default.bool,height:f.default.oneOfType([f.default.number,f.default.string]),offset:f.default.oneOfType([f.default.number,f.default.arrayOf(f.default.number)]),overflow:f.default.bool,resize:f.default.bool,scroll:f.default.bool,children:f.default.node,throttle:f.default.oneOfType([f.default.number,f.default.bool]),debounce:f.default.oneOfType([f.default.number,f.default.bool]),placeholder:f.default.node,scrollContainer:f.default.oneOfType([f.default.string,f.default.object]),unmountIfInvisible:f.default.bool,style:f.default.object};A.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var Re=function(e){return e.displayName||e.name||"Component"},Me=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function(t){return function(o){te(n,o);function n(){$(this,n);var a=ee(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return a.displayName="LazyLoad"+Re(t),a}return Z(n,[{key:"render",value:function(){return I.default.createElement(A,e,I.default.createElement(t,this.props))}}]),n}(Y.Component)}};y.lazyload=Me;var M=y.default=A;y.forceCheck=H;y.forceVisible=ke;function D({allMedia:r,sliderTitle:e}){const{width:i}=le(),[t,o]=j.useState(6),[n,a]=j.useState(0),[l,u]=j.useState(!1),[v,c]=j.useState(1),w=Math.ceil(r.length/t)-1;j.useEffect(()=>{i>1200?o(6):i>800&&o(3)},[i]);const x=()=>{l||(c(1),a(d=>d===w?0:d+1),_())},L=()=>{l||(c(-1),a(d=>d===0?w:d-1),_())},_=()=>{u(d=>!d)};return s.jsxs(De,{children:[s.jsx(He,{children:e}),s.jsx(Se,{onClick:L,children:"<"}),s.jsx(Ae,{onClick:x,children:">"}),s.jsx(fe,{initial:!1,onExitComplete:_,children:s.jsx(Ie,{offset:t,initial:{x:v*(window.outerWidth-q)},animate:{x:0},exit:{x:v*(-window.outerWidth+q)},transition:{type:"tween"},children:r.slice(t*n,t*n+t).map(d=>s.jsx(ue,{movieId:d.id,movieTitle:d.title,movieBackdropPath:X(d.backdrop_path,"w400")},d.id))},n)})]})}const q=5,De=m.section`
  position: relative;
  height: 300px;
  margin: 0px 20px;
`,He=m.h3`
  position: absolute;
  top: -120px;
  font-size: 28px;
  font-weight: 400;
`,Ie=m(ge.div)`
  position: absolute;
  width: 100%;
  display: grid;
  top: -80px;

  grid-template-columns: repeat(${r=>r.offset}, 1fr);
  grid-gap: ${q}px;
  margin-bottom: 5px;
`,ne=m.button`
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
`,Se=m(ne)`
  left: 10px;
  z-index: 2;
`,Ae=m(ne)`
  right: 10px;
  z-index: 2;
`;function Ve({bannerMovie:r}){return s.jsxs(Ue,{bgPhoto:r.backdrop_path,children:[s.jsx(We,{children:r.title}),s.jsx(Ce,{children:r.overview})]})}const Ue=m.section`
  height: 80vh;
  display: flex;

  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.625)),
    url(${r=>X(r.bgPhoto)});
  background-size: cover;
  background-position: center top;
`,We=m.h2`
  font-size: 60px;
  margin-bottom: 10px;
`,Ce=m.p`
  font-size: 30px;
`;function Ye(){const{isLoading:r,data:e,isError:i}=N(["movies","nowPlaying"],ce),{isLoading:t,data:o,isError:n}=N(["movies","upcoming"],ve),{isLoading:a,data:l,isError:u}=N(["movies","topRated"],pe),{isLoading:v,data:c,isError:w}=N(["movies","popular"],he),x=r||t||a||v,L=i||n||u||w;return x?s.jsx(P,{}):L?s.jsx(de,{}):s.jsx(Fe,{children:s.jsxs(s.Fragment,{children:[e&&s.jsxs(s.Fragment,{children:[s.jsx(Ve,{bannerMovie:e.results[0]}),s.jsx(M,{height:200,offset:100,placeholder:s.jsx(P,{}),children:s.jsx(D,{sliderTitle:"현재 상영작",allMedia:e.results.slice(1,19)})})]}),c&&s.jsx(M,{height:200,offset:100,placeholder:s.jsx(P,{}),children:s.jsx(D,{sliderTitle:"흥행작",allMedia:c.results.slice(1,19)})}),o&&s.jsx(M,{height:200,offset:100,placeholder:s.jsx(P,{}),children:s.jsx(D,{sliderTitle:"상영 예정작",allMedia:o.results.slice(1,19)})}),l&&s.jsx(M,{height:200,offset:100,placeholder:s.jsx(P,{}),children:s.jsx(D,{sliderTitle:"불후의 명작",allMedia:l.results.slice(1,19)})})]})})}const Fe=m.main`
  /* position: relative; */
`;export{Ye as default};
