'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntTradeModuleCss = ":host{display:block}";

let MyntTradeModule = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MyntTradeModule.style = myntTradeModuleCss;

exports.mynt_trade_module = MyntTradeModule;
