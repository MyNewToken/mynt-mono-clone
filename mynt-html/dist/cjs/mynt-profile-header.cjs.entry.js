'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntProfileHeaderCss = ":host{display:block}";

let MyntProfileHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MyntProfileHeader.style = myntProfileHeaderCss;

exports.mynt_profile_header = MyntProfileHeader;
