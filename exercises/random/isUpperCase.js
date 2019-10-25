String.prototype.isUpperCase = function() {
  return this.replace(/[a-z]/g, "").length === this.length;
};

console.log("homer simpson".isUpperCase());
console.log("FLAMENGO".isUpperCase());
