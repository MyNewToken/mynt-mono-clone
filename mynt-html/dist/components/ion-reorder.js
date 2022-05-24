import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { g as getIonMode } from './ionic-global.js';
import { d as defineCustomElement$2 } from './icon.js';

const reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";

const reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";

let Reorder = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  onClick(ev) {
    const reorderGroup = this.el.closest('ion-reorder-group');
    ev.preventDefault();
    // Only stop event propagation if the reorder is inside of an enabled
    // reorder group. This allows interaction with clickable children components.
    if (!reorderGroup || !reorderGroup.disabled) {
      ev.stopImmediatePropagation();
    }
  }
  render() {
    const mode = getIonMode(this);
    const reorderIcon = mode === 'ios' ? 'reorder-three-outline' : 'reorder-two-sharp';
    return (h(Host, { class: mode }, h("slot", null, h("ion-icon", { name: reorderIcon, lazy: false, class: "reorder-icon", part: "icon" }))));
  }
  get el() { return this; }
  static get style() { return {
    ios: reorderIosCss,
    md: reorderMdCss
  }; }
};
Reorder = /*@__PURE__*/ proxyCustomElement(Reorder, [33, "ion-reorder", undefined, [[2, "click", "onClick"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-reorder", "ion-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ion-reorder":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Reorder);
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IonReorder = Reorder;
const defineCustomElement = defineCustomElement$1;

export { IonReorder, defineCustomElement };
