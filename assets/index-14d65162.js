import{r as n,j as e,s as i,u as p,L as m}from"./index-43df6bb4.js";import{u as l,a as f,d as u,E as x,T as h,m as g}from"./Error-099b3fe3.js";import"./motion-7f872bcd.js";const j=5,b=i.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${s=>s.offset}, 1fr);
  grid-gap: ${j}px;
  margin-bottom: 40px;
`;function y({children:s}){const[r,a]=n.useState(6),{width:o}=l();return n.useEffect(()=>{o>1200?a(6):o>800&&a(3)},[o]),e.jsx(b,{offset:r,children:s})}const k=i.main`
  top: 70px;

  position: relative;
  margin: 0px 20px;
`,v=i.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;function S(){const[s]=p(),r=s.get("keyword"),{data:a,isLoading:o,isError:d}=f(["search",r],u.bind(null,r));if(console.log(a),o)return e.jsx(m,{});if(d)return e.jsx(x,{});const c=a.results.filter(t=>t.media_type==="movie"&&t.backdrop_path);return e.jsxs(k,{children:[e.jsxs(v,{children:['"',e.jsx("strong",{style:{fontWeight:"bold"},children:r}),'"의 검색결과입니다.']}),e.jsx(y,{children:c.map(t=>e.jsx(h,{movieId:t.id,movieTitle:t.title,movieBackdropPath:g(t.backdrop_path,"w400")},t.id))})]})}export{S as default};
