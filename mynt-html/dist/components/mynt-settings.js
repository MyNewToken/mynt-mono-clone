import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myntSettingsCss = ":host{display:block}";

let MyntSettings$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return myntSettingsCss; }
};
MyntSettings$1 = /*@__PURE__*/ proxyCustomElement(MyntSettings$1, [1, "mynt-settings"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-settings"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-settings":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntSettings$1);
      }
      break;
  } });
}

const MyntSettings = MyntSettings$1;
const defineCustomElement = defineCustomElement$1;

export { MyntSettings, defineCustomElement };
