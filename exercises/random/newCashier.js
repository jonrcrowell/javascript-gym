/*
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.
*/
// Test.assertEquals(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke");
// Test.assertEquals(getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
// "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke");

const rawOrder =
  "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza";

console.log(getOrder(rawOrder));

function getOrder(input) {
  let cleanOrder = input;
  let sorted = [];
  const menu = {
    burger: " Burger ",
    fries: " Fries ",
    chicken: " Chicken ",
    pizza: " Pizza ",
    sandwich: " Sandwich ",
    onionrings: " Onionrings ",
    milkshake: " Milkshake ",
    coke: " Coke "
  };
  for (const [key, value] of Object.entries(menu)) {
    cleanOrder = cleanOrder.split(key).join(value);
    let splitted = cleanOrder.split(" ");
    let partial = splitted.filter(x => x === value.trim());
    sorted = [...sorted, ...partial];
  }
  let sortedOrder = "";
  sorted.forEach(x => {
    sortedOrder += x + " ";
  });

  return sortedOrder.trim();
}
