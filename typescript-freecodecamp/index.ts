type Pizza = { name: string; price: number };
type Order = { id: number; pizza: Pizza; status: string };

const menu: Pizza[] = [
  { name: "Cheese", price: 10 },
  { name: "Pepperoni", price: 15 },
  { name: "Veggie", price: 18 },
  { name: "Meat", price: 20 },
];

let cashInRegister: number = 100;
let orderQueue: Order[] = [];
let orderNumber: number = 1;

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  let desiredPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName); // array method that iterates over item and finds by desired property
  if (!desiredPizza) {
    console.error(`${pizzaName} not found not found`);
    return;
  }
  let pizzaPrice = desiredPizza.price;
  let newOrder = {
    id: orderNumber,
    pizza: desiredPizza,
    status: "ordered",
  };

  cashInRegister += pizzaPrice;
  orderQueue.push(newOrder);
  orderNumber += 1;

  return newOrder;
}

function completeOrder(orderId: number) {
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

addNewPizza({ name: "CBR", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy", price: 11 });

placeOrder("CBR");
completeOrder(1);

console.log("Menu:\n" + JSON.stringify(menu, null, 2));
console.log("Orders:\n" + JSON.stringify(orderQueue, null, 2));
console.log("Cash:", cashInRegister);
