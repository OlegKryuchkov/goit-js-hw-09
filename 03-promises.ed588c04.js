!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r,i=o("h6c0i"),u=document.querySelector("form"),a=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]');u.addEventListener("submit",(function(e){if(e.preventDefault(),r=Number(c.value),f=Number(l.value),r<=0||f<=0||Number(a.value)<0)return void i.Notify.failure("❌ All values must be positive");s(0,Number(a.value)),d=Date.now(),e.currentTarget.reset()}));var d,f=0;function s(e,n){r!==e&&new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)})).then((function(e){var n=e.position;e.delay;n+=1;var t=100*Math.round((Date.now()-d)/100);i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")),s(n,f)})).catch((function(e){var n=e.position;e.delay;n+=1;var t=100*Math.round((Date.now()-d)/100);i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms")),s(n,f)}))}}();
//# sourceMappingURL=03-promises.ed588c04.js.map
