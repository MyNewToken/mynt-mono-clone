import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const myntStoryCss = ":host{display:block}";

let MyntStory$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return myntStoryCss; }
};
MyntStory$1 = /*@__PURE__*/ proxyCustomElement(MyntStory$1, [1, "mynt-story"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-story"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-story":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntStory$1);
      }
      break;
  } });
}

const MyntStory = MyntStory$1;
const defineCustomElement = defineCustomElement$1;

export { MyntStory, defineCustomElement };
