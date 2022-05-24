import { r as registerInstance, i as h } from './index-beea9e3c.js';
import './index-e71006db.js';
import { f as popoverController } from './overlays-7b10eec4.js';
import './utils-31c4f280.js';
import './animation-f5d65eb4.js';
import './helpers-1fa18553.js';
import './ios.transition-07ceffae.js';
import './index-f052c414.js';
import './md.transition-4252c1ac.js';
import './cubic-bezier-ed243a9b.js';
import './index-d086042f.js';
import './ionic-global-28a89d59.js';
import './index-cc97b114.js';
import './index-894e7863.js';
import './hardware-back-button-508e48cf.js';

const myntPostCss = ":host{display:block}";

let MyntPost = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = "";
    this.user = "";
    this.profPicSrc = "";
    this.text = "";
    this.mediaPicSrc = "";
  }
  //I don't think I will be able to use popover for comments because the customization capabilities won't be there until ionic v6
  //I think a framework will be required for this.
  //I'll just use this to look at the comments
  async presentComments() {
    const popover = await popoverController.create({
      component: 'mynt-comment-section',
      //cssClass: 'my-custom-class',//////CHANGE
      showBackdrop: false,
      //event: ev,
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  render() {
    return (h("ion-card", null, h("ion-card-header", null, h("ion-item", null, h("profile-pic", { source: this.profPicSrc }), h("ion-card-title", null, this.name)), h("ion-card-subtitle", null, this.user)), h("ion-card-content", null, this.text), h("ion-card-content", null, h("ion-thumbnail", null, h("ion-img", { src: this.mediaPicSrc }))), h("ion-item", null, h("ion-button", { slot: "start" }, h("ion-icon", { name: "thumbs-up-outline" })), h("ion-button", { slot: "start", onClick: () => this.presentComments() }, h("ion-icon", { name: "chatbox-outline" })), h("ion-button", { slot: "start" }, h("ion-icon", { name: "repeat-outline" })), h("ion-button", { slot: "end" }, "Tip"), h("ion-button", { slot: "end" }, "Buy Coin"))));
  }
};
MyntPost.style = myntPostCss;

export { MyntPost as mynt_post };
