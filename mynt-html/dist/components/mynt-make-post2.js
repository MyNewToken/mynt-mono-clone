import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { f as popoverController } from './overlays.js';
import { d as defineCustomElement$c } from './avatar.js';
import { d as defineCustomElement$b } from './button.js';
import { d as defineCustomElement$a } from './card.js';
import { d as defineCustomElement$9 } from './icon.js';
import { d as defineCustomElement$8 } from './img.js';
import { d as defineCustomElement$7 } from './item.js';
import { d as defineCustomElement$6 } from './label.js';
import { d as defineCustomElement$5 } from './ripple-effect.js';
import { d as defineCustomElement$4 } from './select.js';
import { d as defineCustomElement$3 } from './select-option.js';
import { d as defineCustomElement$2 } from './toggle.js';
import { d as defineCustomElement$1 } from './profile-pic2.js';

const myntMakePostCss = ":host{display:block}.make-post{--color:rgba(48,51,49,1)}";

let MyntMakePost = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.createACoin = false;
    this.viewRestrictions = false;
    this.sellAsset = false;
    this.sendAsset = false;
    this.markNSFW = false;
  }
  /**
    async newToggleController(changed) {
      if (this.createACoin) {
        this.presentCreateCoin();
      } else if (this.viewRestrictions) {
        this.presentViewingRestrictions();
      } else if (this.sellAsset) {
        this.presentSellAsset();
      } else if (this.sendAsset) {
        this.presentSendAsset();
      } else if (this.markNSFW) {
        this.presentMarkNSFW();
      }
    }
  **/
  async presentCreateCoin(ev) {
    if (!this.createACoin) {
      this.createACoin = ev.detail.checked;
      const popover = await popoverController.create({
        component: 'mynt-create-coin',
        //cssClass: 'my-custom-class',//////CHANGE
        translucent: true
      });
      await popover.present();
      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
    this.createACoin = ev.detail.checked;
  }
  async presentViewingRestrictions(ev) {
    if (!this.markNSFW) {
      const popover = await popoverController.create({
        component: 'mynt-viewing-restrictions',
        //cssClass: 'my-custom-class',//////CHANGE
        translucent: true
      });
      await popover.present();
      const { role } = await popover.onDidDismiss();
      this.viewRestrictions = false;
      console.log('onDidDismiss resolved with role', role);
    }
    this.markNSFW = ev.detail.checked;
  }
  async presentSellAsset(ev) {
    if (!this.sellAsset) {
      const popover = await popoverController.create({
        component: 'mynt-sell-asset',
        //cssClass: 'my-custom-class',//////CHANGE
        translucent: true
      });
      await popover.present();
      const { role } = await popover.onDidDismiss();
      this.sellAsset = false;
      console.log('onDidDismiss resolved with role', role);
    }
    this.sellAsset = ev.detail.checked;
  }
  async presentSendAsset(ev) {
    if (!this.sendAsset) {
      const popover = await popoverController.create({
        component: 'mynt-send-asset',
        //cssClass: 'my-custom-class',//////CHANGE
        translucent: true
      });
      await popover.present();
      const { role } = await popover.onDidDismiss();
      this.sendAsset = false;
      console.log('onDidDismiss resolved with role', role);
    }
    this.sendAsset = ev.detail.checked;
  }
  async presentMarkNSFW(ev) {
    if (!this.markNSFW) {
      const popover = await popoverController.create({
        component: 'mynt-mark-nsfw',
        //cssClass: 'my-custom-class',//////CHANGE
        translucent: true
      });
      await popover.present();
      const { role } = await popover.onDidDismiss();
      this.markNSFW = false;
      console.log('onDidDismiss resolved with role', role);
    }
    this.markNSFW = ev.detail.checked;
  }
  render() {
    return (h("ion-card", { class: "make-post" }, h("ion-item", null, h("profile-pic", { source: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg" }), h("ion-button", { shape: "round", expand: "block" }, "What's on your mind?"), h("ion-select", { placeholder: "Public" }, h("ion-select-option", null, "Public"), h("ion-select-option", null, "Private")), h("ion-button", null, "Mynt")), h("ion-item", null, h("ion-button", { shape: "round" }, h("ion-icon", { name: "folder-outline" }), h("ion-label", null, "Add File")), h("ion-label", null, "No files currently added to mynt")), h("ion-item", null, h("ion-toggle", { checked: this.createACoin, onIonChange: (ev) => this.presentCreateCoin(ev) }), h("ion-label", null, "Create a Coin"), h("ion-toggle", { checked: this.viewRestrictions, onIonChange: (ev) => this.presentViewingRestrictions(ev) }), h("ion-label", null, "Viewing Restrictions"), h("ion-toggle", { checked: this.sellAsset, onIonChange: (ev) => this.presentSellAsset(ev) }), h("ion-label", null, "Sell an Asset"), h("ion-toggle", { checked: this.sendAsset, onIonChange: (ev) => this.presentSendAsset(ev) }), h("ion-label", null, "Send an Asset"), h("ion-toggle", { checked: this.markNSFW, onIonChange: (ev) => this.presentMarkNSFW(ev) }), h("ion-label", null, "Mark as NSFW"))));
  }
  static get style() { return myntMakePostCss; }
};
MyntMakePost = /*@__PURE__*/ proxyCustomElement(MyntMakePost, [1, "mynt-make-post", {
    "createACoin": [32],
    "viewRestrictions": [32],
    "sellAsset": [32],
    "sendAsset": [32],
    "markNSFW": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-make-post", "ion-avatar", "ion-button", "ion-card", "ion-icon", "ion-img", "ion-item", "ion-label", "ion-ripple-effect", "ion-select", "ion-select-option", "ion-toggle", "profile-pic"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-make-post":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntMakePost);
      }
      break;
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-card":
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
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-toggle":
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

export { MyntMakePost as M, defineCustomElement as d };
