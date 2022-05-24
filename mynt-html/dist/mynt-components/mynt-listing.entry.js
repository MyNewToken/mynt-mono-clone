import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';

const myntListingCss = ":host{display:block}";

let MyntListing = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MyntListing.style = myntListingCss;

export { MyntListing as mynt_listing };
