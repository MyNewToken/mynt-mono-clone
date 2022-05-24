import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntSideListingCss = ":host{display:block}";

let MyntSideListing = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.image = "";
    this.text = "";
  }
  render() {
    return (h("ion-item", null, h("profile-pic", { source: this.image }), h("ion-card-title", null, this.text)));
  }
};
MyntSideListing.style = myntSideListingCss;

export { MyntSideListing as mynt_side_listing };
