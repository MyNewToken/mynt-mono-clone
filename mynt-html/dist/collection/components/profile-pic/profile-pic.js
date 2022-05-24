import { Component, h, Prop } from '@stencil/core';
export class ProfilePic {
  constructor() {
    this.source = "";
  }
  render() {
    return [
      h("ion-avatar", null,
        h("ion-img", { src: this.source }))
    ];
  }
  static get is() { return "profile-pic"; }
  static get originalStyleUrls() { return {
    "$": ["profile-pic.css"]
  }; }
  static get styleUrls() { return {
    "$": ["profile-pic.css"]
  }; }
  static get properties() { return {
    "source": {
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
      "attribute": "source",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
}
