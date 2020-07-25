import React from "react";
import PickCloseTarget from "../functions/pickCloseTarget";
function Board(props) {
   
   //gets the square builder
  const squares = props.Squares;
  
  //amount of target to control gameover
  
  let playerHits = props.Targets;
  let enemyHits = props.Targets;
  let enemyJustHited = props.Targets;
  
  //target selector for  pc
  
  let randomAtack;
  
  //rigth boardclick control

  const playBoard = (e, Position) => {
    if (!props.Play) return;
    
    //all squares have an initial amount of 2 classes, once they are clicked a new class is added, this stops it from clickng in the same square twitc or more
    
    if (e.target.classList.length > 2) return;
    
    //see if you won
    
    if (playerHits === 0) return;

    //all squares send eather  a number o a istring of the form a*number the ones that arent numbers have the enemy ships so it gives them a red color the others are blue  
    
    if (isNaN(Position)) {
      e.target.classList.add("red");
      playerHits -= 1;
    } else {
      e.target.classList.add("blue");
    }
    
    //check if you inmiedatly won and props the winning message
    
    if (playerHits === 0) {
      document.getElementById("Winning-message").style.display = "block";
      return;
    }
    
    //targets your board for the cpu atack
    
    let otherBoard = e.target.parentElement.previousElementSibling.children;
    
//checks if previus atack was a hit

    if (enemyJustHited > enemyHits) {
       
       //runs this function to try and target a close square from previus atack
       
      const hitted = PickCloseTarget(
        randomAtack,
        otherBoard,
        enemyJustHited,
        enemyHits
      );
      randomAtack = hitted.randomAtack;
      enemyJustHited = hitted.enemyJustHited;
      enemyHits = hitted.enemyHits;
      setTimeout(() => {
        enemyHits = enemyHits * 1;
      }, 500);
      
      //losing messages
      
      if (enemyHits === 0) {
        document.getElementById("Losing-message").style.display = "block";
        return;
      }
    } else {
       
       //for first timers or if the enemy didnt hit a target before(it is the same)
       
      setTimeout(() => {
        do {
           
           //picks a random number between 0 and 99 and makes sure the number was not picked before
           
          randomAtack = Math.floor(Math.random() * 100);
        } while (otherBoard[randomAtack].classList.length > 2);
        
        //checks if it is  an empty sqaure or a ship 
        
        if (otherBoard[randomAtack].classList[0] === "Square") {
          otherBoard[randomAtack].classList.add("blue");
        } else {
          otherBoard[randomAtack].classList.add("red");
          enemyHits -= 1;
        }
        if (enemyHits === 0) {
          document.getElementById("Losing-message").style.display = "block";
          return;
        }
      }, 500);
    }
  };
  
  //does nothing
  
  const nothing = () => {};
  
  //on drop control
  
  const drop = (e) => {
    e.preventDefault();
    
    //targtes the board
    
    const Board = e.target.parentElement;

// sets the squares to be taken

    let replaceSquaresArray = e.target.parentElement.children;
    let firstSquareReplace = parseInt(e.target.classList[1]);

//gets the draggin target id and their orientation and sizes

    const shipId = e.dataTransfer.getData("ship");
    const ship = document.getElementById(shipId);
    if (ship === null) return;
    ship.style.display = "block";
    const orientation = ship.classList[1];
    const size = ship.children.length;
    
    if (orientation === "Vertical") {
       
       //if it is vertical given that is a 10x10 grid, the element below should be a +10, this cheks that it will no be placed out of bounds
       
      if ((size - 1) * 10 + firstSquareReplace > 99) {
        ship.style.display = "flex";
        return;
      }
      
      //this onces cecks forthe precense of a previus ship
      
      for (let i = 1; i < size; i++) {
        if (
          replaceSquaresArray[firstSquareReplace + 10 * i].classList[0] !==
          "Square"
        ) {
          ship.style.display = "flex";
          return;
        }
      }
      
//this place the ship on the board

      for (let i = 0; i < size; i++) {
        ship.children[0].classList.add(firstSquareReplace + 10 * i);
        Board.replaceChild(
          ship.children[0],
          replaceSquaresArray[firstSquareReplace + 10 * i]
        );
      }
    } else {
       
       //for horizontal is similar but chagen +10 for +1
      for (let i = 1; i < 11; i++) {
        if (
          firstSquareReplace < 10 * i &&
          size + firstSquareReplace > (i - 1) * 10 + 10
        ) {
          ship.style.display = "flex";
          return;
        }
      }
      for (let i = 1; i < size; i++) {
        if (
          replaceSquaresArray[firstSquareReplace + 1 * i].classList[0] !==
          "Square"
        ) {
          ship.style.display = "flex";
          return;
        }
      }

      for (let i = 0; i < size; i++) {
        ship.children[0].classList.add(firstSquareReplace + 1 * i);
        Board.replaceChild(
          ship.children[0],
          replaceSquaresArray[firstSquareReplace + 1 * i]
        );
      }
    }
    ship.style.display = "none";
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={props.className}
      id={props.id}
      onDrop={props.Player === 1 ? drop : nothing}
      onDragOver={dragOver}
      draggable="false"
    >
      {squares.map((square, index) => (
        <div
        
        {/*This one and the one in props.position are important to matain the nubers 0 to 99 on the classes of the squares*/}
        
          className={`Square ${index - 100 * (props.GameNumber - 1)}`}
          key={index}
          onClick={
            props.Player === 2
              ? (e) =>
                  playBoard(
                    e,
                    props.Position[index - 100 * (props.GameNumber - 1)]
                  )
              : nothing
          }
        ></div>
      ))}
    </div>
  );
}
export default Board;
