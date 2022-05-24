import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntProfileCss = ":host{display:block}";

let MyntProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("mynt-page", null));
  }
};
MyntProfile.style = myntProfileCss;

export { MyntProfile as mynt_profile };
