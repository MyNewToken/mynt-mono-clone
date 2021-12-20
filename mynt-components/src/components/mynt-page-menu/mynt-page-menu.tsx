import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-page-menu',
  styleUrl: 'mynt-page-menu.css',
  shadow: true,
})
export class MyntPageMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
