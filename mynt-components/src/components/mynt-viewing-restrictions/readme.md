# mynt-viewing-restrictions



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [mynt-sell-asset](../mynt-sell-asset)
 - [mynt-send-asset](../mynt-send-asset)

### Depends on

- [mynt-make-post-dropdown](../mynt-make-post-dropdown)
- ion-item
- ion-input
- ion-button
- ion-list
- [mynt-asset-item](../mynt-asset-item)

### Graph
```mermaid
graph TD;
  mynt-viewing-restrictions --> mynt-make-post-dropdown
  mynt-viewing-restrictions --> ion-item
  mynt-viewing-restrictions --> ion-input
  mynt-viewing-restrictions --> ion-button
  mynt-viewing-restrictions --> ion-list
  mynt-viewing-restrictions --> mynt-asset-item
  mynt-make-post-dropdown --> ion-card
  ion-card --> ion-ripple-effect
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-button --> ion-ripple-effect
  mynt-asset-item --> ion-item
  mynt-asset-item --> ion-checkbox
  mynt-asset-item --> ion-label
  mynt-asset-item --> ion-input
  mynt-asset-item --> ion-toggle
  mynt-sell-asset --> mynt-viewing-restrictions
  mynt-send-asset --> mynt-viewing-restrictions
  style mynt-viewing-restrictions fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
