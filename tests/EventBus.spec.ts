/**
 * Copyright ©2022 Dana Basken
 */


import {EventBus} from "../src";

describe("EventBus", function() {

  it("dispatchEvent works as expected", (done) => {
    const registration = EventBus.register("test:event", (event: any) => {
      expect(event.type).toBe("test:event");
      EventBus.unregister(registration);
      done();
    });
    EventBus.dispatch(new Event("test:event"));
  });

});
