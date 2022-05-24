import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$d } from './button.js';
import { d as defineCustomElement$c } from './card.js';
import { d as defineCustomElement$b } from './card-header.js';
import { d as defineCustomElement$a } from './checkbox.js';
import { d as defineCustomElement$9 } from './icon.js';
import { d as defineCustomElement$8 } from './input.js';
import { d as defineCustomElement$7 } from './item.js';
import { d as defineCustomElement$6 } from './label.js';
import { d as defineCustomElement$5 } from './ripple-effect.js';
import { d as defineCustomElement$4 } from './segment.js';
import { d as defineCustomElement$3 } from './segment-button.js';
import { d as defineCustomElement$2 } from './mynt-logo2.js';

const myntLoginCss = ":host{display:block}";

let MyntLogin$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.create_account = false;
  }
  render() {
    return [
      h("ion-card", null, h("ion-item", null, h("mynt-logo", null), h("ion-card-header", null, this.create_account ? "Create Mynt Account" : "Log in to Mynt")), h("ion-segment", null, h("ion-segment-button", { onClick: () => this.create_account = false }, h("ion-label", null, "Login")), h("ion-segment-button", { onClick: () => this.create_account = true }, h("ion-label", null, "Sign Up"))), h("ion-input", { placeholder: "username" }), h("ion-input", { placeholder: "password" }), h("ion-item", null, h("ion-checkbox", null), h("ion-label", null, this.create_account ? "I agree to the Terms and Conditions" : "Remember me")), h("ion-button", null, this.create_account ? "Create Account" : "Login"))
    ];
  }
  static get style() { return myntLoginCss; }
};
MyntLogin$1 = /*@__PURE__*/ proxyCustomElement(MyntLogin$1, [1, "mynt-login", {
    "create_account": [1028]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-login", "ion-button", "ion-card", "ion-card-header", "ion-checkbox", "ion-icon", "ion-input", "ion-item", "ion-label", "ion-ripple-effect", "ion-segment", "ion-segment-button", "mynt-logo"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-login":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntLogin$1);
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "ion-card-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-segment":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-segment-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mynt-logo":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntLogin = MyntLogin$1;
const defineCustomElement = defineCustomElement$1;

export { MyntLogin, defineCustomElement };
