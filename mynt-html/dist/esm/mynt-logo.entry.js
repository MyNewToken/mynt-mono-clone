import { r as registerInstance, h } from './index-a05ac311.js';

const myntLogoCss = ":host{display:block}";

let MyntLogo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.image = "myntlogo.svg";
  }
  render() {
    return (h("ion-icon", { src: "components/mynt-logo/assets/myntlogo.svg", size: "large" }));
  }
  static get assetsDirs() { return ["assets"]; }
};
MyntLogo.style = myntLogoCss;

export { MyntLogo as mynt_logo };
