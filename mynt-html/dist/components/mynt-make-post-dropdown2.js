import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './card.js';
import { d as defineCustomElement$1 } from './ripple-effect.js';

const myntMakePostDropdownCss = ":host{display:block}";

let MyntMakePostDropdown = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("ion-card", null, h("slot", null)));
  }
  static get style() { return myntMakePostDropdownCss; }
};
MyntMakePostDropdown = /*@__PURE__*/ proxyCustomElement(MyntMakePostDropdown, [1, "mynt-make-post-dropdown"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-make-post-dropdown", "ion-card", "ion-ripple-effect"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-make-post-dropdown":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntMakePostDropdown);
      }
      break;
    case "ion-card":
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

export { MyntMakePostDropdown as M, defineCustomElement as d };
