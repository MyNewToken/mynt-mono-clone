import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';

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
