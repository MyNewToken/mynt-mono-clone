import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { f as popoverController } from './overlays.js';
import { d as defineCustomElement$c } from './avatar.js';
import { d as defineCustomElement$b } from './card.js';
import { d as defineCustomElement$a } from './card-title.js';
import { d as defineCustomElement$9 } from './icon.js';
import { d as defineCustomElement$8 } from './img.js';
import { d as defineCustomElement$7 } from './item.js';
import { d as defineCustomElement$6 } from './list.js';
import { d as defineCustomElement$5 } from './list-header.js';
import { d as defineCustomElement$4 } from './ripple-effect.js';
import { d as defineCustomElement$3 } from './mynt-dm2.js';
import { d as defineCustomElement$2 } from './profile-pic2.js';

const myntDmsCss = ":host{display:block}";

let MyntDms$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.data = [];
  }
  populate_data() {
    this.data[0] = ["https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", "Logan"];
    this.data[1] = ["https://cryptologos.cc/logos/bitcoin-btc-logo.png", "BitMan"];
  }
  async presentChat(name_param) {
    const popover = await popoverController.create({
      component: 'mynt-chat',
      componentProps: { name: name_param },
      //cssClass: 'my-custom-class',//////CHANGE
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  render() {
    this.populate_data();
    return (h("ion-card", null, h("ion-list", null, h("ion-list-header", null, h("h1", null, "Direct Messages")), h("mynt-dm", { profImg: this.data[0][0], name: this.data[0][1], onClick: () => this.presentChat(this.data[0][1]) }), h("mynt-dm", { profImg: this.data[1][0], name: this.data[1][1] }))));
  }
  static get style() { return myntDmsCss; }
};
MyntDms$1 = /*@__PURE__*/ proxyCustomElement(MyntDms$1, [1, "mynt-dms", {
    "data": [16]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-dms", "ion-avatar", "ion-card", "ion-card-title", "ion-icon", "ion-img", "ion-item", "ion-list", "ion-list-header", "ion-ripple-effect", "mynt-dm", "profile-pic"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-dms":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntDms$1);
      }
      break;
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-card-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-img":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-item":
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
    case "mynt-dm":
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

const MyntDms = MyntDms$1;
const defineCustomElement = defineCustomElement$1;

export { MyntDms, defineCustomElement };
