import { r as registerInstance, i as h, j as Host, k as getElement } from './index-beea9e3c.js';
import { g as getIonMode } from './ionic-global-28a89d59.js';

const selectOptionCss = ":host{display:none}";

let SelectOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputId = `ion-selopt-${selectOptionIds++}`;
    /**
     * If `true`, the user cannot interact with the select option. This property does not apply when `interface="action-sheet"` as `ion-action-sheet` does not allow for disabled buttons.
     */
    this.disabled = false;
  }
  render() {
    return (h(Host, { role: "option", id: this.inputId, class: getIonMode(this) }));
  }
  get el() { return getElement(this); }
};
let selectOptionIds = 0;
SelectOption.style = selectOptionCss;

export { SelectOption as ion_select_option };
