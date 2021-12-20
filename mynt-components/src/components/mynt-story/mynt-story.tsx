import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-story',
  styleUrl: 'mynt-story.css',
  shadow: true,
})
export class MyntStory {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
