import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';

const myntDmNotiButtonCss = ":host{display:block}";

let MyntDmNotiButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MyntDmNotiButton.style = myntDmNotiButtonCss;

export { MyntDmNotiButton as mynt_dm_noti_button };
