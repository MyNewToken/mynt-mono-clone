import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './item.js';
import { d as defineCustomElement$2 } from './label.js';
import { d as defineCustomElement$1 } from './ripple-effect.js';

const myntMessageCss = ":host{display:block}";

let MyntMessage = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.msg = "";
    this.sent = true;
    this.timestamp = "1970/01/01";
  }
  render() {
    return (h("ion-item", null, h("ion-label", { slot: this.sent ? "end" : "start" }, this.msg)));
  }
  static get style() { return myntMessageCss; }
};
MyntMessage = /*@__PURE__*/ proxyCustomElement(MyntMessage, [1, "mynt-message", {
    "msg": [1],
    "sent": [1028],
    "timestamp": [1025]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-message", "ion-icon", "ion-item", "ion-label", "ion-ripple-effect"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-message":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntMessage);
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { MyntMessage as M, defineCustomElement as d };
