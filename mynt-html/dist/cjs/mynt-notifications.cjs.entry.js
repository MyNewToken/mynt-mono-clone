'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntNotificationsCss = ":host{display:block}";

let MyntNotifications = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ion-list", null, index.h("ion-list-header", null, index.h("h1", null, "Notifications")), index.h("mynt-noti", { assImg: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", ttle: "Logan posted", txt: "Logan said xyz..." }), index.h("mynt-noti", { assImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", ttle: "Sale", txt: "You sold xyz..." })));
  }
};
MyntNotifications.style = myntNotificationsCss;

exports.mynt_notifications = MyntNotifications;
