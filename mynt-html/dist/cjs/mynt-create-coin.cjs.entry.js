'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntCreateCoinCss = ":host{display:block}";

let MyntCreateCoin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("mynt-make-post-dropdown", null, index.h("ion-list", null, index.h("ion-item", null, index.h("ion-label", null, "Coin Name"), " ", index.h("ion-input", null)), index.h("ion-item", null, index.h("ion-label", null, "Ticker"), " ", index.h("ion-input", null)), index.h("ion-item", null, index.h("ion-label", null, "Price/Coin"), " ", index.h("ion-input", null), " ", index.h("ion-label", null, "Quantity"), " ", index.h("ion-input", null)), index.h("ion-item", null, index.h("ion-label", null, "Number of coins for sale on this post"), " ", index.h("ion-input", null), " ", index.h("ion-toggle", null, "Unlimited Quantity")), index.h("ion-item", null, index.h("ion-label", null, "Coin Image"), " ", index.h("ion-button", null, index.h("ion-icon", { name: "folder-outline" }), "Upload File")))));
  }
};
MyntCreateCoin.style = myntCreateCoinCss;

exports.mynt_create_coin = MyntCreateCoin;
