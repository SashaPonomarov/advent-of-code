let input = require('./input.js')

let re = /^(.*?)\sto\s(.*?)\s=\s(\d+)/
let pairs = input.split('\n').map((line) => {
    let pair = line.match(re)
    return {
        cities: [pair[1], pair[2]],
        distance: parseInt(pair[3])
    }
})

let cities = new Set
pairs.forEach((pair) => {
    pair.cities.forEach((city) => {
        cities.add(city)
    })
})

let bestRoute = { route: [], distance: 0 }

cities.forEach((city) => {
    addCity([city], [...cities].filter((item) => item != city), 0)
})

function addCity(route, toVisit, distance) {
    if (toVisit.length != 0) {
        toVisit.forEach((city) => {
            let newRoute = route.slice(0)
            newRoute.push(city)
            let newDist = distance + findDistance(city, route[route.length - 1])
            addCity(newRoute, toVisit.filter((item) => item != city), newDist)
        })
    }
    else {
        if (bestRoute.distance < distance) {
            bestRoute.route = route
            bestRoute.distance = distance
        }
    }
}

function findDistance(city1, city2) {
    return pairs.filter((pair) => {
        if ((pair.cities.indexOf(city1) + pair.cities.indexOf(city2)) > 0) {
            return true
        } else {
            return false
        }
    })[0].distance
}


console.log('longest route:', bestRoute)