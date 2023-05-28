/**
 * Copyright ©2023 Bainbridge Growth LLC
 */

export class StoreEvent extends Event {

  constructor(type: string, public value: any, public previous?: any) {
    super(type);
  }

}
