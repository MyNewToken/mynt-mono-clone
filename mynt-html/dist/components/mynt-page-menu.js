import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myntPageMenuCss = ":host{display:block}";

let MyntPageMenu$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return myntPageMenuCss; }
};
MyntPageMenu$1 = /*@__PURE__*/ proxyCustomElement(MyntPageMenu$1, [1, "mynt-page-menu"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-page-menu"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-page-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntPageMenu$1);
      }
      break;
  } });
}

const MyntPageMenu = MyntPageMenu$1;
const defineCustomElement = defineCustomElement$1;

export { MyntPageMenu, defineCustomElement };
