// Question : Calculating The Time Remaining For a Sale.
// - Write a function calculateTimeRemaining that calculates the remaining time between two timestamps in hours, minutes, and seconds.

function calculateTimeRemaining(startTime, endTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const difference = end - start;

  const totalSeconds = Math.floor(difference / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return { hours, minutes, seconds };
}

console.log(
  calculateTimeRemaining("2024-12-18T00:00:00Z", "2024-12-31T23:59:59Z")
);
