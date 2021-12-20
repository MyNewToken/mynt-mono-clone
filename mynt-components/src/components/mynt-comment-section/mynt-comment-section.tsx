import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-comment-section',
  styleUrl: 'mynt-comment-section.css',
  shadow: true,
})
export class MyntCommentSection {

  render() {
    return (
      <ion-card>
        <ion-card-header>
          <ion-input></ion-input>
        </ion-card-header>
      </ion-card>
    );
  }

}
