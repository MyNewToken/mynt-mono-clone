import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-noti',
  styleUrl: 'mynt-noti.css',
  shadow: true,
})
export class MyntNoti {
  @Prop() assImg: string;
  @Prop() ttle: string;
  @Prop() txt: string;

  render() {
    return (
      <ion-item>
        <profile-pic source={this.assImg}></profile-pic>
        <ion-list>
          <ion-label><b>{this.ttle}</b></ion-label>
          <ion-label>{this.txt}</ion-label>
        </ion-list>
      </ion-item>
    );
  }

}
