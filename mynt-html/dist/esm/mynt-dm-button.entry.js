import { r as registerInstance, h, H as Host } from './index-a05ac311.js';

const myntDmButtonCss = ":host{display:block}";

let MyntDmButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MyntDmButton.style = myntDmButtonCss;

export { MyntDmButton as mynt_dm_button };
