'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntStoryCss = ":host{display:block}";

let MyntStory = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MyntStory.style = myntStoryCss;

exports.mynt_story = MyntStory;
