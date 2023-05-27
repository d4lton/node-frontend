/**
 * Copyright ©2023 Dana Basken
 */

import {useEffect, useState} from "react";
import {Logger} from "../logger/Logger";
import {EventBus} from "../eventbus/EventBus";
import {Store} from "../store/Store";

const logger = Logger.logger;

export function useStore<V, T extends Store>(store: typeof Store): [V, T] {

  const instance = store.instance as T;

  const [value, setValue] = useState<V>(instance.value);
  const [loading, setLoading] = useState<boolean>(instance.loading);
  const [error, setError] = useState<any>(instance.error);

  useEffect(() => {
    const registrations = EventBus.registerMany(
      `store:${instance.name}:change`,
      `store:${instance.name}:loading`,
      `store:${instance.name}:error`,
      updateValue
    );
    return () => {
      EventBus.unregister(...registrations);
    };
  }, []);

  function updateValue(): void {
    setValue(instance.value);
    setLoading(instance.loading);
    setError(instance.error);
  }

  return [value, instance];

}
