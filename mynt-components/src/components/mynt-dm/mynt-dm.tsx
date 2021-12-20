import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-dm',
  styleUrl: 'mynt-dm.css',
  shadow: true,
})
export class MyntDm {

  @Prop() profImg: string = "";
  @Prop() name: string = "";

  render() {
    return (
      <ion-item>
        <profile-pic source={this.profImg}></profile-pic>
        <ion-card-title>{this.name}</ion-card-title>
      </ion-item>
    );
  }

}
