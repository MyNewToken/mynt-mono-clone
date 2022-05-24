import { r as registerInstance, h } from './index-a05ac311.js';

const myntNotificationsCss = ":host{display:block}";

let MyntNotifications = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-list", null, h("ion-list-header", null, h("h1", null, "Notifications")), h("mynt-noti", { assImg: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", ttle: "Logan posted", txt: "Logan said xyz..." }), h("mynt-noti", { assImg: "https://cryptologos.cc/logos/bitcoin-btc-logo.png", ttle: "Sale", txt: "You sold xyz..." })));
  }
};
MyntNotifications.style = myntNotificationsCss;

export { MyntNotifications as mynt_notifications };
