import { r as registerInstance, h, H as Host } from './index-a05ac311.js';

const myntProfileHeaderCss = ":host{display:block}";

let MyntProfileHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MyntProfileHeader.style = myntProfileHeaderCss;

export { MyntProfileHeader as mynt_profile_header };
