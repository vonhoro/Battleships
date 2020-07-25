import React, { useState } from "react";
import Board from "./components/Board";
import Ships from "./components/Ships";
import PlacingShipsRandom from "./functions/placingShipsRandom";
import shipConstructor from "./functions/shipConsctructor";
function App() {
  //counters

  let counter;
  const [gameNumber, setGameNumber] = useState(1);

  //ability hit gme start only once per game

  const [gameStarted, setGameStarted] = useState(false);

  //position of enemy ships on board

  const [shipPosition, setShipPosition] = useState(
    Array.from(Array(100)).map((value, index) => (value = index + 1))
  );

  //board constructor

  const [squares, setSquares] = useState(
    Array.from(Array(100)).map((value, index) => (value = index + 1))
  );

  //self explained

  const [numberTargets, setNumberTargets] = useState(100);
  const [numberCarriers, setNumberCarriers] = useState(1);
  const [numberBattleships, setNumberBattleships] = useState(1);
  const [numberSubmarines, setNumberSubmarines] = useState(1);
  const [numberDestroyers, setNumberDestroyers] = useState(1);
  const [shipTypes, setShipTypes] = useState(
    shipConstructor(
      numberCarriers,
      numberBattleships,
      numberSubmarines,
      numberDestroyers
    )
  );
  const [draggingShips, setDraggingShips] = useState(false);
  const [boardPlay, setBoardPlay] = useState(false);
  const [showRotate, setShowRotate] = useState(false);

  //on change function to change the number of ships

  const changeCarriers = (e) => {
    if (e.target.value === "") return;
    if (e.target.valueAsNumber > 4) return;
    setNumberCarriers(e.target.valueAsNumber);

    //using this factory function

    setShipTypes(
      shipConstructor(
        e.target.valueAsNumber,
        numberBattleships,
        numberSubmarines,
        numberDestroyers
      )
    );
  };
  const changeBattleships = (e) => {
    if (e.target.value === "") return;
    if (e.target.valueAsNumber > 4) return;
    setNumberBattleships(e.target.value);
    setShipTypes(
      shipConstructor(
        numberCarriers,
        e.target.valueAsNumber,
        numberSubmarines,
        numberDestroyers
      )
    );
  };
  const changeSubmarines = (e) => {
    if (e.target.value === "") return;
    if (e.target.valueAsNumber > 4) return;
    setNumberSubmarines(e.target.valueAsNumber);
    setShipTypes(
      shipConstructor(
        numberCarriers,
        numberBattleships,
        e.target.valueAsNumber,
        numberDestroyers
      )
    );
  };
  const changeDestroyers = (e) => {
    if (e.target.value === "") return;
    if (e.target.valueAsNumber > 4) return;
    setNumberDestroyers(e.target.valueAsNumber);
    setShipTypes(
      shipConstructor(
        numberCarriers,
        numberBattleships,
        numberSubmarines,
        e.target.valueAsNumber
      )
    );
  };

  //constructor to control the functions above

  const numberShips = [
    { Name: "Carriers", Function: changeCarriers },
    { Name: "Battleships", Function: changeBattleships },
    { Name: "Submarines", Function: changeSubmarines },
    { Name: "Destroyers", Function: changeDestroyers },
  ];

  //acceptes the amount of pieces places so you are ready to play

  const placePieces = (e) => {
    if (shipTypes.Structure.length === 0) return;

    //looks for all inputs and sets them to 0

    const form = Array.from(e.target.parentElement.children);
    form.forEach((container) => {
      container.lastChild.value = "0";
    });
    e.target.parentElement.style.display = "none";
    setDraggingShips(true);
    setShowRotate(true);
  };

  //start the game

  const startGame = (e) => {
    //cheks if all ships are placed

    const shipCondition = e.target.nextSibling.firstElementChild.children;
    for (const container of shipCondition) {
      if (container.style.display !== "none") return;
    }
    if (gameStarted) return;
    setGameStarted(true);
    setShowRotate(false);
    setBoardPlay(true);

    //sets randomly the position of the enemy shits , the number is the same as the player ships

    setShipPosition(PlacingShipsRandom(shipPosition, shipTypes, false));

    //gives the number of targets to determine a winner

    const targets = shipPosition.filter((value) => isNaN(value));
    setNumberTargets(targets.length);
  };

  //afer game over resets mostly everything

  const newGame = (e) => {
    //for the way the square are constructure the counter is needed to set a new "clean" board

    counter = gameNumber + 1;
    setGameNumber(counter);

    //removes all squares on both boards

    const board1 = document.getElementsByClassName("Board-P1")[0];
    const board1Array = Array.from(
      document.getElementsByClassName("Board-P1")[0].children
    );

    board1Array.forEach((square) => {
      board1.removeChild(square);
    });

    const board2 = document.getElementsByClassName("Board-P2")[0];

    const board2Array = Array.from(
      document.getElementsByClassName("Board-P2")[0].children
    );
    board2Array.forEach((square) => {
      board2.removeChild(square);
    });

    setSquares(
      Array.from(Array(counter * 100)).map(
        (value, index) => (value = index + 1)
      )
    );

    //resets the ships positions and ship numbers

    const newPositions = Array.from(Array(100)).map(
      (value, index) => (value = index + 1)
    );
    setShipTypes(shipConstructor(0, 0, 0, 0));
    setShipPosition(PlacingShipsRandom(newPositions, shipTypes, true));

    //sets all propierty to their initial value

    setGameStarted(false);
    setDraggingShips(false);
    setBoardPlay(false);
    setNumberCarriers(0);
    setNumberBattleships(0);
    setNumberSubmarines(0);
    setNumberDestroyers(0);

    document.getElementsByClassName("game-chacarteristics")[0].style.display =
      "flex";

    //closes the menu

    e.target.parentElement.style.display = "none";
  };

  //rotate function

  const rotate = (e) => {
    const shipContainer = e.target.nextSibling.nextSibling.firstElementChild;

    //cheks if they thips are horizontal or vertical, then changes them to the other direction

    if (shipContainer.style.gridTemplate === "none / auto auto auto auto") {
      for (const container of shipContainer.children) {
        container.style.flexDirection = "row";
        container.classList.remove("Vertical");
        container.classList.add("Horizontal");
      }
      shipContainer.style.gridTemplate = "auto auto auto auto / none";
    } else if (
      shipContainer.style.gridTemplate === "auto auto auto auto / none"
    ) {
      for (const container of shipContainer.children) {
        container.style.flexDirection = "column";
        container.classList.add("Vertical");
        container.classList.remove("Horizontal");
      }
      shipContainer.style.gridTemplate = "none/ auto auto auto auto";
    } else {
      //styles on javascript .style is not loaded at the start so it does this first

      for (const container of shipContainer.children) {
        container.style.flexDirection = "row";
        container.classList.remove("Vertical");
        container.classList.add("Horizontal");
      }
      shipContainer.style.gridTemplate = "auto auto auto auto / none";
    }
  };
  return (
    <div className="App">
      <h1 className="Title">Battleship!! </h1>
      <p>
        Pick the numbers of Carriers, Battleships, Submarines and
        Dedededestroyers! from 0 to 4. Put drag them to the left board! click
        Start game and try to defeat your rival by shooting on its map!
      </p>
      <div className="game-chacarteristics">
        {numberShips.map((value, index) => (
          <div className={`${value.Name}-number-container`} key={index}>
            <label className={`${value.Name}-number-label`}>
              Number of {value.Name}
            </label>
            <input
              type="number"
              defaultValue="1"
              min="0"
              max="4"
              onChange={value.Function}
            />
          </div>
        ))}
        <button type="button" onClick={placePieces}>
          Accept
        </button>
      </div>
      <button onClick={rotate} className={showRotate ? "Rotate" : "Invisible"}>
        Rotate
      </button>
      <button onClick={startGame} className="start-game">
        Start game
      </button>

      <div className="Boards">
        <Ships Drag={draggingShips} Ships={shipTypes}></Ships>

        <Board
          Play={false}
          Squares={squares}
          className="Board-P1"
          Player={1}
          Position=""
          GameNumber={gameNumber}
        />
        <Board
          Play={boardPlay}
          Squares={squares}
          className="Board-P2"
          Player={2}
          Position={shipPosition}
          Targets={numberTargets}
          GameNumber={gameNumber}
        />
      </div>

      <div id="Winning-message">
        <h1>You Won :)</h1>
        <button onClick={newGame} className="play-again">
          Play Again!
        </button>
      </div>
      <div id="Losing-message">
        <h1>You Lost :( </h1>
        <button onClick={newGame} className="play-again">
          Play Again!
        </button>
      </div>
    </div>
  );
}
export default App;
