import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-grid-row',
  styleUrl: 'mynt-grid-row.css',
  shadow: true,
})
export class MyntGridRow {

  @State() data = [];
  @Prop() numCols = 0;

  render() {
    for (var i = 0; i < this.numCols; i++) {
      this.data.push(<mynt-post name="Logan Paul" user="@loganpaul" profPicSrc="https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg" text={i.toString()} mediaPicSrc="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"></mynt-post>);
    }
    return (
      <ion-row>
        {this.data.map(el => <ion-col>{el}</ion-col>)}
      </ion-row>
    );
  }

}
