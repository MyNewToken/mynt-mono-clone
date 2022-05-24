import { Component, h, Prop } from '@stencil/core';
export class MyntNoti {
  render() {
    return (h("ion-item", null,
      h("profile-pic", { source: this.assImg }),
      h("ion-list", null,
        h("ion-label", null,
          h("b", null, this.ttle)),
        h("ion-label", null, this.txt))));
  }
  static get is() { return "mynt-noti"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-noti.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-noti.css"]
  }; }
  static get properties() { return {
    "assImg": {
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
      "attribute": "ass-img",
      "reflect": false
    },
    "ttle": {
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
      "attribute": "ttle",
      "reflect": false
    },
    "txt": {
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
      "attribute": "txt",
      "reflect": false
    }
  }; }
}
