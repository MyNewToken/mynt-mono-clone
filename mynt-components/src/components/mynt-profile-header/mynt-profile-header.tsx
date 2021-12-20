import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-profile-header',
  styleUrl: 'mynt-profile-header.css',
  shadow: true,
})
export class MyntProfileHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
