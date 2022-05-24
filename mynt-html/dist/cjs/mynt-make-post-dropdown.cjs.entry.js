'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntMakePostDropdownCss = ":host{display:block}";

let MyntMakePostDropdown = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ion-card", null, index.h("slot", null)));
  }
};
MyntMakePostDropdown.style = myntMakePostDropdownCss;

exports.mynt_make_post_dropdown = MyntMakePostDropdown;
