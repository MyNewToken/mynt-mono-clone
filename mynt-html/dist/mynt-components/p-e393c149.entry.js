import{r as t,h as n}from"./p-c6c344a2.js";import{f as o}from"./p-d42b85e1.js";import"./p-58f7f4fc.js";import"./p-f2660943.js";import"./p-12182d3c.js";let a=class{constructor(n){t(this,n)}async presentSignin(t){const n=await o.create({component:"mynt-login",componentProps:{create_account:t},translucent:!0});await n.present();const{role:a}=await n.onDidDismiss();console.log("onDidDismiss resolved with role",a)}async presentDMs(){const t=await o.create({component:"mynt-dms",translucent:!0});await t.present();const{role:n}=await t.onDidDismiss();console.log("onDidDismiss resolved with role",n)}async presentNotis(){const t=await o.create({component:"mynt-notifications",translucent:!0});await t.present();const{role:n}=await t.onDidDismiss();console.log("onDidDismiss resolved with role",n)}render(){return n("ion-tabs",null,n("ion-tab",{tab:"mynts",component:"mynt-feed"}),n("ion-tab",{tab:"watch",component:"mynt-watch"}),n("ion-tab",{tab:"market",component:"mynt-market"}),n("ion-tab",{tab:"assets",component:"mynt-assets"}),n("ion-tab-bar",{slot:"top"},n("mynt-logo",null),n("ion-label",null,"mynt"),n("ion-searchbar",null),n("ion-tab-button",{tab:"mynts"},n("ion-label",null,"Mynts")),n("ion-tab-button",{tab:"watch"},n("ion-label",null,"Media")),n("ion-tab-button",{tab:"market"},n("ion-label",null,"Market")),n("ion-tab-button",{tab:"assets"},n("ion-label",null,"Assets")),n("ion-button",{shape:"round",onClick:()=>this.presentNotis()},n("ion-icon",{name:"notifications-outline"})),n("ion-button",{shape:"round",onClick:()=>this.presentDMs()},n("ion-icon",{name:"chatbubbles-outline"})),n("ion-button",{onClick:()=>this.presentSignin(!0)},"Create Account"),n("ion-button",{onClick:()=>this.presentSignin(!1)},"Sign In"),n("ion-tab-button",{tab:"my-profile"},n("ion-label",null,"Profile"))))}};a.style=":host{display:block}";export{a as mynt_menu}