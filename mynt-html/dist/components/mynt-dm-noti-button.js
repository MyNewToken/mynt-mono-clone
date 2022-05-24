import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myntDmNotiButtonCss = ":host{display:block}";

let MyntDmNotiButton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return myntDmNotiButtonCss; }
};
MyntDmNotiButton$1 = /*@__PURE__*/ proxyCustomElement(MyntDmNotiButton$1, [1, "mynt-dm-noti-button"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-dm-noti-button"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-dm-noti-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntDmNotiButton$1);
      }
      break;
  } });
}

const MyntDmNotiButton = MyntDmNotiButton$1;
const defineCustomElement = defineCustomElement$1;

export { MyntDmNotiButton, defineCustomElement };
