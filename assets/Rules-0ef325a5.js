import{ak as ie,al as A,am as be,an as se,ao as Me,R as x,ap as Oe,aq as q,ar as Te,as as Ce,at as V,r as L,O as B,au as we,F as ae,Z as ze,b as C,j as g,Y as xe,B as Ne,u as oe,d as Pe,g as Ee,C as ke}from"./index-15ea0185.js";import{R as le,T as We}from"./TextFitler-23d63b0c.js";import{f as Le}from"./index-84fa0cb3.js";import{F as Ae,p as De}from"./Fab-bff803a7.js";import{u as Fe}from"./useRemainingViewPortHeight-7e59250f.js";import"./rotate-cw-b68ebf00.js";import"./debounce-c1ba2006.js";function G(r,e){if(r==null)return{};var t={},i=Object.keys(r),n,s;for(s=0;s<i.length;s++)n=i[s],!(e.indexOf(n)>=0)&&(t[n]=r[n]);return t}var Ue=function(r){ie(e,r);function e(i,n){var s;return s=r.call(this)||this,s.client=i,s.setOptions(n),s.bindMethods(),s.updateResult(),s}var t=e.prototype;return t.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},t.setOptions=function(n){this.options=this.client.defaultMutationOptions(n)},t.onUnsubscribe=function(){if(!this.listeners.length){var n;(n=this.currentMutation)==null||n.removeObserver(this)}},t.onMutationUpdate=function(n){this.updateResult();var s={listeners:!0};n.type==="success"?s.onSuccess=!0:n.type==="error"&&(s.onError=!0),this.notify(s)},t.getCurrentResult=function(){return this.currentResult},t.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},t.mutate=function(n,s){return this.mutateOptions=s,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,A({},this.options,{variables:typeof n<"u"?n:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},t.updateResult=function(){var n=this.currentMutation?this.currentMutation.state:be(),s=A({},n,{isLoading:n.status==="loading",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=s},t.notify=function(n){var s=this;se.batch(function(){s.mutateOptions&&(n.onSuccess?(s.mutateOptions.onSuccess==null||s.mutateOptions.onSuccess(s.currentResult.data,s.currentResult.variables,s.currentResult.context),s.mutateOptions.onSettled==null||s.mutateOptions.onSettled(s.currentResult.data,null,s.currentResult.variables,s.currentResult.context)):n.onError&&(s.mutateOptions.onError==null||s.mutateOptions.onError(s.currentResult.error,s.currentResult.variables,s.currentResult.context),s.mutateOptions.onSettled==null||s.mutateOptions.onSettled(void 0,s.currentResult.error,s.currentResult.variables,s.currentResult.context))),n.listeners&&s.listeners.forEach(function(o){o(s.currentResult)})})},e}(Me);function ue(r,e,t){var i=x.useRef(!1),n=x.useState(0),s=n[1],o=Oe(r,e,t),d=q(),c=x.useRef();c.current?c.current.setOptions(o):c.current=new Ue(d,o);var v=c.current.getCurrentResult();x.useEffect(function(){i.current=!0;var M=c.current.subscribe(se.batchCalls(function(){i.current&&s(function(_){return _+1})}));return function(){i.current=!1,M()}},[]);var y=x.useCallback(function(M,_){c.current.mutate(M,_).catch(Te)},[]);if(v.error&&Ce(void 0,c.current.options.useErrorBoundary,[v.error]))throw v.error;return A({},v,{mutate:y,mutateAsync:v.mutate})}var Z=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function $e(r,e){return!!(r===e||Z(r)&&Z(e))}function qe(r,e){if(r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(!$e(r[t],e[t]))return!1;return!0}function F(r,e){e===void 0&&(e=qe);var t,i=[],n,s=!1;function o(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return s&&t===this&&e(d,i)||(n=r.apply(this,d),s=!0,t=this,i=d),n}return o}var Be=typeof performance=="object"&&typeof performance.now=="function",J=Be?function(){return performance.now()}:function(){return Date.now()};function Y(r){cancelAnimationFrame(r.id)}function He(r,e){var t=J();function i(){J()-t>=e?r.call(null):n.id=requestAnimationFrame(i)}var n={id:requestAnimationFrame(i)};return n}var U=-1;function X(r){if(r===void 0&&(r=!1),U===-1||r){var e=document.createElement("div"),t=e.style;t.width="50px",t.height="50px",t.overflow="scroll",document.body.appendChild(e),U=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return U}var w=null;function ee(r){if(r===void 0&&(r=!1),w===null||r){var e=document.createElement("div"),t=e.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";var i=document.createElement("div"),n=i.style;return n.width="100px",n.height="100px",e.appendChild(i),document.body.appendChild(e),e.scrollLeft>0?w="positive-descending":(e.scrollLeft=1,e.scrollLeft===0?w="negative":w="positive-ascending"),document.body.removeChild(e),w}return w}var je=150,Qe=function(e,t){return e};function Ke(r){var e,t=r.getItemOffset,i=r.getEstimatedTotalSize,n=r.getItemSize,s=r.getOffsetForIndexAndAlignment,o=r.getStartIndexForOffset,d=r.getStopIndexForStartIndex,c=r.initInstanceProps,v=r.shouldResetStyleCacheOnItemSizeChange,y=r.validateProps;return e=function(M){ie(_,M);function _(R){var a;return a=M.call(this,R)||this,a._instanceProps=c(a.props,V(a)),a._outerRef=void 0,a._resetIsScrollingTimeoutId=null,a.state={instance:V(a),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof a.props.initialScrollOffset=="number"?a.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},a._callOnItemsRendered=void 0,a._callOnItemsRendered=F(function(l,u,h,m){return a.props.onItemsRendered({overscanStartIndex:l,overscanStopIndex:u,visibleStartIndex:h,visibleStopIndex:m})}),a._callOnScroll=void 0,a._callOnScroll=F(function(l,u,h){return a.props.onScroll({scrollDirection:l,scrollOffset:u,scrollUpdateWasRequested:h})}),a._getItemStyle=void 0,a._getItemStyle=function(l){var u=a.props,h=u.direction,m=u.itemSize,I=u.layout,f=a._getItemStyleCache(v&&m,v&&I,v&&h),p;if(f.hasOwnProperty(l))p=f[l];else{var S=t(a.props,l,a._instanceProps),O=n(a.props,l,a._instanceProps),T=h==="horizontal"||I==="horizontal",k=h==="rtl",W=T?S:0;f[l]=p={position:"absolute",left:k?void 0:W,right:k?W:void 0,top:T?0:S,height:T?"100%":O,width:T?O:"100%"}}return p},a._getItemStyleCache=void 0,a._getItemStyleCache=F(function(l,u,h){return{}}),a._onScrollHorizontal=function(l){var u=l.currentTarget,h=u.clientWidth,m=u.scrollLeft,I=u.scrollWidth;a.setState(function(f){if(f.scrollOffset===m)return null;var p=a.props.direction,S=m;if(p==="rtl")switch(ee()){case"negative":S=-m;break;case"positive-descending":S=I-h-m;break}return S=Math.max(0,Math.min(S,I-h)),{isScrolling:!0,scrollDirection:f.scrollOffset<m?"forward":"backward",scrollOffset:S,scrollUpdateWasRequested:!1}},a._resetIsScrollingDebounced)},a._onScrollVertical=function(l){var u=l.currentTarget,h=u.clientHeight,m=u.scrollHeight,I=u.scrollTop;a.setState(function(f){if(f.scrollOffset===I)return null;var p=Math.max(0,Math.min(I,m-h));return{isScrolling:!0,scrollDirection:f.scrollOffset<p?"forward":"backward",scrollOffset:p,scrollUpdateWasRequested:!1}},a._resetIsScrollingDebounced)},a._outerRefSetter=function(l){var u=a.props.outerRef;a._outerRef=l,typeof u=="function"?u(l):u!=null&&typeof u=="object"&&u.hasOwnProperty("current")&&(u.current=l)},a._resetIsScrollingDebounced=function(){a._resetIsScrollingTimeoutId!==null&&Y(a._resetIsScrollingTimeoutId),a._resetIsScrollingTimeoutId=He(a._resetIsScrolling,je)},a._resetIsScrolling=function(){a._resetIsScrollingTimeoutId=null,a.setState({isScrolling:!1},function(){a._getItemStyleCache(-1,null)})},a}_.getDerivedStateFromProps=function(a,l){return Ve(a,l),y(a),null};var b=_.prototype;return b.scrollTo=function(a){a=Math.max(0,a),this.setState(function(l){return l.scrollOffset===a?null:{scrollDirection:l.scrollOffset<a?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},b.scrollToItem=function(a,l){l===void 0&&(l="auto");var u=this.props,h=u.itemCount,m=u.layout,I=this.state.scrollOffset;a=Math.max(0,Math.min(a,h-1));var f=0;if(this._outerRef){var p=this._outerRef;m==="vertical"?f=p.scrollWidth>p.clientWidth?X():0:f=p.scrollHeight>p.clientHeight?X():0}this.scrollTo(s(this.props,a,l,I,this._instanceProps,f))},b.componentDidMount=function(){var a=this.props,l=a.direction,u=a.initialScrollOffset,h=a.layout;if(typeof u=="number"&&this._outerRef!=null){var m=this._outerRef;l==="horizontal"||h==="horizontal"?m.scrollLeft=u:m.scrollTop=u}this._callPropsCallbacks()},b.componentDidUpdate=function(){var a=this.props,l=a.direction,u=a.layout,h=this.state,m=h.scrollOffset,I=h.scrollUpdateWasRequested;if(I&&this._outerRef!=null){var f=this._outerRef;if(l==="horizontal"||u==="horizontal")if(l==="rtl")switch(ee()){case"negative":f.scrollLeft=-m;break;case"positive-ascending":f.scrollLeft=m;break;default:var p=f.clientWidth,S=f.scrollWidth;f.scrollLeft=S-p-m;break}else f.scrollLeft=m;else f.scrollTop=m}this._callPropsCallbacks()},b.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&Y(this._resetIsScrollingTimeoutId)},b.render=function(){var a=this.props,l=a.children,u=a.className,h=a.direction,m=a.height,I=a.innerRef,f=a.innerElementType,p=a.innerTagName,S=a.itemCount,O=a.itemData,T=a.itemKey,k=T===void 0?Qe:T,W=a.layout,ve=a.outerElementType,pe=a.outerTagName,ge=a.style,Ie=a.useIsScrolling,Se=a.width,H=this.state.isScrolling,D=h==="horizontal"||W==="horizontal",ye=D?this._onScrollHorizontal:this._onScrollVertical,j=this._getRangeToRender(),_e=j[0],Re=j[1],Q=[];if(S>0)for(var P=_e;P<=Re;P++)Q.push(L.createElement(l,{data:O,key:k(P,O),index:P,isScrolling:Ie?H:void 0,style:this._getItemStyle(P)}));var K=i(this.props,this._instanceProps);return L.createElement(ve||pe||"div",{className:u,onScroll:ye,ref:this._outerRefSetter,style:A({position:"relative",height:m,width:Se,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:h},ge)},L.createElement(f||p||"div",{children:Q,ref:I,style:{height:D?"100%":K,pointerEvents:H?"none":void 0,width:D?K:"100%"}}))},b._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var a=this.props.itemCount;if(a>0){var l=this._getRangeToRender(),u=l[0],h=l[1],m=l[2],I=l[3];this._callOnItemsRendered(u,h,m,I)}}if(typeof this.props.onScroll=="function"){var f=this.state,p=f.scrollDirection,S=f.scrollOffset,O=f.scrollUpdateWasRequested;this._callOnScroll(p,S,O)}},b._getRangeToRender=function(){var a=this.props,l=a.itemCount,u=a.overscanCount,h=this.state,m=h.isScrolling,I=h.scrollDirection,f=h.scrollOffset;if(l===0)return[0,0,0,0];var p=o(this.props,f,this._instanceProps),S=d(this.props,p,f,this._instanceProps),O=!m||I==="backward"?Math.max(1,u):1,T=!m||I==="forward"?Math.max(1,u):1;return[Math.max(0,p-O),Math.max(0,Math.min(l-1,S+T)),p,S]},_}(L.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var Ve=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},Ge=50,N=function(e,t,i){var n=e,s=n.itemSize,o=i.itemMetadataMap,d=i.lastMeasuredIndex;if(t>d){var c=0;if(d>=0){var v=o[d];c=v.offset+v.size}for(var y=d+1;y<=t;y++){var M=s(y);o[y]={offset:c,size:M},c+=M}i.lastMeasuredIndex=t}return o[t]},Ze=function(e,t,i){var n=t.itemMetadataMap,s=t.lastMeasuredIndex,o=s>0?n[s].offset:0;return o>=i?ce(e,t,s,0,i):Je(e,t,Math.max(0,s),i)},ce=function(e,t,i,n,s){for(;n<=i;){var o=n+Math.floor((i-n)/2),d=N(e,o,t).offset;if(d===s)return o;d<s?n=o+1:d>s&&(i=o-1)}return n>0?n-1:0},Je=function(e,t,i,n){for(var s=e.itemCount,o=1;i<s&&N(e,i,t).offset<n;)i+=o,o*=2;return ce(e,t,Math.min(i,s-1),Math.floor(i/2),n)},te=function(e,t){var i=e.itemCount,n=t.itemMetadataMap,s=t.estimatedItemSize,o=t.lastMeasuredIndex,d=0;if(o>=i&&(o=i-1),o>=0){var c=n[o];d=c.offset+c.size}var v=i-o-1,y=v*s;return d+y},Ye=Ke({getItemOffset:function(e,t,i){return N(e,t,i).offset},getItemSize:function(e,t,i){return i.itemMetadataMap[t].size},getEstimatedTotalSize:te,getOffsetForIndexAndAlignment:function(e,t,i,n,s,o){var d=e.direction,c=e.height,v=e.layout,y=e.width,M=d==="horizontal"||v==="horizontal",_=M?y:c,b=N(e,t,s),R=te(e,s),a=Math.max(0,Math.min(R-_,b.offset)),l=Math.max(0,b.offset-_+b.size+o);switch(i==="smart"&&(n>=l-_&&n<=a+_?i="auto":i="center"),i){case"start":return a;case"end":return l;case"center":return Math.round(l+(a-l)/2);case"auto":default:return n>=l&&n<=a?n:n<l?l:a}},getStartIndexForOffset:function(e,t,i){return Ze(e,i,t)},getStopIndexForStartIndex:function(e,t,i,n){for(var s=e.direction,o=e.height,d=e.itemCount,c=e.layout,v=e.width,y=s==="horizontal"||c==="horizontal",M=y?v:o,_=N(e,t,n),b=i+M,R=_.offset+_.size,a=t;a<d-1&&R<b;)a++,R+=N(e,a,n).size;return a},initInstanceProps:function(e,t){var i=e,n=i.estimatedItemSize,s={itemMetadataMap:{},estimatedItemSize:n||Ge,lastMeasuredIndex:-1};return t.resetAfterIndex=function(o,d){d===void 0&&(d=!0),s.lastMeasuredIndex=Math.min(s.lastMeasuredIndex,o-1),t._getItemStyleCache(-1),d&&t.forceUpdate()},s},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}});function re(r,e){for(var t in r)if(!(t in e))return!0;for(var i in e)if(r[i]!==e[i])return!0;return!1}var Xe=["style"],et=["style"];function tt(r,e){var t=r.style,i=G(r,Xe),n=e.style,s=G(e,et);return!re(t,n)&&!re(i,s)}function rt(r){const e=r.providers,t=Object.keys(e),i={};for(let n=0;n<t.length;n++){const s=t[n];i[s]={...e[s],idx:n}}return{byName:i,names:t}}async function nt(r,e){const{url:t,init:i}=B(e);let n={providers:{}};try{const s=await fetch(t+r,i);s.ok&&(n=await s.json())}catch(s){console.log("failed to GET /providers/rules",s)}return rt(n)}async function de({name:r,apiConfig:e}){const{url:t,init:i}=B(e);try{return(await fetch(t+`/providers/rules/${r}`,{method:"PUT",...i})).ok}catch(n){return console.log("failed to PUT /providers/rules/:name",n),!1}}async function it({names:r,apiConfig:e}){for(let t=0;t<r.length;t++)await de({name:r[t],apiConfig:e})}var st=function(r,e,t,i,n,s,o,d){if(!r){var c;if(e===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var v=[t,i,n,s,o,d],y=0;c=new Error(e.replace(/%s/g,function(){return v[y++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},at=st;function ot(r){return at(r.rules&&r.rules.length>=0,"there is no valid rules list in the rules API response"),r.rules.map((e,t)=>({...e,id:t}))}async function lt(r,e){let t={rules:[]};try{const{url:i,init:n}=B(e),s=await fetch(i+r,n);s.ok&&(t=await s.json())}catch(i){console.log("failed to fetch rules",i)}return ot(t)}const fe=we({key:"ruleFilterText",default:""});function ut(r,e){const t=q(),{mutate:i,isLoading:n}=ue(de,{onSuccess:()=>{t.invalidateQueries("/providers/rules")}});return[o=>{o.preventDefault(),i({name:r,apiConfig:e})},n]}function ct(r){const e=q(),{data:t}=he(r),{mutate:i,isLoading:n}=ue(it,{onSuccess:()=>{e.invalidateQueries("/providers/rules")}});return[o=>{o.preventDefault(),i({names:t.names,apiConfig:r})},n]}function he(r){return ae(["/providers/rules",r],()=>nt("/providers/rules",r))}function dt(r){const{data:e,isFetching:t}=ae(["/rules",r],()=>lt("/rules",r)),{data:i}=he(r),[n]=ze(fe);if(n==="")return{rules:e,provider:i,isFetching:t};{const s=n.toLowerCase();return{rules:e.filter(o=>o.payload.toLowerCase().indexOf(s)>=0),isFetching:t,provider:{byName:i.byName,names:i.names.filter(o=>o.toLowerCase().indexOf(s)>=0)}}}}const ft="_RuleProviderItem_ly9yn_1",ht="_left_ly9yn_7",mt="_middle_ly9yn_14",vt="_gray_ly9yn_20",pt="_refreshButtonWrapper_ly9yn_24",z={RuleProviderItem:ft,left:ht,middle:mt,gray:vt,refreshButtonWrapper:pt};function gt({idx:r,name:e,vehicleType:t,behavior:i,updatedAt:n,ruleCount:s,apiConfig:o}){const[d,c]=ut(e,o),v=Le(new Date(n),new Date);return C("div",{className:z.RuleProviderItem,children:[g("span",{className:z.left,children:r}),C("div",{className:z.middle,children:[g(xe,{name:e,type:`${t} / ${i}`}),g("div",{className:z.gray,children:s<2?`${s} rule`:`${s} rules`}),C("small",{className:z.gray,children:["Updated ",v," ago"]})]}),g("span",{className:z.refreshButtonWrapper,children:g(Ne,{onClick:d,disabled:c,children:g(le,{isRotating:c})})})]})}function It({apiConfig:r}){const[e,t]=ct(r),{t:i}=oe();return g(Ae,{icon:g(le,{isRotating:t}),text:i("update_all_rule_provider"),style:De,onClick:e})}const St="_rule_1qdsh_4",yt="_left_1qdsh_15",_t="_a_1qdsh_22",Rt="_b_1qdsh_29",bt="_type_1qdsh_40",E={rule:St,left:yt,a:_t,b:Rt,type:bt},$={_default:"#59caf9",DIRECT:"#f5bc41",REJECT:"#cb3166"};function Mt({proxy:r}){let e=$._default;return $[r]&&(e=$[r]),{color:e}}function Ot({type:r,payload:e,proxy:t,id:i}){const n=Mt({proxy:t});return C("div",{className:E.rule,children:[g("div",{className:E.left,children:i}),C("div",{children:[g("div",{className:E.b,children:e}),C("div",{className:E.a,children:[g("div",{className:E.type,children:r}),g("div",{style:n,children:t})]})]})]})}const Tt="_header_hbvmd_4",Ct="_RuleProviderItemWrapper_hbvmd_20",me={header:Tt,RuleProviderItemWrapper:Ct},{memo:wt}=x,ne=30;function zt(r,{rules:e,provider:t}){const i=t.names.length;return r<i?t.names[r]:e[r-i].id}function xt({provider:r}){return function(t){const i=r.names.length;return t<i?90:60}}const Nt=wt(({index:r,style:e,data:t})=>{const{rules:i,provider:n,apiConfig:s}=t,o=n.names.length;if(r<o){const c=n.names[r],v=n.byName[c];return g("div",{style:e,className:me.RuleProviderItemWrapper,children:g(gt,{apiConfig:s,...v})})}const d=i[r-o];return g("div",{style:e,children:g(Ot,{...d})})},tt),Pt=r=>({apiConfig:Ee(r)}),$t=Pe(Pt)(Et);function Et({apiConfig:r}){const[e,t]=Fe(),{rules:i,provider:n}=dt(r),s=xt({provider:n}),{t:o}=oe();return C("div",{children:[C("div",{className:me.header,children:[g(ke,{title:o("Rules")}),g(We,{textAtom:fe,placeholder:o("Search")})]}),g("div",{ref:e,style:{paddingBottom:ne},children:g(Ye,{height:t-ne,width:"100%",itemCount:i.length+n.names.length,itemSize:s,itemData:{rules:i,provider:n,apiConfig:r},itemKey:zt,children:Nt})}),n&&n.names&&n.names.length>0?g(It,{apiConfig:r}):null]})}export{$t as default};
