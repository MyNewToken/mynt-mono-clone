import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-side-list',
  styleUrl: 'mynt-side-list.css',
  shadow: true,
})
export class MyntSideList {

  @Prop() ttle: string = "";
  //need to do some type of listy stuff here with adding the listings, passing stuff into the props, dunno how to do it yet

  render() {
    return (
      <ion-card>
      <ion-list>
        <ion-list-header>
          <h1>{this.ttle}</h1>
        </ion-list-header>

        <mynt-side-listing image="https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg" text="Logan"></mynt-side-listing>
        <mynt-side-listing image="https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg" text="Logan 1"></mynt-side-listing>
        <mynt-side-listing image="https://pbs.twimg.com/profile_images/1401837042934468611/okzqIoMb_400x400.jpg" text="Logan 2"></mynt-side-listing>

      </ion-list>
    </ion-card>
    );
  }

}
