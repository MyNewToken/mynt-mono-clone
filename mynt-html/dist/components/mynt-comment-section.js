import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './card.js';
import { d as defineCustomElement$4 } from './card-header.js';
import { d as defineCustomElement$3 } from './input.js';
import { d as defineCustomElement$2 } from './ripple-effect.js';

const myntCommentSectionCss = ":host{display:block}";

let MyntCommentSection$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("ion-card", null, h("ion-card-header", null, h("ion-input", null))));
  }
  static get style() { return myntCommentSectionCss; }
};
MyntCommentSection$1 = /*@__PURE__*/ proxyCustomElement(MyntCommentSection$1, [1, "mynt-comment-section"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-comment-section", "ion-card", "ion-card-header", "ion-input", "ion-ripple-effect"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-comment-section":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntCommentSection$1);
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-card-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntCommentSection = MyntCommentSection$1;
const defineCustomElement = defineCustomElement$1;

export { MyntCommentSection, defineCustomElement };
