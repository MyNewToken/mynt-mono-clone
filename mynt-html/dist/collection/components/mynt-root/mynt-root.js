import { Component, h } from '@stencil/core';
export class MyntRoot {
  render() {
    return (h("ion-app", null,
      h("ion-router", { useHash: false },
        h("ion-route", { component: "mynt-menu" },
          h("ion-route", { url: "/", component: "mynts" }),
          h("ion-route", { url: "/watch", component: "watch" }),
          h("ion-route", { url: "/market", component: "watch" }),
          h("ion-route", { url: "/assets", component: "watch" }))),
      h("ion-nav", null)));
  }
  static get is() { return "mynt-root"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-root.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-root.css"]
  }; }
}
