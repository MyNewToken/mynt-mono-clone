import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mynt-login',
  styleUrl: 'mynt-login.css',
  shadow: true,
})
export class MyntLogin {
  @Prop({mutable: true}) create_account = false;

  render() {

    return [
    <ion-card>
      <ion-item>
        <mynt-logo></mynt-logo>
        <ion-card-header>{this.create_account? "Create Mynt Account": "Log in to Mynt"}</ion-card-header>
      </ion-item>
      <ion-segment>
        <ion-segment-button onClick={()=>this.create_account=false}>
          <ion-label>Login</ion-label>
        </ion-segment-button>
        <ion-segment-button onClick={()=>this.create_account=true}>
          <ion-label>Sign Up</ion-label>
        </ion-segment-button>
      </ion-segment>
      <ion-input placeholder="username"></ion-input>
      <ion-input placeholder="password"></ion-input>
      <ion-item>
        <ion-checkbox></ion-checkbox>
        <ion-label>{this.create_account? "I agree to the Terms and Conditions": "Remember me"}</ion-label>
      </ion-item>
      <ion-button>{this.create_account? "Create Account": "Login"}</ion-button>
    </ion-card>
    ];
  }

}
