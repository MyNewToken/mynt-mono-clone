import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntCommentSectionCss = ":host{display:block}";

let MyntCommentSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-card", null, h("ion-card-header", null, h("ion-input", null))));
  }
};
MyntCommentSection.style = myntCommentSectionCss;

export { MyntCommentSection as mynt_comment_section };
