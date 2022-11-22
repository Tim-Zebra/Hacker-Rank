// Complete the flatlandSpaceStations function below.
// n = number of cities
// c = an array of cities with space stations

// eg. n = 3 means there are 3 cities. c[1] means that city 1 has a space station. The cities are 0, 1, 2.
// distance = 1km which is the subtractive value between cities difference between city 1 and 2 is 1, 0 and 1 is 1, and 2 and 0 is 2.

// return maxiumum distance
function flatlandSpaceStations(n, c) {
  let numberOfCities = n;
  let citiesWithStations = c.sort((a, b) => a - b);
  let maxDistance = 0;

  // Finds distance of the center city between two stations
  for(let k = 0; k < citiesWithStations.length-1; k++) {
    let firstCity = citiesWithStations[k];
    let secondCity = citiesWithStations[k+1];
    let distance = 0;
    // finds the middle city and subtracts that location from the second city.
    distance = Math.abs(secondCity - Math.ceil((firstCity + secondCity) / 2));
    if(distance > maxDistance) {
      maxDistance = distance;
    }
  }

  // Finds the distance of the starting city from the first station
  let firstCityWithStation = citiesWithStations[0];
  if(firstCityWithStation > maxDistance) {
    maxDistance = firstCityWithStation;
  }

  // Finds the distance between the last station and the last city
  let lastCityWithStation = citiesWithStations[citiesWithStations.length-1];
  if((numberOfCities -1 - lastCityWithStation) > maxDistance) {
    // -1 to account for the city location labeled as an index.
    maxDistance = numberOfCities -1 - lastCityWithStation;
  }
  // returns max distance
  return maxDistance;
}


// testing
flatlandSpaceStations(5, [0, 4]); //expecting 2
flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]); // expecting 0
flatlandSpaceStations(20, [13, 1, 11, 10, 6]); // expecting 6