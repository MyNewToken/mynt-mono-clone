import { Component, h, Prop } from '@stencil/core';
import { popoverController } from '@ionic/core';
export class MyntPost {
  constructor() {
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
    return (h("ion-card", null,
      h("ion-card-header", null,
        h("ion-item", null,
          h("profile-pic", { source: this.profPicSrc }),
          h("ion-card-title", null, this.name)),
        h("ion-card-subtitle", null, this.user)),
      h("ion-card-content", null, this.text),
      h("ion-card-content", null,
        h("ion-thumbnail", null,
          h("ion-img", { src: this.mediaPicSrc }))),
      h("ion-item", null,
        h("ion-button", { slot: "start" },
          h("ion-icon", { name: "thumbs-up-outline" })),
        h("ion-button", { slot: "start", onClick: () => this.presentComments() },
          h("ion-icon", { name: "chatbox-outline" })),
        h("ion-button", { slot: "start" },
          h("ion-icon", { name: "repeat-outline" })),
        h("ion-button", { slot: "end" }, "Tip"),
        h("ion-button", { slot: "end" }, "Buy Coin"))));
  }
  static get is() { return "mynt-post"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["mynt-post.css"]
  }; }
  static get styleUrls() { return {
    "$": ["mynt-post.css"]
  }; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "user": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "user",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "profPicSrc": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "prof-pic-src",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "mediaPicSrc": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "media-pic-src",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
}
