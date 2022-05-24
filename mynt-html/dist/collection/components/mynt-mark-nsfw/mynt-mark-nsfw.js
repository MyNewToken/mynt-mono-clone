import { Component, h } from '@stencil/core';
export class MyntMarkNsfw {
  render() {
    return (h("mynt-make-post-dropdown", null,
      h("ion-item", null,
        h("ion-label", null, "Mark as NSFW?"),
        h("ion-checkbox", null))));
  }
  static get is() { return "mynt-mark-nsfw"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-mark-nsfw.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-mark-nsfw.css"]
  }; }
}
