import { r as registerInstance, h, H as Host } from './index-a05ac311.js';

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
