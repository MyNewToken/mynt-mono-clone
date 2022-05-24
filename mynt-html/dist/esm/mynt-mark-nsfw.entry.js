import { r as registerInstance, h } from './index-a05ac311.js';

const myntMarkNsfwCss = ":host{display:block}";

let MyntMarkNsfw = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("mynt-make-post-dropdown", null, h("ion-item", null, h("ion-label", null, "Mark as NSFW?"), h("ion-checkbox", null))));
  }
};
MyntMarkNsfw.style = myntMarkNsfwCss;

export { MyntMarkNsfw as mynt_mark_nsfw };
