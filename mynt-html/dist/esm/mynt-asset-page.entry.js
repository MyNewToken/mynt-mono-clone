import { r as registerInstance, h, H as Host } from './index-a05ac311.js';

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
