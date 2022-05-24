import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$c } from './avatar.js';
import { d as defineCustomElement$b } from './card.js';
import { d as defineCustomElement$a } from './card-title.js';
import { d as defineCustomElement$9 } from './icon.js';
import { d as defineCustomElement$8 } from './img.js';
import { d as defineCustomElement$7 } from './item.js';
import { d as defineCustomElement$6 } from './list.js';
import { d as defineCustomElement$5 } from './list-header.js';
import { d as defineCustomElement$4 } from './ripple-effect.js';
import { d as defineCustomElement$3 } from './profile-pic2.js';
import { d as defineCustomElement$2 } from './wallet-coin2.js';

const myntWalletCss = ":host{display:block}";

let MyntWallet$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  //am going to need to make this interactable... probably pass in a list
  render() {
    return (h("ion-card", null, h("ion-list", null, h("ion-list-header", null, h("h1", null, "Wallet")), h("wallet-coin", { coinImg: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", coinTitle: "LoganCoin" }), h("wallet-coin", { coinImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", coinTitle: "CryptoCoin" }))));
  }
  static get style() { return myntWalletCss; }
};
MyntWallet$1 = /*@__PURE__*/ proxyCustomElement(MyntWallet$1, [1, "mynt-wallet"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-wallet", "ion-avatar", "ion-card", "ion-card-title", "ion-icon", "ion-img", "ion-item", "ion-list", "ion-list-header", "ion-ripple-effect", "profile-pic", "wallet-coin"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-wallet":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntWallet$1);
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
    case "profile-pic":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "wallet-coin":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntWallet = MyntWallet$1;
const defineCustomElement = defineCustomElement$1;

export { MyntWallet, defineCustomElement };
