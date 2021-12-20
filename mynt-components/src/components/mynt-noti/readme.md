# mynt-noti



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `assImg` | `ass-img` |             | `string` | `undefined` |
| `ttle`   | `ttle`    |             | `string` | `undefined` |
| `txt`    | `txt`     |             | `string` | `undefined` |


## Dependencies

### Used by

 - [mynt-notifications](../mynt-notifications)

### Depends on

- ion-item
- [profile-pic](../profile-pic)
- ion-list
- ion-label

### Graph
```mermaid
graph TD;
  mynt-noti --> ion-item
  mynt-noti --> profile-pic
  mynt-noti --> ion-list
  mynt-noti --> ion-label
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  profile-pic --> ion-avatar
  profile-pic --> ion-img
  mynt-notifications --> mynt-noti
  style mynt-noti fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
