function likes(names) {
  let message = "";
  switch (names.length) {
    case 0:
      message = "no one likes this";
      break;
    case 1:
      message = `${names[0]} likes this`;
      break;
    case 2:
      message = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      message = `${names[0]}, ${names[1]} and ${names.length -
        2} others like this`;
  }
  return message;
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Cindy", "Mark", "Max"]));
console.log(likes(["Bambi", "Kicker", "Alex", "Cindy", "Mark", "Max"]));
