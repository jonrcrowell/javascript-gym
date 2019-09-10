function counterFor() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}

// counterFor();

function counterRecursively(n) {
  console.log(n);
  // we need at least one base case and one recursion case

  // this is our base case
  if (n >= 10) return;

  // this is our recursion case
  return counterRecursively(n + 1);
}

counterRecursively(5);
