import { Component, h } from '@stencil/core';

@Component({
  tag: 'mynt-logo',
  styleUrl: 'mynt-logo.css',
  shadow: true,
})
export class MyntLogo {

  render() {
    return (
      <ion-icon src="assets/myntlogo.svg" size="large"></ion-icon>
    );
  }

}
