import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$c } from './button.js';
import { d as defineCustomElement$b } from './card.js';
import { d as defineCustomElement$a } from './card-header.js';
import { d as defineCustomElement$9 } from './card-title.js';
import { d as defineCustomElement$8 } from './icon.js';
import { d as defineCustomElement$7 } from './item.js';
import { d as defineCustomElement$6 } from './label.js';
import { d as defineCustomElement$5 } from './list.js';
import { d as defineCustomElement$4 } from './ripple-effect.js';
import { d as defineCustomElement$3 } from './textarea.js';
import { d as defineCustomElement$2 } from './mynt-message2.js';

const myntChatCss = ":host{display:block}";

let MyntChat$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.name = "Parker";
  }
  render() {
    return (h("ion-card", null, h("ion-card-header", { color: "dark" }, h("ion-card-title", null, this.name)), h("ion-list", null, h("mynt-message", { sent: false, msg: "What's up?" }), h("mynt-message", { sent: true, msg: "Hey!" })), h("ion-item", null, h("ion-textarea", { autoGrow: true, autofocus: true, enterkeyhint: "send", placeholder: "mynt message..." }), h("ion-button", null, h("ion-icon", { name: "send-outline" })))));
  }
  static get style() { return myntChatCss; }
};
MyntChat$1 = /*@__PURE__*/ proxyCustomElement(MyntChat$1, [1, "mynt-chat", {
    "name": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-chat", "ion-button", "ion-card", "ion-card-header", "ion-card-title", "ion-icon", "ion-item", "ion-label", "ion-list", "ion-ripple-effect", "ion-textarea", "mynt-message"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-chat":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntChat$1);
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-card-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-card-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-textarea":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mynt-message":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntChat = MyntChat$1;
const defineCustomElement = defineCustomElement$1;

export { MyntChat, defineCustomElement };
