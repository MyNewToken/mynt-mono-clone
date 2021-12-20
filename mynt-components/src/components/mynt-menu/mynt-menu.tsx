import { Component, h } from '@stencil/core';

import { popoverController } from '@ionic/core';

@Component({
  tag: 'mynt-menu',
  styleUrl: 'mynt-menu.css',
  shadow: true,
})
export class MyntMenu {

  async presentSignin(create_account_prop: boolean) {
    const popover = await popoverController.create({
      component: 'mynt-login',
      componentProps: {create_account: create_account_prop},
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
    return (
      <ion-tabs>
        <ion-tab tab="mynts" component="mynt-feed">
        </ion-tab>
        <ion-tab tab="watch" component="mynt-watch">
        </ion-tab>
        <ion-tab tab="market" component="mynt-market">
        </ion-tab>
        <ion-tab tab="assets" component="mynt-assets">
        </ion-tab>

        <ion-tab-bar slot="top">
          <mynt-logo></mynt-logo>
          <ion-label>mynt</ion-label>
          <ion-searchbar></ion-searchbar>
          <ion-tab-button tab="mynts">
            <ion-label>Mynts</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="watch">
            <ion-label>Media</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="market">
            <ion-label>Market</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="assets">
            <ion-label>Assets</ion-label>
          </ion-tab-button>
          <ion-button shape="round" onClick={() => this.presentNotis()}><ion-icon name="notifications-outline"></ion-icon></ion-button>
          <ion-button shape="round" onClick={() => this.presentDMs()}><ion-icon name="chatbubbles-outline"></ion-icon></ion-button>
          <ion-button onClick={() => this.presentSignin(true)}>Create Account</ion-button>
          <ion-button onClick={() => this.presentSignin(false)}>Sign In</ion-button>
        </ion-tab-bar>
      </ion-tabs>
    );
  }

}
