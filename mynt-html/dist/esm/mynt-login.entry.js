import { r as registerInstance, h } from './index-a05ac311.js';

const myntLoginCss = ":host{display:block}";

let MyntLogin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.create_account = false;
  }
  render() {
    return [
      h("ion-card", null, h("ion-item", null, h("mynt-logo", null), h("ion-card-header", null, this.create_account ? "Create Mynt Account" : "Log in to Mynt")), h("ion-segment", null, h("ion-segment-button", { onClick: () => this.create_account = false }, h("ion-label", null, "Login")), h("ion-segment-button", { onClick: () => this.create_account = true }, h("ion-label", null, "Sign Up"))), h("ion-input", { placeholder: "username" }), h("ion-input", { placeholder: "password" }), h("ion-item", null, h("ion-checkbox", null), h("ion-label", null, this.create_account ? "I agree to the Terms and Conditions" : "Remember me")), h("ion-button", null, this.create_account ? "Create Account" : "Login"))
    ];
  }
};
MyntLogin.style = myntLoginCss;

export { MyntLogin as mynt_login };
