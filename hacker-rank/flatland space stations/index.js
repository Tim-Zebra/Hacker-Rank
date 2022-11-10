// Complete the flatlandSpaceStations function below.
// n = number of cities
// c = an array of cities with space stations

// eg. n = 3 means there are 3 cities. c[1] means that city 1 has a space station. The cities are 0, 1, 2.
// distance = 1km which is the subtractive value between cities difference between city 1 and 2 is 1, 0 and 1 is 1, and 2 and 0 is 2.

// return maxiumum distance
function flatlandSpaceStations(n, c) {
  let maxDistance = 0;
  let numberOfCities = n;
  let citiesWithStations = c;
  let distanceOfCityFromStation = [];

  for(let k = 0; k < numberOfCities; k++) {
    let cityNum = k;
    
    distanceOfCityFromStation.push(0);
  }

  // find the difference of each city to the nearest space station;
  // start with index for a city
  // check the index find the distance difference from the maximum space station.
  console.log('thisHappened', maxDistance);
  return maxDistance;
}

// Determines distance towards previous cities
function lookBackwards(city, array) {


}

// Determines distance to next possible city
function lookForwards(city, array) {

  
}

// testing
flatlandSpaceStations(5, [0, 4]); //expecting 2
flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]); // expecting 0