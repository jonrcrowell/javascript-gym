function solution(str) {
  const pairs = [];
  for (let i = 0; i < str.length + 1 / 2; i += 2) {
    const next = str.substring(i, i + 2);
    if (next.length === 0) continue;

    pairs.push(next.length === 2 ? next : next + "_");
  }
  return pairs;
}

console.log(solution("abc")); // should return ['ab', 'c_']
console.log(solution("abcdef")); // should return ['ab', 'cd', 'ef']
