function getTitle(a){
a = prompt("Enter the title for the game");
/*if(a == 0){
    alert("invalid input");
    }*/
return a;
}

function getBackground(b){

    b = prompt("Enter background color");
    /*if( b == "bgBlack" || b == "bgPurple" || b == "bgDirt" || b == "bgGrass"){
        return b;
}
else{
    alert("invalid input");
}*/
return b;
}
function showPlayerShip(c){
    c = confirm("Do you want to see space ship?");
    return c;
}
function addRotation(d){
    d = prompt("Enter Rotation for Space Ship");
    return d;
}
var a, b, c, d;
var myGameTitle = getTitle(a);
if(myGameTitle.length > 0){
var myGameBackground = getBackground(b);
if( myGameBackground == "bgBlack" || myGameBackground == "bgPurple" || myGameBackground == "bgDirt" || myGameBackground == "bgGrass"){
    var showSpaceShip = showPlayerShip(c);
    var rotateShip = addRotation(d);
    }
    else{
        alert("invalid input");
        
    }
//var showSpaceShip = showPlayerShip(c);
//var rotateShip = addRotation(d);
}
else{
    alert("invalid input");
}