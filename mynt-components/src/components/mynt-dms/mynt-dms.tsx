import { Component, h, Prop } from '@stencil/core';

import { popoverController } from '@ionic/core';

@Component({
  tag: 'mynt-dms',
  styleUrl: 'mynt-dms.css',
  shadow: true,
})
export class MyntDms {
  @Prop() data = [];

  populate_data() { //obv going to change
    this.data[0] = ["https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", "Logan"];
    this.data[1] = ["https://cryptologos.cc/logos/bitcoin-btc-logo.png", "BitMan"];
  }

  async presentChat(name_param) {
    const popover = await popoverController.create({
      component: 'mynt-chat',
      componentProps: {name: name_param},
      //cssClass: 'my-custom-class',//////CHANGE
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  render() {
    this.populate_data();
    return (
    <ion-card>
      <ion-list>
        <ion-list-header>
          <h1>Direct Messages</h1>
        </ion-list-header>
        <mynt-dm profImg={this.data[0][0]} name={this.data[0][1]} onClick={() => this.presentChat(this.data[0][1])}></mynt-dm>
        <mynt-dm profImg={this.data[1][0]} name={this.data[1][1]}></mynt-dm>
      </ion-list>
    </ion-card>
    );
  }

}
