'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntSendAssetCss = ":host{display:block}";

let MyntSendAsset = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("mynt-viewing-restrictions", null, index.h("ion-input", { placeholder: "Send to..." })));
  }
};
MyntSendAsset.style = myntSendAssetCss;

exports.mynt_send_asset = MyntSendAsset;
