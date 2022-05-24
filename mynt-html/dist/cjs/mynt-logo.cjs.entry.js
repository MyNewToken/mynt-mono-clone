'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntLogoCss = ":host{display:block}";

let MyntLogo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.image = "myntlogo.svg";
  }
  render() {
    return (index.h("ion-icon", { src: "components/mynt-logo/assets/myntlogo.svg", size: "large" }));
  }
  static get assetsDirs() { return ["assets"]; }
};
MyntLogo.style = myntLogoCss;

exports.mynt_logo = MyntLogo;
