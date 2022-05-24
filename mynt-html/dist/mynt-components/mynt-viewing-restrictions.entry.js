import { r as registerInstance, i as h } from './index-beea9e3c.js';

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

export { MyntViewingRestrictions as mynt_viewing_restrictions };
