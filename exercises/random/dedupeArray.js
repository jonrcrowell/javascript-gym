module.exports = dedupeArray;

function dedupeArray(withDupes) {
  return Array.from(new Set([...withDupes]));
}
