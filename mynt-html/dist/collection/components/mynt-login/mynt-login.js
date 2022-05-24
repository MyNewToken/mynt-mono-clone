import { Component, h, Prop } from '@stencil/core';
export class MyntLogin {
  constructor() {
    this.create_account = false;
  }
  render() {
    return [
      h("ion-card", null,
        h("ion-item", null,
          h("mynt-logo", null),
          h("ion-card-header", null, this.create_account ? "Create Mynt Account" : "Log in to Mynt")),
        h("ion-segment", null,
          h("ion-segment-button", { onClick: () => this.create_account = false },
            h("ion-label", null, "Login")),
          h("ion-segment-button", { onClick: () => this.create_account = true },
            h("ion-label", null, "Sign Up"))),
        h("ion-input", { placeholder: "username" }),
        h("ion-input", { placeholder: "password" }),
        h("ion-item", null,
          h("ion-checkbox", null),
          h("ion-label", null, this.create_account ? "I agree to the Terms and Conditions" : "Remember me")),
        h("ion-button", null, this.create_account ? "Create Account" : "Login"))
    ];
  }
  static get is() { return "mynt-login"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-login.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-login.css"]
  }; }
  static get properties() { return {
    "create_account": {
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
      "attribute": "create_account",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
