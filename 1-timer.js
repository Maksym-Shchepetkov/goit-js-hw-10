import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as C,i as f}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),u=document.querySelector("span[data-days]"),d=document.querySelector("span[data-hours]"),i=document.querySelector("span[data-minutes]"),l=document.querySelector("span[data-seconds]");o.disabled=!0;let r;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0],r<new Date?(f.error({title:"Error",titleColor:"#ffffff",message:"Please choose a date in the future",messageColor:"#ffffff",backgroundColor:"#ef4040",position:"topRight",timeout:2e4}),o.disabled=!0):o.disabled=!1}};C(a,S);function b(t){const m=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:h,minutes:p,seconds:y}}function n(t){return String(t).padStart(2,"0")}o.addEventListener("click",()=>{o.disabled=!0,a.disabled=!0;const t=setInterval(()=>{const s=r-new Date;if(s<0){clearInterval(t),u.textContent="00",d.textContent="00",i.textContent="00",l.textContent="00",f.success({title:"OK",message:"Successfully completed",position:"topRight",timeout:2e4}),a.disabled=!1;return}const e=b(s);u.textContent=n(e.days),d.textContent=n(e.hours),i.textContent=n(e.minutes),l.textContent=n(e.seconds)},1e3)});
//# sourceMappingURL=1-timer.js.map
