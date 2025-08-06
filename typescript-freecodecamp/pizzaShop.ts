type Pizza = { id: number; name: string; price: number };
type Status = "ordered" | "completed";
type Order = { id: number; pizza: Pizza; status: Status };

let nextPizzaId = 1;
let cashInRegister: number = 100;
let orderQueue: Order[] = [];
let orderNumber: number = 1;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Cheese", price: 10 },
  { id: nextPizzaId++, name: "Pepperoni", price: 15 },
  { id: nextPizzaId++, name: "Veggie", price: 15 },
  { id: nextPizzaId++, name: "Meat", price: 20 },
];

function addToArray<T>(targetArray: T[], item: T): T[] {
  targetArray.push(item);
  return targetArray;
}

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  let newPizza = {
    id: nextPizzaId++,
    name: pizzaObj.name,
    price: pizzaObj.price,
  };
  menu.push(newPizza);
  return newPizza;
}

addNewPizza({ name: "CBR", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

function placeOrder(pizzaName: string): Order | undefined {
  let desiredPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName); // array method that iterates over item and finds by desired property
  if (!desiredPizza) {
    console.error(`${pizzaName} not found not found`);
    return;
  }
  let pizzaPrice = desiredPizza.price;
  let newOrder: Order = {
    id: orderNumber,
    pizza: desiredPizza,
    status: "ordered",
  };

  cashInRegister += pizzaPrice;
  orderQueue.push(newOrder);
  orderNumber += 1;

  return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
  //   let orderIndex = orderQueue.findIndex((orderObj) => orderObj.id === orderId);
  //   let desiredOrder = orderQueue[orderIndex];
  //   desiredOrder.status = "complete";
  //   orderQueue[orderIndex] = desiredOrder;
  //   return desiredOrder;

  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} ID not found`);
    return;
  }
  order.status = "completed";
  return order;
}

function getPizzaDetail(pizzaIdentifier: string | number): Pizza | undefined {
  if (typeof pizzaIdentifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === pizzaIdentifier.toLowerCase()
    );
  } else if (typeof pizzaIdentifier === "number") {
    return menu.find((pizza) => pizza.id === pizzaIdentifier);
  } else {
    throw new TypeError("Param must be string or number");
  }
}

placeOrder("CBR");
completeOrder(1);

let foundPizza = getPizzaDetail("CBR");

addToArray(menu, { id: nextPizzaId++, name: "Sweet Onion", price: 15 });
addToArray<Order>(orderQueue, {
  id: orderNumber++,
  pizza: menu[3],
  status: "ordered",
});

console.log("Menu:\n" + JSON.stringify(menu, null, 2));
console.log("Orders:\n" + JSON.stringify(orderQueue, null, 2));
console.log("Cash:", cashInRegister);
console.log(foundPizza);
