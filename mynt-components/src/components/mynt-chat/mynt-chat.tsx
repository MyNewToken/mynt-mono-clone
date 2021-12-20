import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-chat',
  styleUrl: 'mynt-chat.css',
  shadow: true,
})
export class MyntChat {
  @Prop() name: string="Parker";

  render() {
    return (
        <ion-card>
        <ion-card-header color="dark">
          <ion-card-title>{this.name}</ion-card-title>
        </ion-card-header>
        <ion-list>
          <mynt-message sent={false} msg="What's up?"></mynt-message>
          <mynt-message sent={true} msg="Hey!"></mynt-message>
        </ion-list>
        <ion-item>
          <ion-textarea autoGrow={true} autofocus={true} enterkeyhint="send" placeholder="mynt message..."></ion-textarea>
          <ion-button><ion-icon name="send-outline"></ion-icon></ion-button>
        </ion-item>
        
      </ion-card>
      
    );
  }

}
