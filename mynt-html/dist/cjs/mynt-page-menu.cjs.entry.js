'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntPageMenuCss = ":host{display:block}";

let MyntPageMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MyntPageMenu.style = myntPageMenuCss;

exports.mynt_page_menu = MyntPageMenu;
