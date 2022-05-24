import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntRootCss = ":host{display:block}";

let MyntRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-app", null, h("ion-router", { useHash: false }, h("ion-route", { component: "mynt-menu" }, h("ion-route", { url: "/", component: "mynts" }), h("ion-route", { url: "/watch", component: "watch" }), h("ion-route", { url: "/market", component: "watch" }), h("ion-route", { url: "/assets", component: "watch" }))), h("ion-nav", null)));
  }
};
MyntRoot.style = myntRootCss;

export { MyntRoot as mynt_root };
