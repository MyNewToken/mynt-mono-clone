import { Component, h, Prop } from '@stencil/core';
export class MyntChat {
  constructor() {
    this.name = "Parker";
  }
  render() {
    return (h("ion-card", null,
      h("ion-card-header", { color: "dark" },
        h("ion-card-title", null, this.name)),
      h("ion-list", null,
        h("mynt-message", { sent: false, msg: "What's up?" }),
        h("mynt-message", { sent: true, msg: "Hey!" })),
      h("ion-item", null,
        h("ion-textarea", { autoGrow: true, autofocus: true, enterkeyhint: "send", placeholder: "mynt message..." }),
        h("ion-button", null,
          h("ion-icon", { name: "send-outline" })))));
  }
  static get is() { return "mynt-chat"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-chat.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-chat.css"]
  }; }
  static get properties() { return {
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
      "defaultValue": "\"Parker\""
    }
  }; }
}
