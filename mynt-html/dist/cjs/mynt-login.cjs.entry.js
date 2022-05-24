'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntLoginCss = ":host{display:block}";

let MyntLogin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.create_account = false;
  }
  render() {
    return [
      index.h("ion-card", null, index.h("ion-item", null, index.h("mynt-logo", null), index.h("ion-card-header", null, this.create_account ? "Create Mynt Account" : "Log in to Mynt")), index.h("ion-segment", null, index.h("ion-segment-button", { onClick: () => this.create_account = false }, index.h("ion-label", null, "Login")), index.h("ion-segment-button", { onClick: () => this.create_account = true }, index.h("ion-label", null, "Sign Up"))), index.h("ion-input", { placeholder: "username" }), index.h("ion-input", { placeholder: "password" }), index.h("ion-item", null, index.h("ion-checkbox", null), index.h("ion-label", null, this.create_account ? "I agree to the Terms and Conditions" : "Remember me")), index.h("ion-button", null, this.create_account ? "Create Account" : "Login"))
    ];
  }
};
MyntLogin.style = myntLoginCss;

exports.mynt_login = MyntLogin;
