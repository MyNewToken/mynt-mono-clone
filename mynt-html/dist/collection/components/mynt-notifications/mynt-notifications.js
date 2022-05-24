import { Component, h } from '@stencil/core';
export class MyntNotifications {
  render() {
    return (h("ion-list", null,
      h("ion-list-header", null,
        h("h1", null, "Notifications")),
      h("mynt-noti", { assImg: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", ttle: "Logan posted", txt: "Logan said xyz..." }),
      h("mynt-noti", { assImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", ttle: "Sale", txt: "You sold xyz..." })));
  }
  static get is() { return "mynt-notifications"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-notifications.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-notifications.css"]
  }; }
}
