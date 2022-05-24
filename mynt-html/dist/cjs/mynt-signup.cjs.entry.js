'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntSignupCss = ":host{display:block}";

let MyntSignup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MyntSignup.style = myntSignupCss;

exports.mynt_signup = MyntSignup;
