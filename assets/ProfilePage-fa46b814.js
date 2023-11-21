import{k as i,x as a,y as c,j as o,z as l,s as n,w as d}from"./index-ecdd9314.js";function m(){const t=i(),[e,x]=a(c),s=()=>{l(d).then(()=>{t("/")}).catch(r=>{console.log(r)})};return o.jsxs(u,{children:[o.jsxs(p,{children:[(e==null?void 0:e.displayName)||"회원"," 님의 프로필"]}),o.jsx(g,{onClick:s,children:"로그아웃"})]})}const u=n.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background-color: #141414;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #e5e5e5;
  padding: 0 20px; // added some padding for better responsiveness on smaller screens
`,p=n.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #e5e5e5;
`,g=n.button`
  background-color: #e50914;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.25s ease;
  margin-top: 20px;

  &:hover {
    background-color: #f40612;
  }
`;export{m as default};
