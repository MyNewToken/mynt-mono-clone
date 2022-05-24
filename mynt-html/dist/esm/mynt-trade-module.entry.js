import { r as registerInstance, h, H as Host } from './index-a05ac311.js';

const myntTradeModuleCss = ":host{display:block}";

let MyntTradeModule = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
MyntTradeModule.style = myntTradeModuleCss;

export { MyntTradeModule as mynt_trade_module };
