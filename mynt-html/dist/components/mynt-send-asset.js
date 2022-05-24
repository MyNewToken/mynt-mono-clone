import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$e } from './button.js';
import { d as defineCustomElement$d } from './card.js';
import { d as defineCustomElement$c } from './checkbox.js';
import { d as defineCustomElement$b } from './icon.js';
import { d as defineCustomElement$a } from './input.js';
import { d as defineCustomElement$9 } from './item.js';
import { d as defineCustomElement$8 } from './label.js';
import { d as defineCustomElement$7 } from './list.js';
import { d as defineCustomElement$6 } from './ripple-effect.js';
import { d as defineCustomElement$5 } from './toggle.js';
import { d as defineCustomElement$4 } from './mynt-asset-item2.js';
import { d as defineCustomElement$3 } from './mynt-make-post-dropdown2.js';
import { d as defineCustomElement$2 } from './mynt-viewing-restrictions2.js';

const myntSendAssetCss = ":host{display:block}";

let MyntSendAsset$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("mynt-viewing-restrictions", null, h("ion-input", { placeholder: "Send to..." })));
  }
  static get style() { return myntSendAssetCss; }
};
MyntSendAsset$1 = /*@__PURE__*/ proxyCustomElement(MyntSendAsset$1, [1, "mynt-send-asset"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-send-asset", "ion-button", "ion-card", "ion-checkbox", "ion-icon", "ion-input", "ion-item", "ion-label", "ion-list", "ion-ripple-effect", "ion-toggle", "mynt-asset-item", "mynt-make-post-dropdown", "mynt-viewing-restrictions"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-send-asset":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntSendAsset$1);
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$e();
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "ion-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-toggle":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "mynt-asset-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "mynt-make-post-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mynt-viewing-restrictions":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntSendAsset = MyntSendAsset$1;
const defineCustomElement = defineCustomElement$1;

export { MyntSendAsset, defineCustomElement };
