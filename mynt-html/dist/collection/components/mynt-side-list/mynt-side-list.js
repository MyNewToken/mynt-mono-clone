import { Component, h, Prop } from '@stencil/core';
export class MyntSideList {
  constructor() {
    this.ttle = "";
  }
  //need to do some type of listy stuff here with adding the listings, passing stuff into the props, dunno how to do it yet
  render() {
    return (h("ion-card", null,
      h("ion-list", null,
        h("ion-list-header", null,
          h("h1", null, this.ttle)),
        h("mynt-side-listing", { image: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: "Logan" }),
        h("mynt-side-listing", { image: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: "Logan 1" }),
        h("mynt-side-listing", { image: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: "Logan 2" }))));
  }
  static get is() { return "mynt-side-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-side-list.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-side-list.css"]
  }; }
  static get properties() { return {
    "ttle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "ttle",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
}
