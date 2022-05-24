import { Component, Host, h } from '@stencil/core';
export class MyntPage {
  render() {
    return (h(Host, null,
      h("ion-grid", null,
        h("ion-row", null,
          h("ion-col", { class: "-side", size: "3" },
            h("slot", { name: "side" })),
          h("ion-col", { class: "-main", size: "9" },
            h("slot", { name: "main" }))))));
  }
  static get is() { return "mynt-page"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-page.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-page.css"]
  }; }
}
