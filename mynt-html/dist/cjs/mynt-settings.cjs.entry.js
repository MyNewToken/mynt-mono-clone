'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntSettingsCss = ":host{display:block}";

let MyntSettings = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
MyntSettings.style = myntSettingsCss;

exports.mynt_settings = MyntSettings;
