function ShipConstructor(Carrier, Battleship, Submarine, Destroyer) {
  //to know how many ships thhey are

  let numberShips =
    parseInt(Carrier) +
    parseInt(Battleship) +
    parseInt(Submarine) +
    parseInt(Destroyer);

  let numberCarrier = Carrier;
  let numberBattleship = Battleship;
  let numberSubmarine = Submarine;
  let numberDestroyer = Destroyer;

  //seetting up the names, startting with carries finishing with destroyers

  let Names = Array.from(Array(numberShips)).map((value) => {
    if (numberCarrier > 0) {
      value = "Carrier";
      numberCarrier -= 1;
    } else if (numberBattleship > 0) {
      value = "BattleShip";
      numberBattleship -= 1;
    } else if (numberSubmarine > 0) {
      value = "Submarine";
      numberSubmarine -= 1;
    } else if (numberDestroyer > 0) {
      value = "Destroyer";
      numberDestroyer -= 1;
    }
    return value;
  });

  numberCarrier = Carrier;
  numberBattleship = Battleship;
  numberSubmarine = Submarine;
  numberDestroyer = Destroyer;

  //doing the same with their struture

  let Structure = Array.from(Array(numberShips)).map((value) => {
    if (numberCarrier > 0) {
      value = ["", "", "", "", ""];
      numberCarrier -= 1;
    } else if (numberBattleship > 0) {
      value = ["", "", "", ""];
      numberBattleship -= 1;
    } else if (numberSubmarine > 0) {
      value = ["", "", ""];
      numberSubmarine -= 1;
    } else if (numberDestroyer > 0) {
      value = ["", ""];
      numberDestroyer -= 1;
    }
    return value;
  });

  return { Structure, Names };
}
export default ShipConstructor;
