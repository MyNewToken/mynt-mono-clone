import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { g as getIonMode } from './ionic-global.js';
import { s as safeCall } from './overlays.js';
import { g as getClassMap } from './theme.js';
import { d as defineCustomElement$9 } from './icon.js';
import { d as defineCustomElement$8 } from './item.js';
import { d as defineCustomElement$7 } from './label.js';
import { d as defineCustomElement$6 } from './list.js';
import { d as defineCustomElement$5 } from './list-header.js';
import { d as defineCustomElement$4 } from './radio.js';
import { d as defineCustomElement$3 } from './radio-group.js';
import { d as defineCustomElement$2 } from './ripple-effect.js';

const selectPopoverCss = ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";

let SelectPopover = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /** Array of options for the popover */
    this.options = [];
  }
  onSelect(ev) {
    const option = this.options.find(o => o.value === ev.target.value);
    if (option) {
      safeCall(option.handler);
    }
  }
  render() {
    const checkedOption = this.options.find(o => o.checked);
    const checkedValue = checkedOption ? checkedOption.value : undefined;
    return (h(Host, { class: getIonMode(this) }, h("ion-list", null, this.header !== undefined && h("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) &&
      h("ion-item", null, h("ion-label", { class: "ion-text-wrap" }, this.subHeader !== undefined && h("h3", null, this.subHeader), this.message !== undefined && h("p", null, this.message))), h("ion-radio-group", { value: checkedValue }, this.options.map(option => h("ion-item", { class: getClassMap(option.cssClass) }, h("ion-label", null, option.text), h("ion-radio", { value: option.value, disabled: option.disabled })))))));
  }
  static get style() { return selectPopoverCss; }
};
SelectPopover = /*@__PURE__*/ proxyCustomElement(SelectPopover, [2, "ion-select-popover", {
    "header": [1],
    "subHeader": [1, "sub-header"],
    "message": [1],
    "options": [16]
  }, [[0, "ionChange", "onSelect"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-select-popover", "ion-icon", "ion-item", "ion-label", "ion-list", "ion-list-header", "ion-radio", "ion-radio-group", "ion-ripple-effect"];
  components.forEach(tagName => { switch (tagName) {
    case "ion-select-popover":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SelectPopover);
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ion-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ion-list-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ion-radio":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ion-radio-group":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IonSelectPopover = SelectPopover;
const defineCustomElement = defineCustomElement$1;

export { IonSelectPopover, defineCustomElement };
