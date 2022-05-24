import { Component, h, Prop } from '@stencil/core';
export class MyntLogo {
  constructor() {
    this.image = "myntlogo.svg";
  }
  render() {
    return (h("ion-icon", { src: "components/mynt-logo/assets/myntlogo.svg", size: "large" }));
  }
  static get is() { return "mynt-logo"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-logo.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-logo.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
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
      "defaultValue": "\"myntlogo.svg\""
    }
  }; }
}
