import { Component, h } from '@stencil/core';
export class MyntViewingRestrictions {
  render() {
    return (h("mynt-make-post-dropdown", null,
      h("ion-item", null,
        h("ion-input", { placeholder: "Search all coins" }),
        h("ion-button", null, "Search")),
      h("ion-list", null,
        h("mynt-asset-item", null)),
      h("slot", null)));
  }
  static get is() { return "mynt-viewing-restrictions"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-viewing-restrictions.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-viewing-restrictions.css"]
  }; }
}
