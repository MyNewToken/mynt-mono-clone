import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-create-coin',
  styleUrl: 'mynt-create-coin.css',
  shadow: true,
})
export class MyntCreateCoin {

  render() {
    return (
      <mynt-make-post-dropdown>
        <ion-list>
          <ion-item>
            <ion-label>Coin Name</ion-label> <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Ticker</ion-label> <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Price/Coin</ion-label> <ion-input></ion-input> <ion-label>Quantity</ion-label> <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Number of coins for sale on this post</ion-label> <ion-input></ion-input> <ion-toggle>Unlimited Quantity</ion-toggle>
          </ion-item>
          <ion-item>
            <ion-label>Coin Image</ion-label> <ion-button><ion-icon name="folder-outline"></ion-icon>Upload File</ion-button>
          </ion-item>
        </ion-list>
      </mynt-make-post-dropdown>
    );
  }

}
