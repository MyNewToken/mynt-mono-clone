import { Component, Host, h } from '@stencil/core';
export class MyntPageMenu {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "mynt-page-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-page-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-page-menu.css"]
  }; }
}
