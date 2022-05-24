import { Component, Host, h } from '@stencil/core';
export class MyntSignup {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "mynt-signup"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-signup.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-signup.css"]
  }; }
}
