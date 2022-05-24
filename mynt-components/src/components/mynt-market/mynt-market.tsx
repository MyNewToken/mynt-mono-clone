import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'mynt-market',
  styleUrl: 'mynt-market.css',
  shadow: true,
})
export class MyntMarket {

  // @ts-ignore
  private infiniteScroll: HTMLIonInfiniteScrollElement;

  @State() data = [];

  componentWillLoad() {
    this.pushData();
  }

  pushData() {
    const max = this.data.length + 5;
    const min = max - 5;

    for (var i = min; i < max; i++) {
      this.data.push(<mynt-grid-row numCols={10}></mynt-grid-row>);
    }

    // Stencil does not re-render when pushing to an array
    // so create a new copy of the array
    // https://stenciljs.com/docs/reactive-data#handling-arrays-and-objects
    this.data = [
      ...this.data
    ];
  }

  loadData(ev) {
    setTimeout(() => {
      this.pushData();
      console.log('Loaded data');
      ev.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 1000) {
        ev.target.disabled = true;
      }
    }, 500);
  }
  //need to change the div below

  render() {
    return (
        <mynt-page>
              <ion-card slot="side"><h1>Recent Listings</h1></ion-card>
              <mynt-side-list ttle="Coins" slot="side"></mynt-side-list>
              <mynt-side-list ttle="Tokens" slot="side"></mynt-side-list>
              <mynt-side-list ttle="Physical" slot="side"></mynt-side-list>
              <mynt-side-list ttle="Digital" slot="side"></mynt-side-list>
            <ion-content slot="main">
              <ion-list>
                {this.data.map(item =>
                  <ion-item>
                    {item}
                  </ion-item>
                )}
              </ion-list>

              <ion-infinite-scroll
                ref={el => this.infiniteScroll = el}
                onIonInfinite={(ev) => this.loadData(ev)}>
                <ion-infinite-scroll-content
                  loadingSpinner="bubbles"
                  loadingText="Loading more data...">
                </ion-infinite-scroll-content>
              </ion-infinite-scroll>
            </ion-content>
        </mynt-page>
    );
  }

}
