/**
 * Copyright ©2023 Dana Basken
 */

import {Logger} from "../logger/Logger";
import {Event} from "./Event";

const logger = Logger.logger;

export type EventBusCallback = (event: Event) => void;

export type EventBusRegistration = {
  id: number;
  unregister: () => void;
};

type EventBusEntry = {
  id: number;
  callback: EventBusCallback;
};

export class EventBus {

  private static _ID: number = 0;
  private static _callbacks: Map<string, EventBusEntry[]> = new Map();

  static registerMany(...args: Array<string | EventBusCallback>): EventBusRegistration[] {
    if (args.length < 2) { throw new Error("Must specify at least one event and a single callback"); }
    const types = <string[]>args.filter(arg => typeof arg === "string");
    if (types.length !== args.length - 1) { throw new Error("Must specify at least one event and a single callback"); }
    const callback = <EventBusCallback>args.find(arg => typeof arg !== "string");
    return types
      .map(type => type.split(/[,\s]/))
      .flat()
      .filter(type => type)
      .map(type => EventBus._register(type, callback));
  }

  static register(type: string, callback: EventBusCallback): EventBusRegistration {
    if (type.split(/[,\s]/).length > 1) { throw new Error("Whitespace is not allowed in event name"); }
    return EventBus._register(type, callback);
  }

  private static _register(type: string, callback: EventBusCallback): EventBusRegistration {
    const id = ++EventBus._ID;
    let callbacks = EventBus._callbacks.get(type);
    if (!callbacks) { callbacks = []; }
    callbacks.push({id: id, callback: callback});
    EventBus._callbacks.set(type, callbacks);
    return {
      id: id,
      unregister: () => {
        let callbacks = EventBus._callbacks.get(type);
        if (callbacks) {
          callbacks = callbacks.filter(it => it.id !== id);
          if (callbacks.length) {
            EventBus._callbacks.set(type, callbacks);
          } else {
            EventBus._callbacks.delete(type);
          }
        }
      }
    };
  }

  static unregister(...registrations: EventBusRegistration[]): void {
    for (const registration of registrations) {
      registration.unregister();
    }
  }

  static dispatch(event: Event) {
    const callbacks = EventBus._callbacks.get(event.type);
    logger.trace(`dispatch to ${callbacks?.length || 0}`, event);
    if (callbacks) {
      for (const callback of callbacks) {
        try {
          setTimeout(() => callback.callback(event));
        } catch (error: any) {
          logger.error(`error occurred while dispatching "${event.type}" event: ${error.message}`);
        }
      }
    }
  }

}
