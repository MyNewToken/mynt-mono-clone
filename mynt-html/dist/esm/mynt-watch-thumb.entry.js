import { r as registerInstance, h } from './index-a05ac311.js';

const myntWatchThumbCss = ":host{display:block}";

let MyntWatchThumb = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-card", null, h("ion-card-header", null, h("ion-thumbnail", null, h("ion-img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" }))), h("ion-card-title", null, "Watch thumbnail title"), h("ion-card-subtitle", null, "Watch thumbnail creator")));
  }
};
MyntWatchThumb.style = myntWatchThumbCss;

export { MyntWatchThumb as mynt_watch_thumb };
