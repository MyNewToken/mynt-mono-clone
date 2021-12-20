# wallet-coin



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default |
| ----------- | ------------ | ----------- | -------- | ------- |
| `coinImg`   | `coin-img`   |             | `string` | `""`    |
| `coinTitle` | `coin-title` |             | `string` | `""`    |


## Dependencies

### Used by

 - [mynt-wallet](../mynt-wallet)

### Depends on

- ion-item
- [profile-pic](../profile-pic)
- ion-card-title

### Graph
```mermaid
graph TD;
  wallet-coin --> ion-item
  wallet-coin --> profile-pic
  wallet-coin --> ion-card-title
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  profile-pic --> ion-avatar
  profile-pic --> ion-img
  mynt-wallet --> wallet-coin
  style wallet-coin fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
