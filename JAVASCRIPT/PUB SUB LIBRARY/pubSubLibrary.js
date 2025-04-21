class PubSub {
  constructor() {
    this.subscribers = {};
  }

  /**
   *
   * @param event --> its is a string denoting unique event fired
   * @param callback --> for a subcriber what method should be executed when an event is fired
   */
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      //curenntly no subscriber event was registered for the event
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);

    return () => this.unSubscribe(event, callback);
  }

  unSubscribe(event, callback) {
    if (!this.subscribers[event]) return;
    this.subscribers[event] = this.subscribers[event].filter(
      (cb) => cb !== callback
    );
  }

  /**
   *
   * @param  event --> its is a string denoting unique event fired
   * @param  data -->for the given event what data should be passed along with publishing the event
   */
  publish(event, data) {
    if (!this.subscribers[event]) return;

    this.subscribers[event].forEach((callback) => callback(data));
  }
}

const pb = new PubSub();

const unsubAirforce1 = pb.subscribe("airforce", (data) =>
  console.log("Subscrber 1", data)
);

const unsubAirforce2 = pb.subscribe("airforce", (data) =>
  console.log("Subscrber 2", data)
);

const unsubAirforce3 = pb.subscribe("airforce", (data) =>
  console.log("Subscrber 3", data)
);

pb.subscribe("new balance", (data) => console.log("Subscrber 1", data));

pb.publish("airforce", { shoename: "jordan airforce" });

pb.publish("new balance", { shoename: "something" });

unsubAirforce1();

pb.publish("airforce", { shoename: "jordan New Stock" });
