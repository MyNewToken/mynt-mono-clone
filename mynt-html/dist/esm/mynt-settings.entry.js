import { r as registerInstance, h, H as Host } from './index-a05ac311.js';

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
