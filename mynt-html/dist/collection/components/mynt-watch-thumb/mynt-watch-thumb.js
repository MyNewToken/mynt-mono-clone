import { Component, h } from '@stencil/core';
export class MyntWatchThumb {
  render() {
    return (h("ion-card", null,
      h("ion-card-header", null,
        h("ion-thumbnail", null,
          h("ion-img", { src: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" }))),
      h("ion-card-title", null, "Watch thumbnail title"),
      h("ion-card-subtitle", null, "Watch thumbnail creator")));
  }
  static get is() { return "mynt-watch-thumb"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-watch-thumb.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-watch-thumb.css"]
  }; }
}
