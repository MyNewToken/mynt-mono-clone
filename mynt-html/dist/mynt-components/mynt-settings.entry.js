import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';

const myntSettingsCss = ":host{display:block}";

let MyntSettings = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MyntSettings.style = myntSettingsCss;

export { MyntSettings as mynt_settings };
