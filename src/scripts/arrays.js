/**
 * Represents an array of inventors.
 * @typedef {Object} Inventor
 * @property {string} first - The first name of the inventor.
 * @property {string} last - The last name of the inventor.
 * @property {number} year - The birth year of the inventor.
 * @property {number} passed - The year the inventor passed away.
 */

/**
 * Represents an array of people.
 * @typedef {string[]} People
 */

const answerOne = document.querySelector('.code1');

/**
 * An array of inventors.
 * @type {Inventor[]}
 */
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 }, // 76 6
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 }, // 84 10
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 }, // 78 7
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 }, // 67 4
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 }, // 59 3
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 }, // 70 5
  { first: "Max", last: "Planck", year: 1858, passed: 1947 }, // 89 11
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 }, // 81 9
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 }, // 37 1
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 }, // 50 2
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 }, // 90 12
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }, // 80 8
];

/**
 * An array of people.
 * @type {People}
 */
const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

/**
 * Filter the list of inventors for those who were born in the 1500's.
 * @param {Inventor[]} inventors - The array of inventors.
 * @returns {Inventor[]} - The filtered array of inventors.
 */
const fifteen = inventors.filter((inventor) => inventor.year > 1500 && inventor.year < 1599);

console.log(fifteen);

const generatedHtml = Object.keys(fifteen).reduce(
  (accum, currKey) =>
    accum +
    `<br /> {first: ${fifteen[currKey].first},
    <br /> last: ${fifteen[currKey].last},
    <br /> year: ${fifteen[currKey].year},
    <br /> passed: ${fifteen[currKey].passed}}<br /> `, '');

answerOne.innerHTML = `[` + generatedHtml + `]`;

/**
 * Get an array of the inventors' full names.
 * @param {Inventor[]} inventors - The array of inventors.
 * @returns {string[]} - The array of full names.
 */
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

/**
 * Sort the inventors by birthdate, oldest to youngest.
 * @param {Inventor[]} inventors - The array of inventors.
 * @returns {Inventor[]} - The sorted array of inventors.
 */
const sortedByBirth = inventors.sort((a, b) => (a.year > b.year) ? 1 : (a.year < b.year) ? -1 : 0);

/**
 * Calculate the total number of years all the inventors lived.
 * @param {Inventor[]} inventors - The array of inventors.
 * @returns {number} - The total number of years.
 */
const sum = inventors.reduce(
  (accumulator, currentValue) => accumulator + (currentValue.passed - currentValue.year),
  0,
);

/**
 * Sort the inventors by years lived.
 * @param {Inventor[]} inventors - The array of inventors.
 * @returns {Inventor[]} - The sorted array of inventors.
 */
const yearsLived = inventors.sort((a, b) => {
  const firstOne = parseInt(a.passed - a.year);
  const nextOne = parseInt(b.passed - b.year);
  return nextOne > firstOne ? -1 : 1;
});

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name
/*function sortPeople(...people) {
  let peopleArr = people;
  peopleArr.split(', ');
  console.log(peopleArr);
  /*peopleArr.sort((a, b) => {

  })

sortPeople();

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];*/
