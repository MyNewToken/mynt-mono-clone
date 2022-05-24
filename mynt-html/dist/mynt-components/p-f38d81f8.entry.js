import{r as t,d as n,w as a,h as o,a as e,H as i}from"./p-c6c344a2.js";import{g as r}from"./p-58f7f4fc.js";let s=class{constructor(n){t(this,n),this.type="bounded"}async addRipple(t,o){return new Promise((e=>{n((()=>{const n=this.el.getBoundingClientRect(),i=n.width,r=n.height,s=Math.sqrt(i*i+r*r),m=Math.max(r,i),p=this.unbounded?m:s+l,d=Math.floor(m*f),u=p/d;let h=t-n.left,b=o-n.top;this.unbounded&&(h=.5*i,b=.5*r);const y=h-.5*d,g=b-.5*d,v=.5*i-h,w=.5*r-b;a((()=>{const t=document.createElement("div");t.classList.add("ripple-effect");const n=t.style;n.top=g+"px",n.left=y+"px",n.width=n.height=d+"px",n.setProperty("--final-scale",`${u}`),n.setProperty("--translate-end",`${v}px, ${w}px`),(this.el.shadowRoot||this.el).appendChild(t),setTimeout((()=>{e((()=>{c(t)}))}),325)}))}))}))}get unbounded(){return"unbounded"===this.type}render(){const t=r(this);return o(i,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return e(this)}};const c=t=>{t.classList.add("fade-out"),setTimeout((()=>{t.remove()}),200)},l=10,f=.5;s.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{transform:translate(var(--translate-end)) scale(var(--final-scale, 1));animation:150ms fadeOutAnimation forwards}@keyframes rippleAnimation{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(1)}to{transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes fadeInAnimation{from{animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeOutAnimation{from{animation-timing-function:linear;opacity:0.16}to{opacity:0}}";export{s as ion_ripple_effect}