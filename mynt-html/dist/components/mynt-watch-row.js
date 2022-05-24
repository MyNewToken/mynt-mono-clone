import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$b } from './card.js';
import { d as defineCustomElement$a } from './card-header.js';
import { d as defineCustomElement$9 } from './card-subtitle.js';
import { d as defineCustomElement$8 } from './card-title.js';
import { d as defineCustomElement$7 } from './col.js';
import { d as defineCustomElement$6 } from './img.js';
import { d as defineCustomElement$5 } from './ripple-effect.js';
import { d as defineCustomElement$4 } from './row.js';
import { d as defineCustomElement$3 } from './thumbnail.js';
import { d as defineCustomElement$2 } from './mynt-watch-thumb2.js';

const myntWatchRowCss = ":host{display:block}";

let MyntWatchRow$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.data = [];
    this.numCols = 0;
  }
  render() {
    for (var _ = 0; _ < this.numCols; _++) {
      this.data.push(h("mynt-watch-thumb", null));
    }
    return (h("ion-row", null, this.data.map(el => h("ion-col", null, el))));
  }
  static get style() { return myntWatchRowCss; }
};
MyntWatchRow$1 = /*@__PURE__*/ proxyCustomElement(MyntWatchRow$1, [1, "mynt-watch-row", {
    "numCols": [2, "num-cols"],
    "data": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-watch-row", "ion-card", "ion-card-header", "ion-card-subtitle", "ion-card-title", "ion-col", "ion-img", "ion-ripple-effect", "ion-row", "ion-thumbnail", "mynt-watch-thumb"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-watch-row":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntWatchRow$1);
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-card-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-card-subtitle":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-card-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-col":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-img":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-row":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-thumbnail":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mynt-watch-thumb":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntWatchRow = MyntWatchRow$1;
const defineCustomElement = defineCustomElement$1;

export { MyntWatchRow, defineCustomElement };
