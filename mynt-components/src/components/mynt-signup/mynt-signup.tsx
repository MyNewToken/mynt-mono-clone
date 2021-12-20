import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-signup',
  styleUrl: 'mynt-signup.css',
  shadow: true,
})
export class MyntSignup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
