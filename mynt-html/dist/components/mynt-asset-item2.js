import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './checkbox.js';
import { d as defineCustomElement$6 } from './icon.js';
import { d as defineCustomElement$5 } from './input.js';
import { d as defineCustomElement$4 } from './item.js';
import { d as defineCustomElement$3 } from './label.js';
import { d as defineCustomElement$2 } from './ripple-effect.js';
import { d as defineCustomElement$1 } from './toggle.js';

const myntAssetItemCss = ":host{display:block}";

let MyntAssetItem = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("ion-item", null, h("ion-checkbox", null), h("ion-label", null, "Logan Coin"), h("ion-label", null, "Quantity: "), h("ion-input", null), h("ion-toggle", null, "All")));
  }
  static get style() { return myntAssetItemCss; }
};
MyntAssetItem = /*@__PURE__*/ proxyCustomElement(MyntAssetItem, [1, "mynt-asset-item"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-asset-item", "ion-checkbox", "ion-icon", "ion-input", "ion-item", "ion-label", "ion-ripple-effect", "ion-toggle"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-asset-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntAssetItem);
      }
      break;
    case "ion-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ion-toggle":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { MyntAssetItem as M, defineCustomElement as d };
