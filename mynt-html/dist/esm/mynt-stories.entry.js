import { r as registerInstance, h, H as Host } from './index-a05ac311.js';

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
