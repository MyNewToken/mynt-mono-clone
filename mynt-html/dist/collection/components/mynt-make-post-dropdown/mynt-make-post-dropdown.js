import { Component, h } from '@stencil/core';
export class MyntMakePostDropdown {
  render() {
    return (h("ion-card", null,
      h("slot", null)));
  }
  static get is() { return "mynt-make-post-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-make-post-dropdown.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-make-post-dropdown.css"]
  }; }
}
