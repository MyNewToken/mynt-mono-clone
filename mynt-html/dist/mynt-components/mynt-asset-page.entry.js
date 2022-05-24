import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';

const myntAssetPageCss = ":host{display:block}";

let MyntAssetPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MyntAssetPage.style = myntAssetPageCss;

export { MyntAssetPage as mynt_asset_page };
