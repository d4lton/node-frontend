/**
 * Copyright ©2023 Dana Basken
 */

import {Mutex} from "async-mutex";
import {EventBus} from "../eventbus/EventBus";
import {StoreEvent} from "./StoreEvent";
import {Logger} from "../logger/Logger";

const logger = Logger.logger;

export abstract class Store extends EventTarget {

  private static _instance: Store;
  private static _mutex: any = new Mutex();
  private _value: any;
  private _loading: boolean = false;
  private _error: any;

  protected constructor() {
    super();
  }

  static get instance(): Store {
    if (this._instance) { return this._instance; }
    // @ts-ignore
    this._instance = new this.prototype.constructor();
    this._instance.init();
    return this._instance;
  }

  abstract init(): void;

  set value(value: any) {
    const event = new StoreEvent(`store:${this.name}:change`, value, this._value);
    this._value = value;
    EventBus.dispatch(event);
  }

  get value(): any {
    return this._value;
  }

  set loading(value: boolean) {
    const event = new StoreEvent(`store:${this.name}:loading`, value, this._loading);
    this._loading = value;
    EventBus.dispatch(event);
  }

  get loading(): boolean {
    return this._loading;
  }

  set error(value: any) {
    const event = new StoreEvent(`store:${this.name}:error`, value, this._error);
    this._error = value;
    EventBus.dispatch(event);
  }

  get error(): any {
    return this._error;
  }

  get name(): string {
    return this.constructor.name;
  }

  async action(callback: () => any): Promise<any> {
    return Store._mutex.runExclusive(async () => {
      this.loading = true;
      this.error = undefined;
      try {
        return await callback(); // await, in case callback throws an exception, so we can catch it here
      } catch (error: any) {
        logger.error(error.message);
        this.error = error;
      } finally {
        this.loading = false;
      }
    });
  }

}
