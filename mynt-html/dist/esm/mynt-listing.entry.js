import { r as registerInstance, h, H as Host } from './index-a05ac311.js';

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
