/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
// const logger = function (array) {
//   // Your code here
// };

// const logger = function (array) {
//   // Your code here
//   array.forEach(element => {
//     console.log(element);
//   });
// };

const logger = (array) =>  {
  // Your code here
  array.forEach(element => console.log(element));
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
// const toCelsius =  (temperatures) => {
//   // Your code here
//   let fahr = temperatures.map((forEach(element) - 32) * (5/9));
// };

const toCelsius =  (temperatures) => {
  // Your code here
  let cels = [];
  return cels = temperatures.map( (temperature) => (temperature - 32) * (5/9));
};

// console.log(toCelsius([127, 80]));
// const toCelsius =  (temperatures).map(temperatures => (temperatures - 32) * (5/9) );


/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = (temperatures, threshhold) => {
  // Your code here
  let hotDay = [];
  return hotDay = temperatures.filter((temperature) => temperature > threshhold);
};

// const hottestDays = function (temperatures, threshhold) {
//   // Your code here
// };

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {
  // Your code here
  let scorching = toCelsius(hottestDays(temperatures, threshhold));
  logger(scorching);
};

// BY THE WAY, I DID WATCH THE WHOLE VIDEO AND TRIED THE DIFFERENT WAYS TO SOLVE THE LAST QUESTION. I'M WRITING THIS BECAUSE I WASN'T AROUND FOR THE SOLVING SESSION AND HAD TO SOLVE THE LAST ONE ACCORDINGLY. THANK YOU!!

/* Uncomment the following lines to test your code... */

// logger([1, 2, 3, 4, 5, 6, 7]);
// console.log(toCelsius([212, 122])); // should be: [100, 50];
// console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
// logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
