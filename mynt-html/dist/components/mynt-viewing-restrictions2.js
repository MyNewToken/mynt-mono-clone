import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$c } from './button.js';
import { d as defineCustomElement$b } from './card.js';
import { d as defineCustomElement$a } from './checkbox.js';
import { d as defineCustomElement$9 } from './icon.js';
import { d as defineCustomElement$8 } from './input.js';
import { d as defineCustomElement$7 } from './item.js';
import { d as defineCustomElement$6 } from './label.js';
import { d as defineCustomElement$5 } from './list.js';
import { d as defineCustomElement$4 } from './ripple-effect.js';
import { d as defineCustomElement$3 } from './toggle.js';
import { d as defineCustomElement$2 } from './mynt-asset-item2.js';
import { d as defineCustomElement$1 } from './mynt-make-post-dropdown2.js';

const myntViewingRestrictionsCss = ":host{display:block}";

let MyntViewingRestrictions = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("mynt-make-post-dropdown", null, h("ion-item", null, h("ion-input", { placeholder: "Search all coins" }), h("ion-button", null, "Search")), h("ion-list", null, h("mynt-asset-item", null)), h("slot", null)));
  }
  static get style() { return myntViewingRestrictionsCss; }
};
MyntViewingRestrictions = /*@__PURE__*/ proxyCustomElement(MyntViewingRestrictions, [1, "mynt-viewing-restrictions"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-viewing-restrictions", "ion-button", "ion-card", "ion-checkbox", "ion-icon", "ion-input", "ion-item", "ion-label", "ion-list", "ion-ripple-effect", "ion-toggle", "mynt-asset-item", "mynt-make-post-dropdown"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-viewing-restrictions":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntViewingRestrictions);
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "ion-card":
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
    case "ion-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-toggle":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mynt-asset-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "mynt-make-post-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { MyntViewingRestrictions as M, defineCustomElement as d };
