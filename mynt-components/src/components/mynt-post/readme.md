# mynt-post



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description | Type     | Default |
| ------------- | --------------- | ----------- | -------- | ------- |
| `mediaPicSrc` | `media-pic-src` |             | `string` | `""`    |
| `name`        | `name`          |             | `string` | `""`    |
| `profPicSrc`  | `prof-pic-src`  |             | `string` | `""`    |
| `text`        | `text`          |             | `string` | `""`    |
| `user`        | `user`          |             | `string` | `""`    |


## Dependencies

### Used by

 - [mynt-feed](../mynt-feed)
 - [mynt-grid-row](../mynt-grid-row)

### Depends on

- ion-card
- ion-card-header
- ion-item
- [profile-pic](../profile-pic)
- ion-card-title
- ion-card-subtitle
- ion-card-content
- ion-thumbnail
- ion-img
- ion-button
- ion-icon

### Graph
```mermaid
graph TD;
  mynt-post --> ion-card
  mynt-post --> ion-card-header
  mynt-post --> ion-item
  mynt-post --> profile-pic
  mynt-post --> ion-card-title
  mynt-post --> ion-card-subtitle
  mynt-post --> ion-card-content
  mynt-post --> ion-thumbnail
  mynt-post --> ion-img
  mynt-post --> ion-button
  mynt-post --> ion-icon
  ion-card --> ion-ripple-effect
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  profile-pic --> ion-avatar
  profile-pic --> ion-img
  ion-button --> ion-ripple-effect
  mynt-feed --> mynt-post
  mynt-grid-row --> mynt-post
  style mynt-post fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
