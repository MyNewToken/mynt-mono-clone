import { r as registerInstance, i as h } from './index-beea9e3c.js';

const profilePicCss = ":host{display:block}";

let ProfilePic = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.source = "";
  }
  render() {
    return [
      h("ion-avatar", null, h("ion-img", { src: this.source }))
    ];
  }
};
ProfilePic.style = profilePicCss;

export { ProfilePic as profile_pic };
