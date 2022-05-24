import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { f as popoverController } from './overlays.js';
import { d as defineCustomElement$d } from './avatar.js';
import { d as defineCustomElement$c } from './button.js';
import { d as defineCustomElement$b } from './card.js';
import { d as defineCustomElement$a } from './card-content.js';
import { d as defineCustomElement$9 } from './card-header.js';
import { d as defineCustomElement$8 } from './card-subtitle.js';
import { d as defineCustomElement$7 } from './card-title.js';
import { d as defineCustomElement$6 } from './icon.js';
import { d as defineCustomElement$5 } from './img.js';
import { d as defineCustomElement$4 } from './item.js';
import { d as defineCustomElement$3 } from './ripple-effect.js';
import { d as defineCustomElement$2 } from './thumbnail.js';
import { d as defineCustomElement$1 } from './profile-pic2.js';

const myntPostCss = ":host{display:block}";

let MyntPost = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.name = "";
    this.user = "";
    this.profPicSrc = "";
    this.text = "";
    this.mediaPicSrc = "";
  }
  //I don't think I will be able to use popover for comments because the customization capabilities won't be there until ionic v6
  //I think a framework will be required for this.
  //I'll just use this to look at the comments
  async presentComments() {
    const popover = await popoverController.create({
      component: 'mynt-comment-section',
      //cssClass: 'my-custom-class',//////CHANGE
      showBackdrop: false,
      //event: ev,
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  render() {
    return (h("ion-card", null, h("ion-card-header", null, h("ion-item", null, h("profile-pic", { source: this.profPicSrc }), h("ion-card-title", null, this.name)), h("ion-card-subtitle", null, this.user)), h("ion-card-content", null, this.text), h("ion-card-content", null, h("ion-thumbnail", null, h("ion-img", { src: this.mediaPicSrc }))), h("ion-item", null, h("ion-button", { slot: "start" }, h("ion-icon", { name: "thumbs-up-outline" })), h("ion-button", { slot: "start", onClick: () => this.presentComments() }, h("ion-icon", { name: "chatbox-outline" })), h("ion-button", { slot: "start" }, h("ion-icon", { name: "repeat-outline" })), h("ion-button", { slot: "end" }, "Tip"), h("ion-button", { slot: "end" }, "Buy Coin"))));
  }
  static get style() { return myntPostCss; }
};
MyntPost = /*@__PURE__*/ proxyCustomElement(MyntPost, [1, "mynt-post", {
    "name": [1],
    "user": [1],
    "profPicSrc": [1, "prof-pic-src"],
    "text": [1],
    "mediaPicSrc": [1, "media-pic-src"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-post", "ion-avatar", "ion-button", "ion-card", "ion-card-content", "ion-card-header", "ion-card-subtitle", "ion-card-title", "ion-icon", "ion-img", "ion-item", "ion-ripple-effect", "ion-thumbnail", "profile-pic"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-post":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntPost);
      }
      break;
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-card-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-card-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-card-subtitle":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-card-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-img":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-thumbnail":
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

export { MyntPost as M, defineCustomElement as d };
