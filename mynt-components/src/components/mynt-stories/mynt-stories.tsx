import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-stories',
  styleUrl: 'mynt-stories.css',
  shadow: true,
})
export class MyntStories {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
