import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-make-post-dropdown',
  styleUrl: 'mynt-make-post-dropdown.css',
  shadow: true,
})
export class MyntMakePostDropdown {

  render() {
    return (
      <ion-card>
        <slot></slot>
      </ion-card>
    );
  }

}
