'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');
const overlays = require('./overlays-6c85c2cf.js');
require('./ionic-global-9f581fac.js');
require('./hardware-back-button-ca468aae.js');
require('./helpers-ff618d5e.js');

const myntMakePostCss = ":host{display:block}.make-post{--color:rgba(48,51,49,1)}";

let MyntMakePost = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      const popover = await overlays.popoverController.create({
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
      const popover = await overlays.popoverController.create({
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
      const popover = await overlays.popoverController.create({
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
      const popover = await overlays.popoverController.create({
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
      const popover = await overlays.popoverController.create({
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
    return (index.h("ion-card", { class: "make-post" }, index.h("ion-item", null, index.h("profile-pic", { source: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg" }), index.h("ion-button", { shape: "round", expand: "block" }, "What's on your mind?"), index.h("ion-select", { placeholder: "Public" }, index.h("ion-select-option", null, "Public"), index.h("ion-select-option", null, "Private")), index.h("ion-button", null, "Mynt")), index.h("ion-item", null, index.h("ion-button", { shape: "round" }, index.h("ion-icon", { name: "folder-outline" }), index.h("ion-label", null, "Add File")), index.h("ion-label", null, "No files currently added to mynt")), index.h("ion-item", null, index.h("ion-toggle", { checked: this.createACoin, onIonChange: (ev) => this.presentCreateCoin(ev) }), index.h("ion-label", null, "Create a Coin"), index.h("ion-toggle", { checked: this.viewRestrictions, onIonChange: (ev) => this.presentViewingRestrictions(ev) }), index.h("ion-label", null, "Viewing Restrictions"), index.h("ion-toggle", { checked: this.sellAsset, onIonChange: (ev) => this.presentSellAsset(ev) }), index.h("ion-label", null, "Sell an Asset"), index.h("ion-toggle", { checked: this.sendAsset, onIonChange: (ev) => this.presentSendAsset(ev) }), index.h("ion-label", null, "Send an Asset"), index.h("ion-toggle", { checked: this.markNSFW, onIonChange: (ev) => this.presentMarkNSFW(ev) }), index.h("ion-label", null, "Mark as NSFW"))));
  }
};
MyntMakePost.style = myntMakePostCss;

exports.mynt_make_post = MyntMakePost;
