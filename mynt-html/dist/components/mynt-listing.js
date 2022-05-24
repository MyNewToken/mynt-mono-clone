import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myntListingCss = ":host{display:block}";

let MyntListing$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return myntListingCss; }
};
MyntListing$1 = /*@__PURE__*/ proxyCustomElement(MyntListing$1, [1, "mynt-listing"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-listing"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-listing":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntListing$1);
      }
      break;
  } });
}

const MyntListing = MyntListing$1;
const defineCustomElement = defineCustomElement$1;

export { MyntListing, defineCustomElement };
