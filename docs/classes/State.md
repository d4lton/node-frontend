[@d4lton/node-frontend](../README.md) / [Exports](../modules.md) / State

# Class: State

## Table of contents

### Constructors

- [constructor](State.md#constructor)

### Methods

- [get](State.md#get)
- [register](State.md#register)
- [registerMany](State.md#registermany)
- [set](State.md#set)

## Constructors

### constructor

• **new State**()

## Methods

### get

▸ `Static` **get**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Defined in

[state/State.ts:22](https://github.com/d4lton/node-frontend/blob/b552ac2/src/state/State.ts#L22)

___

### register

▸ `Static` **register**(`key`, `callback`): [`EventBusRegistration`](../modules.md#eventbusregistration)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `callback` | [`EventBusCallback`](../modules.md#eventbuscallback) |

#### Returns

[`EventBusRegistration`](../modules.md#eventbusregistration)

#### Defined in

[state/State.ts:26](https://github.com/d4lton/node-frontend/blob/b552ac2/src/state/State.ts#L26)

___

### registerMany

▸ `Static` **registerMany**(`...args`): [`EventBusRegistration`](../modules.md#eventbusregistration)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | (`string` \| [`EventBusCallback`](../modules.md#eventbuscallback))[] |

#### Returns

[`EventBusRegistration`](../modules.md#eventbusregistration)[]

#### Defined in

[state/State.ts:31](https://github.com/d4lton/node-frontend/blob/b552ac2/src/state/State.ts#L31)

___

### set

▸ `Static` **set**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[state/State.ts:14](https://github.com/d4lton/node-frontend/blob/b552ac2/src/state/State.ts#L14)
