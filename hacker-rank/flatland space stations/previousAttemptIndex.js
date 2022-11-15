// Complete the flatlandSpaceStations function below.
// n = number of cities
// c = an array of cities with space stations

// eg. n = 3 means there are 3 cities. c[1] means that city 1 has a space station. The cities are 0, 1, 2.
// distance = 1km which is the subtractive value between cities difference between city 1 and 2 is 1, 0 and 1 is 1, and 2 and 0 is 2.

// return maxiumum distance
function flatlandSpaceStations(n, c) {
  let numberOfCities = n;
  let citiesWithStations = c.sort((a, b) => a - b);
  let distanceOfCityFromStation = [];
  let greatestDistanceToStationFromCities = [];

  for(let k = 0; k < numberOfCities; k++) {
    let cityNum = k;
    distanceOfCityFromStation.push([lookBackwards(cityNum, citiesWithStations), lookForwards(cityNum, citiesWithStations)]);
  }
  // Filters the values into the greatest distance away.
  for(let k = 0; k < distanceOfCityFromStation.length; k++) {
    let distances = distanceOfCityFromStation[k];
    let city = k;
    let preceedingCity = Math.abs(distances[0] - city);
    let postCity = Math.abs(distances[1] - city);
    if(isNaN(preceedingCity)) {
      greatestDistanceToStationFromCities.push(postCity);
    } else if(isNaN(postCity)) {
      greatestDistanceToStationFromCities.push(preceedingCity);
    } else if(preceedingCity < postCity) {
      greatestDistanceToStationFromCities.push(preceedingCity);
    } else {
      greatestDistanceToStationFromCities.push(postCity);
    }
  }

  // find the difference of each city to the nearest space station;
  // start with index for a city
  // check the index find the distance difference from the maximum space station.
  // sorts largest to smallest
  greatestDistanceToStationFromCities.sort((a,b) => b - a);
  // returns the first index
  return greatestDistanceToStationFromCities[0];
}

// Determines distance towards previous cities
function lookBackwards(city, array) {
    let stations = array.map(station => {
      if(station <= city){
        return station;
      }
    });

    stations = stations.filter(item => item != undefined);
    return stations[stations.length-1];
}

// Determines distance to next possible city
function lookForwards(city, array) {
  let stations = array.map(station => {
    if(station >= city){
      return station;
    }
  });

  stations = stations.filter(item => item != undefined);
  return stations[0];
}

// testing
// flatlandSpaceStations(5, [0, 4]); //expecting 2
//  flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]); // expecting 0
//  flatlandSpaceStations(20, [13, 1, 11, 10, 6]); // expecting