import { Component, h, Prop } from '@stencil/core';
import { popoverController } from '@ionic/core';
export class MyntDms {
  constructor() {
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
    return (h("ion-card", null,
      h("ion-list", null,
        h("ion-list-header", null,
          h("h1", null, "Direct Messages")),
        h("mynt-dm", { profImg: this.data[0][0], name: this.data[0][1], onClick: () => this.presentChat(this.data[0][1]) }),
        h("mynt-dm", { profImg: this.data[1][0], name: this.data[1][1] }))));
  }
  static get is() { return "mynt-dms"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-dms.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-dms.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    }
  }; }
}
