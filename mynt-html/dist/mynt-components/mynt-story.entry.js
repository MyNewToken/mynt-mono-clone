import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';

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
