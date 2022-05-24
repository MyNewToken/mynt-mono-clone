import { r as registerInstance, h } from './index-a05ac311.js';

const myntMakePostDropdownCss = ":host{display:block}";

let MyntMakePostDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-card", null, h("slot", null)));
  }
};
MyntMakePostDropdown.style = myntMakePostDropdownCss;

export { MyntMakePostDropdown as mynt_make_post_dropdown };
