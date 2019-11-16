class Dinglemouse {
  constructor(age, sex, name) {
    this._props = [];
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  setAge(age) {
    this.age = age;
    if (!this.ageSet) this._props.push("ageMessage");
    this.ageSet = true;
    this.ageMessage = `I am ${this.age}.`;
    return this;
  }

  setSex(sex) {
    this.sex = sex;
    if (!this.sexSet) this._props.push("sexMessage");
    this.sexSet = true;
    this.sexMessage = `I am ${this.sex === "M" ? "male" : "female"}.`;
    return this;
  }

  setName(name) {
    this.name = name;
    if (!this.nameSet) this._props.push("nameMessage");
    this.nameSet = true;
    this.nameMessage = `My name is ${this.name}.`;
    return this;
  }

  hello() {
    return this._props.reduce((prev, curr) => {
      if (curr === "ageMessage") prev += " " + this.ageMessage;
      if (curr === "sexMessage") prev += " " + this.sexMessage;
      if (curr === "nameMessage") prev += " " + this.nameMessage;
      return prev;
    }, "Hello.");
  }
}

const dingy = new Dinglemouse()
  .setName("Batman")
  .setAge(51)
  .setSex("M")
  .setAge(47);

console.log(dingy.hello());
