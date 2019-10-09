const addresses = [
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK"
  },
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AL"
  },
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK"
  },
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AL"
  },
  {
    house: 1234,
    street: "Lonely St.",
    city: "Soldotna",
    zipcode: 99669,
    state: "AK"
  }
];

console.log(count(addresses));

function count(addresses) {
  if (addresses.length === 0) return addresses;
  const counts = {};
  addresses.forEach(x => {
    if (!x.state) throw "Missing state property on your address, sir";
    counts[x.state] ? counts[x.state]++ : (counts[x.state] = 1);
  });
  const states = Object.entries(counts).map((x, i) => {
    return { state: x[0], count: x[1] };
  });
  return states;
}
