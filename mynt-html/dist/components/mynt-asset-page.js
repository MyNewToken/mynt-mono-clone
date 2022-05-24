import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myntAssetPageCss = ":host{display:block}";

let MyntAssetPage$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return myntAssetPageCss; }
};
MyntAssetPage$1 = /*@__PURE__*/ proxyCustomElement(MyntAssetPage$1, [1, "mynt-asset-page"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-asset-page"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-asset-page":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntAssetPage$1);
      }
      break;
  } });
}

const MyntAssetPage = MyntAssetPage$1;
const defineCustomElement = defineCustomElement$1;

export { MyntAssetPage, defineCustomElement };
