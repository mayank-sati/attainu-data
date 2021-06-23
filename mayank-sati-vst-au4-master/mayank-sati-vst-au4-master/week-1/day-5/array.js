//Creating two arrays
var teamOne = ["Sachin", "Saurav", "Hardik"];
var teamTwo = ["Yuvraj", "Rahul", "Harbajan"];
//Concatination of arrays
var teamIndia = teamTwo.concat(teamOne);
// Push Ajay
teamIndia.push("Ajay");
//Removing from beginning
teamIndia.shift();
//Add ajit at beginning
teamIndia.unshift("Ajit");
// Join and create string
var team = teamIndia.join("-");

//Check divisible by two
var a = [23, 40, 99, 111, 298, 31124];
var isDivisibleByTwo;
var divisiblyByTwo = a.filter(function(check){
    isDivisibleByTwo = check % 2 === 0;
    return isDivisibleByTwo;
});
//Check all divisible and return true or false

var b = [2, 424, 676, 182, 120, 190];
var isDivisiblyByTwo;
var everyDivisibleByTwo = b.every(function(check){
    isDivisiblyByTwo = check % 2 === 0;
    return isDivisiblyByTwo;
});
// Multiply than add 

var c = [129, 221, 342, 666, 997];
var addition;
var reducedAndMultipledByTwo = c.reduce(function(addition, value){
    addition = addition + (value * 2);
    return addition;
}, 0);
