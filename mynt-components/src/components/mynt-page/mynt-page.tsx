import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-page',
  styleUrl: 'mynt-page.css',
  shadow: true,
})
export class MyntPage {

  render() {
    return (
      <Host>
        <ion-grid>
          <ion-row>
            <ion-col class="-side" size="2"><slot name="side"></slot></ion-col>
            <ion-col class="-main" size="10"><slot name="main"></slot></ion-col>
          </ion-row>
        </ion-grid>
      </Host>
    );
  }

}
