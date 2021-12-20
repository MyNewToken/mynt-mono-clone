import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-side-listing',
  styleUrl: 'mynt-side-listing.css',
  shadow: true,
})
export class MyntSideListing {

  @Prop() image: string = "";
  @Prop() text: string = "";

  render() {
    return (
      <ion-item>
        <profile-pic source={this.image}></profile-pic>
        <ion-card-title>{this.text}</ion-card-title>
      </ion-item>
    );
  }

}
