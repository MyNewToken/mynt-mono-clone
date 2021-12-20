import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-notifications',
  styleUrl: 'mynt-notifications.css',
  shadow: true,
})
export class MyntNotifications {

  render() {
    return (
      <ion-list>
        <ion-list-header>
          <h1>Notifications</h1>
        </ion-list-header>
        <mynt-noti assImg="https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg" ttle="Logan posted" txt="Logan said xyz..."></mynt-noti>
        <mynt-noti assImg="https://cryptologos.cc/logos/bitcoin-btc-logo.png" ttle="Sale" txt="You sold xyz..."></mynt-noti>
    </ion-list>
    );
  }

}
