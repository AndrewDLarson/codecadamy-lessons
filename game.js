const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArray) {
    this.field = fieldArray;
    this.x = 0;
    this.y = 0;
  }
  print() {
    for (let i = 0; i < this.field.length; i++) {
      console.log(this.field[i].join(""))
    }
  }

  

  playGame() {
    this.print()
      while (this.field[this.x][this.y] !== hat && this.field[this.x][this.y] !== hole) {
        const question = prompt("where would you like to go?");
      if (question === "down") {
          this.x += 1;
          if (this.x === this.field.length) {
            console.log('You fell off the edge! You lose!!');
            break;
          } else if (this.field[this.x][this.y] === hat) {
            console.log("You Found the hat!! You Win!!");
          } else  if(this.field[this.x][this.y] === hole) {
            console.log("You lost!! You fell in a hole!")
          } else {
            this.field[this.x][this.y] = "*";
          this.print()
          question
          }
      } else if (question === "up") {
          this.x -= 1;
          if (this.x === -1) {
            console.log('You fell off the edge! You lose!!');
            break;
          } else if (this.field[this.x][this.y] === hat) {
            console.log("You Found the hat!! You Win!!");
          } else  if(this.field[this.x][this.y] === hole) {
            console.log("You lost!! You fell in a hole!")
          } else {
            this.field[this.x][this.y] = "*";
          this.print()
          question
          }
      } else if (question === "left") {
          this.y -= 1;
          if (this.y === -1) {
            console.log('You fell off the edge! You lose!!');
            break;
          } else if (this.field[this.x][this.y] === hat) {
            console.log("You Found the hat!! You Win!!");
          } else  if(this.field[this.x][this.y] === hole) {
            console.log("You lost!! You fell in a hole!")
          } else {
            this.field[this.x][this.y] = "*";
          this.print()
          question
          }
      } else if (question === "right") {
          this.y += 1;
          if (this.y === this.field[0].length) {
            console.log("you fell off the edge")
            break;
          } else if (this.field[this.x][this.y] === hat) {
            console.log("You Found the hat!! You Win!!");
          } else  if(this.field[this.x][this.y] === hole) {
            console.log("You lost!! You fell in a hole!")
          } else {
            this.field[this.x][this.y] = "*";
          this.print()
          question
          }
       }
    }
  }
}




const myField = new Field([
  ['*', '░', '░'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.playGame()

