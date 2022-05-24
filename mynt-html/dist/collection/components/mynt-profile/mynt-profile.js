import { Component, h } from '@stencil/core';
export class MyntProfile {
  render() {
    return (h("mynt-page", null));
  }
  static get is() { return "mynt-profile"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-profile.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-profile.css"]
  }; }
}
