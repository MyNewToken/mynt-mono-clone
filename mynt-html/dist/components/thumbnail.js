import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { g as getIonMode } from './ionic-global.js';

const thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}";

let Thumbnail = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
  static get style() { return thumbnailCss; }
};
Thumbnail = /*@__PURE__*/ proxyCustomElement(Thumbnail, [1, "ion-thumbnail"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-thumbnail"];
  components.forEach(tagName => { switch (tagName) {
    case "ion-thumbnail":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Thumbnail);
      }
      break;
  } });
}

export { Thumbnail as T, defineCustomElement as d };
