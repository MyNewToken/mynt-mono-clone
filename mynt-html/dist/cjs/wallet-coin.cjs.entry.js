'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const walletCoinCss = ":host{display:block}";

let WalletCoin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.coinImg = "";
    this.coinTitle = "";
  }
  render() {
    return (index.h("ion-item", null, index.h("profile-pic", { source: this.coinImg }), index.h("ion-card-title", null, this.coinTitle)));
  }
};
WalletCoin.style = walletCoinCss;

exports.wallet_coin = WalletCoin;
