/*
money_value("12.34"), 12.34 ));
money_value(" $5.67"), 5.67 ));
money_value("-0.89"), -0.89 ));
money_value("-$ 0.1"), -0.10 ));
money_value("$-2.3456"), -2.3456 ));
money_value("007"), 7.00 ));
money_value(" $ 89"), 89.0 ));
money_value("   .11"), 0.11 ));
money_value("$.2"), 0.20 ));
money_value("-.34"), -0.34 ));
money_value("$$$"), 0.0 ));
*/

console.log(money_value("12.34"));
console.log(money_value(" $5.67"));
console.log(money_value("-0.89"));
console.log(money_value("-$ 0.1"));
console.log(money_value("- 0.1"));
console.log(money_value("$-2.3456"));
console.log(money_value("007"));
console.log(money_value(" $ 89"));
console.log(money_value("   .11"));
console.log(money_value("$.2"));
console.log(money_value("-.34"));
console.log(money_value("$$$"));

function money_value(string) {
  return parseFloat(string.replace(/[$\s]/g, "")) || 0;
}
