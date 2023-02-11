/**
 * Copyright ©2022 Dana Basken
 */

import {Event} from "../";

export class StateChangeEvent extends Event {

  constructor(public key: string, public value: any, public previous?: any) {
    super(`state:${key}`);
  }

}
