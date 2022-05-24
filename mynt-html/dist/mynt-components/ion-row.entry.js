import { r as registerInstance, i as h, j as Host } from './index-beea9e3c.js';
import { g as getIonMode } from './ionic-global-28a89d59.js';

const rowCss = ":host{display:flex;flex-wrap:wrap}";

let Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: getIonMode(this) }, h("slot", null)));
  }
};
Row.style = rowCss;

export { Row as ion_row };
