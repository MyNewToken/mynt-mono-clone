'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');
const overlays = require('./overlays-6c85c2cf.js');
require('./ionic-global-9f581fac.js');
require('./hardware-back-button-ca468aae.js');
require('./helpers-ff618d5e.js');

const myntDmsCss = ":host{display:block}";

let MyntDms = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.data = [];
  }
  populate_data() {
    this.data[0] = ["https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", "Logan"];
    this.data[1] = ["https://cryptologos.cc/logos/bitcoin-btc-logo.png", "BitMan"];
  }
  async presentChat(name_param) {
    const popover = await overlays.popoverController.create({
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
    return (index.h("ion-card", null, index.h("ion-list", null, index.h("ion-list-header", null, index.h("h1", null, "Direct Messages")), index.h("mynt-dm", { profImg: this.data[0][0], name: this.data[0][1], onClick: () => this.presentChat(this.data[0][1]) }), index.h("mynt-dm", { profImg: this.data[1][0], name: this.data[1][1] }))));
  }
};
MyntDms.style = myntDmsCss;

exports.mynt_dms = MyntDms;
