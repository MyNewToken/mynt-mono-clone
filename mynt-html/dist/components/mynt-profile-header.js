import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myntProfileHeaderCss = ":host{display:block}";

let MyntProfileHeader$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return myntProfileHeaderCss; }
};
MyntProfileHeader$1 = /*@__PURE__*/ proxyCustomElement(MyntProfileHeader$1, [1, "mynt-profile-header"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-profile-header"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-profile-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntProfileHeader$1);
      }
      break;
  } });
}

const MyntProfileHeader = MyntProfileHeader$1;
const defineCustomElement = defineCustomElement$1;

export { MyntProfileHeader, defineCustomElement };
