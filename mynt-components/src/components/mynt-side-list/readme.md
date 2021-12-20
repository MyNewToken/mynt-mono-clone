# mynt-side-list



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default |
| -------- | --------- | ----------- | -------- | ------- |
| `ttle`   | `ttle`    |             | `string` | `""`    |


## Dependencies

### Used by

 - [mynt-assets](../mynt-assets)
 - [mynt-feed](../mynt-feed)
 - [mynt-market](../mynt-market)
 - [mynt-watch](../mynt-watch)

### Depends on

- ion-card
- ion-list
- ion-list-header
- [mynt-side-listing](../mynt-side-listing)

### Graph
```mermaid
graph TD;
  mynt-side-list --> ion-card
  mynt-side-list --> ion-list
  mynt-side-list --> ion-list-header
  mynt-side-list --> mynt-side-listing
  ion-card --> ion-ripple-effect
  mynt-side-listing --> ion-item
  mynt-side-listing --> profile-pic
  mynt-side-listing --> ion-card-title
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  profile-pic --> ion-avatar
  profile-pic --> ion-img
  mynt-assets --> mynt-side-list
  mynt-feed --> mynt-side-list
  mynt-market --> mynt-side-list
  mynt-watch --> mynt-side-list
  style mynt-side-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
