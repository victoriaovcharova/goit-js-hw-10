import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";const n="/vanilla-app-template/assets/errorSvg-e987a0ca.svg",l="/vanilla-app-template/assets/successSvg-ce58e14e.svg",s=document.querySelector(".form");s.addEventListener("submit",a=>{a.preventDefault();const r=Number(s.delay.value),t=s.state.value;new Promise((e,i)=>{setTimeout(()=>{t==="fulfilled"?e(r):i(r)},r)}).then(e=>o.success({iconUrl:l,message:`Fulfilled promise in ${e}ms`,messageColor:"#ffffff",backgroundColor:"#59A10D",progressBar:!0,progressBarColor:"#326101",progressBarEasing:"linear",pauseOnHover:!0,position:"topRight"})).catch(e=>o.error({iconUrl:n,message:`Rejected promise in ${e}ms`,messageColor:"#ffffff",backgroundColor:"#EF4040",progressBar:!0,progressBarColor:"#B51B1B",progressBarEasing:"linear",pauseOnHover:!0,position:"topRight"})),s.reset()});
//# sourceMappingURL=commonHelpers2.js.map
