'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntSellAssetCss = ":host{display:block}";

let MyntSellAsset = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("mynt-viewing-restrictions", null));
  }
};
MyntSellAsset.style = myntSellAssetCss;

exports.mynt_sell_asset = MyntSellAsset;
