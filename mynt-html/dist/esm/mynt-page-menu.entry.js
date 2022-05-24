import { r as registerInstance, h, H as Host } from './index-a05ac311.js';

const myntPageMenuCss = ":host{display:block}";

let MyntPageMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MyntPageMenu.style = myntPageMenuCss;

export { MyntPageMenu as mynt_page_menu };
