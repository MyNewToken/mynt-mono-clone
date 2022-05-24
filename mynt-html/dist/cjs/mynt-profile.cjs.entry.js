'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntProfileCss = ":host{display:block}";

let MyntProfile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("mynt-page", null));
  }
};
MyntProfile.style = myntProfileCss;

exports.mynt_profile = MyntProfile;
