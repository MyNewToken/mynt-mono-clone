import { Component, h, Prop } from '@stencil/core';
export class WalletCoin {
  constructor() {
    this.coinImg = "";
    this.coinTitle = "";
  }
  render() {
    return (h("ion-item", null,
      h("profile-pic", { source: this.coinImg }),
      h("ion-card-title", null, this.coinTitle)));
  }
  static get is() { return "wallet-coin"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["wallet-coin.css"]
  }; }
  static get styleUrls() { return {
    "$": ["wallet-coin.css"]
  }; }
  static get properties() { return {
    "coinImg": {
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
      "attribute": "coin-img",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "coinTitle": {
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
      "attribute": "coin-title",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
}
