import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-settings',
  styleUrl: 'mynt-settings.css',
  shadow: true,
})
export class MyntSettings {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
