import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-asset',
  styleUrl: 'mynt-asset.css',
  shadow: true,
})
export class MyntAsset {

  @Prop() cost

  render() {
    return (
      <ion-card>

      </ion-card>
    );
  }

}
