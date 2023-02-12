[@d4lton/node-frontend](../README.md) / [Exports](../modules.md) / EventBus

# Class: EventBus

## Table of contents

### Constructors

- [constructor](EventBus.md#constructor)

### Methods

- [dispatch](EventBus.md#dispatch)
- [register](EventBus.md#register)
- [registerMany](EventBus.md#registermany)
- [unregister](EventBus.md#unregister)

## Constructors

### constructor

• **new EventBus**()

## Methods

### dispatch

▸ `Static` **dispatch**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](Event.md) |

#### Returns

`void`

#### Defined in

[eventbus/EventBus.ts:72](https://github.com/d4lton/node-frontend/blob/b552ac2/src/eventbus/EventBus.ts#L72)

___

### register

▸ `Static` **register**(`type`, `callback`): [`EventBusRegistration`](../modules.md#eventbusregistration)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | [`EventBusCallback`](../modules.md#eventbuscallback) |

#### Returns

[`EventBusRegistration`](../modules.md#eventbusregistration)

#### Defined in

[eventbus/EventBus.ts:39](https://github.com/d4lton/node-frontend/blob/b552ac2/src/eventbus/EventBus.ts#L39)

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

[eventbus/EventBus.ts:27](https://github.com/d4lton/node-frontend/blob/b552ac2/src/eventbus/EventBus.ts#L27)

___

### unregister

▸ `Static` **unregister**(`...registrations`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...registrations` | [`EventBusRegistration`](../modules.md#eventbusregistration)[] |

#### Returns

`void`

#### Defined in

[eventbus/EventBus.ts:66](https://github.com/d4lton/node-frontend/blob/b552ac2/src/eventbus/EventBus.ts#L66)
