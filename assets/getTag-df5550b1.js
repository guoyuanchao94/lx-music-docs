import{q as c,r as i,s as O,t as P,M as j,u as n,b as C,v as u}from"./merge-0e25b881.js";var $=c(i,"WeakMap");const g=$;var d=O(Object.keys,Object);const k=d;var l=Object.prototype,V=l.hasOwnProperty;function B(t){if(!P(t))return k(t);var a=[];for(var e in Object(t))V.call(t,e)&&e!="constructor"&&a.push(e);return a}var D="Expected a function";function M(t,a){if(typeof t!="function"||a!=null&&typeof a!="function")throw new TypeError(D);var e=function(){var o=arguments,p=a?a.apply(this,o):o[0],s=e.cache;if(s.has(p))return s.get(p);var m=t.apply(this,o);return e.cache=s.set(p,m)||s,m};return e.cache=new(M.Cache||j),e}M.Cache=j;var E=c(i,"DataView");const v=E;var W=c(i,"Promise");const f=W;var K=c(i,"Set");const w=K;var h="[object Map]",R="[object Object]",b="[object Promise]",y="[object Set]",S="[object WeakMap]",T="[object DataView]",x=n(v),z=n(u),A=n(f),N=n(w),_=n(g),r=C;(v&&r(new v(new ArrayBuffer(1)))!=T||u&&r(new u)!=h||f&&r(f.resolve())!=b||w&&r(new w)!=y||g&&r(new g)!=S)&&(r=function(t){var a=C(t),e=a==R?t.constructor:void 0,o=e?n(e):"";if(o)switch(o){case x:return T;case z:return h;case A:return b;case N:return y;case _:return S}return a});const F=r;export{w as S,B as b,F as g,M as m};