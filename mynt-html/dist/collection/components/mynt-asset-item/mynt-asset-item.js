import { Component, h } from '@stencil/core';
export class MyntAssetItem {
  render() {
    return (h("ion-item", null,
      h("ion-checkbox", null),
      h("ion-label", null, "Logan Coin"),
      h("ion-label", null, "Quantity: "),
      h("ion-input", null),
      h("ion-toggle", null, "All")));
  }
  static get is() { return "mynt-asset-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-asset-item.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-asset-item.css"]
  }; }
}
