import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './card.js';
import { d as defineCustomElement$6 } from './card-header.js';
import { d as defineCustomElement$5 } from './card-subtitle.js';
import { d as defineCustomElement$4 } from './card-title.js';
import { d as defineCustomElement$3 } from './img.js';
import { d as defineCustomElement$2 } from './ripple-effect.js';
import { d as defineCustomElement$1 } from './thumbnail.js';

const myntWatchThumbCss = ":host{display:block}";

let MyntWatchThumb = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("ion-card", null, h("ion-card-header", null, h("ion-thumbnail", null, h("ion-img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" }))), h("ion-card-title", null, "Watch thumbnail title"), h("ion-card-subtitle", null, "Watch thumbnail creator")));
  }
  static get style() { return myntWatchThumbCss; }
};
MyntWatchThumb = /*@__PURE__*/ proxyCustomElement(MyntWatchThumb, [1, "mynt-watch-thumb"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-watch-thumb", "ion-card", "ion-card-header", "ion-card-subtitle", "ion-card-title", "ion-img", "ion-ripple-effect", "ion-thumbnail"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-watch-thumb":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntWatchThumb);
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-card-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-card-subtitle":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-card-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-img":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ion-thumbnail":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { MyntWatchThumb as M, defineCustomElement as d };
