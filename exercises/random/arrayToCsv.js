function toCsvText(array) {
  return array.map(x => x.join(",")).join("\n");
}

module.exports = toCsvText;
