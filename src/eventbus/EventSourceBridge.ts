/**
 * Copyright ©2023 Dana Basken
 */

import {Firebase} from "../firebase/Firebase";
import {State} from "../state/State";
import {EventBus} from "./EventBus";

export class EventSourceBridge {

  private static _endpoint: string;
  private static _eventSource: EventSource;

  static async start(endpoint: string): Promise<void> {
    EventSourceBridge._endpoint = endpoint;
    State.registerMany("user", "token", EventSourceBridge.onUserChange);
  }

  static async onUserChange(): Promise<void> {
    if (EventSourceBridge._eventSource) {
      EventSourceBridge._eventSource.close();
    }
    if (State.get("token")) {
      EventSourceBridge._eventSource = new EventSource(`${EventSourceBridge._endpoint}?${Firebase.tokenQueryParam}`);
      EventSourceBridge._eventSource.addEventListener("message", (event: any) => {
        EventBus.dispatch(JSON.parse(event.data));
      });
    }
  }

}
