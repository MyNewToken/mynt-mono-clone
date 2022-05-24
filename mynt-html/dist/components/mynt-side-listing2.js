import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './avatar.js';
import { d as defineCustomElement$6 } from './card-title.js';
import { d as defineCustomElement$5 } from './icon.js';
import { d as defineCustomElement$4 } from './img.js';
import { d as defineCustomElement$3 } from './item.js';
import { d as defineCustomElement$2 } from './ripple-effect.js';
import { d as defineCustomElement$1 } from './profile-pic2.js';

const myntSideListingCss = ":host{display:block}";

let MyntSideListing = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.image = "";
    this.text = "";
  }
  render() {
    return (h("ion-item", null, h("profile-pic", { source: this.image }), h("ion-card-title", null, this.text)));
  }
  static get style() { return myntSideListingCss; }
};
MyntSideListing = /*@__PURE__*/ proxyCustomElement(MyntSideListing, [1, "mynt-side-listing", {
    "image": [1],
    "text": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-side-listing", "ion-avatar", "ion-card-title", "ion-icon", "ion-img", "ion-item", "ion-ripple-effect", "profile-pic"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-side-listing":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntSideListing);
      }
      break;
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-card-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-img":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "profile-pic":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { MyntSideListing as M, defineCustomElement as d };
