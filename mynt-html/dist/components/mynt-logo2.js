import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './icon.js';

const myntLogoCss = ":host{display:block}";

let MyntLogo = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.image = "myntlogo.svg";
  }
  render() {
    return (h("ion-icon", { src: "components/mynt-logo/assets/myntlogo.svg", size: "large" }));
  }
  static get assetsDirs() { return ["assets"]; }
  static get style() { return myntLogoCss; }
};
MyntLogo = /*@__PURE__*/ proxyCustomElement(MyntLogo, [1, "mynt-logo", {
    "image": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-logo", "ion-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-logo":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntLogo);
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { MyntLogo as M, defineCustomElement as d };
