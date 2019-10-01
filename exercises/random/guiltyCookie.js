function cookie(x) {
  const guilty =
    typeof x === "string" ? "Zach" : typeof x === "number" ? "Monica" : "the dog";
  return `Who ate the last cookie? It was ${guilty}!`;
}

console.log(cookie(2.3));
