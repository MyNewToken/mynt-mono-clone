import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$g } from './avatar.js';
import { d as defineCustomElement$f } from './button.js';
import { d as defineCustomElement$e } from './card.js';
import { d as defineCustomElement$d } from './card-content.js';
import { d as defineCustomElement$c } from './card-header.js';
import { d as defineCustomElement$b } from './card-subtitle.js';
import { d as defineCustomElement$a } from './card-title.js';
import { d as defineCustomElement$9 } from './col.js';
import { d as defineCustomElement$8 } from './icon.js';
import { d as defineCustomElement$7 } from './img.js';
import { d as defineCustomElement$6 } from './item.js';
import { d as defineCustomElement$5 } from './ripple-effect.js';
import { d as defineCustomElement$4 } from './row.js';
import { d as defineCustomElement$3 } from './thumbnail.js';
import { d as defineCustomElement$2 } from './mynt-post2.js';
import { d as defineCustomElement$1 } from './profile-pic2.js';

const myntGridRowCss = ":host{display:block}";

let MyntGridRow = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.data = [];
    this.numCols = 0;
  }
  render() {
    for (var i = 0; i < this.numCols; i++) {
      this.data.push(h("mynt-post", { name: "Logan Paul", user: "@loganpaul", profPicSrc: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: i.toString(), mediaPicSrc: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" }));
    }
    return (h("ion-row", null, this.data.map(el => h("ion-col", null, el))));
  }
  static get style() { return myntGridRowCss; }
};
MyntGridRow = /*@__PURE__*/ proxyCustomElement(MyntGridRow, [1, "mynt-grid-row", {
    "numCols": [2, "num-cols"],
    "data": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-grid-row", "ion-avatar", "ion-button", "ion-card", "ion-card-content", "ion-card-header", "ion-card-subtitle", "ion-card-title", "ion-col", "ion-icon", "ion-img", "ion-item", "ion-ripple-effect", "ion-row", "ion-thumbnail", "mynt-post", "profile-pic"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-grid-row":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntGridRow);
      }
      break;
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$g();
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$f();
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$e();
      }
      break;
    case "ion-card-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "ion-card-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "ion-card-subtitle":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-card-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-col":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-img":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-item":
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
    case "mynt-post":
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

export { MyntGridRow as M, defineCustomElement as d };
