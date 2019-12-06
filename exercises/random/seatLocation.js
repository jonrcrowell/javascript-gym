/*
Test.assertEquals(planeSeat('2B'), 'Front-Left');
Test.assertEquals(planeSeat('20B'), 'Front-Left');
Test.assertEquals(planeSeat('58I'), 'No Seat!!');
*/

console.log(planeSeat("58I"));

function planeSeat(a) {
  const aisles = {
    a: "Left",
    b: "Left",
    c: "Left",
    d: "Middle",
    e: "Middle",
    f: "Middle",
    g: "Right",
    h: "Right",
    k: "Right"
  };
  const seatNumber = a.replace(/[a-z]/i, "");
  const seatLetter = a.replace(/[0-9]/g, "").toLowerCase();
  const seatAisle = aisles[seatLetter];
  const seatPosition =
    seatNumber < 21
      ? "Front"
      : seatNumber < 41
      ? "Middle"
      : seatNumber < 61
      ? "Back"
      : undefined;
  return !seatPosition || !seatAisle
    ? "No Seat!!"
    : `${seatPosition}-${seatAisle}`;
}
