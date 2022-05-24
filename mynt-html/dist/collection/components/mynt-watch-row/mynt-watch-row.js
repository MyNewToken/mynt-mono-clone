import { Component, h, Prop, State } from '@stencil/core';
export class MyntWatchRow {
  constructor() {
    this.data = [];
    this.numCols = 0;
  }
  render() {
    for (var _ = 0; _ < this.numCols; _++) {
      this.data.push(h("mynt-watch-thumb", null));
    }
    return (h("ion-row", null, this.data.map(el => h("ion-col", null, el))));
  }
  static get is() { return "mynt-watch-row"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-watch-row.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-watch-row.css"]
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
