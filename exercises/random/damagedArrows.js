/*
(anyArrows([]), false, "Should handle empty quiver");
(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]), true, "Should handle quiver with undamaged arrows");
(anyArrows([{range: 10, damaged: true}, {damaged: true}]), false, "Should handle quiver with damaged arrows");
*/

const quiver = [{ range: 5 }, { range: 10, damaged: true }, { damaged: true }];

function anyArrows(quiver) {
  if (quiver.length === 0) return false;
  return quiver.reduce((prev, curr) => {
    if (!curr["damaged"]) prev = true;
    return prev;
  }, false);
}

console.log(anyArrows(quiver));
