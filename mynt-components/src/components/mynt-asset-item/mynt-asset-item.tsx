import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-asset-item',
  styleUrl: 'mynt-asset-item.css',
  shadow: true,
})
export class MyntAssetItem {

  render() {
    return (
      <ion-item>
        <ion-checkbox></ion-checkbox>
        <ion-label>Logan Coin</ion-label>
        <ion-label>Quantity: </ion-label>
        <ion-input></ion-input>
        <ion-toggle>All</ion-toggle>
      </ion-item>
    );
  }

}
