'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntDmButtonCss = ":host{display:block}";

let MyntDmButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MyntDmButton.style = myntDmButtonCss;

exports.mynt_dm_button = MyntDmButton;
