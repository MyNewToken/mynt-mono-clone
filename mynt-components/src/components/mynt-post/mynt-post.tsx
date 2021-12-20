import { Component, h, Prop } from '@stencil/core';
import { popoverController } from '@ionic/core';

@Component({
  tag: 'mynt-post',
  styleUrl: 'mynt-post.css',
  shadow: true,
})
export class MyntPost {

  @Prop() name: string = "";
  @Prop() user: string = "";
  @Prop() profPicSrc: string = "";
  @Prop() text= "";
  @Prop() mediaPicSrc: string = "";

  //I don't think I will be able to use popover for comments because the customization capabilities won't be there until ionic v6
  //I think a framework will be required for this.
  //I'll just use this to look at the comments
  async presentComments() {
    const popover = await popoverController.create({
      component: 'mynt-comment-section',
      //cssClass: 'my-custom-class',//////CHANGE
      showBackdrop: false,
      //event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  render() {
    return (
      <ion-card>
        <ion-card-header>
          <ion-item>
            <profile-pic source={this.profPicSrc}></profile-pic>
            <ion-card-title>{this.name}</ion-card-title>
          </ion-item>
          <ion-card-subtitle>{this.user}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          {this.text}
        </ion-card-content>
        <ion-card-content>
          <ion-thumbnail>
            <ion-img src={this.mediaPicSrc}></ion-img>
          </ion-thumbnail>
        </ion-card-content>
        <ion-item>
          <ion-button slot="start"><ion-icon name="thumbs-up-outline"></ion-icon></ion-button>
          <ion-button slot="start" onClick={() => this.presentComments()}><ion-icon name="chatbox-outline"></ion-icon></ion-button>
          <ion-button slot="start"><ion-icon name="repeat-outline"></ion-icon></ion-button>
          <ion-button slot="end">Tip</ion-button>
          <ion-button slot="end">Buy Coin</ion-button>
        </ion-item>
      </ion-card>
    );
  }

}
