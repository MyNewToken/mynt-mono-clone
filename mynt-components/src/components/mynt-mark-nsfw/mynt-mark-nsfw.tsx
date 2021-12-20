import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-mark-nsfw',
  styleUrl: 'mynt-mark-nsfw.css',
  shadow: true,
})
export class MyntMarkNsfw {

  render() {
    return (
      <mynt-make-post-dropdown>
        <ion-item>
          <ion-label>Mark as NSFW?</ion-label>
          <ion-checkbox></ion-checkbox>
        </ion-item>
      </mynt-make-post-dropdown>
    );
  }

}
