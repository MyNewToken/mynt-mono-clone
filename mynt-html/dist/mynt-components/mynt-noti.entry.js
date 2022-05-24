import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntNotiCss = ":host{display:block}";

let MyntNoti = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-item", null, h("profile-pic", { source: this.assImg }), h("ion-list", null, h("ion-label", null, h("b", null, this.ttle)), h("ion-label", null, this.txt))));
  }
};
MyntNoti.style = myntNotiCss;

export { MyntNoti as mynt_noti };
