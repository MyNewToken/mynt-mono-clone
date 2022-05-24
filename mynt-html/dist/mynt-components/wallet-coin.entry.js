import { r as registerInstance, i as h } from './index-beea9e3c.js';

const walletCoinCss = ":host{display:block}";

let WalletCoin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.coinImg = "";
    this.coinTitle = "";
  }
  render() {
    return (h("ion-item", null, h("profile-pic", { source: this.coinImg }), h("ion-card-title", null, this.coinTitle)));
  }
};
WalletCoin.style = walletCoinCss;

export { WalletCoin as wallet_coin };
