import { Component, Host, h } from '@stencil/core';
export class MyntStory {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "mynt-story"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-story.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-story.css"]
  }; }
}
