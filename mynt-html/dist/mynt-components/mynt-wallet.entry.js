import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntWalletCss = ":host{display:block}";

let MyntWallet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  //am going to need to make this interactable... probably pass in a list
  render() {
    return (h("ion-card", null, h("ion-list", null, h("ion-list-header", null, h("h1", null, "Wallet")), h("wallet-coin", { coinImg: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", coinTitle: "LoganCoin" }), h("wallet-coin", { coinImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", coinTitle: "CryptoCoin" }))));
  }
};
MyntWallet.style = myntWalletCss;

export { MyntWallet as mynt_wallet };
