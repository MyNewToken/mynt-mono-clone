import { Component, h, Prop } from '@stencil/core';
export class MyntMessage {
  constructor() {
    this.msg = "";
    this.sent = true;
    this.timestamp = "1970/01/01";
  }
  render() {
    return (h("ion-item", null,
      h("ion-label", { slot: this.sent ? "end" : "start" }, this.msg)));
  }
  static get is() { return "mynt-message"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-message.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-message.css"]
  }; }
  static get properties() { return {
    "msg": {
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
      "attribute": "msg",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "sent": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sent",
      "reflect": false,
      "defaultValue": "true"
    },
    "timestamp": {
      "type": "string",
      "mutable": true,
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
      "attribute": "timestamp",
      "reflect": false,
      "defaultValue": "\"1970/01/01\""
    }
  }; }
}
