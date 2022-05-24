'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntFeedCss = ":host{display:block}";

let MyntFeed = class {
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
      this.data.push(index.h("mynt-post", { name: "Logan Paul", user: "@loganpaul", profPicSrc: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: i.toString(), mediaPicSrc: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" }));
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
    return (index.h("mynt-page", null, index.h("ion-card", { slot: "side" }, index.h("h1", null, "Trending")), index.h("mynt-side-list", { ttle: "Following", slot: "side" }), index.h("mynt-side-list", { ttle: "Wallet", slot: "side" }), index.h("mynt-make-post", { slot: "main" }), index.h("ion-content", { slot: "main" }, index.h("ion-list", null, this.data.map(item => index.h("ion-item", null, item))), index.h("ion-infinite-scroll", { ref: el => this.infiniteScroll = el, onIonInfinite: (ev) => this.loadData(ev) }, index.h("ion-infinite-scroll-content", { loadingSpinner: "bubbles", loadingText: "Loading more data..." })))));
  }
};
MyntFeed.style = myntFeedCss;

exports.mynt_feed = MyntFeed;
