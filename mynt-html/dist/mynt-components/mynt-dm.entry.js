import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntDmCss = ":host{display:block}";

let MyntDm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.profImg = "";
    this.name = "";
  }
  render() {
    return (h("ion-item", null, h("profile-pic", { source: this.profImg }), h("ion-card-title", null, this.name)));
  }
};
MyntDm.style = myntDmCss;

export { MyntDm as mynt_dm };
