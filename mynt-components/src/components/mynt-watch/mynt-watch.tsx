import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'mynt-watch',
  styleUrl: 'mynt-watch.css',
  shadow: true,
})
export class MyntWatch {

  //@ts-ignore
  private infiniteScroll: HTMLIonInfiniteScrollElement;

  @State() data = [];

  componentWillLoad() {
    this.pushData();
  }

  pushData() {
    const max = this.data.length + 20;
    const min = max - 20;

    for (var i = min; i < max; i++) {
      var cmp = <mynt-grid-row numCols={4}></mynt-grid-row>;
      //this might work but also I may need to wrap the infinite scroll or something in a ion-grid
      //not working because you can't change an @State from outside the component
      //ohhhhhh use a prop for this
      //state only for internally managed stuffffff, prop doesn't nec need to be passed through like a html prop I think and hopefullllly
      //Nah props are default immutable and the props can be mutable but only from within the component
      this.data.push(cmp);
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

  render() {
    return (
        <mynt-page>
              <ion-card slot="side"><h1>Trending</h1></ion-card>
              <mynt-side-list ttle="Following" slot="side"></mynt-side-list>
              <mynt-side-list ttle="Wallet" slot="side"></mynt-side-list>
              <ion-content slot="main">
                <ion-grid>
                  {this.data.map(item =>
                    <ion-item>{item}
                    </ion-item>
                  )}
                </ion-grid>
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
