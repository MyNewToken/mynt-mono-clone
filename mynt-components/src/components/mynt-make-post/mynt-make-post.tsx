import { Component, h, State } from '@stencil/core';
import { popoverController } from '@ionic/core';

@Component({
  tag: 'mynt-make-post',
  styleUrl: 'mynt-make-post.css',
  shadow: true,
})
export class MyntMakePost {

  @State() createACoin: boolean = false;
  @State() viewRestrictions: boolean = false;
  @State() sellAsset: boolean = false;
  @State() sendAsset: boolean = false;
  @State() markNSFW: boolean = false;

  async toggleController() {
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

  async presentCreateCoin() {
    const popover = await popoverController.create({
      component: 'mynt-create-coin',
      //cssClass: 'my-custom-class',//////CHANGE
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    this.createACoin = false;
    console.log('onDidDismiss resolved with role', role);
  }

  async presentViewingRestrictions() {
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

  async presentSellAsset() {
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

  async presentSendAsset() {
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

  async presentMarkNSFW() {
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

  render() {

    this.toggleController();

    return (
      <ion-card class="make-post">
        <ion-item>
          <profile-pic source="https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg"></profile-pic>
          <ion-button shape="round" expand="block">What's on your mind?</ion-button>
          <ion-select placeholder="Public">
            <ion-select-option>Public</ion-select-option>
            <ion-select-option>Private</ion-select-option>
          </ion-select>
          <ion-button>Mynt</ion-button>
        </ion-item>
        <ion-item>
          <ion-button shape="round">
            <ion-icon name="folder-outline"></ion-icon>
            <ion-label>Add File</ion-label>
          </ion-button>
          <ion-label>No files currently added to mynt</ion-label>
        </ion-item>
        <ion-item>
          <ion-toggle checked={this.createACoin} onIonChange={(ev) => this.createACoin = ev.detail.checked}></ion-toggle><ion-label>Create a Coin</ion-label>
          <ion-toggle checked={this.viewRestrictions} onIonChange={(ev) => this.viewRestrictions = ev.detail.checked}></ion-toggle><ion-label>Viewing Restrictions</ion-label>
          <ion-toggle checked={this.sellAsset} onIonChange={(ev) => this.sellAsset = ev.detail.checked}></ion-toggle><ion-label>Sell an Asset</ion-label>
          <ion-toggle checked={this.sendAsset} onIonChange={(ev) => this.sendAsset = ev.detail.checked}></ion-toggle><ion-label>Send an Asset</ion-label>
          <ion-toggle checked={this.markNSFW} onIonChange={(ev) => this.markNSFW = ev.detail.checked}></ion-toggle><ion-label>Mark as NSFW</ion-label>
        </ion-item>
      </ion-card>
    );
  }

}

