import { Component, Host, h } from '@stencil/core';
export class MyntDmNotiButton {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "mynt-dm-noti-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-dm-noti-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-dm-noti-button.css"]
  }; }
}
