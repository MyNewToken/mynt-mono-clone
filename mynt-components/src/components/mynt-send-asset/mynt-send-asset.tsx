import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-send-asset',
  styleUrl: 'mynt-send-asset.css',
  shadow: true,
})
export class MyntSendAsset {

  render() {
    return (
      <mynt-viewing-restrictions>
        <ion-input placeholder="Send to..."></ion-input>
      </mynt-viewing-restrictions>

    );
  }

}
