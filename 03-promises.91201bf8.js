var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector("form"),u=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');let d;i.addEventListener("submit",(function(e){if(e.preventDefault(),d=Number(a.value),f=Number(l.value),d<=0||f<=0||Number(u.value)<0)return void r.Notify.failure("❌ All values must be positive");c(0,Number(u.value)),s=Date.now(),e.currentTarget.reset()}));let s,f=0;function c(e,t){if(d!==e){new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)})).then((({position:e,delay:t})=>{e+=1;let n=100*Math.round((Date.now()-s)/100);r.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`),c(e,f)})).catch((({position:e,delay:t})=>{e+=1;let n=100*Math.round((Date.now()-s)/100);r.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`),c(e,f)}))}}
//# sourceMappingURL=03-promises.91201bf8.js.map
