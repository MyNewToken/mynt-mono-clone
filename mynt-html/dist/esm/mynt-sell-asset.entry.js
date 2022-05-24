import { r as registerInstance, h } from './index-a05ac311.js';

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
