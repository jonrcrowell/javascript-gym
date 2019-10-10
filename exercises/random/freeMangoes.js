/*
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free
*/

const priceOfMangoes = (qty, price) => (qty - Math.floor(qty / 3)) * price;

console.log(priceOfMangoes(10, 5));
