import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$s } from './avatar.js';
import { d as defineCustomElement$r } from './button.js';
import { d as defineCustomElement$q } from './card.js';
import { d as defineCustomElement$p } from './card-content.js';
import { d as defineCustomElement$o } from './card-header.js';
import { d as defineCustomElement$n } from './card-subtitle.js';
import { d as defineCustomElement$m } from './card-title.js';
import { d as defineCustomElement$l } from './col.js';
import { d as defineCustomElement$k } from './content.js';
import { d as defineCustomElement$j } from './grid.js';
import { d as defineCustomElement$i } from './icon.js';
import { d as defineCustomElement$h } from './img.js';
import { d as defineCustomElement$g } from './infinite-scroll.js';
import { d as defineCustomElement$f } from './infinite-scroll-content.js';
import { d as defineCustomElement$e } from './item.js';
import { d as defineCustomElement$d } from './list.js';
import { d as defineCustomElement$c } from './list-header.js';
import { d as defineCustomElement$b } from './ripple-effect.js';
import { d as defineCustomElement$a } from './row.js';
import { d as defineCustomElement$9 } from './spinner.js';
import { d as defineCustomElement$8 } from './thumbnail.js';
import { d as defineCustomElement$7 } from './mynt-grid-row2.js';
import { d as defineCustomElement$6 } from './mynt-page2.js';
import { d as defineCustomElement$5 } from './mynt-post2.js';
import { d as defineCustomElement$4 } from './mynt-side-list2.js';
import { d as defineCustomElement$3 } from './mynt-side-listing2.js';
import { d as defineCustomElement$2 } from './profile-pic2.js';

const myntWatchCss = ":host{display:block}";

let MyntWatch$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.data = [];
  }
  componentWillLoad() {
    this.pushData();
  }
  pushData() {
    const max = this.data.length + 20;
    const min = max - 20;
    for (var i = min; i < max; i++) {
      var cmp = h("mynt-grid-row", { numCols: 10 });
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
    return (h("mynt-page", null, h("ion-card", { slot: "side" }, h("h1", null, "Trending")), h("mynt-side-list", { ttle: "Following", slot: "side" }), h("mynt-side-list", { ttle: "Wallet", slot: "side" }), h("ion-content", { slot: "main" }, h("ion-grid", null, this.data.map(item => h("ion-item", null, item))), h("ion-infinite-scroll", { ref: el => this.infiniteScroll = el, onIonInfinite: (ev) => this.loadData(ev) }, h("ion-infinite-scroll-content", { loadingSpinner: "bubbles", loadingText: "Loading more data..." })))));
  }
  static get style() { return myntWatchCss; }
};
MyntWatch$1 = /*@__PURE__*/ proxyCustomElement(MyntWatch$1, [1, "mynt-watch", {
    "data": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-watch", "ion-avatar", "ion-button", "ion-card", "ion-card-content", "ion-card-header", "ion-card-subtitle", "ion-card-title", "ion-col", "ion-content", "ion-grid", "ion-icon", "ion-img", "ion-infinite-scroll", "ion-infinite-scroll-content", "ion-item", "ion-list", "ion-list-header", "ion-ripple-effect", "ion-row", "ion-spinner", "ion-thumbnail", "mynt-grid-row", "mynt-page", "mynt-post", "mynt-side-list", "mynt-side-listing", "profile-pic"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-watch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntWatch$1);
      }
      break;
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$s();
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$r();
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$q();
      }
      break;
    case "ion-card-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$p();
      }
      break;
    case "ion-card-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$o();
      }
      break;
    case "ion-card-subtitle":
      if (!customElements.get(tagName)) {
        defineCustomElement$n();
      }
      break;
    case "ion-card-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$m();
      }
      break;
    case "ion-col":
      if (!customElements.get(tagName)) {
        defineCustomElement$l();
      }
      break;
    case "ion-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$k();
      }
      break;
    case "ion-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$j();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$i();
      }
      break;
    case "ion-img":
      if (!customElements.get(tagName)) {
        defineCustomElement$h();
      }
      break;
    case "ion-infinite-scroll":
      if (!customElements.get(tagName)) {
        defineCustomElement$g();
      }
      break;
    case "ion-infinite-scroll-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$f();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$e();
      }
      break;
    case "ion-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "ion-list-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-row":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-thumbnail":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "mynt-grid-row":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "mynt-page":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "mynt-post":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "mynt-side-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "mynt-side-listing":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "profile-pic":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MyntWatch = MyntWatch$1;
const defineCustomElement = defineCustomElement$1;

export { MyntWatch, defineCustomElement };
