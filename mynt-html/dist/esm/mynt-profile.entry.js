import { r as registerInstance, h } from './index-a05ac311.js';

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
