import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';

const myntStoriesCss = ":host{display:block}";

let MyntStories = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MyntStories.style = myntStoriesCss;

export { MyntStories as mynt_stories };
