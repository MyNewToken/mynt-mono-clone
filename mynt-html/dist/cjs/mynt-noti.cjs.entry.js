'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntNotiCss = ":host{display:block}";

let MyntNoti = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ion-item", null, index.h("profile-pic", { source: this.assImg }), index.h("ion-list", null, index.h("ion-label", null, index.h("b", null, this.ttle)), index.h("ion-label", null, this.txt))));
  }
};
MyntNoti.style = myntNotiCss;

exports.mynt_noti = MyntNoti;
