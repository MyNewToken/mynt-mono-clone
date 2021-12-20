import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-dm-noti-button',
  styleUrl: 'mynt-dm-noti-button.css',
  shadow: true,
})
export class MyntDmNotiButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
