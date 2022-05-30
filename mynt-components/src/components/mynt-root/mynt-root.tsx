import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-root',
  styleUrl: 'mynt-root.css',
})

export class MyntRoot {

  @Prop() src: string = "";

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route component="mynt-menu">
            <ion-route url="/" component="mynts" />
            <ion-route url="/watch" component="watch" />
            <ion-route url="/market" component="watch" />
            <ion-route url="/assets" component="watch" />
          </ion-route>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }

}
