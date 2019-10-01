function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  const sharkTime = sharkDistance / sharkSpeed;
  const yourTime = dolphin
    ? pontoonDistance / youSpeed / 2
    : pontoonDistance / youSpeed;
  return sharkTime > yourTime ? "Alive!" : "Shark Bait!";
}

console.log(shark(12, 50, 4, 8, true));
