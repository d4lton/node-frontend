[@d4lton/node-frontend](../README.md) / [Exports](../modules.md) / StateChangeEvent

# Class: StateChangeEvent

Copyright ©2023 Dana Basken

## Hierarchy

- [`Event`](Event.md)

  ↳ **`StateChangeEvent`**

## Table of contents

### Constructors

- [constructor](StateChangeEvent.md#constructor)

### Properties

- [key](StateChangeEvent.md#key)
- [previous](StateChangeEvent.md#previous)
- [type](StateChangeEvent.md#type)
- [value](StateChangeEvent.md#value)

## Constructors

### constructor

• **new StateChangeEvent**(`key`, `value`, `previous?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |
| `previous?` | `any` |

#### Overrides

[Event](Event.md).[constructor](Event.md#constructor)

#### Defined in

[state/StateChangeEvent.ts:9](https://github.com/d4lton/node-frontend/blob/b552ac2/src/state/StateChangeEvent.ts#L9)

## Properties

### key

• **key**: `string`

#### Defined in

[state/StateChangeEvent.ts:9](https://github.com/d4lton/node-frontend/blob/b552ac2/src/state/StateChangeEvent.ts#L9)

___

### previous

• `Optional` **previous**: `any`

#### Defined in

[state/StateChangeEvent.ts:9](https://github.com/d4lton/node-frontend/blob/b552ac2/src/state/StateChangeEvent.ts#L9)

___

### type

• **type**: `string`

#### Inherited from

[Event](Event.md).[type](Event.md#type)

#### Defined in

[eventbus/Event.ts:7](https://github.com/d4lton/node-frontend/blob/b552ac2/src/eventbus/Event.ts#L7)

___

### value

• **value**: `any`

#### Defined in

[state/StateChangeEvent.ts:9](https://github.com/d4lton/node-frontend/blob/b552ac2/src/state/StateChangeEvent.ts#L9)
