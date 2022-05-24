import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { g as getIonMode } from './ionic-global.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";

let Row = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
  static get style() { return rowCss; }
};
Row = /*@__PURE__*/ proxyCustomElement(Row, [1, "ion-row"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-row"];
  components.forEach(tagName => { switch (tagName) {
    case "ion-row":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Row);
      }
      break;
  } });
}

export { Row as R, defineCustomElement as d };
