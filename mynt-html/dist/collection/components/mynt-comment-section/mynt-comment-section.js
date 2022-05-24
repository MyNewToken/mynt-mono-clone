import { Component, h } from '@stencil/core';
export class MyntCommentSection {
  render() {
    return (h("ion-card", null,
      h("ion-card-header", null,
        h("ion-input", null))));
  }
  static get is() { return "mynt-comment-section"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-comment-section.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-comment-section.css"]
  }; }
}
