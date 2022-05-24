import { r as registerInstance, h } from './index-a05ac311.js';

const myntChatCss = ":host{display:block}";

let MyntChat = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = "Parker";
  }
  render() {
    return (h("ion-card", null, h("ion-card-header", { color: "dark" }, h("ion-card-title", null, this.name)), h("ion-list", null, h("mynt-message", { sent: false, msg: "What's up?" }), h("mynt-message", { sent: true, msg: "Hey!" })), h("ion-item", null, h("ion-textarea", { autoGrow: true, autofocus: true, enterkeyhint: "send", placeholder: "mynt message..." }), h("ion-button", null, h("ion-icon", { name: "send-outline" })))));
  }
};
MyntChat.style = myntChatCss;

export { MyntChat as mynt_chat };
