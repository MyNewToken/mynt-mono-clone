import { r as registerInstance, h } from './index-a05ac311.js';

const myntCreateCoinCss = ":host{display:block}";

let MyntCreateCoin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("mynt-make-post-dropdown", null, h("ion-list", null, h("ion-item", null, h("ion-label", null, "Coin Name"), " ", h("ion-input", null)), h("ion-item", null, h("ion-label", null, "Ticker"), " ", h("ion-input", null)), h("ion-item", null, h("ion-label", null, "Price/Coin"), " ", h("ion-input", null), " ", h("ion-label", null, "Quantity"), " ", h("ion-input", null)), h("ion-item", null, h("ion-label", null, "Number of coins for sale on this post"), " ", h("ion-input", null), " ", h("ion-toggle", null, "Unlimited Quantity")), h("ion-item", null, h("ion-label", null, "Coin Image"), " ", h("ion-button", null, h("ion-icon", { name: "folder-outline" }), "Upload File")))));
  }
};
MyntCreateCoin.style = myntCreateCoinCss;

export { MyntCreateCoin as mynt_create_coin };
