console.log(fillAndReverse(7));

function fillAndReverse(number) {
  return [...Array(number + 1).keys()].slice(1).reverse();
}
