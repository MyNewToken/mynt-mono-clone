import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntAssetCss = ":host{display:block}";

let MyntAsset = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-card", null));
  }
};
MyntAsset.style = myntAssetCss;

export { MyntAsset as mynt_asset };
