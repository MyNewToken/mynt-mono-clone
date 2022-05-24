import { r as registerInstance, h, H as Host } from './index-a05ac311.js';

const myntStoryCss = ":host{display:block}";

let MyntStory = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MyntStory.style = myntStoryCss;

export { MyntStory as mynt_story };
