import { r as registerInstance, h } from './index-a05ac311.js';

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

const myntViewingRestrictionsCss = ":host{display:block}";

let MyntViewingRestrictions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("mynt-make-post-dropdown", null, h("ion-item", null, h("ion-input", { placeholder: "Search all coins" }), h("ion-button", null, "Search")), h("ion-list", null, h("mynt-asset-item", null)), h("slot", null)));
  }
};
MyntViewingRestrictions.style = myntViewingRestrictionsCss;

export { MyntAssetItem as mynt_asset_item, MyntViewingRestrictions as mynt_viewing_restrictions };
