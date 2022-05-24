import { r as registerInstance, i as h } from './index-beea9e3c.js';

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
