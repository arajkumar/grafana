"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2417],{"./public/app/features/datasources/DashboardsTable.tsx":(e,n,a)=>{a.d(n,{Z:()=>r});a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var s,t=a("./packages/grafana-ui/src/index.ts"),i=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const r=({dashboards:e,onImport:n,onRemove:a})=>{function r(e){return e.revision!==e.importedRevision?"Update":"Re-import"}return(0,i.jsx)("table",{className:"filter-table",children:(0,i.jsx)("tbody",{children:e.map(((e,l)=>(0,i.jsxs)("tr",{children:[s||(s=(0,i.jsx)("td",{className:"width-1",children:(0,i.jsx)(t.Icon,{name:"apps"})})),(0,i.jsx)("td",{children:e.imported?(0,i.jsx)("a",{href:e.importedUrl,children:e.title}):(0,i.jsx)("span",{children:e.title})}),(0,i.jsxs)("td",{style:{textAlign:"right"},children:[e.imported?(0,i.jsx)(t.Button,{variant:"secondary",size:"sm",onClick:()=>n(e,!0),children:r(e)}):(0,i.jsx)(t.Button,{variant:"secondary",size:"sm",onClick:()=>n(e,!1),children:"Import"}),e.imported&&(0,i.jsx)(t.Button,{icon:"trash-alt",variant:"destructive",size:"sm",onClick:()=>a(e)})]})]},`${e.dashboardId}-${l}`)))})})}},"./public/app/features/plugins/admin/components/Badges/index.ts":(e,n,a)=>{a.d(n,{SX:()=>r,IF:()=>p,oZ:()=>c,xh:()=>g});a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var s=a("./packages/grafana-data/src/index.ts"),t=a("./packages/grafana-ui/src/index.ts"),i=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function r({error:e}){const n=function(e){switch(e){case s.PluginErrorCode.modifiedSignature:return"Plugin disabled due to modified content";case s.PluginErrorCode.invalidSignature:return"Plugin disabled due to invalid plugin signature";case s.PluginErrorCode.missingSignature:return"Plugin disabled due to missing plugin signature";default:return`Plugin disabled due to unkown error: ${e}`}}(e);return(0,i.jsx)(t.Badge,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:n})}var l=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");const o=e=>l.css`
  background: ${e.colors.background.primary};
  border-color: ${e.colors.border.strong};
  color: ${e.colors.text.secondary};
`;function c(){const e=(0,t.useStyles2)(o);return(0,i.jsx)(t.Badge,{text:"Installed",color:"orange",className:e})}var d,u=a("./packages/grafana-runtime/src/index.ts");function p({plugin:e}){var n;const a=(0,t.useStyles2)(o);return null!==(n=u.config.licenseInfo)&&void 0!==n&&n.hasValidLicense?d||(d=(0,i.jsx)(t.Badge,{text:"Enterprise",color:"blue"})):(0,i.jsxs)(t.HorizontalGroup,{children:[(0,i.jsx)(t.PluginSignatureBadge,{status:e.signature}),(0,i.jsx)(t.Badge,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:a}),(0,i.jsx)(t.Button,{size:"sm",fill:"text",icon:"external-link-alt",onClick:n=>{n.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${e.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")},children:"Learn more"})]})}function g({plugin:e}){const n=(0,t.useStyles2)(h);return e.hasUpdate&&!e.isCore&&e.type!==s.PluginType.renderer?(0,i.jsx)("p",{className:n.hasUpdate,children:"Update available!"}):null}const h=e=>({hasUpdate:l.css`
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},"./public/app/features/plugins/admin/components/Loader.tsx":(e,n,a)=>{a.d(n,{a:()=>r});a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var s=a("./packages/grafana-ui/src/index.ts"),t=a("./public/app/features/plugins/admin/components/Page.tsx"),i=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const r=({text:e="Loading..."})=>(0,i.jsx)(t.T,{children:(0,i.jsx)("div",{className:"page-loader-wrapper",children:(0,i.jsx)(s.LoadingPlaceholder,{text:e})})})},"./public/app/features/plugins/admin/components/Page.tsx":(e,n,a)=>{a.d(n,{T:()=>r});a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var s=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),t=a("./packages/grafana-ui/src/index.ts"),i=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const r=({children:e})=>{const n=(0,t.useStyles2)(l);return(0,i.jsx)("div",{className:"page-container",children:(0,i.jsx)("div",{className:n,children:e})})},l=e=>s.css`
    margin-bottom: ${e.spacing(3)};
  `},"./public/app/features/plugins/admin/components/PluginLogo.tsx":(e,n,a)=>{a.d(n,{E:()=>t});a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var s=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function t({alt:e,className:n,src:a,height:t}){return(0,s.jsx)("img",{src:a,className:n,alt:e,loading:"lazy",height:t})}},"./public/app/features/plugins/admin/pages/PluginDetails.tsx":(e,n,a)=>{a.r(n),a.d(n,{default:()=>De,getStyles:()=>Ee});var s,t,i=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=a("./.yarn/__virtual__/react-use-virtual-ca2705900f/0/cache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/usePrevious.js"),o=a("./packages/grafana-ui/src/index.ts"),c=a("./packages/grafana-runtime/src/index.ts"),d=a("./packages/grafana-ui/src/components/Layout/Layout.tsx"),u=a("./public/app/core/components/Page/Page.tsx"),p=a("./packages/grafana-e2e-selectors/src/index.ts"),g=a("./packages/grafana-data/src/index.ts"),h=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function m({className:e,plugin:n}){const a=n.signature===g.PluginSignatureStatus.valid,i=n.signature===g.PluginSignatureStatus.internal,r=n.isDisabled&&function(e){switch(e){case g.PluginErrorCode.invalidSignature:case g.PluginErrorCode.missingSignature:case g.PluginErrorCode.modifiedSignature:return!0;default:return!1}}(n.error);return a||i||r?null:(0,h.jsxs)(o.Alert,{severity:"warning",title:"Invalid plugin signature","aria-label":p.wl.pages.PluginPage.signatureInfo,className:e,children:[s||(s=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. Plugin signature verification is part of our security measures to ensure plugins are safe and trustworthy. Grafana Labs can’t guarantee the integrity of this unsigned plugin. Ask the plugin author to request it to be signed."})),t||(t=(0,h.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",className:"external-link",target:"_blank",rel:"noreferrer",children:"Read more about plugins signing."}))]})}var f=a("./public/app/features/plugins/admin/helpers.ts"),x=a("./public/app/features/plugins/admin/types.ts");function v({pluginId:e,pluginStatus:n}){const a=`${(0,f.Uj)(e)}/?tab=installation`;return n===x.vF.UPDATE?(0,h.jsxs)(o.HorizontalGroup,{height:"auto",children:[(0,h.jsx)(o.LinkButton,{href:a,target:"_blank",rel:"noopener noreferrer",children:"Update via grafana.com"}),(0,h.jsx)(o.LinkButton,{variant:"destructive",href:a,target:"_blank",rel:"noopener noreferrer",children:"Uninstall via grafana.com"})]}):n===x.vF.UNINSTALL?(0,h.jsx)(o.LinkButton,{variant:"destructive",href:a,target:"_blank",rel:"noopener noreferrer",children:"Uninstall via grafana.com"}):(0,h.jsx)(o.LinkButton,{href:a,target:"_blank",rel:"noopener noreferrer",children:"Install via grafana.com"})}var b=a("./public/app/core/app_events.ts"),j=a("./public/app/features/plugins/admin/state/hooks.ts");function y({plugin:e,pluginStatus:n,latestCompatibleVersion:a}){var s;const{isInstalling:t,error:r}=(0,j.IS)(),{isUninstalling:l,error:c}=(0,j.wq)(),d=(0,j.x3)(),u=(0,j.S1)(),[p,m]=(0,i.useState)(!1),f=()=>m(!0),v=()=>m(!1),y=l?"Uninstalling":"Uninstall",S=async()=>{v(),await u(e.id),c||b.Z.emit(g.AppEvents.alertSuccess,[`Uninstalled ${e.name}`])},P=async()=>{await d(e.id,null==a?void 0:a.version,!0),r||b.Z.emit(g.AppEvents.alertSuccess,[`Updated ${e.name}`])};return n===x.vF.UNINSTALL?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.ConfirmModal,{isOpen:p,title:`Uninstall ${e.name}`,body:"Are you sure you want to uninstall this plugin?",confirmText:"Confirm",icon:"exclamation-triangle",onConfirm:S,onDismiss:v}),(0,h.jsx)(o.HorizontalGroup,{height:"auto",children:(0,h.jsx)(o.Button,{variant:"destructive",disabled:l,onClick:f,children:y})})]}):n===x.vF.UPDATE?(0,h.jsxs)(o.HorizontalGroup,{height:"auto",children:[(0,h.jsx)(o.Button,{disabled:t,onClick:P,children:t?"Updating":"Update"}),s||(s=(0,h.jsx)(o.Button,{variant:"destructive",disabled:l,onClick:S,children:y}))]}):(0,h.jsx)(o.Button,{disabled:t,onClick:async()=>{await d(e.id,null==a?void 0:a.version),r||b.Z.emit(g.AppEvents.alertSuccess,[`Installed ${e.name}`])},children:t?"Installing":"Install"})}var S,P,N,k=a("./public/app/features/plugins/admin/permissions.ts");const _=({plugin:e,latestCompatibleVersion:n})=>{var a;const s=(0,o.useStyles2)(w),t=c.config.pluginAdminExternalManageEnabled,i=(0,k.bO)(),r=(0,j.y9)(),l=Boolean(n),d=e.isCore||e.isDisabled||!(0,f.fG)(),u=e.isInstalled?e.hasUpdate?x.vF.UPDATE:x.vF.UNINSTALL:x.vF.INSTALL;if(d)return null;if(e.type===g.PluginType.renderer)return(0,h.jsx)("div",{className:s.message,children:"Renderer plugins cannot be managed by the Plugin Catalog."});if(e.isEnterprise&&(null===(a=c.config.licenseInfo)||void 0===a||!a.hasValidLicense))return(0,h.jsxs)(o.HorizontalGroup,{height:"auto",align:"center",children:[(0,h.jsx)("span",{className:s.message,children:"No valid Grafana Enterprise license detected."}),(0,h.jsx)(o.LinkButton,{href:`${(0,f.Uj)(e.id)}?utm_source=grafana_catalog_learn_more`,target:"_blank",rel:"noopener noreferrer",size:"sm",fill:"text",icon:"external-link-alt",children:"Learn more"})]});if(e.isDev)return(0,h.jsx)("div",{className:s.message,children:"This is a development build of the plugin and can't be uninstalled."});if(!i&&!t){const e=`You do not have permission to ${u} this plugin.`;return(0,h.jsx)("div",{className:s.message,children:e})}return e.isPublished?l?t?(0,h.jsx)(v,{pluginId:e.id,pluginStatus:u}):r?(0,h.jsx)(y,{plugin:e,pluginStatus:u,latestCompatibleVersion:n}):(0,h.jsx)("div",{className:s.message,children:"The install controls have been disabled because the Grafana server cannot access grafana.com."}):(0,h.jsxs)("div",{className:s.message,children:[N||(N=(0,h.jsx)(o.Icon,{name:"exclamation-triangle"}))," This plugin doesn't support your version of Grafana."]}):(0,h.jsxs)("div",{className:s.message,children:[S||(S=(0,h.jsx)(o.Icon,{name:"exclamation-triangle"}))," This plugin is not published to"," ",P||(P=(0,h.jsx)("a",{href:"https://www.grafana.com/plugins",target:"__blank",rel:"noreferrer",children:"grafana.com/plugins"}))," ","and can't be managed via the catalog."]})},w=e=>({message:r.css`
      color: ${e.colors.text.secondary};
    `});var I=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const C={[g.PluginSignatureType.grafana]:"grafana",[g.PluginSignatureType.commercial]:"shield",[g.PluginSignatureType.community]:"shield",DEFAULT:"shield-exclamation"};function $({signatureType:e,signatureOrg:n=""}){const a=(0,o.useStyles2)(E);if(!e&&!n)return null;const s=e===g.PluginSignatureType.grafana?"Grafana Labs":(0,I.capitalize)(e),t=C[e||""]||C.DEFAULT;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(D,{children:[(0,h.jsx)("strong",{className:a.strong,children:"Level: "}),(0,h.jsx)(o.Icon,{size:"xs",name:t})," ",s]}),(0,h.jsxs)(D,{children:[(0,h.jsx)("strong",{className:a.strong,children:"Signed by:"})," ",n]})]})}const D=({children:e})=>{const n=(0,o.useStyles2)(E);return(0,h.jsx)(o.Badge,{color:"green",className:n.badge,text:(0,h.jsx)(h.Fragment,{children:e})})},E=e=>({badge:r.css`
    background-color: ${e.colors.background.canvas};
    border-color: ${e.colors.border.strong};
    color: ${e.colors.text.secondary};
    margin-left: ${e.spacing()};
  `,strong:r.css`
    color: ${e.colors.text.primary};
  `,icon:r.css`
    margin-right: ${e.spacing(.5)};
  `});function T({plugin:e}){const n=(0,o.useStyles2)(z),a=e.signature===g.PluginSignatureStatus.valid;return(0,h.jsxs)("div",{className:n.container,children:[(0,h.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",target:"_blank",rel:"noreferrer",className:n.link,children:(0,h.jsx)(o.PluginSignatureBadge,{status:e.signature})}),a&&(0,h.jsx)($,{signatureType:e.signatureType,signatureOrg:e.signatureOrg})]})}const z=e=>({container:r.css`
      display: flex;
    `,link:r.css`
      display: inline-flex;
      align-items: center;
    `});function U({plugin:e,latestCompatibleVersion:n,className:a}){var s,t,i;const r=(0,o.useStyles2)(B),l=null===(s=e.details)||void 0===s?void 0:s.pluginDependencies,c=e.isInstalled?null===(t=e.details)||void 0===t?void 0:t.grafanaDependency:(null==n?void 0:n.grafanaDependency)||(null===(i=e.details)||void 0===i?void 0:i.grafanaDependency);return!(c||l&&l.length)?null:(0,h.jsxs)("div",{className:a,children:[(0,h.jsx)("div",{className:r.dependencyTitle,children:"Dependencies:"}),Boolean(c)&&(0,h.jsxs)("div",{children:[(0,h.jsx)(o.Icon,{name:"grafana",className:r.icon}),"Grafana ",c]}),l&&l.length>0&&(0,h.jsx)("div",{children:l.map((e=>(0,h.jsxs)("span",{children:[(0,h.jsx)(o.Icon,{name:x.Co[e.type],className:r.icon}),e.name," ",e.version]},e.name)))})]})}const B=e=>({dependencyTitle:r.css`
      font-weight: ${e.typography.fontWeightBold};
      margin-right: ${e.spacing(.5)};

      &::after {
        content: '';
        padding: 0;
      }
    `,icon:r.css`
      color: ${e.colors.text.secondary};
      margin-right: ${e.spacing(.5)};
    `});var L=a("./public/app/features/plugins/admin/components/PluginLogo.tsx"),A=a("./public/app/features/plugins/admin/components/Badges/index.ts"),V=a("./public/app/features/datasources/state/actions.ts"),R=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js");function O({plugin:e}){const n=(0,R.useDispatch)(),a=(0,i.useCallback)((()=>{const a={name:e.name,id:e.id};n((0,V.J_)(a))}),[n,e]);return(0,k.Gg)()?(0,h.jsxs)(o.Button,{variant:"primary",onClick:a,children:["Create a ",e.name," data source"]}):null}var W=a("./.yarn/__virtual__/react-use-virtual-ca2705900f/0/cache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/useAsync.js"),G=a("./public/app/features/plugins/pluginSettings.ts"),F=a("./public/app/features/plugins/plugin_loader.ts"),H=a("./public/app/features/plugins/importPanelPlugin.ts");const Z=e=>(0,W.Z)((async()=>e&&e.isInstalled&&!e.isDisabled?async function(e){const n=await(0,G.a)(e);let a;n.type===g.PluginType.app&&(a=await(0,F.Av)(n)),n.type===g.PluginType.datasource&&(a=await(0,F.nL)(n)),n.type===g.PluginType.panel&&(a=await(0,H._)(n));if(n.type===g.PluginType.renderer&&(a={meta:n}),!a)throw new Error("Unknown Plugin type: "+n.type);return a}(e.id):null),[null==e?void 0:e.id,null==e?void 0:e.isInstalled,null==e?void 0:e.isDisabled]);var q=a("./public/app/features/plugins/admin/api.ts");function M({plugin:e}){const{value:n}=Z(e);if(!n)return null;const{enabled:a,jsonData:s}=null==n?void 0:n.meta;return(0,h.jsxs)(h.Fragment,{children:[!a&&(0,h.jsx)(o.Button,{variant:"primary",onClick:()=>Q(e.id,{enabled:!0,pinned:!0,jsonData:s}),children:"Enable"}),a&&(0,h.jsx)(o.Button,{variant:"destructive",onClick:()=>{Q(e.id,{enabled:!1,pinned:!1,jsonData:s})},children:"Disable"})]})}const Q=async(e,n)=>{try{await(0,q.P6)(e,n),window.location.reload()}catch(e){console.error("Error while updating the plugin",e)}};function J({plugin:e}){if(!e.isInstalled||e.isDisabled)return null;switch(e.type){case g.PluginType.datasource:return(0,h.jsx)(O,{plugin:e});case g.PluginType.app:return(0,h.jsx)(M,{plugin:e});default:return null}}var X;function Y({plugin:e,currentUrl:n,parentUrl:a}){var s,t;const i=(0,o.useStyles2)(K),l=(0,f.RU)(null===(s=e.details)||void 0===s?void 0:s.versions),c=e.installedVersion||(null==l?void 0:l.version);return(0,h.jsxs)("div",{className:i.headerContainer,children:[(0,h.jsx)(L.E,{alt:`${e.name} logo`,src:e.info.logos.small,className:r.css`
          object-fit: contain;
          width: 100%;
          height: 68px;
          max-width: 68px;
        `}),(0,h.jsxs)("div",{className:i.headerWrapper,children:[(0,h.jsx)("nav",{className:i.breadcrumb,"aria-label":"Breadcrumb",children:(0,h.jsxs)("ol",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("a",{className:i.textUnderline,href:a,children:"Plugins"})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:n,"aria-current":"page",children:e.name})})]})}),(0,h.jsxs)("div",{className:i.headerInformationRow,children:[(0,h.jsx)("span",{children:e.orgName}),null===(t=e.details)||void 0===t?void 0:t.links.map((e=>(0,h.jsx)("a",{href:e.url,children:e.name},e.name))),e.downloads>0&&(0,h.jsxs)("span",{children:[X||(X=(0,h.jsx)(o.Icon,{name:"cloud-download"})),` ${(new Intl.NumberFormat).format(e.downloads)}`," "]}),Boolean(c)&&(0,h.jsx)("span",{children:c}),(0,h.jsx)(T,{plugin:e}),e.isDisabled&&(0,h.jsx)(A.SX,{error:e.error})]}),(0,h.jsx)(U,{plugin:e,latestCompatibleVersion:l,className:(0,r.cx)(i.headerInformationRow,i.headerInformationRowSecondary)}),(0,h.jsx)("p",{children:e.description}),(0,h.jsxs)(o.HorizontalGroup,{height:"auto",children:[(0,h.jsx)(_,{plugin:e,latestCompatibleVersion:l}),(0,h.jsx)(J,{plugin:e})]})]})]})}const K=e=>({headerContainer:r.css`
      display: flex;
      margin-bottom: ${e.spacing(3)};
      margin-top: ${e.spacing(3)};
      min-height: 120px;
    `,headerWrapper:r.css`
      margin-left: ${e.spacing(3)};
    `,breadcrumb:r.css`
      font-size: ${e.typography.h2.fontSize};
      li {
        display: inline;
        list-style: none;
        &::after {
          content: '/';
          padding: 0 0.25ch;
        }
        &:last-child::after {
          content: '';
        }
      }
    `,headerInformationRow:r.css`
      display: flex;
      align-items: center;
      margin-top: ${e.spacing()};
      margin-bottom: ${e.spacing()};
      flex-flow: wrap;
      & > * {
        &::after {
          content: '|';
          padding: 0 ${e.spacing()};
        }
        &:last-child::after {
          content: '';
          padding-right: 0;
        }
      }
      font-size: ${e.typography.h4.fontSize};
    `,headerInformationRowSecondary:r.css`
      font-size: ${e.typography.body.fontSize};
    `,headerOrgName:r.css`
      font-size: ${e.typography.h4.fontSize};
    `,signature:r.css`
      margin: ${e.spacing(3)};
      margin-bottom: 0;
    `,textUnderline:r.css`
      text-decoration: underline;
    `});var ee,ne;const ae=({versions:e=[],installedVersion:n})=>{const a=(0,o.useStyles2)(se),s=(0,f.RU)(e);return 0===e.length?ee||(ee=(0,h.jsx)("p",{children:"No version history was found."})):(0,h.jsxs)("table",{className:a.table,children:[ne||(ne=(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Version"}),(0,h.jsx)("th",{children:"Last updated"})]})})),(0,h.jsx)("tbody",{children:e.map((e=>{const t=n===e.version;return(0,h.jsxs)("tr",{children:[t?(0,h.jsxs)("td",{className:a.currentVersion,children:[e.version," (installed version)"]}):e.version===(null==s?void 0:s.version)?(0,h.jsxs)("td",{children:[e.version," (latest compatible version)"]}):(0,h.jsx)("td",{children:e.version}),(0,h.jsx)("td",{className:t?a.currentVersion:"",children:(0,g.dateTimeFormatTimeAgo)(e.createdAt)})]},e.version)}))})]})},se=e=>({container:r.css`
    padding: ${e.spacing(2,4,3)};
  `,table:r.css`
    table-layout: fixed;
    width: 100%;
    td,
    th {
      padding: ${e.spacing()} 0;
    }
    th {
      font-size: ${e.typography.h5.fontSize};
    }
  `,currentVersion:r.css`
    font-weight: ${e.typography.fontWeightBold};
  `});var te,ie;function re(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}class le extends i.PureComponent{constructor(e){super(e),re(this,"element",null),re(this,"model",void 0),re(this,"preUpdateHook",(()=>Promise.resolve())),re(this,"postUpdateHook",(()=>Promise.resolve())),re(this,"update",(()=>{const e=this.model.id;this.preUpdateHook().then((()=>{const n=(0,I.extend)({enabled:this.model.enabled,pinned:this.model.pinned,jsonData:this.model.jsonData,secureJsonData:this.model.secureJsonData},{});return(0,c.getBackendSrv)().post(`/api/plugins/${e}/settings`,n)})).then(this.postUpdateHook).then((e=>{window.location.href=window.location.href}))})),re(this,"setPreUpdateHook",(e=>{this.preUpdateHook=e})),re(this,"setPostUpdateHook",(e=>{this.postUpdateHook=e})),re(this,"importDashboards",(()=>((0,g.deprecationWarning)("AppConfig","importDashboards()"),Promise.resolve()))),re(this,"enable",(()=>{this.model.enabled=!0,this.model.pinned=!0,this.update()})),re(this,"disable",(()=>{this.model.enabled=!1,this.model.pinned=!1,this.update()})),this.state={angularCtrl:null,refresh:0}}componentDidMount(){setTimeout((()=>{this.setState({refresh:this.state.refresh+1})}),5)}componentDidUpdate(e){if(!this.element||this.state.angularCtrl)return;this.model=(0,I.cloneDeep)(this.props.app.meta);const n={ctrl:this,isAppConfigCtrl:!0},a=(0,c.getAngularLoader)().load(this.element,n,'<plugin-component type="app-config-ctrl"></plugin-component>');this.setState({angularCtrl:a})}render(){const e=this.model,n=(0,r.css)({marginRight:"8px"});return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{ref:e=>this.element=e}),te||(te=(0,h.jsx)("br",{})),ie||(ie=(0,h.jsx)("br",{})),e&&(0,h.jsxs)("div",{className:"gf-form",children:[!e.enabled&&(0,h.jsx)(o.Button,{variant:"primary",onClick:this.enable,className:n,children:"Enable"}),e.enabled&&(0,h.jsx)(o.Button,{variant:"primary",onClick:this.update,className:n,children:"Update"}),e.enabled&&(0,h.jsx)(o.Button,{variant:"destructive",onClick:this.disable,className:n,children:"Disable"})]})]})}}var oe,ce,de,ue=a("./public/app/core/core.ts"),pe=a("./public/app/features/datasources/DashboardsTable.tsx");function ge(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}class he extends i.PureComponent{constructor(e){super(e),ge(this,"importAll",(()=>{this.importNext(0)})),ge(this,"importNext",(e=>{const{dashboards:n}=this.state;return this.import(n[e],!0).then((()=>e+1<n.length?new Promise((n=>{setTimeout((()=>{this.importNext(e+1).then((()=>{n()}))}),500)})):Promise.resolve()))})),ge(this,"import",((e,n)=>{const{plugin:a,datasource:s}=this.props,t={pluginId:a.id,path:e.path,overwrite:n,inputs:[]};return s&&t.inputs.push({name:"*",type:"datasource",pluginId:s.meta.id,value:s.name}),(0,c.getBackendSrv)().post("/api/dashboards/import",t).then((n=>{ue.h$.emit(g.AppEvents.alertSuccess,["Dashboard Imported",e.title]),(0,I.extend)(e,n),this.setState({dashboards:[...this.state.dashboards]})}))})),ge(this,"remove",(e=>{(0,c.getBackendSrv)().delete("/api/dashboards/"+e.importedUri).then((()=>{e.imported=!1,this.setState({dashboards:[...this.state.dashboards]})}))})),this.state={loading:!0,dashboards:[]}}async componentDidMount(){const e=this.props.plugin.id;(0,c.getBackendSrv)().get(`/api/plugins/${e}/dashboards`).then((e=>{this.setState({dashboards:e,loading:!1})}))}render(){const{loading:e,dashboards:n}=this.state;return e?oe||(oe=(0,h.jsx)("div",{children:"loading..."})):n&&n.length?(0,h.jsx)("div",{className:"gf-form-group",children:(0,h.jsx)(pe.Z,{dashboards:n,onImport:this.import,onRemove:this.remove})}):ce||(ce=(0,h.jsx)("div",{children:"No dashboards are included with this plugin"}))}}function me({plugin:e,queryParams:n,pageId:a}){const s=(0,o.useStyles2)(fe),{value:t}=Z(e);var i,l,c;if(a===x.tu.OVERVIEW)return(0,h.jsx)("div",{className:(0,r.cx)(s.readme,s.container),dangerouslySetInnerHTML:{__html:null!==(i=null===(l=e.details)||void 0===l?void 0:l.readme)&&void 0!==i?i:"No plugin help or readme markdown file was found"}});if(a===x.tu.VERSIONS)return(0,h.jsx)("div",{className:s.container,children:(0,h.jsx)(ae,{versions:null===(c=e.details)||void 0===c?void 0:c.versions,installedVersion:e.installedVersion})});if(a===x.tu.CONFIG&&null!=t&&t.angularConfigCtrl)return(0,h.jsx)("div",{className:s.container,children:(0,h.jsx)(le,{app:t})});if(null!=t&&t.configPages)for(const e of t.configPages){var d;if(a===e.id)return(0,h.jsx)("div",{className:s.container,children:d||(d=(0,h.jsx)(e.body,{plugin:t,query:n}))})}return a===x.tu.DASHBOARDS&&t?(0,h.jsx)("div",{className:s.container,children:(0,h.jsx)(he,{plugin:null==t?void 0:t.meta})}):(0,h.jsx)("div",{className:s.container,children:de||(de=(0,h.jsx)("p",{children:"Page not found."}))})}const fe=e=>({container:r.css`
    padding: ${e.spacing(3,4)};
  `,readme:r.css`
    & img {
      max-width: 100%;
    }

    h1,
    h2,
    h3 {
      margin-top: ${e.spacing(3)};
      margin-bottom: ${e.spacing(2)};
    }

    *:first-child {
      margin-top: 0;
    }

    li {
      margin-left: ${e.spacing(2)};
      & > p {
        margin: ${e.spacing()} 0;
      }
    }
  `});var xe=a("./public/app/features/plugins/admin/components/Page.tsx"),ve=a("./public/app/features/plugins/admin/components/Loader.tsx"),be=a("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");var je,ye,Se,Pe,Ne,ke,_e,we,Ie=a("./public/app/types/index.ts");function Ce({className:e,plugin:n}){return n.isDisabled?(0,h.jsxs)(o.Alert,{severity:"error",title:"Plugin disabled",className:e,"aria-label":p.wl.pages.PluginPage.disabledInfo,children:[$e(n.error),je||(je=(0,h.jsx)("p",{children:"Please contact your server administrator to get this resolved."})),ye||(ye=(0,h.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/administration/cli/#plugins-commands",className:"external-link",target:"_blank",rel:"noreferrer",children:"Read more about managing plugins"}))]}):null}function $e(e){switch(e){case g.PluginErrorCode.modifiedSignature:return Se||(Se=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that the content of this plugin does not match its signature. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));case g.PluginErrorCode.invalidSignature:return Pe||(Pe=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that it was invalid. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));case g.PluginErrorCode.missingSignature:return Ne||(Ne=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that there is no signature for this plugin. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));default:return ke||(ke=(0,h.jsx)("p",{children:"We failed to run this plugin due to an unkown reason and have therefor disabled it. We recommend you to reinstall the plugin to make sure you are running a working version of this plugin."}))}}function De({match:e,queryParams:n}){var a;const{params:{pluginId:s=""},url:t}=e,r=t.substring(0,t.lastIndexOf("/")),p=[{label:x.xc.OVERVIEW,icon:"file-alt",id:x.tu.OVERVIEW,href:`${t}?page=${x.tu.OVERVIEW}`}],f=(0,j.bJ)(s),{tabs:v,defaultTab:b}=((e,n=[])=>{const{loading:a,error:s,value:t}=Z(e),r=Boolean(null==e?void 0:e.isPublished),{pathname:l}=(0,be.TH)(),[o,c]=(0,i.useMemo)((()=>{const e=(0,k.RN)(),a=[...n];let s;if(r&&a.push({label:x.xc.VERSIONS,icon:"history",id:x.tu.VERSIONS,href:`${l}?page=${x.tu.VERSIONS}`}),!t)return s=x.tu.OVERVIEW,[a,s];if(e&&t.meta.type===g.PluginType.app){var i;if(t.angularConfigCtrl&&(a.push({label:"Config",icon:"cog",id:x.tu.CONFIG,href:`${l}?page=${x.tu.CONFIG}`}),s=x.tu.CONFIG),t.configPages)for(const e of t.configPages)a.push({label:e.title,icon:e.icon,id:e.id,href:`${l}?page=${e.id}`}),s||(s=e.id);null!==(i=t.meta.includes)&&void 0!==i&&i.find((e=>e.type===g.PluginIncludeType.dashboard))&&a.push({label:"Dashboards",icon:"apps",id:x.tu.DASHBOARDS,href:`${l}?page=${x.tu.DASHBOARDS}`})}return s||(s=x.tu.OVERVIEW),[a,s]}),[t,n,l,r]);return{error:s,loading:a,tabs:o,defaultTab:c}})(f,p),{isLoading:y}=(0,j.ZV)(),{isLoading:S}=(0,j.bt)(),P=(0,o.useStyles2)(Ee),N=(0,l.Z)(v),_=n.page||b;return(0,i.useEffect)((()=>{const e=N&&N.length>v.length,n=_!==x.tu.OVERVIEW&&_!==x.tu.VERSIONS;e&&n&&c.locationService.replace(`${t}?page=${x.tu.OVERVIEW}`)}),[_,t,v,N]),y||S?_e||(_e=(0,h.jsx)(u.T,{children:(0,h.jsx)(ve.a,{})})):f?(0,h.jsx)(u.T,{children:(0,h.jsxs)(xe.T,{children:[(0,h.jsx)(Y,{currentUrl:`${t}?page=${_}`,parentUrl:r,plugin:f}),(0,h.jsx)(o.TabsBar,{children:v.map((e=>(0,h.jsx)(o.Tab,{label:e.label,href:e.href,icon:e.icon,active:e.id===_},e.label)))}),(0,h.jsxs)(o.TabContent,{className:P.tabContent,children:[(0,h.jsx)(m,{plugin:f,className:P.alert}),(0,h.jsx)(Ce,{plugin:f,className:P.alert}),(0,h.jsx)(me,{queryParams:n,plugin:f,pageId:_})]})]})}):(0,h.jsx)(d.Ar,{justify:"center",align:"center",children:(0,h.jsxs)(o.Alert,{severity:Ie.F1.Warning,title:"Plugin not found",children:["That plugin cannot be found. Please check the url is correct or ",we||(we=(0,h.jsx)("br",{})),"go to the ",a||(a=(0,h.jsx)("a",{href:r,children:"plugin catalog"})),"."]})})}const Ee=e=>({alert:r.css`
      margin: ${e.spacing(3)};
      margin-bottom: 0;
    `,tabContent:r.css`
      overflow: auto;
    `})},"./public/app/features/plugins/admin/state/hooks.ts":(e,n,a)=>{a.d(n,{iY:()=>T,bt:()=>I,ZV:()=>w,GE:()=>y,UQ:()=>P,bJ:()=>S,x3:()=>N,IS:()=>C,y9:()=>_,S1:()=>k,wq:()=>$});var s=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),t=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),i=a("./public/app/features/plugins/admin/state/reducer.ts"),r=a("./public/app/features/plugins/admin/state/actions.ts"),l=a("./.yarn/cache/reselect-npm-4.1.0-69c7ae5e35-ef150c3ccc.zip/node_modules/reselect/es/index.js"),o=a("./public/app/features/plugins/admin/types.ts");const c=e=>e.plugins,d=(0,l.P1)(c,(({items:e})=>e)),u=(0,l.P1)(c,(({settings:e})=>e.displayMode)),{selectAll:p,selectById:g}=i.CD.getSelectors(d),h=(e,n)=>(0,l.P1)((e=>(0,l.P1)(p,(n=>n.filter((n=>"installed"===e?n.isInstalled:!n.isCore)))))(e),(e=>e.filter((e=>"all"===n||e.type===n)))),m=(e,n,a)=>(0,l.P1)(h(n,a),(e=>(0,l.P1)(p,(n=>""===e?[]:n.filter((n=>{const a=[];return n.name&&a.push(n.name.toLowerCase()),n.orgName&&a.push(n.orgName.toLowerCase()),a.some((n=>n.includes(e.toLowerCase())))})))))(e),((n,a)=>""===e?n:a)),f=(0,l.P1)(p,(e=>e?e.filter((e=>Boolean(e.error))).map((e=>({pluginId:e.id,errorCode:e.error}))):[])),x=e=>(0,l.P1)(c,(({requests:n={}})=>n[e])),v=e=>(0,l.P1)(x(e),(e=>(null==e?void 0:e.status)===o.eE.Pending)),b=e=>(0,l.P1)(x(e),(e=>(null==e?void 0:e.status)===o.eE.Rejected?null==e?void 0:e.error:null));var j=a("./public/app/features/plugins/admin/helpers.ts");const y=({query:e="",filterBy:n="installed",filterByType:a="all",sortBy:s=j.Nh.nameAsc})=>{D();const i=(0,t.useSelector)(m(e,n,a)),{isLoading:r,error:l}=w();return{isLoading:r,error:l,plugins:(0,j.AA)(i,s)}},S=e=>(D(),E(e),(0,t.useSelector)((n=>g(n,e)))),P=()=>(D(),(0,t.useSelector)(f)),N=()=>{const e=(0,t.useDispatch)();return(n,a,s)=>e((0,r.N9)({id:n,version:a,isUpdating:s}))},k=()=>{const e=(0,t.useDispatch)();return n=>e((0,r.Tz)(n))},_=()=>null===(0,t.useSelector)(b(r.tQ.typePrefix)),w=()=>({isLoading:(0,t.useSelector)(v(r.Qd.typePrefix)),error:(0,t.useSelector)(b(r.Qd.typePrefix))}),I=()=>({isLoading:(0,t.useSelector)(v(r.DD.typePrefix)),error:(0,t.useSelector)(b(r.DD.typePrefix))}),C=()=>({isInstalling:(0,t.useSelector)(v(r.N9.typePrefix)),error:(0,t.useSelector)(b(r.N9.typePrefix))}),$=()=>({isUninstalling:(0,t.useSelector)(v(r.Tz.typePrefix)),error:(0,t.useSelector)(b(r.Tz.typePrefix))}),D=()=>{const e=(0,t.useDispatch)(),n=(0,t.useSelector)((a=r.Qd.typePrefix,(0,l.P1)(x(a),(e=>void 0===e))));var a;(0,s.useEffect)((()=>{n&&e((0,r.Qd)())}),[])},E=e=>{const n=(0,t.useDispatch)(),a=(0,t.useSelector)((n=>g(n,e))),i=!(0,t.useSelector)(v(r.DD.typePrefix))&&a&&!a.details;(0,s.useEffect)((()=>{i&&n((0,r.DD)(e))}),[a])},T=()=>{const e=(0,t.useDispatch)();return{displayMode:(0,t.useSelector)(u),setDisplayMode:n=>e((0,i.UC)(n))}}},"./.yarn/__virtual__/react-use-virtual-ca2705900f/0/cache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/usePrevious.js":(e,n,a)=>{a.d(n,{Z:()=>t});var s=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");function t(e){var n=(0,s.useRef)();return(0,s.useEffect)((function(){n.current=e})),n.current}}}]);
//# sourceMappingURL=PluginPage.787ecc600122eb73aeab.js.map