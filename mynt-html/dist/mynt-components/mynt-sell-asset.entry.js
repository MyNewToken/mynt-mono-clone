import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntSellAssetCss = ":host{display:block}";

let MyntSellAsset = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("mynt-viewing-restrictions", null));
  }
};
MyntSellAsset.style = myntSellAssetCss;

export { MyntSellAsset as mynt_sell_asset };
