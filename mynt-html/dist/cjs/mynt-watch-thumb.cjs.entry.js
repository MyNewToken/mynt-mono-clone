'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntWatchThumbCss = ":host{display:block}";

let MyntWatchThumb = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ion-card", null, index.h("ion-card-header", null, index.h("ion-thumbnail", null, index.h("ion-img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" }))), index.h("ion-card-title", null, "Watch thumbnail title"), index.h("ion-card-subtitle", null, "Watch thumbnail creator")));
  }
};
MyntWatchThumb.style = myntWatchThumbCss;

exports.mynt_watch_thumb = MyntWatchThumb;
