import{r as l,j as t,s as n,L as y}from"./index-85ed9fc2.js";import{u as E,A as L,T as z,m as j,a as h,E as S,f as T,b as C}from"./Error-4dbe88d6.js";import{m as I}from"./motion-5cc9b154.js";const p=5,B=n.section`
  position: relative;
  height: 300px;
  margin: 0px 20px;
`,N=n.h3`
  position: absolute;
  top: -120px;
  font-size: 28px;
  font-weight: 400;
`,$=n(I.div)`
  position: absolute;
  width: 100%;
  display: grid;
  top: -80px;

  grid-template-columns: repeat(${e=>e.offset}, 1fr);
  grid-gap: ${p}px;
  margin-bottom: 5px;
`,v=n.button`
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
`,D=n(v)`
  left: 10px;
  z-index: 2;
`,M=n(v)`
  right: 10px;
  z-index: 2;
`;function b({allMedia:e,sliderTitle:s}){const{width:r}=E(),[o,a]=l.useState(6),[c,d]=l.useState(0),[x,w]=l.useState(!1),[u,f]=l.useState(1),m=Math.ceil(e.length/o)-1;l.useEffect(()=>{r>1200?a(6):r>800&&a(3)},[r]);const P=()=>{x||(f(1),d(i=>i===m?0:i+1),g())},k=()=>{x||(f(-1),d(i=>i===0?m:i-1),g())},g=()=>{w(i=>!i)};return t.jsxs(B,{children:[t.jsx(N,{children:s}),t.jsx(D,{onClick:k,children:"<"}),t.jsx(M,{onClick:P,children:">"}),t.jsx(L,{initial:!1,onExitComplete:g,children:t.jsx($,{offset:o,initial:{x:u*(window.outerWidth-p)},animate:{x:0},exit:{x:u*(-window.outerWidth+p)},transition:{type:"tween"},children:e.slice(o*c,o*c+o).map(i=>t.jsx(z,{movieId:i.id,movieTitle:i.title,movieBackdropPath:j(i.backdrop_path,"w400")},i.id))},c)})]})}const R=n.section`
  height: 80vh;
  display: flex;

  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.625)),
    url(${e=>j(e.bgPhoto)});
  background-size: cover;
  background-position: center top;
`,U=n.h2`
  font-size: 60px;
  margin-bottom: 10px;
`,A=n.p`
  font-size: 30px;
`;function O({bannerMovie:e}){return t.jsxs(R,{bgPhoto:e.backdrop_path,children:[t.jsx(U,{children:e.title}),t.jsx(A,{children:e.overview})]})}const W=n.main`
  /* position: relative; */
`;function H(){const{isLoading:e,data:s,isError:r}=h(["movies","nowPlaying"],T),{isLoading:o,data:a,isError:c}=h(["movies","upcoming"],C),d=e||o,x=r||c;return d?t.jsx(y,{}):x?t.jsx(S,{}):t.jsx(W,{children:s&&a&&t.jsxs(t.Fragment,{children:[t.jsx(O,{bannerMovie:s.results[0]}),t.jsx(b,{sliderTitle:"현재 상영작",allMedia:s.results.slice(1,19)}),t.jsx(b,{sliderTitle:"상영 예정작",allMedia:a.results.slice(1,19)})]})})}export{H as default};
