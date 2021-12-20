import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mynt-trade-module',
  styleUrl: 'mynt-trade-module.css',
  shadow: true,
})
export class MyntTradeModule {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
