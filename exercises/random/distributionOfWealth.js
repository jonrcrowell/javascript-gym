/*
Test.assertSimilar(socialistDistribution([2,3,5,15,75],5),[5,5,5,15,70]);
Test.assertSimilar(socialistDistribution([2,3,5,15,75],20),[20,20,20,20,20]);
Test.assertSimilar(socialistDistribution([2,3,5,45,45],5),[5,5,5,42,43]);
Test.assertSimilar(socialistDistribution([2,3,5,45,45],30),[]);
Test.assertSimilar(socialistDistribution([24,48,22,19,37],30),[30,30,30,30,30]);
*/

console.log(socialistDistribution([15, 3, 5, 2, 75], 5));

function socialistDistribution(population, minimum) {
  while (Math.min(...population) < minimum) {
    population[population.indexOf(Math.max(...population))] -= 1;
    population[population.indexOf(Math.min(...population))] += 1;
    if (Math.max(...population) < minimum) return [];
  }
  return population;
}
