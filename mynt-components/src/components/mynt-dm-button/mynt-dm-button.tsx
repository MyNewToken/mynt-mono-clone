import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-dm-button',
  styleUrl: 'mynt-dm-button.css',
  shadow: true,
})
export class MyntDmButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
