import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-logo',
  styleUrl: 'mynt-logo.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class MyntLogo {

  @Prop() image = "myntlogo.svg";

  render() {
    return (
      <ion-icon src="components/mynt-logo/assets/myntlogo.svg" size="large"></ion-icon>
    );
  }

}
