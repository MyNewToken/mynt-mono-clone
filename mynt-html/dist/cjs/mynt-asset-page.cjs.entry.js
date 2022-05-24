'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntAssetPageCss = ":host{display:block}";

let MyntAssetPage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MyntAssetPage.style = myntAssetPageCss;

exports.mynt_asset_page = MyntAssetPage;
