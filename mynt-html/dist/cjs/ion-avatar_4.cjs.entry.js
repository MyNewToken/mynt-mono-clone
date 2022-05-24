'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');
const ionicGlobal = require('./ionic-global-9f581fac.js');
const theme = require('./theme-98ccfc24.js');

const avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";

const avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";

let Avatar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("slot", null)));
  }
};
Avatar.style = {
  ios: avatarIosCss,
  md: avatarMdCss
};

const cardTitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:28px;font-weight:700;line-height:1.2}";

const cardTitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, #262626);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;line-height:1.2}";

let CardTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const mode = ionicGlobal.getIonMode(this);
    return (index.h(index.Host, { role: "heading", "aria-level": "2", class: theme.createColorClasses(this.color, {
        'ion-inherit-color': true,
        [mode]: true
      }) }, index.h("slot", null)));
  }
};
CardTitle.style = {
  ios: cardTitleIosCss,
  md: cardTitleMdCss
};

const imgCss = ":host{display:block;object-fit:contain}img{display:block;width:100%;height:100%;object-fit:inherit;object-position:inherit}";

let Img = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionImgWillLoad = index.createEvent(this, "ionImgWillLoad", 7);
    this.ionImgDidLoad = index.createEvent(this, "ionImgDidLoad", 7);
    this.ionError = index.createEvent(this, "ionError", 7);
    this.onLoad = () => {
      this.ionImgDidLoad.emit();
    };
    this.onError = () => {
      this.ionError.emit();
    };
  }
  srcChanged() {
    this.addIO();
  }
  componentDidLoad() {
    this.addIO();
  }
  addIO() {
    if (this.src === undefined) {
      return;
    }
    if (typeof window !== 'undefined' &&
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'isIntersecting' in window.IntersectionObserverEntry.prototype) {
      this.removeIO();
      this.io = new IntersectionObserver(data => {
        /**
         * On slower devices, it is possible for an intersection observer entry to contain multiple
         * objects in the array. This happens when quickly scrolling an image into view and then out of
         * view. In this case, the last object represents the current state of the component.
         */
        if (data[data.length - 1].isIntersecting) {
          this.load();
          this.removeIO();
        }
      });
      this.io.observe(this.el);
    }
    else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => this.load(), 200);
    }
  }
  load() {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.ionImgWillLoad.emit();
  }
  removeIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  render() {
    return (index.h(index.Host, { class: ionicGlobal.getIonMode(this) }, index.h("img", { decoding: "async", src: this.loadSrc, alt: this.alt, onLoad: this.onLoad, onError: this.loadError, part: "image" })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "src": ["srcChanged"]
  }; }
};
Img.style = imgCss;

const profilePicCss = ":host{display:block}";

let ProfilePic = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.source = "";
  }
  render() {
    return [
      index.h("ion-avatar", null, index.h("ion-img", { src: this.source }))
    ];
  }
};
ProfilePic.style = profilePicCss;

exports.ion_avatar = Avatar;
exports.ion_card_title = CardTitle;
exports.ion_img = Img;
exports.profile_pic = ProfilePic;
