(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{212:function(e,n,t){"use strict";t.r(n);var r,o,c,a,i,s,d,l=t(0),b=t.n(l),u=t(81),p=t.n(u),j=t(7),h=t.n(j),x=t(36),f=t(2),O=t(53),m=t.n(O),g=function(){return m.a.get("/summary")},v=function(e){var n=(new Date).toISOString().split("T")[0];return m.a.get("/country/".concat(e,"?to=").concat(n,"T00:00:00Z"))},w=t(1),C=Object(l.createContext)(),k=function(e){var n=Object(l.useState)([]),t=Object(f.a)(n,2),r=t[0],o=t[1];return Object(w.jsx)(C.Provider,{value:[r,o],children:e.children})},y=t(3),F=t(4),E=F.a.div(r||(r=Object(y.a)(["\n    height:100px;\n    width:100%;\n    position:relative;\n    background-color:#0E1F33;\n    border-bottom: 3px solid #CEA434;\n    div{\n        position absolute;\n        top:50%;\n        left:50%;\n        transform:translate(-50%,-50%);\n        width:100%;\n        h1{\n            text-align:center;\n            color:#F1F1F3;\n            font-family: 'Open Sans', sans-serif;\n        }\n        h1:last-child{\n            display:none;\n        }\n    }\n    @media screen and (max-width: 768px){\n        div{\n            h1:first-child{\n                display:none;\n            }\n            h1:last-child{\n                display:block;\n                font-size:28px;\n            }\n        }\n    }\n"]))),S=function(e){var n=e.summary;return Object(w.jsx)(E,{children:Object(w.jsxs)("div",{children:[Object(w.jsxs)("h1",{children:[Math.round(n.confirmed/1e3),"k Confirmed / ",Math.round(n.deaths/1e3),"k Deaths / ",Math.round(n.recovered/1e3),"k Recovered"]}),Object(w.jsxs)("h1",{children:[Math.round(n.confirmed/1e3),"k / ",Math.round(n.deaths/1e3),"k / ",Math.round(n.recovered/1e3),"k"]})]})})},A=F.a.div(o||(o=Object(y.a)(["\n    width:300px;\n    height:calc(100vh - 100px);\n    background-color:#0E1F33;\n    padding: 15px 25px;\n    border-right:3px solid #CEA434;\n    .search{\n        width:100%;\n        positon relative;\n        i{\n            margin:4px 0 0 5px;\n            position:absolute;\n            color:#000;\n        }\n        input{\n            border-radius: 5px;\n            background-color:#f5f3f4;\n            color:#a4161a;\n            border:none;\n            width:250px;\n            padding: 5px 8px 5px 25px;\n            outline:none;\n        }\n    }\n    @media screen and (max-width: 768px){\n        width:100%;\n        border-right:none;\n        .search{\n            input{\n                width:100%;\n            }\n        }\n    }\n"]))),D=Object(l.createContext)(),z=function(e){var n=Object(l.useState)(""),t=Object(f.a)(n,2),r=t[0],o=t[1];return Object(w.jsx)(D.Provider,{value:[r,o],children:e.children})},M=F.a.div(c||(c=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 12.5px 0px;\n  margin-right: 5px;\n  padding: 5px 0px 5px 10px;\n  background-color: ",';\n  border-radius: 5px;\n  .desc {\n    h3 {\n      width: 180px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-size: 16px;\n      font-family: "Open Sans", sans-serif;\n    }\n    h3,\n    p {\n      color: ',';\n    }\n    p {\n      width: 190px;\n      font-family: "Roboto", sans-serif;\n      font-size: 14px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n  .icon {\n    margin: -5px 0;\n    padding: 15px 10px;\n    height: 50px;\n    background-color: #cea434;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n\n    i {\n      color: #fff;\n    }\n  }\n  #id {\n    background-color: #000;\n  }\n'])),(function(e){return e.selected?"#CEA434":"#F1F1F3"}),(function(e){return e.selected?"#F1F1F3":"#000"})),T=function(e){var n=e.cData,t=Object(l.useContext)(D),r=Object(f.a)(t,2),o=r[0],c=r[1],a=Object(l.useState)(!1),i=Object(f.a)(a,2),s=i[0],d=i[1];Object(l.useEffect)((function(){o===n.CountryCode?d(!0):d(!1)}),[o]),Object(l.useEffect)((function(){s&&""!==o&&"GL"!==o&&"AQ"!==o&&"-99"!==o&&(document.getElementById("selected").parentElement.scrollTop=document.getElementById("selected").offsetTop-155)}),[s]);return Object(w.jsxs)(M,{id:s?"selected":"",selected:s,onClick:function(){c(n.CountryCode)},children:[Object(w.jsxs)("div",{className:"desc",children:[Object(w.jsx)("h3",{children:n.Country}),Object(w.jsxs)("p",{children:[n.TotalConfirmed," / ",n.TotalDeaths," / ",n.TotalRecovered]})]}),Object(w.jsx)("div",{className:"icon",children:Object(w.jsx)("i",{class:"fas fa-chart-area"})})]})},G=F.a.div(a||(a=Object(y.a)(["\n  margin-top: 15px;\n  // padding-right: 15px;\n  height: calc(100% - 45px);\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n\n  div:first-child {\n    margin-top: 0;\n  }\n\n  ::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    border-radius: 10px;\n    background-color: #f1f1f3;\n  }\n\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background-color: #cea434;\n  }\n"]))),R=Object(l.createContext)(),I=function(e){var n=Object(l.useState)(""),t=Object(f.a)(n,2),r=t[0],o=t[1];return Object(w.jsx)(R.Provider,{value:[r,o],children:e.children})},L=function(){var e=Object(l.useContext)(C),n=Object(f.a)(e,2),t=n[0],r=(n[1],Object(l.useContext)(R)),o=Object(f.a)(r,2),c=o[0];o[1];return Object(w.jsx)(G,{children:c?t.filter((function(e){return e.Country.startsWith(c)})).map((function(e){return Object(w.jsx)(T,{cData:e})})):t.map((function(e){return Object(w.jsx)(T,{cData:e})}))})},N=function(){var e=Object(l.useContext)(D),n=Object(f.a)(e,2),t=(n[0],n[1]),r=Object(l.useContext)(R),o=Object(f.a)(r,2),c=o[0],a=o[1];Object(l.useEffect)((function(){""!==c&&t("")}),[c]);return Object(w.jsxs)(A,{children:[Object(w.jsxs)("div",{className:"search",children:[Object(w.jsx)("i",{class:"fas fa-search"}),Object(w.jsx)("input",{onChange:function(e){return a(e.target.value.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})))},type:"text",placeholder:"Search..."})]}),Object(w.jsx)(L,{})]})},B=t(25),P=t(17),Y=F.a.div(i||(i=Object(y.a)(["\n  width: calc(100% - 300px);\n  height: calc(100vh - 100px);\n  position: relative;\n  background-color: #0e1f33;\n  svg {\n    width: 100%;\n    height: 100%;\n    path {\n      outline: none;\n    }\n  }\n  .buttons {\n    position: absolute;\n    bottom: 4%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    button {\n      background-color: #cea434;\n      border: 1px solid #cea434;\n      border-radius: 50%;\n      padding: 10px 11px;\n      outline: none;\n      i {\n        color: #f1f1f3;\n      }\n    }\n    button:first-child {\n      margin-right: 15px;\n    }\n    button:last-child {\n      margin-left: 15px;\n    }\n  }\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),Z=function(){var e=Object(l.useContext)(D),n=Object(f.a)(e,2),t=n[0],r=n[1],o=Object(l.useContext)(R),c=Object(f.a)(o,2),a=(c[0],c[1]),i=Object(l.useState)({coordinates:[0,0],zoom:1}),s=Object(f.a)(i,2),d=s[0],b=s[1],u=function(e){a(""),document.querySelector(".search input").value="",r(e.target.getAttribute("map-abbrev"))};return Object(w.jsxs)(Y,{children:[Object(w.jsx)(P.ComposableMap,{stroke:"#0E1F33",projectionConfig:{scale:140},children:Object(w.jsxs)(P.ZoomableGroup,{zoom:d.zoom,center:d.coordinates,onMoveEnd:function(e){b(e)},children:[Object(w.jsx)(P.Graticule,{stroke:"#F1F1F3"}),Object(w.jsx)(P.Sphere,{stroke:"#F1F1F3"}),Object(w.jsx)(P.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",children:function(e){return e.geographies.map((function(e){return Object(w.jsx)(P.Geography,{"map-abbrev":e.properties.ISO_A2,geography:e,onClick:u,fill:e.properties.ISO_A2===t?"#CEA434":"#F1F1F3"})}))}})]})}),Object(w.jsxs)("div",{className:"buttons",children:[Object(w.jsx)("button",{onClick:function(){d.zoom<=1||b((function(e){return Object(B.a)(Object(B.a)({},e),{},{zoom:e.zoom/2})}))},children:Object(w.jsx)("i",{class:"fas fa-search-minus"})}),Object(w.jsx)("button",{onClick:function(){d.zoom>=4||b((function(e){return Object(B.a)(Object(B.a)({},e),{},{zoom:2*e.zoom})}))},children:Object(w.jsx)("i",{class:"fas fa-search-plus"})})]})]})},J=t(85),Q=(t(80),F.a.div(s||(s=Object(y.a)(["\n    width:100%;\n    height:500px;\n    padding: 40px 60px;\n    background-color:#0E1F33;\n    color:#F1F1F3;\n    border-top: 3px solid #CEA434;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n    font-family: 'Roboto', sans-serif;\n    h2{\n        text-align:center;\n        margin-bottom:15px;\n        font-family: 'Open Sans', sans-serif;\n    }\n    @media screen and (max-width: 768px){\n        padding: 20px 25px;\n    }\n"])))),_=function(){var e=Object(l.useState)([]),n=Object(f.a)(e,2),t=n[0],r=n[1],o=Object(l.useState)({}),c=Object(f.a)(o,2),a=c[0],i=c[1],s=Object(l.useContext)(D),d=Object(f.a)(s,2),b=d[0],u=(d[1],new Date(2020,1,2)),p=new Date,j=function(e){for(var n=[],t=p.getMonth()-u.getMonth()+12*(p.getFullYear()-u.getFullYear())+1,o=function(){var r=u.toISOString().split("T")[0],o=e.find((function(e){return e.Date==="".concat(r,"T00:00:00Z")}));n.push(o),u=new Date(u.getFullYear(),u.getMonth()+1,2),t--};t>0;)o();r(n)};return Object(l.useEffect)((function(){""!==b&&"GL"!==b&&"AQ"!==b&&"-99"!==b&&Object(x.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(b);case 2:n=e.sent,j(n.data);case 4:case"end":return e.stop()}}),e)})))()}),[b]),Object(l.useEffect)((function(){var e={labels:t.map((function(e){return e.Date.split("T")[0]})),confirmed:t.map((function(e){return e.Confirmed})),deaths:t.map((function(e){return e.Deaths})),recovered:t.map((function(e){return e.Recovered}))};i({labels:e.labels,datasets:[{label:"Confirmed",backgroundColor:"rgb(206, 164, 52, 0.5)",borderColor:"rgb(206, 164, 52)",data:e.confirmed},{label:"Deaths",backgroundColor:"rgb(25, 49, 83, 0.2)",borderColor:"rgb(25, 49, 83)",data:e.deaths},{label:"Recovered",backgroundColor:"rgb(255, 255, 255, 0.4)",borderColor:"rgb(255,255,255)",data:e.recovered}]})}),[t]),Object(w.jsxs)(Q,{children:[Object(w.jsx)("h2",{children:"Monthly Cases"}),Object(w.jsx)("div",{class:"chart-container",style:{position:"relative",height:"100%",width:"100%"},children:Object(w.jsx)(J.Line,{data:a,options:{maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!0,color:"#CEA434"}}],yAxes:[{gridLines:{display:!0,color:"#CEA434"}}]}}})})]})},q=F.a.div(d||(d=Object(y.a)(["\n    .desktop{\n        display:flex;\n    }\n    @media screen and (max-width: 768px){\n        desktop{\n            div{\n                width:100%;\n            }\n        }\n    }\n"]))),U=function(){var e=Object(l.useState)({}),n=Object(f.a)(e,2),t=n[0],r=n[1],o=Object(l.useContext)(C),c=Object(f.a)(o,2),a=(c[0],c[1]);return Object(l.useEffect)((function(){Object(x.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n=e.sent,r({confirmed:n.data.Global.TotalConfirmed,deaths:n.data.Global.TotalDeaths,recovered:n.data.Global.TotalRecovered}),a(n.data.Countries);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(w.jsxs)(q,{children:[Object(w.jsx)(S,{summary:t}),Object(w.jsxs)("div",{className:"desktop",children:[Object(w.jsx)(N,{}),Object(w.jsx)(Z,{})]}),Object(w.jsx)(_,{})]})};p.a.render(Object(w.jsx)(k,{children:Object(w.jsx)(z,{children:Object(w.jsx)(I,{children:Object(w.jsx)(b.a.StrictMode,{children:Object(w.jsx)(U,{})})})})}),document.getElementById("root"))},80:function(e,n){}},[[212,1,2]]]);
//# sourceMappingURL=main.ce1359c7.chunk.js.map