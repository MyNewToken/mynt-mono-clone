'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntChatCss = ":host{display:block}";

let MyntChat = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = "Parker";
  }
  render() {
    return (index.h("ion-card", null, index.h("ion-card-header", { color: "dark" }, index.h("ion-card-title", null, this.name)), index.h("ion-list", null, index.h("mynt-message", { sent: false, msg: "What's up?" }), index.h("mynt-message", { sent: true, msg: "Hey!" })), index.h("ion-item", null, index.h("ion-textarea", { autoGrow: true, autofocus: true, enterkeyhint: "send", placeholder: "mynt message..." }), index.h("ion-button", null, index.h("ion-icon", { name: "send-outline" })))));
  }
};
MyntChat.style = myntChatCss;

exports.mynt_chat = MyntChat;
