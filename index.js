// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


//function findMatching(giveName) {
     //return drivers.filter(value => value === giveName)    
//}
//findMatching;

function findMatching(drivers, givenName) {
    return drivers.filter(value => value.toLowerCase() === givenName.toLowerCase())
}

function fuzzyMatch(drivers, newName) {
    return drivers.filter(nName => nName.slice(0, 2).toLowerCase() === newName.slice(0, 2).toLowerCase() )
}

function matchName(drivers, sameName) {
    return drivers.filter(cName => cName.name === sameName) 
}