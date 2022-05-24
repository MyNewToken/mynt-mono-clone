import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './col.js';
import { d as defineCustomElement$2 } from './grid.js';
import { d as defineCustomElement$1 } from './row.js';

const myntPageCss = ":host{display:block}.-main{--ion-grid-column-padding:0px}";

let MyntPage = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("ion-grid", null, h("ion-row", null, h("ion-col", { class: "-side", size: "3" }, h("slot", { name: "side" })), h("ion-col", { class: "-main", size: "9" }, h("slot", { name: "main" }))))));
  }
  static get style() { return myntPageCss; }
};
MyntPage = /*@__PURE__*/ proxyCustomElement(MyntPage, [1, "mynt-page"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-page", "ion-col", "ion-grid", "ion-row"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-page":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntPage);
      }
      break;
    case "ion-col":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ion-row":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { MyntPage as M, defineCustomElement as d };
