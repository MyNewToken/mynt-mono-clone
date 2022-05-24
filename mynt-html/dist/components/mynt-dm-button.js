import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myntDmButtonCss = ":host{display:block}";

let MyntDmButton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return myntDmButtonCss; }
};
MyntDmButton$1 = /*@__PURE__*/ proxyCustomElement(MyntDmButton$1, [1, "mynt-dm-button"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-dm-button"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-dm-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntDmButton$1);
      }
      break;
  } });
}

const MyntDmButton = MyntDmButton$1;
const defineCustomElement = defineCustomElement$1;

export { MyntDmButton, defineCustomElement };
