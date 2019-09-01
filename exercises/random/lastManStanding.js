/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious.
Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance.
See the Fighter class below in your chosen language.

Both health and damagePerAttack will be integers larger than 0.
You can mutate the Fighter objects.

Example:
*/
class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() {
      return `The Mighty ${this.name}`;
    };
  }
}

console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
);

function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let defender = attacker === fighter1 ? fighter2 : fighter1;
  do {
    defender.health -= attacker.damagePerAttack;
    [attacker, defender] = [defender, attacker];
  } while (fighter1.health > 0 && fighter2.health > 0);
  return fighter1.health > 0 ? fighter1.name : fighter2.name;
}
