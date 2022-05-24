import { HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { g as getIonMode } from './ionic-global.js';

const slideCss = "ion-slide{display:block;width:100%;height:100%}.slide-zoom{display:block;width:100%;text-align:center}.swiper-slide{display:flex;position:relative;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;font-size:18px;text-align:center;box-sizing:border-box}.swiper-slide img{width:auto;max-width:100%;height:auto;max-height:100%}";

let Slide = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: {
        [mode]: true,
        'swiper-slide': true,
        'swiper-zoom-container': true
      } }));
  }
  static get style() { return slideCss; }
};
Slide = /*@__PURE__*/ proxyCustomElement(Slide, [0, "ion-slide"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-slide"];
  components.forEach(tagName => { switch (tagName) {
    case "ion-slide":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Slide);
      }
      break;
  } });
}

const IonSlide = Slide;
const defineCustomElement = defineCustomElement$1;

export { IonSlide, defineCustomElement };
