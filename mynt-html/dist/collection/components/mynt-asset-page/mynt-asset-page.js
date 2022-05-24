import { Component, Host, h } from '@stencil/core';
export class MyntAssetPage {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "mynt-asset-page"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-asset-page.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-asset-page.css"]
  }; }
}
