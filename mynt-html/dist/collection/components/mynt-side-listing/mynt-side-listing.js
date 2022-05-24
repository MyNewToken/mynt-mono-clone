import { Component, h, Prop } from '@stencil/core';
export class MyntSideListing {
  constructor() {
    this.image = "";
    this.text = "";
  }
  render() {
    return (h("ion-item", null,
      h("profile-pic", { source: this.image }),
      h("ion-card-title", null, this.text)));
  }
  static get is() { return "mynt-side-listing"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-side-listing.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-side-listing.css"]
  }; }
  static get properties() { return {
    "image": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "image",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
}
