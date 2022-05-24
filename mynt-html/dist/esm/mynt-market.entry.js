import { r as registerInstance, h } from './index-a05ac311.js';

const myntMarketCss = ":host{display:block}";

let MyntMarket = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.data = [];
  }
  componentWillLoad() {
    this.pushData();
  }
  pushData() {
    const max = this.data.length + 5;
    const min = max - 5;
    for (var i = min; i < max; i++) {
      this.data.push(h("mynt-grid-row", { numCols: 10 }));
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
    return (h("mynt-page", null, h("ion-card", { slot: "side" }, h("h1", null, "Recent Listings")), h("mynt-side-list", { ttle: "Coins", slot: "side" }), h("mynt-side-list", { ttle: "Tokens", slot: "side" }), h("mynt-side-list", { ttle: "Physical", slot: "side" }), h("mynt-side-list", { ttle: "Digital", slot: "side" }), h("ion-content", { slot: "main" }, h("ion-list", null, this.data.map(item => h("ion-item", null, item))), h("ion-infinite-scroll", { ref: el => this.infiniteScroll = el, onIonInfinite: (ev) => this.loadData(ev) }, h("ion-infinite-scroll-content", { loadingSpinner: "bubbles", loadingText: "Loading more data..." })))));
  }
};
MyntMarket.style = myntMarketCss;

export { MyntMarket as mynt_market };
