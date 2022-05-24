import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myntTradeModuleCss = ":host{display:block}";

let MyntTradeModule$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return myntTradeModuleCss; }
};
MyntTradeModule$1 = /*@__PURE__*/ proxyCustomElement(MyntTradeModule$1, [1, "mynt-trade-module"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-trade-module"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-trade-module":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntTradeModule$1);
      }
      break;
  } });
}

const MyntTradeModule = MyntTradeModule$1;
const defineCustomElement = defineCustomElement$1;

export { MyntTradeModule, defineCustomElement };
