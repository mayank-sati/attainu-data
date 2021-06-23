var i;
for(i=0;i<3;i++){
    if(i==0){
        var myGameTitle = prompt("Enter game title");
    if(myGameTitle == 0){
        alert("Invalid input");
        break;
      }
    }
    if(i==1)
        {
            var myGameBackground = prompt("Enter background color");
        if(myGameBackground == "bgBlack" || myGameBackground == "bgPurple" || myGameBackground == "bgDirt" || myGameBackground == "bgGrass"){
            var showSpaceShip = confirm("Do you want to see SpaceShip?");
        }
        }
    if(i==2){
        if(showSpaceShip==true){
            rotateShip = prompt("Enter Rotation speed");
}
else{
    alert("invalid input");
    break;
}
    }
}
