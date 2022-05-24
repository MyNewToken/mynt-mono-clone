import { Component, h } from '@stencil/core';
export class MyntSendAsset {
  render() {
    return (h("mynt-viewing-restrictions", null,
      h("ion-input", { placeholder: "Send to..." })));
  }
  static get is() { return "mynt-send-asset"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-send-asset.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-send-asset.css"]
  }; }
}
