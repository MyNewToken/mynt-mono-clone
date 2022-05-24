import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './avatar.js';
import { d as defineCustomElement$1 } from './img.js';

const profilePicCss = ":host{display:block}";

let ProfilePic = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.source = "";
  }
  render() {
    return [
      h("ion-avatar", null, h("ion-img", { src: this.source }))
    ];
  }
  static get style() { return profilePicCss; }
};
ProfilePic = /*@__PURE__*/ proxyCustomElement(ProfilePic, [0, "profile-pic", {
    "source": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["profile-pic", "ion-avatar", "ion-img"];
  components.forEach(tagName => { switch (tagName) {
    case "profile-pic":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ProfilePic);
      }
      break;
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ion-img":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { ProfilePic as P, defineCustomElement as d };
