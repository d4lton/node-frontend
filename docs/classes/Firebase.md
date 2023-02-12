[@d4lton/node-frontend](../README.md) / [Exports](../modules.md) / Firebase

# Class: Firebase

## Table of contents

### Constructors

- [constructor](Firebase.md#constructor)

### Accessors

- [bearerToken](Firebase.md#bearertoken)
- [claims](Firebase.md#claims)
- [role](Firebase.md#role)
- [token](Firebase.md#token)
- [tokenQueryParam](Firebase.md#tokenqueryparam)
- [user](Firebase.md#user)

### Methods

- [onAuthStateChanged](Firebase.md#onauthstatechanged)
- [refreshToken](Firebase.md#refreshtoken)
- [signIn](Firebase.md#signin)
- [signOut](Firebase.md#signout)
- [start](Firebase.md#start)
- [stop](Firebase.md#stop)

## Constructors

### constructor

• **new Firebase**()

## Accessors

### bearerToken

• `Static` `get` **bearerToken**(): `string`

#### Returns

`string`

#### Defined in

[firebase/Firebase.ts:76](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L76)

___

### claims

• `Static` `get` **claims**(): `any`

#### Returns

`any`

#### Defined in

[firebase/Firebase.ts:88](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L88)

___

### role

• `Static` `get` **role**(): `string`

#### Returns

`string`

#### Defined in

[firebase/Firebase.ts:84](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L84)

___

### token

• `Static` `get` **token**(): `string`

#### Returns

`string`

#### Defined in

[firebase/Firebase.ts:64](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L64)

___

### tokenQueryParam

• `Static` `get` **tokenQueryParam**(): `string`

#### Returns

`string`

#### Defined in

[firebase/Firebase.ts:68](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L68)

___

### user

• `Static` `get` **user**(): `User`

#### Returns

`User`

#### Defined in

[firebase/Firebase.ts:60](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L60)

## Methods

### onAuthStateChanged

▸ `Static` **onAuthStateChanged**(`user`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `User` |

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase/Firebase.ts:37](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L37)

___

### refreshToken

▸ `Static` **refreshToken**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase/Firebase.ts:49](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L49)

___

### signIn

▸ `Static` **signIn**(`email`, `password`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `email` | `string` |
| `password` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[firebase/Firebase.ts:92](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L92)

___

### signOut

▸ `Static` **signOut**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase/Firebase.ts:98](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L98)

___

### start

▸ `Static` **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase/Firebase.ts:24](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L24)

___

### stop

▸ `Static` **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[firebase/Firebase.ts:32](https://github.com/d4lton/node-frontend/blob/b552ac2/src/firebase/Firebase.ts#L32)
