import { Component, h, State, Prop } from '@stencil/core';
export class MyntGridRow {
  constructor() {
    this.data = [];
    this.numCols = 0;
  }
  render() {
    for (var i = 0; i < this.numCols; i++) {
      this.data.push(h("mynt-post", { name: "Logan Paul", user: "@loganpaul", profPicSrc: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: i.toString(), mediaPicSrc: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" }));
    }
    return (h("ion-row", null, this.data.map(el => h("ion-col", null, el))));
  }
  static get is() { return "mynt-grid-row"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-grid-row.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-grid-row.css"]
  }; }
  static get properties() { return {
    "numCols": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "num-cols",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get states() { return {
    "data": {}
  }; }
}
