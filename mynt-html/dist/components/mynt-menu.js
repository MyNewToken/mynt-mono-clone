import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { f as popoverController } from './overlays.js';
import { d as defineCustomElement$b } from './button.js';
import { d as defineCustomElement$a } from './icon.js';
import { d as defineCustomElement$9 } from './label.js';
import { d as defineCustomElement$8 } from './ripple-effect.js';
import { d as defineCustomElement$7 } from './searchbar.js';
import { d as defineCustomElement$6 } from './tab.js';
import { d as defineCustomElement$5 } from './tab-bar.js';
import { d as defineCustomElement$4 } from './tab-button.js';
import { d as defineCustomElement$3 } from './tabs.js';
import { d as defineCustomElement$2 } from './mynt-logo2.js';

const myntMenuCss = ":host{display:block}";

let MyntMenu$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  async presentSignin(create_account_prop) {
    const popover = await popoverController.create({
      component: 'mynt-login',
      componentProps: { create_account: create_account_prop },
      //cssClass: 'my-custom-class',//////CHANGE
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentDMs() {
    const popover = await popoverController.create({
      component: 'mynt-dms',
      //cssClass: 'my-custom-class',//////CHANGE
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentNotis() {
    const popover = await popoverController.create({
      component: 'mynt-notifications',
      //cssClass: 'my-custom-class',//////CHANGE
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  //ask Ben about loading and different URLs
  //should I integrate this with a router?
  //should I put an ion-nav in each tab here?
  //dunno why the logo isn't working
  render() {
    return (h("ion-tabs", null, h("ion-tab", { tab: "mynts", component: "mynt-feed" }), h("ion-tab", { tab: "watch", component: "mynt-watch" }), h("ion-tab", { tab: "market", component: "mynt-market" }), h("ion-tab", { tab: "assets", component: "mynt-assets" }), h("ion-tab-bar", { slot: "top" }, h("mynt-logo", null), h("ion-label", null, "mynt"), h("ion-searchbar", null), h("ion-tab-button", { tab: "mynts" }, h("ion-label", null, "Mynts")), h("ion-tab-button", { tab: "watch" }, h("ion-label", null, "Media")), h("ion-tab-button", { tab: "market" }, h("ion-label", null, "Market")), h("ion-tab-button", { tab: "assets" }, h("ion-label", null, "Assets")), h("ion-button", { shape: "round", onClick: () => this.presentNotis() }, h("ion-icon", { name: "notifications-outline" })), h("ion-button", { shape: "round", onClick: () => this.presentDMs() }, h("ion-icon", { name: "chatbubbles-outline" })), h("ion-button", { onClick: () => this.presentSignin(true) }, "Create Account"), h("ion-button", { onClick: () => this.presentSignin(false) }, "Sign In"), h("ion-tab-button", { tab: "my-profile" }, h("ion-label", null, "Profile")))));
  }
  static get style() { return myntMenuCss; }
};
MyntMenu$1 = /*@__PURE__*/ proxyCustomElement(MyntMenu$1, [1, "mynt-menu"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-menu", "ion-button", "ion-icon", "ion-label", "ion-ripple-effect", "ion-searchbar", "ion-tab", "ion-tab-bar", "ion-tab-button", "ion-tabs", "mynt-logo"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-menu":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntMenu$1);
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-searchbar":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-tab":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-tab-bar":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-tab-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-tabs":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mynt-logo":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntMenu = MyntMenu$1;
const defineCustomElement = defineCustomElement$1;

export { MyntMenu, defineCustomElement };
