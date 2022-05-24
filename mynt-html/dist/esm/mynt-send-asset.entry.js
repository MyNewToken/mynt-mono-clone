import { r as registerInstance, h } from './index-a05ac311.js';

const myntSendAssetCss = ":host{display:block}";

let MyntSendAsset = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("mynt-viewing-restrictions", null, h("ion-input", { placeholder: "Send to..." })));
  }
};
MyntSendAsset.style = myntSendAssetCss;

export { MyntSendAsset as mynt_send_asset };
