import { Component, h } from '@stencil/core';
export class MyntSellAsset {
  render() {
    return (h("mynt-viewing-restrictions", null));
  }
  static get is() { return "mynt-sell-asset"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-sell-asset.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-sell-asset.css"]
  }; }
}
