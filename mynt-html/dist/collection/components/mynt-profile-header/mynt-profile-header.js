import { Component, Host, h } from '@stencil/core';
export class MyntProfileHeader {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "mynt-profile-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-profile-header.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-profile-header.css"]
  }; }
}
