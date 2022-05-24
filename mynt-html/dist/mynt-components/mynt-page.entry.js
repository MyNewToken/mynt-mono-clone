import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';

const myntPageCss = ":host{display:block}.-main{--ion-grid-column-padding:0px}";

let MyntPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("ion-grid", null, h("ion-row", null, h("ion-col", { class: "-side", size: "3" }, h("slot", { name: "side" })), h("ion-col", { class: "-main", size: "9" }, h("slot", { name: "main" }))))));
  }
};
MyntPage.style = myntPageCss;

export { MyntPage as mynt_page };
