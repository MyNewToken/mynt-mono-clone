import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './app.js';
import { d as defineCustomElement$4 } from './nav.js';
import { d as defineCustomElement$3 } from './route.js';
import { d as defineCustomElement$2 } from './router.js';

const myntRootCss = ":host{display:block}";

let MyntRoot$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("ion-app", null, h("ion-router", { useHash: false }, h("ion-route", { component: "mynt-menu" }, h("ion-route", { url: "/", component: "mynts" }), h("ion-route", { url: "/watch", component: "watch" }), h("ion-route", { url: "/market", component: "watch" }), h("ion-route", { url: "/assets", component: "watch" }))), h("ion-nav", null)));
  }
  static get style() { return myntRootCss; }
};
MyntRoot$1 = /*@__PURE__*/ proxyCustomElement(MyntRoot$1, [0, "mynt-root"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-root", "ion-app", "ion-nav", "ion-route", "ion-router"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-root":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntRoot$1);
      }
      break;
    case "ion-app":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-nav":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-route":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-router":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntRoot = MyntRoot$1;
const defineCustomElement = defineCustomElement$1;

export { MyntRoot, defineCustomElement };
