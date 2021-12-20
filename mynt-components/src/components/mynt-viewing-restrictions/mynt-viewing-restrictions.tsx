import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-viewing-restrictions',
  styleUrl: 'mynt-viewing-restrictions.css',
  shadow: true,
})
export class MyntViewingRestrictions {

  render() {
    return (
      <mynt-make-post-dropdown>
        <ion-item>
          <ion-input placeholder="Search all coins"></ion-input>
          <ion-button>Search</ion-button>
        </ion-item>
        <ion-list>
          <mynt-asset-item></mynt-asset-item>
        </ion-list>
        <slot></slot>
      </mynt-make-post-dropdown>
    );
  }

}
