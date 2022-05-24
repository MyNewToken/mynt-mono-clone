import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { g as getIonMode } from './ionic-global.js';

const avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";

const avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";

let Avatar = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
  static get style() { return {
    ios: avatarIosCss,
    md: avatarMdCss
  }; }
};
Avatar = /*@__PURE__*/ proxyCustomElement(Avatar, [33, "ion-avatar"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-avatar"];
  components.forEach(tagName => { switch (tagName) {
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Avatar);
      }
      break;
  } });
}

export { Avatar as A, defineCustomElement as d };
