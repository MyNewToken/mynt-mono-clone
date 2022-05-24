'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntDmCss = ":host{display:block}";

let MyntDm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.profImg = "";
    this.name = "";
  }
  render() {
    return (index.h("ion-item", null, index.h("profile-pic", { source: this.profImg }), index.h("ion-card-title", null, this.name)));
  }
};
MyntDm.style = myntDmCss;

exports.mynt_dm = MyntDm;
