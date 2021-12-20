import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-listing',
  styleUrl: 'mynt-listing.css',
  shadow: true,
})
export class MyntListing {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
