'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntAssetItemCss = ":host{display:block}";

let MyntAssetItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ion-item", null, index.h("ion-checkbox", null), index.h("ion-label", null, "Logan Coin"), index.h("ion-label", null, "Quantity: "), index.h("ion-input", null), index.h("ion-toggle", null, "All")));
  }
};
MyntAssetItem.style = myntAssetItemCss;

const myntViewingRestrictionsCss = ":host{display:block}";

let MyntViewingRestrictions = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("mynt-make-post-dropdown", null, index.h("ion-item", null, index.h("ion-input", { placeholder: "Search all coins" }), index.h("ion-button", null, "Search")), index.h("ion-list", null, index.h("mynt-asset-item", null)), index.h("slot", null)));
  }
};
MyntViewingRestrictions.style = myntViewingRestrictionsCss;

exports.mynt_asset_item = MyntAssetItem;
exports.mynt_viewing_restrictions = MyntViewingRestrictions;
