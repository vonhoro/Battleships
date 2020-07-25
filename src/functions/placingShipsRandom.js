function PlacingShipsRandom(ShipPosition, shipTypes, newGameCheck) {
   
   //if it is a new game it restores a normal array with only numbers
   
  if (newGameCheck) {
    let shipPosition = Array.from(Array(100)).map(
      (value, index) => (value = index + 1)
    );

    return shipPosition;
  }
  
  let vertical;
  let randomColumn;
  let randomRow;
  let shipPosition = ShipPosition;
  let shipType = shipTypes.Structure;

  for (const ship of shipType) 
     
     //first picks randomly if it wil be horizontal or vertical
     
    vertical = Math.floor(Math.random() * 100) > 50 ? true : false;

    if (vertical) {
      let locateCovered;
      let checkResult;
      let checking;
      do {
         
         //it picks a random coordinate, the row coordinate is controled so it wont go aout of bounds
         
        checkResult = 0;
        randomColumn = Math.floor(Math.random() * 10);
        randomRow = Math.floor(Math.random() * (10 - ship.length));
        locateCovered = randomColumn + randomRow * 10;
        
        //makes an array of all the previus place values to know their location
        
        let checkPrev = shipPosition.filter((value) => isNaN(value));
        if (checkPrev.length !== 0) {
          checkPrev.forEach((element, index) => {
            checkPrev[index] = parseInt(element.slice(1));
          });
        }
        
        //chekcs every square of the ship length on the direction to see if there is a target
        
        let k = 0;
        for (const element of ship) {
          checking = checkPrev.some(
            (element) => element === locateCovered + k * 10
          );
          k += 1;
          
          //ny target would make this bigger than 0
          
          if (checking) checkResult += 1;
        }
        
        //so it will repeat until there are only free spaces to place the ship
        
      } while (checkResult > 0);
      //now that we do know that all the squares are open with pace the with their current location and the letter a for reference
      let m = 0;
      ship.forEach((element, index, array) => {
        let locateStart = randomColumn + 10 * m + randomRow * 10;
        let locateEnd = locateStart + 1;
        let ocuped = "a" + locateStart.toString();
        shipPosition.fill(ocuped, locateStart, locateEnd);
        m += 1;
      });
    } else {
      let locateStart;
      let checkResult;
      let checking;
      
      //horizontalcheck
      
      do {
         
         //it is analogous ti the vertical one
         
        checkResult = 0;
        randomColumn = Math.floor(Math.random() * (10 - ship.length));
        randomRow = Math.floor(Math.random() * 10);
        locateStart = randomColumn + randomRow * 10;
        let checkPrev = shipPosition.filter((value) => isNaN(value));
        if (checkPrev.length !== 0) {
          checkPrev.forEach((element, index) => {
            checkPrev[index] = parseInt(element.slice(1));
          });
        }
        let k = 0;
        for (const elemnt of ship) {
          checking = checkPrev.some(
            (element) => element === locateStart + k * 1
          );
          k += 1;
          if (checking) checkResult += 1;
        }
      } while (checkResult > 0);

      for (let j = 0; j < ship.length; j += 1) {
        let ocuped = "a" + (locateStart + j).toString();
        shipPosition.fill(ocuped, locateStart + j, locateStart + j + 1);
      }
    }
  }
  
  //to prevent infinite loops it may be needed to toggle the orientaztion afeter an x amount of fails
  
  return shipPosition;
}
export default PlacingShipsRandom;
