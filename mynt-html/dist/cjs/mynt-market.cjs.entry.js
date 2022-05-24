'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntMarketCss = ":host{display:block}";

let MyntMarket = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.data = [];
  }
  componentWillLoad() {
    this.pushData();
  }
  pushData() {
    const max = this.data.length + 5;
    const min = max - 5;
    for (var i = min; i < max; i++) {
      this.data.push(index.h("mynt-grid-row", { numCols: 10 }));
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
    return (index.h("mynt-page", null, index.h("ion-card", { slot: "side" }, index.h("h1", null, "Recent Listings")), index.h("mynt-side-list", { ttle: "Coins", slot: "side" }), index.h("mynt-side-list", { ttle: "Tokens", slot: "side" }), index.h("mynt-side-list", { ttle: "Physical", slot: "side" }), index.h("mynt-side-list", { ttle: "Digital", slot: "side" }), index.h("ion-content", { slot: "main" }, index.h("ion-list", null, this.data.map(item => index.h("ion-item", null, item))), index.h("ion-infinite-scroll", { ref: el => this.infiniteScroll = el, onIonInfinite: (ev) => this.loadData(ev) }, index.h("ion-infinite-scroll-content", { loadingSpinner: "bubbles", loadingText: "Loading more data..." })))));
  }
};
MyntMarket.style = myntMarketCss;

exports.mynt_market = MyntMarket;
