const EventEmitter = require("events"); // returns a class
const emitter = new EventEmitter();

// Event to execute
emitter.on("order-pizza", () => {
  console.log("Pizza Ordered! Will deliver within 30 mins");
});

// Multiple task execution with single event type
emitter.on("order-pizza", () => {
  console.log("Starting pizza prepration");
});

// Events with arguments
emitter.on("order-customized-pizza", (size = "small", topping = "paneer") => {
  console.log(
    `Pizza Ordered! ${size} sized pizza with ${topping} will deliver within 30 mins`
  );
});

emitter.emit("order-pizza");
emitter.emit("order-customized-pizza", "medium", "tomato");
