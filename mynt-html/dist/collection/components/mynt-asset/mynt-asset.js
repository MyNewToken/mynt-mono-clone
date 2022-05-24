import { Component, h, Prop } from '@stencil/core';
export class MyntAsset {
  render() {
    return (h("ion-card", null));
  }
  static get is() { return "mynt-asset"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-asset.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-asset.css"]
  }; }
  static get properties() { return {
    "cost": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "cost",
      "reflect": false
    }
  }; }
}
