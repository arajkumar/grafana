"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4074],{"./public/app/features/folders/state/navModel.ts":(e,a,r)=>{function s(e){const a={icon:"folder",id:"manage-folder",subTitle:"Manage folder dashboards and permissions",url:"",text:e.title,breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:!1,icon:"apps",id:`folder-dashboards-${e.uid}`,text:"Dashboards",url:e.url}]};return a.children.push({active:!1,icon:"library-panel",id:`folder-library-panels-${e.uid}`,text:"Panels",url:`${e.url}/library-panels`}),e.canAdmin&&a.children.push({active:!1,icon:"lock",id:`folder-permissions-${e.uid}`,text:"Permissions",url:`${e.url}/permissions`}),e.canSave&&a.children.push({active:!1,icon:"cog",id:`folder-settings-${e.uid}`,text:"Settings",url:`${e.url}/settings`}),a}function n(e){const a=s({id:1,uid:"loading",title:"Loading",url:"url",canSave:!0,canEdit:!0,canAdmin:!0,version:0});return a.children[e].active=!0,{main:a,node:a.children[e]}}r.d(a,{B:()=>s,_:()=>n})},"./public/app/features/search/components/DashboardListPage.tsx":(e,a,r)=>{r.r(a),r.d(a,{DashboardListPage:()=>v,default:()=>f});var s=r("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n=r("./.yarn/__virtual__/react-use-virtual-ca2705900f/0/cache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/useAsync.js"),t=r("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),i=r("./packages/grafana-data/src/index.ts"),d=r("./packages/grafana-runtime/src/index.ts"),c=r("./public/app/core/selectors/navModel.ts"),o=r("./public/app/core/components/Page/Page.tsx"),l=r("./public/app/core/services/backend_srv.ts"),u=r("./public/app/features/folders/state/navModel.ts");var p=r("./public/app/features/search/components/ManageDashboards.tsx"),h=r("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const v=(0,s.memo)((({navModel:e,match:a,location:r})=>{var s;const{loading:t,value:c}=(0,n.Z)((()=>{const s=a.params.uid,n=r.pathname;return s&&n.startsWith("/dashboards")?(e=>l.ae.getFolderByUid(e).then((e=>{const a=(0,u.B)(e);return a.children[0].active=!0,{folder:e,folderNav:a}})))(s).then((({folder:a,folderNav:s})=>{const n=i.locationUtil.stripBaseFromUrl(a.url);return n!==r.pathname&&d.locationService.push(n),{folder:a,pageNavModel:Object.assign({},e,{main:s})}})):Promise.resolve({pageNavModel:e})}),[a.params.uid]);return(0,h.jsx)(o.Z,{navModel:null!==(s=null==c?void 0:c.pageNavModel)&&void 0!==s?s:e,children:(0,h.jsx)(o.Z.Contents,{isLoading:t,children:(0,h.jsx)(p.Z,{folder:null==c?void 0:c.folder})})})}));v.displayName="DashboardListPage";const f=(0,t.connect)((e=>({navModel:(0,c.h)(e.navIndex,"manage-dashboards")})))(v)}}]);
//# sourceMappingURL=DashboardListPage.787ecc600122eb73aeab.js.map