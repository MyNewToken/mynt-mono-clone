'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntStoriesCss = ":host{display:block}";

let MyntStories = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MyntStories.style = myntStoriesCss;

exports.mynt_stories = MyntStories;
