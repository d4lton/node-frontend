[@d4lton/node-frontend](README.md) / Exports

# @d4lton/node-frontend

## Table of contents

### Classes

- [Config](classes/Config.md)
- [Event](classes/Event.md)
- [EventBus](classes/EventBus.md)
- [EventSourceBridge](classes/EventSourceBridge.md)
- [Firebase](classes/Firebase.md)
- [Logger](classes/Logger.md)
- [State](classes/State.md)
- [StateChangeEvent](classes/StateChangeEvent.md)

### Type Aliases

- [EventBusCallback](modules.md#eventbuscallback)
- [EventBusRegistration](modules.md#eventbusregistration)
- [LoggerLevel](modules.md#loggerlevel)

### Variables

- [LoggerLevels](modules.md#loggerlevels)

### Functions

- [LoggerLevelFromString](modules.md#loggerlevelfromstring)
- [useStateChange](modules.md#usestatechange)

## Type Aliases

### EventBusCallback

Ƭ **EventBusCallback**: (`event`: [`Event`](classes/Event.md)) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](classes/Event.md) |

##### Returns

`void`

#### Defined in

[eventbus/EventBus.ts:10](https://github.com/d4lton/node-frontend/blob/b552ac2/src/eventbus/EventBus.ts#L10)

___

### EventBusRegistration

Ƭ **EventBusRegistration**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `unregister` | () => `void` |

#### Defined in

[eventbus/EventBus.ts:12](https://github.com/d4lton/node-frontend/blob/b552ac2/src/eventbus/EventBus.ts#L12)

___

### LoggerLevel

Ƭ **LoggerLevel**: typeof [`LoggerLevels`](modules.md#loggerlevels)[keyof typeof [`LoggerLevels`](modules.md#loggerlevels)]

#### Defined in

[logger/LoggerLevel.ts:15](https://github.com/d4lton/node-frontend/blob/b552ac2/src/logger/LoggerLevel.ts#L15)

## Variables

### LoggerLevels

• `Const` **LoggerLevels**: `any`

Copyright ©2023 Dana Basken

#### Defined in

[logger/LoggerLevel.ts:5](https://github.com/d4lton/node-frontend/blob/b552ac2/src/logger/LoggerLevel.ts#L5)

## Functions

### LoggerLevelFromString

▸ **LoggerLevelFromString**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

[logger/LoggerLevel.ts:19](https://github.com/d4lton/node-frontend/blob/b552ac2/src/logger/LoggerLevel.ts#L19)

___

### useStateChange

▸ **useStateChange**<`T`\>(`key`): `any`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Defined in

[hooks/useStateChange.ts:12](https://github.com/d4lton/node-frontend/blob/b552ac2/src/hooks/useStateChange.ts#L12)
