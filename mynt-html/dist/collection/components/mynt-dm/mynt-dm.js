import { Component, h, Prop } from '@stencil/core';
export class MyntDm {
  constructor() {
    this.profImg = "";
    this.name = "";
  }
  render() {
    return (h("ion-item", null,
      h("profile-pic", { source: this.profImg }),
      h("ion-card-title", null, this.name)));
  }
  static get is() { return "mynt-dm"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-dm.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-dm.css"]
  }; }
  static get properties() { return {
    "profImg": {
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
      "attribute": "prof-img",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "name": {
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
      "attribute": "name",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
}
