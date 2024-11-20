const PizzaShop = require("./usingEventEmitter");

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
  console.log(
    `Pizza Ordered! ${size} sized pizza with ${topping} will deliver within 30 mins`
  );
});

pizzaShop.order("large", "paneer");
pizzaShop.displayOrderNumber();
