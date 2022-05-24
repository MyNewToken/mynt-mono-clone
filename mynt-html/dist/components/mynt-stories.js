import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myntStoriesCss = ":host{display:block}";

let MyntStories$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return myntStoriesCss; }
};
MyntStories$1 = /*@__PURE__*/ proxyCustomElement(MyntStories$1, [1, "mynt-stories"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-stories"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-stories":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntStories$1);
      }
      break;
  } });
}

const MyntStories = MyntStories$1;
const defineCustomElement = defineCustomElement$1;

export { MyntStories, defineCustomElement };
