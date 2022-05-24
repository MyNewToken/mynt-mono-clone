import { Component, h, State } from '@stencil/core';
import { popoverController } from '@ionic/core';
export class MyntMakePost {
  constructor() {
    this.createACoin = false;
    this.viewRestrictions = false;
    this.sellAsset = false;
    this.sendAsset = false;
    this.markNSFW = false;
  }
  /**
    async newToggleController(changed) {
      if (this.createACoin) {
        this.presentCreateCoin();
      } else if (this.viewRestrictions) {
        this.presentViewingRestrictions();
      } else if (this.sellAsset) {
        this.presentSellAsset();
      } else if (this.sendAsset) {
        this.presentSendAsset();
      } else if (this.markNSFW) {
        this.presentMarkNSFW();
      }
    }
  **/
  async presentCreateCoin(ev) {
    if (!this.createACoin) {
      this.createACoin = ev.detail.checked;
      const popover = await popoverController.create({
        component: 'mynt-create-coin',
        //cssClass: 'my-custom-class',//////CHANGE
        translucent: true
      });
      await popover.present();
      const { role } = await popover.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
    this.createACoin = ev.detail.checked;
  }
  async presentViewingRestrictions(ev) {
    if (!this.markNSFW) {
      const popover = await popoverController.create({
        component: 'mynt-viewing-restrictions',
        //cssClass: 'my-custom-class',//////CHANGE
        translucent: true
      });
      await popover.present();
      const { role } = await popover.onDidDismiss();
      this.viewRestrictions = false;
      console.log('onDidDismiss resolved with role', role);
    }
    this.markNSFW = ev.detail.checked;
  }
  async presentSellAsset(ev) {
    if (!this.sellAsset) {
      const popover = await popoverController.create({
        component: 'mynt-sell-asset',
        //cssClass: 'my-custom-class',//////CHANGE
        translucent: true
      });
      await popover.present();
      const { role } = await popover.onDidDismiss();
      this.sellAsset = false;
      console.log('onDidDismiss resolved with role', role);
    }
    this.sellAsset = ev.detail.checked;
  }
  async presentSendAsset(ev) {
    if (!this.sendAsset) {
      const popover = await popoverController.create({
        component: 'mynt-send-asset',
        //cssClass: 'my-custom-class',//////CHANGE
        translucent: true
      });
      await popover.present();
      const { role } = await popover.onDidDismiss();
      this.sendAsset = false;
      console.log('onDidDismiss resolved with role', role);
    }
    this.sendAsset = ev.detail.checked;
  }
  async presentMarkNSFW(ev) {
    if (!this.markNSFW) {
      const popover = await popoverController.create({
        component: 'mynt-mark-nsfw',
        //cssClass: 'my-custom-class',//////CHANGE
        translucent: true
      });
      await popover.present();
      const { role } = await popover.onDidDismiss();
      this.markNSFW = false;
      console.log('onDidDismiss resolved with role', role);
    }
    this.markNSFW = ev.detail.checked;
  }
  render() {
    return (h("ion-card", { class: "make-post" },
      h("ion-item", null,
        h("profile-pic", { source: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg" }),
        h("ion-button", { shape: "round", expand: "block" }, "What's on your mind?"),
        h("ion-select", { placeholder: "Public" },
          h("ion-select-option", null, "Public"),
          h("ion-select-option", null, "Private")),
        h("ion-button", null, "Mynt")),
      h("ion-item", null,
        h("ion-button", { shape: "round" },
          h("ion-icon", { name: "folder-outline" }),
          h("ion-label", null, "Add File")),
        h("ion-label", null, "No files currently added to mynt")),
      h("ion-item", null,
        h("ion-toggle", { checked: this.createACoin, onIonChange: (ev) => this.presentCreateCoin(ev) }),
        h("ion-label", null, "Create a Coin"),
        h("ion-toggle", { checked: this.viewRestrictions, onIonChange: (ev) => this.presentViewingRestrictions(ev) }),
        h("ion-label", null, "Viewing Restrictions"),
        h("ion-toggle", { checked: this.sellAsset, onIonChange: (ev) => this.presentSellAsset(ev) }),
        h("ion-label", null, "Sell an Asset"),
        h("ion-toggle", { checked: this.sendAsset, onIonChange: (ev) => this.presentSendAsset(ev) }),
        h("ion-label", null, "Send an Asset"),
        h("ion-toggle", { checked: this.markNSFW, onIonChange: (ev) => this.presentMarkNSFW(ev) }),
        h("ion-label", null, "Mark as NSFW"))));
  }
  static get is() { return "mynt-make-post"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-make-post.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-make-post.css"]
  }; }
  static get states() { return {
    "createACoin": {},
    "viewRestrictions": {},
    "sellAsset": {},
    "sendAsset": {},
    "markNSFW": {}
  }; }
}
