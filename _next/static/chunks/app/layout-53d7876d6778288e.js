(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8818:(t,e,s)=>{Promise.resolve().then(s.bind(s,3945))},6203:(t,e,s)=>{"use strict";s.d(e,{X:()=>u});var i=s(7135);let r=s(8472).Z.create({baseURL:"https://api.lystio.co/",headers:{"Content-Type":"application/json"}});async function a(t){return r.request({...t})}function n(t,e){return a({url:t,method:"POST",...e})}let u={tenement:{getTenementsList:t=>n(i.g.tenement.getTenementsList(),{data:t}),getMapMarkers:t=>n(i.g.tenement.getTenementsList(),{data:t})}}},7135:(t,e,s)=>{"use strict";s.d(e,{g:()=>i});let i={tenement:{getTenementsList:()=>"/tenement/search",getMapMarkers:()=>"/tenement/search/map"}}},3945:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>S});var i=s(7437),r=s(350),a=s.n(r);s(6203);var n=s(6298),u=s(9948),o=s(9842),h=s(3494),l=class extends h.F{#t;#e;#s;#i;#r;#a;constructor(t){super(),this.#a=!1,this.#r=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#s=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#t=function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,i=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=t.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(t){this.options={...this.#r,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#s.remove(this)}setData(t,e){let s=(0,n.oE)(this.state.data,t,this.options);return this.#n({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#n({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#i?.promise;return this.#i?.cancel(t),e?e.then(n.ZT).catch(n.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.observers.some(t=>!1!==(0,n.Nc)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===n.CN||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,n.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#i&&(this.#a?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#s.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#n({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,i=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#a=!0,s.signal)})},r={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let t=(0,n.cG)(this.options,e),s={queryKey:this.queryKey,meta:this.meta};return(i(s),this.#a=!1,this.options.persister)?this.options.persister(t,s,this):t(s)}};i(r),this.options.behavior?.onFetch(r,this),this.#e=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==r.fetchOptions?.meta)&&this.#n({type:"fetch",meta:r.fetchOptions?.meta});let a=t=>{(0,o.DV)(t)&&t.silent||this.#n({type:"error",error:t}),(0,o.DV)(t)||(this.#s.config.onError?.(t,this),this.#s.config.onSettled?.(this.state.data,t,this)),this.scheduleGc()};return this.#i=(0,o.Mz)({initialPromise:e?.initialPromise,fn:r.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){a(Error(`${this.queryHash} data is undefined`));return}try{this.setData(t)}catch(t){a(t);return}this.#s.config.onSuccess?.(t,this),this.#s.config.onSettled?.(t,this.state.error,this),this.scheduleGc()},onError:a,onFail:(t,e)=>{this.#n({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#n({type:"pause"})},onContinue:()=>{this.#n({type:"continue"})},retry:r.options.retry,retryDelay:r.options.retryDelay,networkMode:r.options.networkMode,canRun:()=>!0}),this.#i.start()}#n(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":var s,i;return{...e,...(s=e.data,i=this.options,{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,o.Kw)(i.networkMode)?"fetching":"paused",...void 0===s&&{error:null,status:"pending"}}),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=t.error;if((0,o.DV)(r)&&r.revert&&this.#e)return{...this.#e,fetchStatus:"idle"};return{...e,error:r,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),u.V.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#s.notify({query:this,type:"updated",action:t})})}},c=s(9010),d=class extends c.l{constructor(t={}){super(),this.config=t,this.#u=new Map}#u;build(t,e,s){let i=e.queryKey,r=e.queryHash??(0,n.Rm)(i,e),a=this.get(r);return a||(a=new l({cache:this,queryKey:i,queryHash:r,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(a)),a}add(t){this.#u.has(t.queryHash)||(this.#u.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#u.get(t.queryHash);e&&(t.destroy(),e===t&&this.#u.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){u.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#u.get(t)}getAll(){return[...this.#u.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,n._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,n._x)(t,e)):e}notify(t){u.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){u.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){u.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},f=s(2812),p=class extends c.l{constructor(t={}){super(),this.config=t,this.#o=new Map,this.#h=Date.now()}#o;#h;build(t,e,s){let i=new f.m({mutationCache:this,mutationId:++this.#h,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){let e=y(t),s=this.#o.get(e)??[];s.push(t),this.#o.set(e,s),this.notify({type:"added",mutation:t})}remove(t){let e=y(t);if(this.#o.has(e)){let s=this.#o.get(e)?.filter(e=>e!==t);s&&(0===s.length?this.#o.delete(e):this.#o.set(e,s))}this.notify({type:"removed",mutation:t})}canRun(t){let e=this.#o.get(y(t))?.find(t=>"pending"===t.state.status);return!e||e===t}runNext(t){let e=this.#o.get(y(t))?.find(e=>e!==t&&e.state.isPaused);return e?.continue()??Promise.resolve()}clear(){u.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...this.#o.values()].flat()}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,n.X7)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,n.X7)(t,e))}notify(t){u.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return u.V.batch(()=>Promise.all(t.map(t=>t.continue().catch(n.ZT))))}};function y(t){return t.options.scope?.id??String(t.mutationId)}var m=s(4939),g=s(9937);function v(t){return{onFetch:(e,s)=>{let i=e.options,r=e.fetchOptions?.meta?.fetchMore?.direction,a=e.state.data?.pages||[],u=e.state.data?.pageParams||[],o={pages:[],pageParams:[]},h=0,l=async()=>{let s=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?s=!0:e.signal.addEventListener("abort",()=>{s=!0}),e.signal)})},c=(0,n.cG)(e.options,e.fetchOptions),d=async(t,i,r)=>{if(s)return Promise.reject();if(null==i&&t.pages.length)return Promise.resolve(t);let a={queryKey:e.queryKey,pageParam:i,direction:r?"backward":"forward",meta:e.options.meta};l(a);let u=await c(a),{maxPages:o}=e.options,h=r?n.Ht:n.VX;return{pages:h(t.pages,u,o),pageParams:h(t.pageParams,i,o)}};if(r&&a.length){let t="backward"===r,e={pages:a,pageParams:u},s=(t?function(t,{pages:e,pageParams:s}){return e.length>0?t.getPreviousPageParam?.(e[0],e,s[0],s):void 0}:b)(i,e);o=await d(e,s,t)}else{let e=t??a.length;do{let t=0===h?u[0]??i.initialPageParam:b(i,o);if(h>0&&null==t)break;o=await d(o,t),h++}while(h<e)}return o};e.options.persister?e.fetchFn=()=>e.options.persister?.(l,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=l}}}function b(t,{pages:e,pageParams:s}){let i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}let C=new class{#l;#c;#r;#d;#f;#p;#y;#m;constructor(t={}){this.#l=t.queryCache||new d,this.#c=t.mutationCache||new p,this.#r=t.defaultOptions||{},this.#d=new Map,this.#f=new Map,this.#p=0}mount(){this.#p++,1===this.#p&&(this.#y=m.j.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#l.onFocus())}),this.#m=g.N.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#l.onOnline())}))}unmount(){this.#p--,0===this.#p&&(this.#y?.(),this.#y=void 0,this.#m?.(),this.#m=void 0)}isFetching(t){return this.#l.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#c.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#l.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let s=this.defaultQueryOptions(t),i=this.#l.build(this,s);return t.revalidateIfStale&&i.isStaleByTime((0,n.KC)(s.staleTime,i))&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return this.#l.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let i=this.defaultQueryOptions({queryKey:t}),r=this.#l.get(i.queryHash),a=r?.state.data,u=(0,n.SE)(e,a);if(void 0!==u)return this.#l.build(this,i).setData(u,{...s,manual:!0})}setQueriesData(t,e,s){return u.V.batch(()=>this.#l.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#l.get(e.queryHash)?.state}removeQueries(t){let e=this.#l;u.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#l,i={type:"active",...t};return u.V.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e};return Promise.all(u.V.batch(()=>this.#l.findAll(t).map(t=>t.cancel(s)))).then(n.ZT).catch(n.ZT)}invalidateQueries(t={},e={}){return u.V.batch(()=>{if(this.#l.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(u.V.batch(()=>this.#l.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(n.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(n.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#l.build(this,e);return s.isStaleByTime((0,n.KC)(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(n.ZT).catch(n.ZT)}fetchInfiniteQuery(t){return t.behavior=v(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(n.ZT).catch(n.ZT)}ensureInfiniteQueryData(t){return t.behavior=v(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return g.N.isOnline()?this.#c.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#l}getMutationCache(){return this.#c}getDefaultOptions(){return this.#r}setDefaultOptions(t){this.#r=t}setQueryDefaults(t,e){this.#d.set((0,n.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#d.values()],s={};return e.forEach(e=>{(0,n.to)(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#f.set((0,n.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#f.values()],s={};return e.forEach(e=>{(0,n.to)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#r.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,n.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===n.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#r.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#l.clear(),this.#c.clear()}}({defaultOptions:{queries:{retry:!1,refetchOnWindowFocus:!1}},mutationCache:new p({}),queryCache:new d({})});s(7135);var q=s(6854),O=s(3191);function S(t){let{children:e}=t;return(0,i.jsxs)("html",{lang:"en",className:a().className,children:[(0,i.jsxs)("head",{children:[(0,i.jsx)("link",{href:"https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css",rel:"stylesheet"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.3.0/mapbox-gl-draw.css",type:"text/css"}),(0,i.jsx)("link",{rel:"stylesheet",href:"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css",type:"text/css"})]}),(0,i.jsx)("body",{children:(0,i.jsx)(O.aH,{client:C,children:(0,i.jsx)(q.Iu,{children:e})})})]})}},6854:(t,e,s)=>{"use strict";s.d(e,{Iu:()=>l,k:()=>c});var i=s(7437),r=s(6007),a=s(6203);let n=()=>{let{mutate:t}=(0,r.D)({mutationFn:a.X.tenement.getMapMarkers});return{getMapMarkersMutate:t}},u=()=>{let{mutate:t}=(0,r.D)({mutationFn:a.X.tenement.getTenementsList});return{getTenementsListMutate:t}};var o=s(2265);let h=(0,o.createContext)(void 0),l=t=>{let{children:e}=t,{getTenementsListMutate:s}=u(),{getMapMarkersMutate:r}=n(),[a,l]=(0,o.useState)({rent:[0,9999999]}),[c,d]=(0,o.useState)([]),[f,p]=(0,o.useState)([]),[y,m]=(0,o.useState)(!1),g=()=>{let t={filter:a};s(t,{onSuccess:t=>{d(t.data.res)},onError:t=>{console.error("Error fetching tenements:",t)}}),r(t,{onSuccess:t=>{p(t.data.res.filter(t=>{var e;let s=null!==(e=t.location)&&void 0!==e?e:t.locationReal;return s&&2===s.length&&void 0!==s[0]&&void 0!==s[1]}))},onError:t=>{console.error("Error fetching map markers:",t)}})};return(0,o.useEffect)(()=>{g()},[a]),(0,i.jsx)(h.Provider,{value:{filters:a,tenements:c,markers:f,activateDrawMode:y,setActivateDrawMode:m,fetchTenements:g,setFilters:l,setMarkers:p},children:e})},c=()=>{let t=(0,o.useContext)(h);if(!t)throw Error("useTenementsContext must be used within a TenementsProvider");return t}},350:t=>{t.exports={style:{fontFamily:"'Alegreya Sans', 'Alegreya Sans Fallback'",fontStyle:"normal"},className:"__className_17c580"}}},t=>{var e=e=>t(t.s=e);t.O(0,[542,991,130,215,744],()=>e(8818)),_N_E=t.O()}]);