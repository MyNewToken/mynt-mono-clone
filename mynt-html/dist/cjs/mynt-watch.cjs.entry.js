'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntWatchCss = ":host{display:block}";

let MyntWatch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.data = [];
  }
  componentWillLoad() {
    this.pushData();
  }
  pushData() {
    const max = this.data.length + 20;
    const min = max - 20;
    for (var i = min; i < max; i++) {
      var cmp = index.h("mynt-grid-row", { numCols: 10 });
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
    return (index.h("mynt-page", null, index.h("ion-card", { slot: "side" }, index.h("h1", null, "Trending")), index.h("mynt-side-list", { ttle: "Following", slot: "side" }), index.h("mynt-side-list", { ttle: "Wallet", slot: "side" }), index.h("ion-content", { slot: "main" }, index.h("ion-grid", null, this.data.map(item => index.h("ion-item", null, item))), index.h("ion-infinite-scroll", { ref: el => this.infiniteScroll = el, onIonInfinite: (ev) => this.loadData(ev) }, index.h("ion-infinite-scroll-content", { loadingSpinner: "bubbles", loadingText: "Loading more data..." })))));
  }
};
MyntWatch.style = myntWatchCss;

exports.mynt_watch = MyntWatch;
