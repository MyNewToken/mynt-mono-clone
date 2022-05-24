'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7f6e4fd5.js');

const myntWatchRowCss = ":host{display:block}";

let MyntWatchRow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.data = [];
    this.numCols = 0;
  }
  render() {
    for (var _ = 0; _ < this.numCols; _++) {
      this.data.push(index.h("mynt-watch-thumb", null));
    }
    return (index.h("ion-row", null, this.data.map(el => index.h("ion-col", null, el))));
  }
};
MyntWatchRow.style = myntWatchRowCss;

exports.mynt_watch_row = MyntWatchRow;
