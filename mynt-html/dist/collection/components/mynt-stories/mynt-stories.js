import { Component, Host, h } from '@stencil/core';
export class MyntStories {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "mynt-stories"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-stories.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-stories.css"]
  }; }
}
