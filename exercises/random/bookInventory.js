/*
b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"
Test.assertEquals(stockList(b, c), res)

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
Test.assertEquals(stockList(b, c), res)

*/

const stock = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
const categories = ["A", "B"];

console.log(stockList(stock, categories));

function stockList(st, cat) {
  if (!st || !cat) return "";
  return categories
    .map(x => {
      const count = getBookCount(x, st);
      return `(${x} : ${count})`;
    })
    .join(" - ");
}

function getBookCount(category, stock) {
  return stock.reduce((a, b) => {
    if (b.slice(0, 1) === category) {
      return a + parseInt(b.split(" ")[1]);
    }
    return a;
  }, 0);
}
