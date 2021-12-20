# mynt-side-listing



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default |
| -------- | --------- | ----------- | -------- | ------- |
| `image`  | `image`   |             | `string` | `""`    |
| `text`   | `text`    |             | `string` | `""`    |


## Dependencies

### Used by

 - [mynt-side-list](../mynt-side-list)

### Depends on

- ion-item
- [profile-pic](../profile-pic)
- ion-card-title

### Graph
```mermaid
graph TD;
  mynt-side-listing --> ion-item
  mynt-side-listing --> profile-pic
  mynt-side-listing --> ion-card-title
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  profile-pic --> ion-avatar
  profile-pic --> ion-img
  mynt-side-list --> mynt-side-listing
  style mynt-side-listing fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
