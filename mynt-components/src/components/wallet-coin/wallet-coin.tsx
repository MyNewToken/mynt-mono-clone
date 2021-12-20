import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'wallet-coin',
  styleUrl: 'wallet-coin.css',
  shadow: true,
})
export class WalletCoin {
  @Prop() coinImg: string = "";
  @Prop() coinTitle: string = "";

  render() {
    return (
      <ion-item>
        <profile-pic source={this.coinImg}></profile-pic>
        <ion-card-title>{this.coinTitle}</ion-card-title>
      </ion-item>
    );
  }

}
