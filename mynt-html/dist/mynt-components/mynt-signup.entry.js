import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';

const myntSignupCss = ":host{display:block}";

let MyntSignup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MyntSignup.style = myntSignupCss;

export { MyntSignup as mynt_signup };
