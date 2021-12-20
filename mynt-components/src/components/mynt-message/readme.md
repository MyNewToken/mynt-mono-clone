# mynt-message



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default        |
| ----------- | ----------- | ----------- | --------- | -------------- |
| `msg`       | `msg`       |             | `string`  | `""`           |
| `sent`      | `sent`      |             | `boolean` | `true`         |
| `timestamp` | `timestamp` |             | `string`  | `"1970/01/01"` |


## Dependencies

### Used by

 - [mynt-chat](../mynt-chat)

### Depends on

- ion-item
- ion-label

### Graph
```mermaid
graph TD;
  mynt-message --> ion-item
  mynt-message --> ion-label
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  mynt-chat --> mynt-message
  style mynt-message fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
