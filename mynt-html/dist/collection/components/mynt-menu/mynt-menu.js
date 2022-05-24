import { Component, h } from '@stencil/core';
import { popoverController } from '@ionic/core';
export class MyntMenu {
  async presentSignin(create_account_prop) {
    const popover = await popoverController.create({
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
    const popover = await popoverController.create({
      component: 'mynt-dms',
      //cssClass: 'my-custom-class',//////CHANGE
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentNotis() {
    const popover = await popoverController.create({
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
    return (h("ion-tabs", null,
      h("ion-tab", { tab: "mynts", component: "mynt-feed" }),
      h("ion-tab", { tab: "watch", component: "mynt-watch" }),
      h("ion-tab", { tab: "market", component: "mynt-market" }),
      h("ion-tab", { tab: "assets", component: "mynt-assets" }),
      h("ion-tab-bar", { slot: "top" },
        h("mynt-logo", null),
        h("ion-label", null, "mynt"),
        h("ion-searchbar", null),
        h("ion-tab-button", { tab: "mynts" },
          h("ion-label", null, "Mynts")),
        h("ion-tab-button", { tab: "watch" },
          h("ion-label", null, "Media")),
        h("ion-tab-button", { tab: "market" },
          h("ion-label", null, "Market")),
        h("ion-tab-button", { tab: "assets" },
          h("ion-label", null, "Assets")),
        h("ion-button", { shape: "round", onClick: () => this.presentNotis() },
          h("ion-icon", { name: "notifications-outline" })),
        h("ion-button", { shape: "round", onClick: () => this.presentDMs() },
          h("ion-icon", { name: "chatbubbles-outline" })),
        h("ion-button", { onClick: () => this.presentSignin(true) }, "Create Account"),
        h("ion-button", { onClick: () => this.presentSignin(false) }, "Sign In"),
        h("ion-tab-button", { tab: "my-profile" },
          h("ion-label", null, "Profile")))));
  }
  static get is() { return "mynt-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-menu.css"]
  }; }
}
