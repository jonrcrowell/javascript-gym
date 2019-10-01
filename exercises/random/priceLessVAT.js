//return price without vat
function excludingVatPrice(price) {
  return Math.floor(price / 1.15);
}

console.log(excludingVatPrice(230));
