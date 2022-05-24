'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');
const overlays = require('./overlays-6c85c2cf.js');
require('./ionic-global-9f581fac.js');
require('./hardware-back-button-ca468aae.js');
require('./helpers-ff618d5e.js');

const myntMenuCss = ":host{display:block}";

let MyntMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async presentSignin(create_account_prop) {
    const popover = await overlays.popoverController.create({
      component: 'mynt-login',
      componentProps: { create_account: create_account_prop },
      //cssClass: 'my-custom-class',//////CHANGE
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentDMs() {
    const popover = await overlays.popoverController.create({
      component: 'mynt-dms',
      //cssClass: 'my-custom-class',//////CHANGE
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentNotis() {
    const popover = await overlays.popoverController.create({
      component: 'mynt-notifications',
      //cssClass: 'my-custom-class',//////CHANGE
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  //ask Ben about loading and different URLs
  //should I integrate this with a router?
  //should I put an ion-nav in each tab here?
  //dunno why the logo isn't working
  render() {
    return (index.h("ion-tabs", null, index.h("ion-tab", { tab: "mynts", component: "mynt-feed" }), index.h("ion-tab", { tab: "watch", component: "mynt-watch" }), index.h("ion-tab", { tab: "market", component: "mynt-market" }), index.h("ion-tab", { tab: "assets", component: "mynt-assets" }), index.h("ion-tab-bar", { slot: "top" }, index.h("mynt-logo", null), index.h("ion-label", null, "mynt"), index.h("ion-searchbar", null), index.h("ion-tab-button", { tab: "mynts" }, index.h("ion-label", null, "Mynts")), index.h("ion-tab-button", { tab: "watch" }, index.h("ion-label", null, "Media")), index.h("ion-tab-button", { tab: "market" }, index.h("ion-label", null, "Market")), index.h("ion-tab-button", { tab: "assets" }, index.h("ion-label", null, "Assets")), index.h("ion-button", { shape: "round", onClick: () => this.presentNotis() }, index.h("ion-icon", { name: "notifications-outline" })), index.h("ion-button", { shape: "round", onClick: () => this.presentDMs() }, index.h("ion-icon", { name: "chatbubbles-outline" })), index.h("ion-button", { onClick: () => this.presentSignin(true) }, "Create Account"), index.h("ion-button", { onClick: () => this.presentSignin(false) }, "Sign In"), index.h("ion-tab-button", { tab: "my-profile" }, index.h("ion-label", null, "Profile")))));
  }
};
MyntMenu.style = myntMenuCss;

exports.mynt_menu = MyntMenu;
