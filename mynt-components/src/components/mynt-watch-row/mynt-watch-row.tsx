import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'mynt-watch-row',
  styleUrl: 'mynt-watch-row.css',
  shadow: true,
})
export class MyntWatchRow {

  @State() data = [];
  @Prop() numCols = 0;

  render() {
    for (var _ = 0; _ < this.numCols; _++) {
      this.data.push(<mynt-watch-thumb></mynt-watch-thumb>);
    }
    return (
      <ion-row>
        {this.data.map(el => <ion-col>{el}</ion-col>)}
      </ion-row>
    );
  }

}
