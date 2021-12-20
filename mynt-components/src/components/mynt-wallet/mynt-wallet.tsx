import { Component, h} from '@stencil/core';

@Component({
  tag: 'mynt-wallet',
  styleUrl: 'mynt-wallet.css',
  shadow: true,
})
export class MyntWallet {

  //am going to need to make this interactable... probably pass in a list

  render() {
    return (
      <ion-card>
        <ion-list>
          <ion-list-header>
            <h1>Wallet</h1>
          </ion-list-header>
          <wallet-coin coinImg="https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg" coinTitle="LoganCoin"></wallet-coin>
          <wallet-coin coinImg="https://cryptologos.cc/logos/bitcoin-btc-logo.png" coinTitle="CryptoCoin"></wallet-coin>
        </ion-list>
      </ion-card>
    );
  }

}
