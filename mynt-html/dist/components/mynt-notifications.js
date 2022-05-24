import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$b } from './avatar.js';
import { d as defineCustomElement$a } from './icon.js';
import { d as defineCustomElement$9 } from './img.js';
import { d as defineCustomElement$8 } from './item.js';
import { d as defineCustomElement$7 } from './label.js';
import { d as defineCustomElement$6 } from './list.js';
import { d as defineCustomElement$5 } from './list-header.js';
import { d as defineCustomElement$4 } from './ripple-effect.js';
import { d as defineCustomElement$3 } from './mynt-noti2.js';
import { d as defineCustomElement$2 } from './profile-pic2.js';

const myntNotificationsCss = ":host{display:block}";

let MyntNotifications$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("ion-list", null, h("ion-list-header", null, h("h1", null, "Notifications")), h("mynt-noti", { assImg: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", ttle: "Logan posted", txt: "Logan said xyz..." }), h("mynt-noti", { assImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", ttle: "Sale", txt: "You sold xyz..." })));
  }
  static get style() { return myntNotificationsCss; }
};
MyntNotifications$1 = /*@__PURE__*/ proxyCustomElement(MyntNotifications$1, [1, "mynt-notifications"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-notifications", "ion-avatar", "ion-icon", "ion-img", "ion-item", "ion-label", "ion-list", "ion-list-header", "ion-ripple-effect", "mynt-noti", "profile-pic"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-notifications":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntNotifications$1);
      }
      break;
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-img":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-list-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "mynt-noti":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "profile-pic":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntNotifications = MyntNotifications$1;
const defineCustomElement = defineCustomElement$1;

export { MyntNotifications, defineCustomElement };
