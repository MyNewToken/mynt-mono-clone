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

const myntDmsCss = ":host{display:block}";

let MyntDms = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.data = [];
  }
  populate_data() {
    this.data[0] = ["https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", "Logan"];
    this.data[1] = ["https://cryptologos.cc/logos/bitcoin-btc-logo.png", "BitMan"];
  }
  async presentChat(name_param) {
    const popover = await popoverController.create({
      component: 'mynt-chat',
      componentProps: { name: name_param },
      //cssClass: 'my-custom-class',//////CHANGE
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  render() {
    this.populate_data();
    return (h("ion-card", null, h("ion-list", null, h("ion-list-header", null, h("h1", null, "Direct Messages")), h("mynt-dm", { profImg: this.data[0][0], name: this.data[0][1], onClick: () => this.presentChat(this.data[0][1]) }), h("mynt-dm", { profImg: this.data[1][0], name: this.data[1][1] }))));
  }
};
MyntDms.style = myntDmsCss;

export { MyntDms as mynt_dms };
