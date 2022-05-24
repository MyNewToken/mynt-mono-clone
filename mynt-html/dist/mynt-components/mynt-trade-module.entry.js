import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';

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
