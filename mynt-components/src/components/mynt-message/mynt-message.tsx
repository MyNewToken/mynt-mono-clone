import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-message',
  styleUrl: 'mynt-message.css',
  shadow: true,
})
export class MyntMessage {
  @Prop() msg: string = "";
  @Prop({mutable: true}) sent: boolean = true;
  @Prop({mutable: true}) timestamp: string = "1970/01/01";

  render() {
    return (
      <ion-item><ion-label slot={this.sent ? "end": "start"}>{this.msg}</ion-label></ion-item>
    );
  }

}
