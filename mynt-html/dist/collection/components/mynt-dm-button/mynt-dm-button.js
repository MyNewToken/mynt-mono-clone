import { Component, Host, h } from '@stencil/core';
export class MyntDmButton {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "mynt-dm-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-dm-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-dm-button.css"]
  }; }
}
