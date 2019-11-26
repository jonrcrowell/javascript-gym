/*
Test.assertEquals(numericFormatter("xxx xxxxx xx","5465253289"), "546 52532 89");
Test.assertEquals(numericFormatter("xxx xxxxx xx"), "123 45678 90");
Test.assertEquals(numericFormatter("+555 aaaa bbbb", "18031978"), "+555 1803 1978");
Test.assertEquals(numericFormatter("+555 aaaa bbbb"), "+555 1234 5678");
Test.assertEquals(numericFormatter("xxxx yyyy zzzz"), "1234 5678 9012");
*/

function numericFormatter(template) {
  let formatMe = arguments[1];
  let y = 0;
  if (!formatMe) {
    formatMe = "1234567890";
  }
  const formatted = template
    .split("")
    .map(x => {
      if (/[a-z]/i.test(x)) {
        console.log(formatMe[y]);
        x = formatMe[y];
        y === formatMe.length - 1 ? (y = 0) : y++;
      }
      return x;
    })
    .join("");

  return formatted;
}

console.log(numericFormatter("xxxx yyyy zzzz"));

//var result = /^hello/.test(str);
