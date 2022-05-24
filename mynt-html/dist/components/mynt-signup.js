import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myntSignupCss = ":host{display:block}";

let MyntSignup$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return myntSignupCss; }
};
MyntSignup$1 = /*@__PURE__*/ proxyCustomElement(MyntSignup$1, [1, "mynt-signup"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-signup"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-signup":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntSignup$1);
      }
      break;
  } });
}

const MyntSignup = MyntSignup$1;
const defineCustomElement = defineCustomElement$1;

export { MyntSignup, defineCustomElement };
