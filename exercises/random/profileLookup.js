const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

const lookupProfile = (name, prop) => {
  const contactExists = name =>
    contacts.filter(x => x.firstName === name).length > 0;
  const propertyExists = (name, prop) =>
    contacts.filter(x => x.firstName === name)[0].hasOwnProperty(prop);
  if (!contactExists(name)) return "No such contact";
  if (!propertyExists(name, prop)) return "No such property";
  return contacts.filter(x => x.firstName === name)[0][prop];
};

console.log(lookupProfile("Kristian", "lastName"));
