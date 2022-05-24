import { Component, h } from '@stencil/core';
export class MyntWallet {
  //am going to need to make this interactable... probably pass in a list
  render() {
    return (h("ion-card", null,
      h("ion-list", null,
        h("ion-list-header", null,
          h("h1", null, "Wallet")),
        h("wallet-coin", { coinImg: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", coinTitle: "LoganCoin" }),
        h("wallet-coin", { coinImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", coinTitle: "CryptoCoin" }))));
  }
  static get is() { return "mynt-wallet"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-wallet.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-wallet.css"]
  }; }
}
