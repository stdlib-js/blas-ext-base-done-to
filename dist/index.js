"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=n(function(h,s){
function T(e,r,i,y){var t,a;if(e<=0)return r;for(t=y,a=1;a<=e;a++)r[t]=a,t+=i;return r}s.exports=T
});var q=n(function(k,v){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=o();function x(e,r,i){return m(e,r,i,j(e,i))}v.exports=x
});var c=n(function(w,f){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),R=o();l(d,"ndarray",R);f.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=c(),u,p=E(_(__dirname,"./native.js"));O(p)?u=b:u=p;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
