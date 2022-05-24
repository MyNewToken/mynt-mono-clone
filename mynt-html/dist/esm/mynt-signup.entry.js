import { r as registerInstance, h, H as Host } from './index-a05ac311.js';

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
