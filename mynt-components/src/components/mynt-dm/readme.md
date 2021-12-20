# mynt-dm



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description | Type     | Default |
| --------- | ---------- | ----------- | -------- | ------- |
| `name`    | `name`     |             | `string` | `""`    |
| `profImg` | `prof-img` |             | `string` | `""`    |


## Dependencies

### Used by

 - [mynt-dms](../mynt-dms)

### Depends on

- ion-item
- [profile-pic](../profile-pic)
- ion-card-title

### Graph
```mermaid
graph TD;
  mynt-dm --> ion-item
  mynt-dm --> profile-pic
  mynt-dm --> ion-card-title
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  profile-pic --> ion-avatar
  profile-pic --> ion-img
  mynt-dms --> mynt-dm
  style mynt-dm fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
