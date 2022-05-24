'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntListingCss = ":host{display:block}";

let MyntListing = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MyntListing.style = myntListingCss;

exports.mynt_listing = MyntListing;
