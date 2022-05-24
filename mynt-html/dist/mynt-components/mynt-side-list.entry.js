import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntSideListCss = ":host{display:block}";

let MyntSideList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ttle = "";
  }
  //need to do some type of listy stuff here with adding the listings, passing stuff into the props, dunno how to do it yet
  render() {
    return (h("ion-card", null, h("ion-list", null, h("ion-list-header", null, h("h1", null, this.ttle)), h("mynt-side-listing", { image: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: "Logan" }), h("mynt-side-listing", { image: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: "Logan 1" }), h("mynt-side-listing", { image: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: "Logan 2" }))));
  }
};
MyntSideList.style = myntSideListCss;

export { MyntSideList as mynt_side_list };
