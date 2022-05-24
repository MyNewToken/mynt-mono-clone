import { r as registerInstance, h, H as Host } from './index-a05ac311.js';
import { g as getIonMode } from './ionic-global-f84a4429.js';
import { c as createColorClasses } from './theme-12606872.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

let Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
      }) }, h("slot", null)));
  }
};
Text.style = textCss;

export { Text as ion_text };
