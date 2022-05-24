import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './col.js';
import { d as defineCustomElement$4 } from './grid.js';
import { d as defineCustomElement$3 } from './row.js';
import { d as defineCustomElement$2 } from './mynt-page2.js';

const myntProfileCss = ":host{display:block}";

let MyntProfile$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("mynt-page", null));
  }
  static get style() { return myntProfileCss; }
};
MyntProfile$1 = /*@__PURE__*/ proxyCustomElement(MyntProfile$1, [1, "mynt-profile"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-profile", "ion-col", "ion-grid", "ion-row", "mynt-page"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-profile":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntProfile$1);
      }
      break;
    case "ion-col":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-row":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mynt-page":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntProfile = MyntProfile$1;
const defineCustomElement = defineCustomElement$1;

export { MyntProfile, defineCustomElement };
