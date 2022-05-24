'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');
const ionicGlobal = require('./ionic-global-9f581fac.js');
const overlays = require('./overlays-6c85c2cf.js');
const theme = require('./theme-98ccfc24.js');
require('./hardware-back-button-ca468aae.js');
require('./helpers-ff618d5e.js');

const selectPopoverCss = ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";

let SelectPopover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Array of options for the popover */
    this.options = [];
  }
  onSelect(ev) {
    const option = this.options.find(o => o.value === ev.target.value);
    if (option) {
      overlays.safeCall(option.handler);
    }
  }
  render() {
    const checkedOption = this.options.find(o => o.checked);
    const checkedValue = checkedOption ? checkedOption.value : undefined;
    return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("ion-list", null, this.header !== undefined && index.h("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) &&
      index.h("ion-item", null, index.h("ion-label", { class: "ion-text-wrap" }, this.subHeader !== undefined && index.h("h3", null, this.subHeader), this.message !== undefined && index.h("p", null, this.message))), index.h("ion-radio-group", { value: checkedValue }, this.options.map(option => index.h("ion-item", { class: theme.getClassMap(option.cssClass) }, index.h("ion-label", null, option.text), index.h("ion-radio", { value: option.value, disabled: option.disabled })))))));
  }
};
SelectPopover.style = selectPopoverCss;

exports.ion_select_popover = SelectPopover;
