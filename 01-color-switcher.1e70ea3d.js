const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let d=null;e.setAttribute("disabled","true"),t.addEventListener("click",(()=>{t.setAttribute("disabled","true"),e.removeAttribute("disabled"),d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(()=>{clearInterval(d),e.setAttribute("disabled","true"),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.1e70ea3d.js.map
