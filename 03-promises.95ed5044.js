!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var u=o("iU1Pc"),r={inputEl:document.querySelector("input"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),btnCreatePromises:document.querySelector('button[type="submit"]')};function a(e,t){return new Promise((function(n,i){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}r.inputEl.setAttribute("min","0"),r.inputDelay.setAttribute("step","250"),r.inputStep.setAttribute("step","250"),r.btnCreatePromises.addEventListener("click",(function(t){t.preventDefault();for(var n=Number(r.inputDelay.value),i=Number(r.inputStep.value),o=Number(r.inputAmount.value),l=0;l<o;l+=1)a(1+l,n+l*i).then((function(t){var n=t.position,i=t.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(i,"ms"))})).catch((function(t){var n=t.position,i=t.delay;e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(i,"ms"))}))}))}();
//# sourceMappingURL=03-promises.95ed5044.js.map
