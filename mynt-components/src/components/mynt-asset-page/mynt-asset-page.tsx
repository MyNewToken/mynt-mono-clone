import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-asset-page',
  styleUrl: 'mynt-asset-page.css',
  shadow: true,
})
export class MyntAssetPage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
