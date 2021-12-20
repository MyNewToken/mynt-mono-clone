import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-watch-thumb',
  styleUrl: 'mynt-watch-thumb.css',
  shadow: true,
})
export class MyntWatchThumb {

  render() {
    return (
      <ion-card>
        <ion-card-header>
          <ion-thumbnail>
            <ion-img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"></ion-img>
          </ion-thumbnail>
        </ion-card-header>
        <ion-card-title>
          Watch thumbnail title
        </ion-card-title>
        <ion-card-subtitle>
          Watch thumbnail creator
        </ion-card-subtitle>
      </ion-card>
    );
  }

}
