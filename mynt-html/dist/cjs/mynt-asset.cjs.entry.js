'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntAssetCss = ":host{display:block}";

let MyntAsset = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ion-card", null));
  }
};
MyntAsset.style = myntAssetCss;

exports.mynt_asset = MyntAsset;
