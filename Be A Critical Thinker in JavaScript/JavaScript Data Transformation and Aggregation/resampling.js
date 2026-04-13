//* Binning (Resampling) TimeSeriesData

//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

const INTERVAL = 30 * 60 * 1000; // 30MinFromMs

const getBinningTimeStamp = (timestamp) => {
  const date = new Date(timestamp);

  //   console.log("Before flooring: ", date.toISOString());

  //   console.log("Before flooring: ", date.getTime());

  const floorDate = Math.floor(date.getTime() / INTERVAL) * INTERVAL;

  //   console.log("After flooring: ", floorDate);

  //   console.log(date.getTime());

  return new Date(floorDate).toISOString();
};
// console.log(getBinningTimeStamp("2025-10-22T10:01:00Z"));
// console.log(getBinningTimeStamp("2025-10-22T10:05:00Z"));
// console.log(getBinningTimeStamp("2025-10-22T10:14:00Z"));

const binnedData = events.reduce((acc, event) => {
  const bin = getBinningTimeStamp(event.timestamp);
  if (!acc[bin]) {
    acc[bin] = { total: 0 };
  }
  acc[bin].total = acc[bin].total + 1;

  return acc;
}, {});
console.log(binnedData);

//? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }
