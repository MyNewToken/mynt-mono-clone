import { Component, h } from '@stencil/core';
export class MyntCreateCoin {
  render() {
    return (h("mynt-make-post-dropdown", null,
      h("ion-list", null,
        h("ion-item", null,
          h("ion-label", null, "Coin Name"),
          " ",
          h("ion-input", null)),
        h("ion-item", null,
          h("ion-label", null, "Ticker"),
          " ",
          h("ion-input", null)),
        h("ion-item", null,
          h("ion-label", null, "Price/Coin"),
          " ",
          h("ion-input", null),
          " ",
          h("ion-label", null, "Quantity"),
          " ",
          h("ion-input", null)),
        h("ion-item", null,
          h("ion-label", null, "Number of coins for sale on this post"),
          " ",
          h("ion-input", null),
          " ",
          h("ion-toggle", null, "Unlimited Quantity")),
        h("ion-item", null,
          h("ion-label", null, "Coin Image"),
          " ",
          h("ion-button", null,
            h("ion-icon", { name: "folder-outline" }),
            "Upload File")))));
  }
  static get is() { return "mynt-create-coin"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-create-coin.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-create-coin.css"]
  }; }
}
