// index.js
const { nextISSTimesForMyLocation } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });
// fetchCoordsByIP('108.173.151.167', (error, coordinates) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }

//     console.log('It worked! Returned coordinates:' , coordinates);
//   });
// fetchISSFlyOverTimes(
//   { latitude: "49.27670", longitude: "-123.13000" },
//   (error, visible) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }

//     console.log("It worked! visiblity:", visible);
//   }
// );

const visibleTimes = (visible) => {
  for (const pass of visible) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
nextISSTimesForMyLocation((error, visible) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  visibleTimes(visible);
});
