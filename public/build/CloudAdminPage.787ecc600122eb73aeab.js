"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5310],{"./public/app/core/hooks/useNavModel.ts":(e,s,a)=>{a.d(s,{q:()=>t});var c=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),n=a("./public/app/core/selectors/navModel.ts");const t=e=>{const s=(0,c.useSelector)((e=>e.navIndex));return(0,n.h)(s,e)}},"./public/app/features/live/pages/CloudAdminPage.tsx":(e,s,a)=>{a.r(s),a.d(s,{default:()=>u});var c=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n=a("./packages/grafana-runtime/src/index.ts"),t=a("./packages/grafana-ui/src/index.ts"),r=a("./public/app/core/components/Page/Page.tsx"),i=a("./public/app/core/hooks/useNavModel.ts"),o=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),d=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function u(){const e=(0,i.q)("live-cloud"),[s,a]=(0,c.useState)([]),[o,u]=(0,c.useState)(),p=(0,t.useStyles)(l);return(0,c.useEffect)((()=>{(0,n.getBackendSrv)().get("api/live/write-configs").then((e=>{a(e.writeConfigs)})).catch((e=>{e.data&&u(JSON.stringify(e.data,null,2))}))}),[]),(0,d.jsx)(r.Z,{navModel:e,children:(0,d.jsxs)(r.Z.Contents,{children:[o&&(0,d.jsx)("pre",{children:o}),!s&&(0,d.jsx)(d.Fragment,{children:"Loading cloud definitions"}),s&&s.map((e=>(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:e.uid}),(0,d.jsx)("pre",{className:p.row,children:JSON.stringify(e.settings,null,2)})]},e.uid)))]})})}const l=e=>({row:o.css`
      cursor: pointer;
    `})}}]);
//# sourceMappingURL=CloudAdminPage.787ecc600122eb73aeab.js.map