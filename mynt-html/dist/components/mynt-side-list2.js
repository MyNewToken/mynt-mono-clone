import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$b } from './avatar.js';
import { d as defineCustomElement$a } from './card.js';
import { d as defineCustomElement$9 } from './card-title.js';
import { d as defineCustomElement$8 } from './icon.js';
import { d as defineCustomElement$7 } from './img.js';
import { d as defineCustomElement$6 } from './item.js';
import { d as defineCustomElement$5 } from './list.js';
import { d as defineCustomElement$4 } from './list-header.js';
import { d as defineCustomElement$3 } from './ripple-effect.js';
import { d as defineCustomElement$2 } from './mynt-side-listing2.js';
import { d as defineCustomElement$1 } from './profile-pic2.js';

const myntSideListCss = ":host{display:block}";

let MyntSideList = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ttle = "";
  }
  //need to do some type of listy stuff here with adding the listings, passing stuff into the props, dunno how to do it yet
  render() {
    return (h("ion-card", null, h("ion-list", null, h("ion-list-header", null, h("h1", null, this.ttle)), h("mynt-side-listing", { image: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: "Logan" }), h("mynt-side-listing", { image: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: "Logan 1" }), h("mynt-side-listing", { image: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: "Logan 2" }))));
  }
  static get style() { return myntSideListCss; }
};
MyntSideList = /*@__PURE__*/ proxyCustomElement(MyntSideList, [1, "mynt-side-list", {
    "ttle": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-side-list", "ion-avatar", "ion-card", "ion-card-title", "ion-icon", "ion-img", "ion-item", "ion-list", "ion-list-header", "ion-ripple-effect", "mynt-side-listing", "profile-pic"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-side-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntSideList);
      }
      break;
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-card-title":
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
    case "ion-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-list-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mynt-side-listing":
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

export { MyntSideList as M, defineCustomElement as d };
