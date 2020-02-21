/*
Test.describe("Basic tests",function() {
Test.assertEquals(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"), 
    "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")
Test.assertEquals(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41"), 
    "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00")
})

*/

const team1 = "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17";
const team2 = "02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41";

const seconds = (h, m, s) => h * 3600 + m * 60 + s;

const formattedTime = timeInSeconds => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds - (hours * 3600 + minutes * 60));
  return `${hours.toString().padStart(2, "0")}|${minutes
    .toString()
    .padStart(2, "0")}|${seconds.toString().padStart(2, "0")}`;
};

// convert all times to seconds
const teamInSeconds = team =>
  team
    .split(",")
    .map(x => x.split("|"))
    .map(x => x.map(y => parseInt(y)))
    .map(x => seconds(x[0], x[1], x[2]));

const findMedian = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

function stat(team) {
  const teamTime = teamInSeconds(team);

  const range = `Range: ${formattedTime(
    Math.max(...teamTime) - Math.min(...teamTime)
  )}`;
  const average = `Average: ${formattedTime(
    teamTime.reduce((a, b) => a + b) / teamTime.length
  )}`;
  const median = `Median: ${formattedTime(findMedian(teamTime))}`;
  return range.includes("NaN") ? "" : `${range} ${average} ${median}`;
}

console.log(stat(team1));
console.log(stat(team2));
