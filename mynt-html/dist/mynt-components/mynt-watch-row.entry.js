import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntWatchRowCss = ":host{display:block}";

let MyntWatchRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.data = [];
    this.numCols = 0;
  }
  render() {
    for (var _ = 0; _ < this.numCols; _++) {
      this.data.push(h("mynt-watch-thumb", null));
    }
    return (h("ion-row", null, this.data.map(el => h("ion-col", null, el))));
  }
};
MyntWatchRow.style = myntWatchRowCss;

export { MyntWatchRow as mynt_watch_row };
