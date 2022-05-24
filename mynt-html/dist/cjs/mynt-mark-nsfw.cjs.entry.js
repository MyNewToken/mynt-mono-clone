'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntMarkNsfwCss = ":host{display:block}";

let MyntMarkNsfw = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("mynt-make-post-dropdown", null, index.h("ion-item", null, index.h("ion-label", null, "Mark as NSFW?"), index.h("ion-checkbox", null))));
  }
};
MyntMarkNsfw.style = myntMarkNsfwCss;

exports.mynt_mark_nsfw = MyntMarkNsfw;
