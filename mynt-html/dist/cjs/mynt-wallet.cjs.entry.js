'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntWalletCss = ":host{display:block}";

let MyntWallet = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  //am going to need to make this interactable... probably pass in a list
  render() {
    return (index.h("ion-card", null, index.h("ion-list", null, index.h("ion-list-header", null, index.h("h1", null, "Wallet")), index.h("wallet-coin", { coinImg: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", coinTitle: "LoganCoin" }), index.h("wallet-coin", { coinImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", coinTitle: "CryptoCoin" }))));
  }
};
MyntWallet.style = myntWalletCss;

exports.mynt_wallet = MyntWallet;
