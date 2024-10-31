(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5516:(e,t,n)=>{Promise.resolve().then(n.bind(n,8516))},6203:(e,t,n)=>{"use strict";n.d(t,{X:()=>o});var l=n(7135);let r=n(8472).Z.create({baseURL:"https://api.lystio.co/",headers:{"Content-Type":"application/json"}});async function a(e){return r.request({...e})}function i(e,t){return a({url:e,method:"POST",...t})}let o={tenement:{getTenementsList:e=>i(l.g.tenement.getTenementsList(),{data:e}),getMapMarkers:e=>i(l.g.tenement.getTenementsList(),{data:e})}}},7135:(e,t,n)=>{"use strict";n.d(t,{g:()=>l});let l={tenement:{getTenementsList:()=>"/tenement/search",getMapMarkers:()=>"/tenement/search/map"}}},8516:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>es});var l=n(7437);let r=[{name:"propertyType",label:"Property Type",options:[{label:"Apartment",value:"apartment"},{label:"House",value:"house"},{label:"Studio",value:"studio"}]},{name:"beds",label:"Beds",options:[{label:"1 Bed",value:"1"},{label:"2 Beds",value:"2"},{label:"3 Beds",value:"3"}]},{name:"baths",label:"Baths",options:[{label:"1 Bath",value:"1"},{label:"2 Baths",value:"2"},{label:"3 Baths",value:"3"}]},{name:"pets",label:"Pets",options:[{label:"Allowed",value:"allowed"},{label:"Not Allowed",value:"not_allowed"}]},{name:"deposit",label:"Deposit",options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}]}];var a=n(6854),i=n(2265),o=n(9343);let s=()=>{let{setFilters:e}=(0,a.k)(),{control:t,handleSubmit:n,reset:l,watch:r}=(0,o.cI)({defaultValues:{propertyType:"",beds:"",baths:"",livingRooms:"",pets:"",deposit:"",rent:"300 - 4000"}}),[s,d]=(0,i.useState)(null);return{control:t,handleSubmit:n,resetValues:()=>{l(),e({rent:[0,9999999]})},onSubmit:t=>{let n={rent:t.rent?t.rent.split("-").map(Number):[0,9999999],roomsBed:t.beds?t.beds.split("-").map(Number):[0,99],roomsBath:t.baths?t.baths.split("-").map(Number):[0,99]};e(e=>({...e,...n}))},watchedRent:r("rent")?r("rent").split("-").map(Number):[300,1e3],anchorEl:s,open:!!s,handleOpenSlider:e=>{d(e.currentTarget)},handleCloseSlider:()=>{d(null)}}};var d=n(1193),c=n(3086),p=n(5174),u=n(6548),h=n(4165),x=n(8449),m=n(5870),f=n(511);let g=e=>{let{name:t,label:n,control:r,options:a}=e;return(0,l.jsx)(h.Z,{variant:"standard",sx:{minWidth:120},children:(0,l.jsx)(o.Qr,{name:t,control:r,render:e=>{let{field:t}=e;return(0,l.jsxs)(x.Z,{...t,displayEmpty:!0,variant:"outlined",size:"small",sx:{fontSize:"12px"},children:[(0,l.jsx)(m.Z,{value:"",children:(0,l.jsx)(f.Z,{sx:{fontSize:"12px"},children:n})}),a.map(e=>(0,l.jsx)(m.Z,{value:e.value,sx:{fontSize:"12px"},children:e.label},e.value))]})}})})};var v=n(8024),y=n(335);let b=(0,v.ZP)(d.Z)({display:"flex",alignItems:"center",height:"82px",justifyContent:"space-around",borderBottom:"1px solid #e0e0e0",overflow:"scroll",gap:"10px"}),j=(0,v.ZP)(y.Z)({border:"1px solid #ccc",borderRadius:"4px",padding:"8px",minWidth:"120px",fontSize:"12px",textAlign:"center",height:"100%"}),w=(0,v.ZP)(d.Z)({marginTop:"20px",paddingTop:"10px",paddingBottom:"5px",paddingInline:"30px"}),Z=()=>{let{control:e,handleSubmit:t,resetValues:n,onSubmit:a,watchedRent:i,anchorEl:h,open:x,handleOpenSlider:m,handleCloseSlider:f}=s();return(0,l.jsx)("form",{onSubmit:t(a),children:(0,l.jsxs)(b,{children:[r.map(t=>(0,l.jsx)(g,{name:t.name,label:t.label,control:e,options:t.options},t.name)),(0,l.jsx)(o.Qr,{name:"rent",control:e,render:e=>{let{field:t}=e;return(0,l.jsxs)(d.Z,{children:[(0,l.jsx)(j,{onClick:m,children:"".concat(i[0]," - ").concat(i[1]," €")}),(0,l.jsx)(c.ZP,{open:x,anchorEl:h,onClose:f,anchorOrigin:{vertical:"bottom",horizontal:"left"},sx:{transform:"translateX(-40px)"},children:(0,l.jsx)(w,{children:(0,l.jsx)(p.ZP,{size:"small",value:i,onChange:(e,n)=>{let[l,r]=n;t.onChange("".concat(l,"-").concat(r))},valueLabelDisplay:"on",min:300,max:1e4,step:100,sx:{width:150}})})})]})}}),(0,l.jsx)(u.Z,{type:"submit",variant:"contained",color:"primary",children:"Apply"}),(0,l.jsx)(u.Z,{onClick:n,variant:"outlined",color:"secondary",children:"Reset"})]})})},S=()=>{let{activateDrawMode:e,setActivateDrawMode:t}=(0,a.k)();return[{id:"poi",title:"Point of Interest",iconPath:"/points_of_interest.svg",position:{top:20},onClick:()=>{}},{id:"layers",title:"Layers",iconPath:"/layer.svg",position:{top:70},onClick:()=>{}},{id:"draw",title:"Draw",iconPath:"/draw.svg",position:{top:120},onClick:()=>{t(!e)}},{id:"streetview",title:"Streetview",iconPath:"/streetview.svg",position:{bottom:20},onClick:()=>{}},{id:"routePlanner",title:"Route Planner",iconPath:"/route_planner.svg",position:{bottom:20,left:150},onClick:()=>{}}]};var C=n(7380),T=n.n(C),k=n(214),P=n(7719),z=n.n(P);n(7530);let E=()=>{let e=(0,i.useRef)(null),t=(0,i.useRef)([]),[n,l]=(0,i.useState)(null),[r,a]=(0,i.useState)([]),o=(0,i.useRef)(null);(0,i.useEffect)(()=>{z().accessToken="pk.eyJ1IjoibHlzdGlvIiwiYSI6ImNtMjA3cmFoejBnMngycXM4anNuNXFmaTQifQ.y-WiEerYZrFOm8Xd8a7GwQ";let t=new(z()).Map({container:e.current,style:"mapbox://styles/lystio/cm1erwga302jt01pjh0nxh47n",center:[16.3355,48.2092],zoom:12,pitch:60,bearing:20});t.dragRotate.enable(),t.touchZoomRotate.enableRotation(),t.on("style.load",()=>{l(t),d(t)});let n=new(T())({displayControlsDefault:!1,controls:{trash:!0},defaultMode:"simple_select"});return o.current=n,t.addControl(n),t.on("draw.create",s),t.on("draw.delete",s),t.on("draw.update",s),()=>{t.remove()}},[]);let s=e=>{if(!o.current)return;let t=o.current.getAll();if(t&&t.features.length>0){var n;for(let e of t.features)(0,k.Z)(e);let e=(null===(n=t.features[0])||void 0===n?void 0:n.geometry).coordinates[0];e&&a(e)}else a([])},d=e=>{e.addSource("eraser",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({id:"eraser-fill",type:"fill",source:"eraser",paint:{"fill-color":"#088","fill-opacity":.5}})},c=()=>{n&&(t.current.forEach(e=>{n.getLayer(e)&&n.removeLayer(e),n.getSource(e)&&n.removeSource(e)}),t.current=[])},p=e=>{let t=document.createElement("canvas");t.width=80,t.height=40;let n=t.getContext("2d");return n&&(n.fillStyle="rgba(255, 255, 255, 0.9)",n.beginPath(),n.moveTo(10,0),n.lineTo(70,0),n.quadraticCurveTo(80,0,80,10),n.lineTo(80,20),n.quadraticCurveTo(80,30,70,30),n.lineTo(10,30),n.quadraticCurveTo(0,30,0,20),n.lineTo(0,10),n.quadraticCurveTo(0,0,10,0),n.fill(),n.beginPath(),n.moveTo(35,30),n.lineTo(45,30),n.lineTo(40,40),n.closePath(),n.fill(),n.fillStyle="black",n.font="bold 16px Arial",n.textAlign="center",n.textBaseline="middle",n.fillText(e,40,15)),t.toDataURL()},u=(e,t)=>{var n;let l="string"==typeof e.media?JSON.parse(e.media):e.media,r=l&&l.length>0&&(null===(n=l[0])||void 0===n?void 0:n.cdnUrl)?l[0].cdnUrl:"/no_image_image.png";return new(z()).Popup({offset:35}).setLngLat(t).setHTML('\n        <div style="padding: 10px; background: white">\n          <div>\n            <img src="'.concat(r,'" style="width: 100%; height: auto; border-radius: 8px;" />\n          </div>\n          <div style="display: flex; flex-direction: column; gap: 16px;">\n            <h3 style="margin: 10px 0 5px; font-size: 18px;">€ ').concat(e.rent,'</h3>\n            <p style="margin: 0; font-size: 14px; color: grey;">').concat(e.address,", ").concat(e.city,'</p>\n            <div style="display: flex; justify-content: space-between; font-size: 14px; color: grey;">\n              <div style="display: flex; gap: 5px; flex: 1">\n                <img src="/cube.svg" />\n                <span>').concat(e.size,' m\xb2</span>\n              </div>\n              <div style="display: flex; gap: 5px; flex: 1">\n                <img src="/bed.svg" />\n                <span>').concat(e.roomsBed,' beds</span>\n              </div>\n              <div style="display: flex; gap: 5px; flex: 1">\n                <img src="/bath.svg" />\n                <span>').concat(e.roomsBath," bath</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      "))};return{mapContainerRef:e,map:n,coordinates:r,addMarkers:e=>{if(!n)return;c();let l=new(z()).LngLatBounds;e.forEach(e=>{var r;let a=null!==(r=e.location)&&void 0!==r?r:e.locationReal;if(!a||a.length<2||!a[0]||!a[1]){console.warn("Invalid coordinates for tenement ".concat(e.id));return}l.extend(a);let i=p("€ ".concat(e.rent)),o="custom-marker-".concat(e.id),s="marker-source-".concat(e.id),d="marker-".concat(e.id);n.hasImage(o)||n.loadImage(i,(e,t)=>{if(e){console.error("Error loading image for marker:",e);return}n.addImage(o,t)}),n.getSource(s)&&n.removeSource(s),n.addSource(s,{type:"geojson",data:{type:"Feature",geometry:{type:"Point",coordinates:a},properties:{...e}}}),n.getLayer(d)&&n.removeLayer(d),n.addLayer({id:d,type:"symbol",source:s,layout:{"icon-image":o,"icon-size":1,"icon-allow-overlap":!0}}),t.current.push(d);let c=null;n.on("mouseenter",d,()=>{c&&c.remove();let t=u(e,a);t.addTo(n),c=t}),n.on("mouseleave",d,()=>{c&&(c.remove(),c=null)})}),l.isEmpty()||r.length||n.fitBounds(l,{zoom:13,pitch:80,bearing:20})},handleActivateDrawMode:()=>{o.current&&n&&o.current.changeMode("draw_polygon")},handleCancelDrawMode:()=>{o.current&&n&&(o.current.changeMode("simple_select"),a([]))}}};var B=n(5871),R=n(1790);let I=()=>{let{tenements:e,markers:t,activateDrawMode:n,setFilters:l,setMarkers:r}=(0,a.k)(),{mapContainerRef:o,map:s,coordinates:d,addMarkers:c,handleActivateDrawMode:p,handleCancelDrawMode:u}=E(),h=S(),[x,m]=(0,i.useState)([]),f=()=>{if(!s||d.length)return;let t=s.getBounds();m(e.filter(e=>{var n;let[l,r]=null!==(n=e.location)&&void 0!==n?n:e.locationReal;return null==t?void 0:t.contains([l,r])}))},g=(e,t)=>{let n=(0,B.yu)([t]);return e.filter(e=>{var t;let l=null!==(t=e.location)&&void 0!==t?t:e.locationReal;if(l&&2===l.length){let e=B.xm(l);return(0,R.F)(e,n)}return!1})};return(0,i.useEffect)(()=>{n?p():u()},[n]),(0,i.useEffect)(()=>{if(d.length){l(e=>({...e,location:d})),m(g(e,d));return}l({rent:[0,9999999]})},[d]),(0,i.useEffect)(()=>{s&&t.length>0&&c(t)},[s,t]),(0,i.useEffect)(()=>{if(s&&e&&t)return s.on("moveend",f),()=>{s.off("moveend",f)}},[s,e,t]),{mapContainerRef:o,ICONS:h,visibleTenements:x,map:s}};n(9508);var L=n(6648);let _=(0,v.ZP)(d.Z)({background:"white",zIndex:10,position:"absolute",left:20,borderRadius:"50%",paddingBlock:"10px",paddingInline:"12px",display:"flex",alignItems:"center",fontSize:"12px",cursor:"pointer",transition:"border-radius 0.3s ease, gap 0.3s ease","&:hover":{borderRadius:"8px",gap:"5px",".hover-text":{maxWidth:"150px",visibility:"visible",transition:"max-width 0.3s ease"}}}),M=(0,v.ZP)(f.Z)({maxWidth:0,visibility:"hidden",overflow:"hidden",whiteSpace:"nowrap",transition:"max-width 0.5s ease"}),N=e=>{let{title:t,iconPath:n,iconAlt:r,position:a,onClick:i}=e;return(0,l.jsxs)(_,{sx:{...a},onClick:i,children:[(0,l.jsx)(L.default,{src:n,alt:r,width:16,height:16}),(0,l.jsx)(M,{className:"hover-text",children:t})]})};var A=n(8071),D=n.n(A);let F=e=>{let t=D()(e),n=D()().diff(t,"day");return"".concat(n," ").concat(1===n?"day":"days"," ago")};var W=n(3153);n(3348),n(7003),n(6601);let q=(0,v.ZP)(d.Z)({maxWidth:"380px",width:"100%",height:"280px",position:"relative",overflow:"hidden",transition:"all 0.3s",":hover":{transform:"scale(0.9)"}}),O=(0,v.ZP)(d.Z)({position:"relative",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",overflow:"hidden"}),Y=e=>{let{media:t}=e,[n,r]=(0,i.useState)([]);return(0,i.useEffect)(()=>{r((null==t?void 0:t.map(e=>e.cdnUrl||""))||["/no_image_image.png"])},[t]),(0,l.jsx)(q,{children:(0,l.jsx)(W.Z,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,children:null==n?void 0:n.map((e,t)=>(0,l.jsx)(O,{className:"slideWrapper",children:(0,l.jsx)("img",{src:e,alt:"image-".concat(t),style:{objectFit:"cover",width:"100%",height:"280px",borderRadius:"8px",aspectRatio:"auto"}})},t))})})};var X=n(8718),H=n(3351);let Q=(0,X.Z)(H.Z)({width:"100%",maxWidth:"380px",display:"flex",flexDirection:"column",gap:"16px"}),U=(0,X.Z)(H.Z)({padding:"8px",display:"flex",flexDirection:"column",gap:"16px",overflow:"hidden"}),G=(0,X.Z)(H.Z)({display:"flex",justifyContent:"space-between",fontSize:"12px"}),V=(0,X.Z)(H.Z)({display:"flex",gap:"5px",alignItems:"center",color:"#5A0CFF",fontWeight:"500"});(0,X.Z)(H.Z)({display:"block",height:"17px"});let J=(0,X.Z)(f.Z)({fontSize:"12px",color:"#636363"}),K=(0,X.Z)(f.Z)({fontSize:"15px",textOverflow:"ellipsis",whiteSpace:"nowrap",resize:"horizontal",overflow:"hidden",maxWidth:"380px",fontWeight:"600"}),$=(0,X.Z)(H.Z)({display:"flex",justifyContent:"space-between",fontSize:"12px"}),ee=(0,X.Z)(H.Z)({display:"flex",alignItems:"center",gap:"5px"}),et=e=>{let{tenement:t,index:n}=e,r=0===n||(null==t?void 0:t.verified),a=F(t.createdAt);return(0,l.jsxs)(Q,{children:[(0,l.jsx)(d.Z,{children:(0,l.jsx)(Y,{media:t.media})}),(0,l.jsxs)(U,{children:[(0,l.jsxs)(G,{children:[r?(0,l.jsxs)(V,{children:[(0,l.jsx)(L.default,{src:"/verified.svg",alt:"verified-icon",width:15,height:15}),"Verified"]}):(0,l.jsx)(f.Z,{children:" "}),(0,l.jsx)(J,{children:a})]}),(0,l.jsx)(K,{children:t.abstract}),(0,l.jsx)(J,{fontWeight:500,children:t.address}),(0,l.jsxs)($,{children:[(0,l.jsxs)(ee,{children:[(0,l.jsx)(L.default,{src:"/gray_cube.svg",height:16,width:16,alt:"square-icon"}),(0,l.jsxs)(J,{children:[t.size," m\xb2"]})]}),(0,l.jsxs)(ee,{children:[(0,l.jsx)(L.default,{src:"/gray_bed.svg",height:16,width:16,alt:"square-icon"}),(0,l.jsx)(J,{children:t.roomsBed})]}),(0,l.jsxs)(ee,{children:[(0,l.jsx)(L.default,{src:"/gray_bath.svg",height:16,width:16,alt:"square-icon"}),(0,l.jsx)(J,{children:t.roomsBath})]})]}),(0,l.jsxs)(K,{children:[t.rentFull||t.rent," €"]}),(0,l.jsxs)(ee,{fontSize:"12px",children:[(0,l.jsx)(J,{children:"Available from:"}),t.availableFrom?D()(t.availableFrom).format("DD-MM-YYYY"):"Immediately"]})]})]})},en=(0,v.ZP)(d.Z)({width:"50%",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"32px",maxHeight:"calc(100dvh - 84px)",height:"100%",overflowY:"scroll"}),el=e=>{let{tenements:t}=e;return(0,l.jsx)(en,{children:t&&t.map((e,t)=>(0,l.jsx)(et,{tenement:e,index:t},e.id))})},er=(0,v.ZP)(d.Z)({display:"flex",flexDirection:"column",gap:"20px",maxHeight:"100dvh",paddingInline:"20px",overflow:"hidden"}),ea=(0,v.ZP)(d.Z)({display:"flex",gap:"40px",width:"100%",flexGrow:1,height:"calc(100dvh - 84px)",overflow:"hidden"}),ei=(0,v.ZP)(d.Z)({width:"50%",height:"100%",alignSelf:"flex-end","& .mapboxgl-popup-content":{width:"340px"},"& .mapboxgl-popup-close-button":{width:"25px",height:"25px"}}),eo=()=>{let{mapContainerRef:e,ICONS:t,visibleTenements:n,map:r}=I();return(0,l.jsxs)(er,{children:[(0,l.jsx)(Z,{}),(0,l.jsxs)(ea,{children:[(0,l.jsx)(ei,{id:"map-container",ref:e,children:r&&t.map(e=>(0,l.jsx)(N,{title:e.title,iconPath:e.iconPath,iconAlt:e.title,position:e.position,onClick:e.onClick},e.id))}),(0,l.jsx)(el,{tenements:n})]})]})};function es(){return(0,l.jsx)(eo,{})}},6854:(e,t,n)=>{"use strict";n.d(t,{Iu:()=>c,k:()=>p});var l=n(7437),r=n(6007),a=n(6203);let i=()=>{let{mutate:e}=(0,r.D)({mutationFn:a.X.tenement.getMapMarkers});return{getMapMarkersMutate:e}},o=()=>{let{mutate:e}=(0,r.D)({mutationFn:a.X.tenement.getTenementsList});return{getTenementsListMutate:e}};var s=n(2265);let d=(0,s.createContext)(void 0),c=e=>{let{children:t}=e,{getTenementsListMutate:n}=o(),{getMapMarkersMutate:r}=i(),[a,c]=(0,s.useState)({rent:[0,9999999]}),[p,u]=(0,s.useState)([]),[h,x]=(0,s.useState)([]),[m,f]=(0,s.useState)(!1),g=()=>{let e={filter:a};n(e,{onSuccess:e=>{u(e.data.res)},onError:e=>{console.error("Error fetching tenements:",e)}}),r(e,{onSuccess:e=>{x(e.data.res.filter(e=>{var t;let n=null!==(t=e.location)&&void 0!==t?t:e.locationReal;return n&&2===n.length&&void 0!==n[0]&&void 0!==n[1]}))},onError:e=>{console.error("Error fetching map markers:",e)}})};return(0,s.useEffect)(()=>{g()},[a]),(0,l.jsx)(d.Provider,{value:{filters:a,tenements:p,markers:h,activateDrawMode:m,setActivateDrawMode:f,fetchTenements:g,setFilters:c,setMarkers:x},children:t})},p=()=>{let e=(0,s.useContext)(d);if(!e)throw Error("useTenementsContext must be used within a TenementsProvider");return e}},6601:()=>{},7530:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[798,415,991,552,130,215,744],()=>t(5516)),_N_E=e.O()}]);