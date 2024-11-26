/**
 * Copyright ©2023 Dana Basken
 */

import {useEffect, useState} from "react";
import {Store} from "../store/Store";

export function useStore<V, T extends Store>(store: typeof Store): [V, T] {

  const instance = store.instance as T;

  const [value, setValue] = useState<V>(instance.value);
  const [loading, setLoading] = useState<boolean>(instance.loading);
  const [error, setError] = useState<any>(instance.error);

  useEffect(() => {
    instance.addEventListener("change", updateValue);
    instance.addEventListener("loading", updateValue);
    instance.addEventListener("error", updateValue);
    return () => {
      instance.removeEventListener("change", updateValue);
      instance.removeEventListener("loading", updateValue);
      instance.removeEventListener("error", updateValue);
      instance.shutdown();
    };
  }, []);

  function updateValue(): void {
    setValue(instance.value);
    setLoading(instance.loading);
    setError(instance.error);
  }

  return [value, instance];

}
