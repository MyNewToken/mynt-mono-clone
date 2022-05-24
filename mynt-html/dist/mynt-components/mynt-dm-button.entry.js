import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';

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
