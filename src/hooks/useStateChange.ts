/**
 * Copyright ©2023 Dana Basken
 */

import {useEffect, useState} from "react";
import {EventBus} from "../eventbus/EventBus";
import {Logger} from "../logger/Logger";
import {State} from "../state/State";

const logger = Logger.logger;

export function useStateChange<T>(key: string): any {

  const [value, setValue] = useState<T>();

  useEffect(() => {
    const registration = State.register(key, (event: any) => setValue(event.value));
    return () => {
      EventBus.unregister(registration);
    };
  }, [key]);

  return value;

}
