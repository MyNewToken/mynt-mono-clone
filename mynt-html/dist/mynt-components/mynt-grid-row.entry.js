import { r as registerInstance, i as h } from './index-beea9e3c.js';

const myntGridRowCss = ":host{display:block}";

let MyntGridRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.data = [];
    this.numCols = 0;
  }
  render() {
    for (var i = 0; i < this.numCols; i++) {
      this.data.push(h("mynt-post", { name: "Logan Paul", user: "@loganpaul", profPicSrc: "https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg", text: i.toString(), mediaPicSrc: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" }));
    }
    return (h("ion-row", null, this.data.map(el => h("ion-col", null, el))));
  }
};
MyntGridRow.style = myntGridRowCss;

export { MyntGridRow as mynt_grid_row };
