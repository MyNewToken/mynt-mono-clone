import { Component, Host, h } from '@stencil/core';
export class MyntListing {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "mynt-listing"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-listing.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-listing.css"]
  }; }
}
