import{r as t,c as i,h as n,H as r,a as e}from"./p-c6c344a2.js";import{g as a}from"./p-58f7f4fc.js";import{f as o,l as s,i as l,m as h,j as g}from"./p-12182d3c.js";import{c as d,h as b}from"./p-7840618d.js";let p=class{constructor(n){t(this,n),this.ionChange=i(this,"ionChange",7),this.ionStyle=i(this,"ionStyle",7),this.ionFocus=i(this,"ionFocus",7),this.ionBlur=i(this,"ionBlur",7),this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=t=>o(this.min,t,this.max),this.ensureValueInBounds=t=>this.dualKnobs?{lower:this.clampBounds(t.lower),upper:this.clampBounds(t.upper)}:this.clampBounds(t),this.setupGesture=async()=>{const t=this.rangeSlider;t&&(this.gesture=(await import("./p-f5849699.js")).createGesture({el:t,gestureName:"range",gesturePriority:100,threshold:0,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(!this.disabled))},this.handleKeyboard=(t,i)=>{let n=this.step;n=n>0?n:1,n/=this.max-this.min,i||(n*=-1),"A"===t?this.ratioA=o(0,this.ratioA+n,1):this.ratioB=o(0,this.ratioB+n,1),this.updateValue()},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())}}debounceChanged(){this.ionChange=s(this.ionChange,this.debounce)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}valueChanged(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.ionChange.emit({value:t})}componentWillLoad(){this.rangeId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-r-"+m++,this.inheritedAttributes=l(this.el,["aria-label"])}componentDidLoad(){this.setupGesture(),this.didLoad=!0}connectedCallback(){this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.didLoad&&this.setupGesture()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){const t=this.value||0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}onStart(t){const i=this.rect=this.rangeSlider.getBoundingClientRect(),n=t.currentX;let r=o(0,(n-i.left)/i.width,1);"rtl"===document.dir&&(r=1-r),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-r)<Math.abs(this.ratioB-r)?"A":"B",this.setFocus(this.pressedKnob),this.update(n)}onMove(t){this.update(t.currentX)}onEnd(t){this.update(t.currentX),this.pressedKnob=void 0}update(t){const i=this.rect;let n=o(0,(t-i.left)/i.width,1);"rtl"===document.dir&&(n=1-n),this.snaps&&(n=k(u(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()}get valA(){return u(this.ratioA,this.min,this.max,this.step)}get valB(){return u(this.ratioB,this.min,this.max,this.step)}get ratioLower(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const t=this.getValue(),{min:i,max:n}=this;this.dualKnobs?(this.ratioA=k(t.lower,i,n),this.ratioB=k(t.upper,i,n)):this.ratioA=k(t,i,n)}updateValue(){this.noUpdate=!0;const{valA:t,valB:i}=this;this.value=this.dualKnobs?{lower:Math.min(t,i),upper:Math.max(t,i)}:t,this.noUpdate=!1}setFocus(t){if(this.el.shadowRoot){const i=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");i&&i.focus()}}render(){const{min:t,max:i,step:e,el:o,handleKeyboard:s,pressedKnob:l,disabled:p,pin:u,ratioLower:m,ratioUpper:x,inheritedAttributes:v,rangeId:f}=this;let{labelText:w}=h(o,f);null==w&&(w=v["aria-label"]);const z=a(this),y="rtl"===document.dir,A=y?"right":"left",C=t=>({[A]:t[A]}),M={[A]:100*m+"%",[y?"left":"right"]:100-100*x+"%"},j=[];if(this.snaps&&this.ticks)for(let n=t;n<=i;n+=e){const r=k(n,t,i),e={ratio:r,active:r>=m&&r<=x};e[A]=100*r+"%",j.push(e)}return g(!0,o,this.name,JSON.stringify(this.getValue()),p),n(r,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:f,class:d(this.color,{[z]:!0,"in-item":b("ion-item",o),"range-disabled":p,"range-pressed":void 0!==l,"range-has-pin":u})},n("slot",{name:"start"}),n("div",{class:"range-slider",ref:t=>this.rangeSlider=t},j.map((t=>n("div",{style:C(t),role:"presentation",class:{"range-tick":!0,"range-tick-active":t.active},part:t.active?"tick-active":"tick"}))),n("div",{class:"range-bar",role:"presentation",part:"bar"}),n("div",{class:"range-bar range-bar-active",role:"presentation",style:M,part:"bar-active"}),c(y,{knob:"A",pressed:"A"===l,value:this.valA,ratio:this.ratioA,pin:u,disabled:p,handleKeyboard:s,min:t,max:i,labelText:w}),this.dualKnobs&&c(y,{knob:"B",pressed:"B"===l,value:this.valB,ratio:this.ratioB,pin:u,disabled:p,handleKeyboard:s,min:t,max:i,labelText:w})),n("slot",{name:"end"}))}get el(){return e(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}};const c=(t,{knob:i,value:r,ratio:e,min:a,max:o,disabled:s,pressed:l,pin:h,handleKeyboard:g,labelText:d})=>{const b=t?"right":"left";return n("div",{onKeyDown:t=>{const n=t.key;"ArrowLeft"===n||"ArrowDown"===n?(g(i,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==n&&"ArrowUp"!==n||(g(i,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===i,"range-knob-b":"B"===i,"range-knob-pressed":l,"range-knob-min":r===a,"range-knob-max":r===o},style:(()=>{const t={};return t[b]=100*e+"%",t})(),role:"slider",tabindex:s?-1:0,"aria-label":d,"aria-valuemin":a,"aria-valuemax":o,"aria-disabled":s?"true":null,"aria-valuenow":r},h&&n("div",{class:"range-pin",role:"presentation",part:"pin"},Math.round(r)),n("div",{class:"range-knob",role:"presentation",part:"knob"}))},u=(t,i,n,r)=>{let e=(n-i)*t;return r>0&&(e=Math.round(e/r)*r+i),o(i,e,n)},k=(t,i,n)=>o(0,(t-i)/(n-i),1);let m=0;p.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:flex;position:relative;flex:3;align-items:center;font-family:var(--ion-font-family, inherit);user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;transition:transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:flex;position:relative;flex:3;align-items:center;font-family:var(--ion-font-family, inherit);user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{transform:scale(0.67);transition-duration:120ms;transition-property:transform, background-color, border;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;transition:transform 120ms ease, background 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;transform:rotate(-45deg);transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}'};export{p as ion_range}