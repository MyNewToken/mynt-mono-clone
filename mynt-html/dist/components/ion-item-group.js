import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { g as getIonMode } from './ionic-global.js';

const itemGroupIosCss = "ion-item-group{display:block}";

const itemGroupMdCss = "ion-item-group{display:block}";

let ItemGroup = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { role: "group", class: {
        [mode]: true,
        // Used internally for styling
        [`item-group-${mode}`]: true,
        'item': true
      } }));
  }
  static get style() { return {
    ios: itemGroupIosCss,
    md: itemGroupMdCss
  }; }
};
ItemGroup = /*@__PURE__*/ proxyCustomElement(ItemGroup, [32, "ion-item-group"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-item-group"];
  components.forEach(tagName => { switch (tagName) {
    case "ion-item-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ItemGroup);
      }
      break;
  } });
}

const IonItemGroup = ItemGroup;
const defineCustomElement = defineCustomElement$1;

export { IonItemGroup, defineCustomElement };
