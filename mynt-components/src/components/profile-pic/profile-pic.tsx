import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'profile-pic',
  styleUrl: 'profile-pic.css',
  //shadow: true, //this was here automatically... wtf is this?
})


export class ProfilePic {
  @Prop() source: string = "";

  render() {
    return [
      <ion-avatar>
        <ion-img src={this.source}/>
      </ion-avatar>
    ];
  }

}
