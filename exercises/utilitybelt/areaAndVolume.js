function getSize(width, height, depth) {
  const volume = width * height * depth;
  const area = width * height * 2 + width * depth * 2 + height * depth * 2;
  return [area, volume];
}

console.log(getSize(4, 2, 6));
