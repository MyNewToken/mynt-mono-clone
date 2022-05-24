import { Component, Host, h } from '@stencil/core';
export class MyntSettings {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "mynt-settings"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-settings.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-settings.css"]
  }; }
}
