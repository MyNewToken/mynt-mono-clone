import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'mynt-feed',
  styleUrl: 'mynt-feed.css',
  shadow: true,
})
export class MyntFeed {

  // @ts-ignore
  private infiniteScroll: HTMLIonInfiniteScrollElement;

  @State() data = [];

  componentWillLoad() {
    this.pushData();
  }

  pushData() {
    const max = this.data.length + 20;
    const min = max - 20;

    for (var i = min; i < max; i++) {
      this.data.push(<mynt-post name="Logan Paul" user="@loganpaul" profPicSrc="https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg" text={i.toString()} mediaPicSrc="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"></mynt-post>);
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
          <mynt-make-post slot="main"></mynt-make-post>
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
