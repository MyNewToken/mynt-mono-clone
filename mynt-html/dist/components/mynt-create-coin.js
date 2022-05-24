import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$b } from './button.js';
import { d as defineCustomElement$a } from './card.js';
import { d as defineCustomElement$9 } from './icon.js';
import { d as defineCustomElement$8 } from './input.js';
import { d as defineCustomElement$7 } from './item.js';
import { d as defineCustomElement$6 } from './label.js';
import { d as defineCustomElement$5 } from './list.js';
import { d as defineCustomElement$4 } from './ripple-effect.js';
import { d as defineCustomElement$3 } from './toggle.js';
import { d as defineCustomElement$2 } from './mynt-make-post-dropdown2.js';

const myntCreateCoinCss = ":host{display:block}";

let MyntCreateCoin$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("mynt-make-post-dropdown", null, h("ion-list", null, h("ion-item", null, h("ion-label", null, "Coin Name"), " ", h("ion-input", null)), h("ion-item", null, h("ion-label", null, "Ticker"), " ", h("ion-input", null)), h("ion-item", null, h("ion-label", null, "Price/Coin"), " ", h("ion-input", null), " ", h("ion-label", null, "Quantity"), " ", h("ion-input", null)), h("ion-item", null, h("ion-label", null, "Number of coins for sale on this post"), " ", h("ion-input", null), " ", h("ion-toggle", null, "Unlimited Quantity")), h("ion-item", null, h("ion-label", null, "Coin Image"), " ", h("ion-button", null, h("ion-icon", { name: "folder-outline" }), "Upload File")))));
  }
  static get style() { return myntCreateCoinCss; }
};
MyntCreateCoin$1 = /*@__PURE__*/ proxyCustomElement(MyntCreateCoin$1, [1, "mynt-create-coin"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-create-coin", "ion-button", "ion-card", "ion-icon", "ion-input", "ion-item", "ion-label", "ion-list", "ion-ripple-effect", "ion-toggle", "mynt-make-post-dropdown"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-create-coin":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntCreateCoin$1);
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-input":
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
    case "ion-toggle":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mynt-make-post-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntCreateCoin = MyntCreateCoin$1;
const defineCustomElement = defineCustomElement$1;

export { MyntCreateCoin, defineCustomElement };
