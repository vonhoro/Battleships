function PickCloseTarget(randomatack, otherboard, enemyjustHited, enemyhits) {
  let randomAtack = randomatack;
  let otherBoard = otherboard;
  let enemyJustHited = enemyjustHited;
  let enemyHits = enemyhits;
  let newRandomAtack = 0;

  //this atacks a close target if a hited was made in the last turn

  //checks for left corner top

  if (randomAtack === 0) {
    newRandomAtack = 1;
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = 10;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      do {
        newRandomAtack = Math.floor(Math.random() * 100);
      } while (otherBoard[newRandomAtack].classList.length > 2);
    }
    if (otherBoard[newRandomAtack].classList[0] === "Square") {
      otherBoard[newRandomAtack].classList.add("blue");
      enemyJustHited -= 1;
    } else {
      otherBoard[newRandomAtack].classList.add("red");
      enemyHits -= 1;
      enemyJustHited -= 1;
    }
  } else if (randomAtack === 9) {
    //right top corner
    newRandomAtack = 8;
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = 19;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      do {
        newRandomAtack = Math.floor(Math.random() * 100);
      } while (otherBoard[newRandomAtack].classList.length > 2);
    }
    if (otherBoard[newRandomAtack].classList[0] === "Square") {
      otherBoard[newRandomAtack].classList.add("blue");
      enemyJustHited -= 1;
    } else {
      otherBoard[newRandomAtack].classList.add("red");
      enemyHits -= 1;
      enemyJustHited -= 1;
    }
  } else if (randomAtack === 90) {
    //left bottom corner
    newRandomAtack = 80;
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = 91;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      do {
        newRandomAtack = Math.floor(Math.random() * 100);
      } while (otherBoard[newRandomAtack].classList.length > 2);
    }
    if (otherBoard[newRandomAtack].classList[0] === "Square") {
      otherBoard[newRandomAtack].classList.add("blue");
      enemyJustHited -= 1;
    } else {
      otherBoard[newRandomAtack].classList.add("red");
      enemyHits -= 1;
      enemyJustHited -= 1;
    }
  } else if (randomAtack === 99) {
    //right bottom corner
    newRandomAtack = 89;
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = 98;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      do {
        newRandomAtack = Math.floor(Math.random() * 100);
      } while (otherBoard[newRandomAtack].classList.length > 2);
    }
    if (otherBoard[newRandomAtack].classList[0] === "Square") {
      otherBoard[newRandomAtack].classList.add("blue");
      enemyJustHited -= 1;
    } else {
      otherBoard[newRandomAtack].classList.add("red");
      enemyHits -= 1;
      enemyJustHited -= 1;
    }
  } else if (randomAtack > 0 && randomAtack < 9) {
    //the ones at the top
    newRandomAtack = randomAtack + 1;
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = randomAtack + 10;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = randomAtack - 1;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      do {
        newRandomAtack = Math.floor(Math.random() * 100);
      } while (otherBoard[newRandomAtack].classList.length > 2);
    }
    if (otherBoard[newRandomAtack].classList[0] === "Square") {
      otherBoard[newRandomAtack].classList.add("blue");
      enemyJustHited -= 1;
    } else {
      otherBoard[newRandomAtack].classList.add("red");
      enemyHits -= 1;
      enemyJustHited -= 1;
    }
  } else if (randomAtack % 10 === 9) {
    //oens at right
    newRandomAtack = randomAtack + 10;
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = randomAtack - 1;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = randomAtack - 10;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      do {
        newRandomAtack = Math.floor(Math.random() * 100);
      } while (otherBoard[newRandomAtack].classList.length > 2);
    }
    if (otherBoard[newRandomAtack].classList[0] === "Square") {
      otherBoard[newRandomAtack].classList.add("blue");
      enemyJustHited -= 1;
    } else {
      otherBoard[newRandomAtack].classList.add("red");
      enemyHits -= 1;
      enemyJustHited -= 1;
    }
  } else if (randomAtack > 90 && randomAtack < 99) {
    //ones at bottom
    newRandomAtack = randomAtack - 10;
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = randomAtack + 1;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = randomAtack - 1;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      do {
        newRandomAtack = Math.floor(Math.random() * 100);
      } while (otherBoard[newRandomAtack].classList.length > 2);
    }
    if (otherBoard[newRandomAtack].classList[0] === "Square") {
      otherBoard[newRandomAtack].classList.add("blue");
      enemyJustHited -= 1;
    } else {
      otherBoard[newRandomAtack].classList.add("red");
      enemyHits -= 1;
      enemyJustHited -= 1;
    }
  } else if (randomAtack % 10 === 0) {
    //ones ate left
    newRandomAtack = randomAtack + 10;
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = randomAtack + 1;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = randomAtack - 10;
    }
    if (otherBoard[newRandomAtack].classList.length > 2) {
      do {
        newRandomAtack = Math.floor(Math.random() * 100);
      } while (otherBoard[newRandomAtack].classList.length > 2);
    }
    if (otherBoard[newRandomAtack].classList[0] === "Square") {
      otherBoard[newRandomAtack].classList.add("blue");
      enemyJustHited -= 1;
    } else {
      otherBoard[newRandomAtack].classList.add("red");
      enemyHits -= 1;
      enemyJustHited -= 1;
    }
  } else {
    // the rest

    //reandom Atack has the postion of the previus target hited here it wioll atack the bottom one

    newRandomAtack = randomAtack + 10;

    //if  it was occupied then atacks  the right one

    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = randomAtack + 1;
    }

    //or the top one

    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = randomAtack - 10;
    }

    //or the left one

    if (otherBoard[newRandomAtack].classList.length > 2) {
      newRandomAtack = randomAtack - 1;
    }

    //if all of then are occupied it will do a ranradom target

    if (otherBoard[newRandomAtack].classList.length > 2) {
      do {
        newRandomAtack = Math.floor(Math.random() * 100);
      } while (otherBoard[newRandomAtack].classList.length > 2);
    }

    //cheks if new target has a ship on it

    if (otherBoard[newRandomAtack].classList[0] === "Square") {
      otherBoard[newRandomAtack].classList.add("blue");
      enemyJustHited -= 1;
    } else {
      otherBoard[newRandomAtack].classList.add("red");
      enemyHits -= 1;
      enemyJustHited -= 1;
    }
  }

  if (enemyHits === 0) {
    document.getElementById("Losing-message").style.display = "block";
    return;
  }

  //returns new random in case of multiple succesulf atacks to keep targeting closer targets

  randomAtack = newRandomAtack;
  return { randomAtack, enemyJustHited, enemyHits };
}
export default PickCloseTarget;
