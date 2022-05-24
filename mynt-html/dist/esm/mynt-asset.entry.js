import { r as registerInstance, h } from './index-a05ac311.js';

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
