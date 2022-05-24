import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './card.js';
import { d as defineCustomElement$2 } from './ripple-effect.js';

const myntAssetCss = ":host{display:block}";

let MyntAsset$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("ion-card", null));
  }
  static get style() { return myntAssetCss; }
};
MyntAsset$1 = /*@__PURE__*/ proxyCustomElement(MyntAsset$1, [1, "mynt-asset", {
    "cost": [8]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-asset", "ion-card", "ion-ripple-effect"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-asset":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntAsset$1);
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntAsset = MyntAsset$1;
const defineCustomElement = defineCustomElement$1;

export { MyntAsset, defineCustomElement };
