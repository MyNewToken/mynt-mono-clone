import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$w } from './avatar.js';
import { d as defineCustomElement$v } from './button.js';
import { d as defineCustomElement$u } from './card.js';
import { d as defineCustomElement$t } from './card-content.js';
import { d as defineCustomElement$s } from './card-header.js';
import { d as defineCustomElement$r } from './card-subtitle.js';
import { d as defineCustomElement$q } from './card-title.js';
import { d as defineCustomElement$p } from './col.js';
import { d as defineCustomElement$o } from './content.js';
import { d as defineCustomElement$n } from './grid.js';
import { d as defineCustomElement$m } from './icon.js';
import { d as defineCustomElement$l } from './img.js';
import { d as defineCustomElement$k } from './infinite-scroll.js';
import { d as defineCustomElement$j } from './infinite-scroll-content.js';
import { d as defineCustomElement$i } from './item.js';
import { d as defineCustomElement$h } from './label.js';
import { d as defineCustomElement$g } from './list.js';
import { d as defineCustomElement$f } from './list-header.js';
import { d as defineCustomElement$e } from './ripple-effect.js';
import { d as defineCustomElement$d } from './row.js';
import { d as defineCustomElement$c } from './select.js';
import { d as defineCustomElement$b } from './select-option.js';
import { d as defineCustomElement$a } from './spinner.js';
import { d as defineCustomElement$9 } from './thumbnail.js';
import { d as defineCustomElement$8 } from './toggle.js';
import { d as defineCustomElement$7 } from './mynt-make-post2.js';
import { d as defineCustomElement$6 } from './mynt-page2.js';
import { d as defineCustomElement$5 } from './mynt-post2.js';
import { d as defineCustomElement$4 } from './mynt-side-list2.js';
import { d as defineCustomElement$3 } from './mynt-side-listing2.js';
import { d as defineCustomElement$2 } from './profile-pic2.js';

const myntFeedCss = ":host{display:block}";

let MyntFeed$1 = class extends HTMLElement {
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
      this.data.push(h("mynt-post", { name: "Logan Paul", user: "@loganpaul", profPicSrc: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: i.toString(), mediaPicSrc: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" }));
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
    return (h("mynt-page", null, h("ion-card", { slot: "side" }, h("h1", null, "Trending")), h("mynt-side-list", { ttle: "Following", slot: "side" }), h("mynt-side-list", { ttle: "Wallet", slot: "side" }), h("mynt-make-post", { slot: "main" }), h("ion-content", { slot: "main" }, h("ion-list", null, this.data.map(item => h("ion-item", null, item))), h("ion-infinite-scroll", { ref: el => this.infiniteScroll = el, onIonInfinite: (ev) => this.loadData(ev) }, h("ion-infinite-scroll-content", { loadingSpinner: "bubbles", loadingText: "Loading more data..." })))));
  }
  static get style() { return myntFeedCss; }
};
MyntFeed$1 = /*@__PURE__*/ proxyCustomElement(MyntFeed$1, [1, "mynt-feed", {
    "data": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mynt-feed", "ion-avatar", "ion-button", "ion-card", "ion-card-content", "ion-card-header", "ion-card-subtitle", "ion-card-title", "ion-col", "ion-content", "ion-grid", "ion-icon", "ion-img", "ion-infinite-scroll", "ion-infinite-scroll-content", "ion-item", "ion-label", "ion-list", "ion-list-header", "ion-ripple-effect", "ion-row", "ion-select", "ion-select-option", "ion-spinner", "ion-thumbnail", "ion-toggle", "mynt-make-post", "mynt-page", "mynt-post", "mynt-side-list", "mynt-side-listing", "profile-pic"];
  components.forEach(tagName => { switch (tagName) {
    case "mynt-feed":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyntFeed$1);
      }
      break;
    case "ion-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$w();
      }
      break;
    case "ion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$v();
      }
      break;
    case "ion-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$u();
      }
      break;
    case "ion-card-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$t();
      }
      break;
    case "ion-card-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$s();
      }
      break;
    case "ion-card-subtitle":
      if (!customElements.get(tagName)) {
        defineCustomElement$r();
      }
      break;
    case "ion-card-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$q();
      }
      break;
    case "ion-col":
      if (!customElements.get(tagName)) {
        defineCustomElement$p();
      }
      break;
    case "ion-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$o();
      }
      break;
    case "ion-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$n();
      }
      break;
    case "ion-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$m();
      }
      break;
    case "ion-img":
      if (!customElements.get(tagName)) {
        defineCustomElement$l();
      }
      break;
    case "ion-infinite-scroll":
      if (!customElements.get(tagName)) {
        defineCustomElement$k();
      }
      break;
    case "ion-infinite-scroll-content":
      if (!customElements.get(tagName)) {
        defineCustomElement$j();
      }
      break;
    case "ion-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$i();
      }
      break;
    case "ion-label":
      if (!customElements.get(tagName)) {
        defineCustomElement$h();
      }
      break;
    case "ion-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$g();
      }
      break;
    case "ion-list-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$f();
      }
      break;
    case "ion-ripple-effect":
      if (!customElements.get(tagName)) {
        defineCustomElement$e();
      }
      break;
    case "ion-row":
      if (!customElements.get(tagName)) {
        defineCustomElement$d();
      }
      break;
    case "ion-select":
      if (!customElements.get(tagName)) {
        defineCustomElement$c();
      }
      break;
    case "ion-select-option":
      if (!customElements.get(tagName)) {
        defineCustomElement$b();
      }
      break;
    case "ion-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$a();
      }
      break;
    case "ion-thumbnail":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "ion-toggle":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "mynt-make-post":
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

const MyntFeed = MyntFeed$1;
const defineCustomElement = defineCustomElement$1;

export { MyntFeed, defineCustomElement };
