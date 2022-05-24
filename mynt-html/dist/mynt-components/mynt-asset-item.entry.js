import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntAssetItemCss = ":host{display:block}";

let MyntAssetItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-item", null, h("ion-checkbox", null), h("ion-label", null, "Logan Coin"), h("ion-label", null, "Quantity: "), h("ion-input", null), h("ion-toggle", null, "All")));
  }
};
MyntAssetItem.style = myntAssetItemCss;

export { MyntAssetItem as mynt_asset_item };
