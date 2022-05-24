'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntCommentSectionCss = ":host{display:block}";

let MyntCommentSection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ion-card", null, index.h("ion-card-header", null, index.h("ion-input", null))));
  }
};
MyntCommentSection.style = myntCommentSectionCss;

exports.mynt_comment_section = MyntCommentSection;
