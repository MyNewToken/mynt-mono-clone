import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$8 } from './avatar.js';
import { d as defineCustomElement$7 } from './icon.js';
import { d as defineCustomElement$6 } from './img.js';
import { d as defineCustomElement$5 } from './item.js';
import { d as defineCustomElement$4 } from './label.js';
import { d as defineCustomElement$3 } from './list.js';
import { d as defineCustomElement$2 } from './ripple-effect.js';
import { d as defineCustomElement$1 } from './profile-pic2.js';

const myntNotiCss = ":host{display:block}";

let MyntNoti = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("ion-item", null, h("profile-pic", { source: this.assImg }), h("ion-list", null, h("ion-label", null, h("b", null, this.ttle)), h("ion-label", null, this.txt))));
  }
  static get style() { return myntNotiCss; }
};
MyntNoti = /*@__PURE__*/ proxyCustomElement(MyntNoti, [1, "mynt-noti", {
    "assImg": [1, "ass-img"],
    "ttle": [1],
    "txt": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-noti", "ion-avatar", "ion-icon", "ion-img", "ion-item", "ion-label", "ion-list", "ion-ripple-effect", "profile-pic"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-noti":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntNoti);
      }
      break;
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-img":
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
    case "ion-list":
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

export { MyntNoti as M, defineCustomElement as d };
