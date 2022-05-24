import { Component, Host, h } from '@stencil/core';
export class MyntTradeModule {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "mynt-trade-module"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-trade-module.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-trade-module.css"]
  }; }
}
