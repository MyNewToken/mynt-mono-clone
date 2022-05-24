import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$8 } from './card.js';
import { d as defineCustomElement$7 } from './checkbox.js';
import { d as defineCustomElement$6 } from './icon.js';
import { d as defineCustomElement$5 } from './item.js';
import { d as defineCustomElement$4 } from './label.js';
import { d as defineCustomElement$3 } from './ripple-effect.js';
import { d as defineCustomElement$2 } from './mynt-make-post-dropdown2.js';

const myntMarkNsfwCss = ":host{display:block}";

let MyntMarkNsfw$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("mynt-make-post-dropdown", null, h("ion-item", null, h("ion-label", null, "Mark as NSFW?"), h("ion-checkbox", null))));
  }
  static get style() { return myntMarkNsfwCss; }
};
MyntMarkNsfw$1 = /*@__PURE__*/ proxyCustomElement(MyntMarkNsfw$1, [1, "mynt-mark-nsfw"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-mark-nsfw", "ion-card", "ion-checkbox", "ion-icon", "ion-item", "ion-label", "ion-ripple-effect", "mynt-make-post-dropdown"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-mark-nsfw":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntMarkNsfw$1);
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mynt-make-post-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntMarkNsfw = MyntMarkNsfw$1;
const defineCustomElement = defineCustomElement$1;

export { MyntMarkNsfw, defineCustomElement };
