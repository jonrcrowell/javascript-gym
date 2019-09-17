/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". 
Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. 
In general, a positive integer and one of the valid units of time, separated by a space. 
The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). 
Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. 
Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. 
So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. 
Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". 
t means that the function should not return 61 seconds, but 1 minute and 1 second instead. 
Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

const seconds = 2342439872;

console.log(formatDuration(seconds));

function formatDuration(seconds) {
  if (seconds === 0) return "now";
  const second = 1;
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;
  let balance = seconds;

  const timePartString = (label, seconds) => {
    const units = Math.floor(balance / seconds);
    balance = balance - units * seconds;
    return units > 1 ? `${units} ${label}s` : units ? `1 ${label}` : "";
  };

  let result = [];

  const yearLabel = timePartString("year", year);
  const dayLabel = timePartString("day", day);
  const hourLabel = timePartString("hour", hour);
  const minuteLabel = timePartString("minute", minute);
  const secondLabel = timePartString("second", second);

  if (yearLabel) result.push(yearLabel);
  if (dayLabel) result.push(dayLabel);
  if (hourLabel) result.push(hourLabel);
  if (minuteLabel) result.push(minuteLabel);
  if (secondLabel) result.push(secondLabel);

  const timeEntries = result.length;

  if (timeEntries > 1) {
    result[timeEntries - 1] = `and ${result[timeEntries - 1]}`;
    result[timeEntries - 2] = result[timeEntries - 2].concat(
      " " + result[timeEntries - 1]
    );
    result.pop();
  }
  return result.join(", ");
}
