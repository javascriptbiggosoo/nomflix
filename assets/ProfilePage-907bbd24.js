import{k as o,x as l,y as c,j as t,s as n,z as r,w as x}from"./index-eb34a52a.js";const h=n.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 100vh;
`,f=n.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;n.h2`
  font-size: 24px;
  align-self: flex-start;
`;function g(){const s=o(),[e,u]=l(c),i=()=>{r(x).then(()=>{s("/")}).catch(a=>{console.log(a)})};return t.jsxs(h,{children:[t.jsxs(f,{children:[(e==null?void 0:e.displayName)||"회원"," 님의 프로필"]}),t.jsx("button",{onClick:i,children:"로그아웃"})]})}export{g as default};
