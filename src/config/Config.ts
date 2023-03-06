/**
 * Copyright ©2023 Dana Basken
 */

import {ObjectUtilities} from "@d4lton/node-common";

export class Config {

  static get(key: string, defaultValue?: any): any {
    return ObjectUtilities.getDottedKeyValue(key, Config.config, defaultValue);
  }

  static get config(): any {
    return window.process.env as any || {};
  }

}
