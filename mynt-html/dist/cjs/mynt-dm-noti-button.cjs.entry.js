'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntDmNotiButtonCss = ":host{display:block}";

let MyntDmNotiButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MyntDmNotiButton.style = myntDmNotiButtonCss;

exports.mynt_dm_noti_button = MyntDmNotiButton;
