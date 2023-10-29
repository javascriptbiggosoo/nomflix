import{r as n,j as t,s as o,u as p,L as m}from"./index-eb34a52a.js";import{u as f,a as l,c as u,E as h,T as x,m as g}from"./Error-84052e54.js";import"./motion-bdaf9674.js";const j=5,b=o.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${s=>s.offset}, 1fr);
  grid-gap: ${j}px;
  margin-bottom: 40px;
`;function y({children:s}){const[r,i]=n.useState(6),{width:a}=f();return n.useEffect(()=>{a>1200?i(6):a>800&&i(3)},[a]),t.jsx(b,{offset:r,children:s})}const k=o.main`
  top: 70px;

  position: relative;
  margin: 0px 20px;
`,w=o.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;function S(){const[s]=p(),r=s.get("keyword"),{data:i,isLoading:a,isError:c}=l(["search",r],u.bind(null,r));if(a)return t.jsx(m,{});if(c)return t.jsx(h,{});const d=i.results.filter(e=>e.media_type==="movie"&&e.backdrop_path);return t.jsxs(k,{children:[t.jsxs(w,{children:['"',t.jsx("strong",{style:{fontWeight:"bold"},children:r}),'"의 검색결과입니다.']}),t.jsx(y,{children:d.map(e=>t.jsx(x,{movieId:e.id,movieTitle:e.title,movieBackdropPath:g(e.backdrop_path,"w400")},e.id))})]})}export{S as default};
