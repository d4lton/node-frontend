/**
 * Copyright ©2023 Dana Basken
 */

import {EventBus, EventBusCallback, EventBusRegistration, Logger, StateChangeEvent} from "../";

const logger = Logger.logger;

export class State {

  private static _values: any = {};

  static set(key: string, value: any): void {
    if (JSON.stringify(State._values[key]) !== JSON.stringify(value)) {
      const previous = State._values[key];
      State._values[key] = value;
      EventBus.dispatch(new StateChangeEvent(key, value, previous));
    }
  }

  static get(key: string): any {
    return State._values[key];
  }

  static register(key: string, callback: EventBusCallback): EventBusRegistration {
    callback(new StateChangeEvent(key, State._values[key]));
    return EventBus.register(`state:${key}`, callback);
  }

  static registerMany(...args: Array<string | EventBusCallback>): EventBusRegistration[] {
    if (args.length < 2) { throw new Error("Must specify at least one event and a single callback"); }
    const keys = <string[]>args.filter(arg => typeof arg === "string");
    if (keys.length !== args.length - 1) { throw new Error("Must specify at least one key and a single callback"); }
    const callback = <EventBusCallback>args.find(arg => typeof arg !== "string");
    return keys
      .map(type => type.split(/[,\s]/))
      .flat()
      .filter(type => type)
      .map(key => State.register(key, callback));
  }

}
