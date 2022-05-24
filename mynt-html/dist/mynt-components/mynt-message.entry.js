import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntMessageCss = ":host{display:block}";

let MyntMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.msg = "";
    this.sent = true;
    this.timestamp = "1970/01/01";
  }
  render() {
    return (h("ion-item", null, h("ion-label", { slot: this.sent ? "end" : "start" }, this.msg)));
  }
};
MyntMessage.style = myntMessageCss;

export { MyntMessage as mynt_message };
