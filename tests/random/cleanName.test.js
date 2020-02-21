function hello(name) {
  if (!name || name.length < 2) return "Hello, World!";

  const cleanName = name[0].toUpperCase() + name.toLowerCase().slice(1);
  return cleanName || cleanName.length > 1
    ? `Hello, ${cleanName}`
    : "Hello, World!";
}

console.log(hello("bilLLy"));
