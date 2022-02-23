// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray){
    const subArray = Array(driverArray[0],driverArray[1]);
    return subArray;
}

const returnLastTwoDrivers = function(driverArray){
    const arrlength = driverArray.length;
    const subArray = Array(driverArray[arrlength-2],driverArray[arrlength-1]);
    return subArray;
}

const selectingDrivers = Array(returnFirstTwoDrivers,returnLastTwoDrivers);

function createFareMultiplier(n){
    const fareMultiplier = function(fare){
        return n*fare
    }
return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, function1){
    return function1(driverArray);
}