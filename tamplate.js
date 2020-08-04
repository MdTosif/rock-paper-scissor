exports.render = function() {
  let finalHtml = ``;
  let tables = new Array(0);

// deciding player lose or win
// rock = 0, paper = 1, scissor = 2
  let winner = (player1, player2) => {
    if (player1 == player2) {
      return 0;
    } else if (player1 == 0 && player2 == 2) {
      return 1;
    } else if (player1 == 2 && player2 == 0) {
      return 0;
    } else if (player1 > player2) {
      return 1;
    } else {
      return 0;
    }
  };

  // creating table data (<td>data</td>)
  let td = list => {
    let tdArray = [];
    list.forEach(item => {
      tdArray.push(`<td>${item}</td>`);
    });
    return tdArray.join("");
  };

  // creating two tables one contains player choices
  // second table contains wins and losses of players
  let addTable = function() {
    let table;
    let choices = ["Rock", "Paper", "Scissor"];
    let player = new Array(4);
    let playerChoice = [];
    player[0] = Math.floor(Math.random() * (2 - 0 + 1));
    player[1] = Math.floor(Math.random() * (2 - 0 + 1));
    player[2] = Math.floor(Math.random() * (2 - 0 + 1));
    player[3] = Math.floor(Math.random() * (2 - 0 + 1));
    player.forEach(i => {
      playerChoice.push(choices[i]);
    });
    let winnerArrays = [];
    let winnerArray = [];
    // calculatin win losses of each player
    // winnerArray[0] contains 1st player win and loss and
    // winnerArray[1] contains 2nd player win and loss and so on..
    for (let i = 0; i < 4; i++) {
      winnerArray = [];
      for (let j = 0; j < 4; j++) {
        if (i == j) {
          winnerArray.push("-");
        } else {
          winnerArray.push(winner(player[i], player[j]));
        }
      }
      winnerArrays.push(winnerArray);
    }
    table = `
  <div class="tests">
<table>
      <tr>
        <th>Player 1</th>
        <th>Player 2</th>
        <th>Player 3</th>
        <th>Player 4</th>
      </tr>
      <tr>
        ${td(playerChoice)}
      </tr>
    </table>
    <br>
    <table>
      <tr>
        <th>totals</th>
        <th></th>
        <th colspan="4">Against</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <th>Player 1</th>
        <th>Player 2</th>
        <th>Player 3</th>
        <th>Player 4</th>
      </tr>
      <tr>
        <th rowspan="4">Player wins</th>
        <th>Player 1</th>
        ${td(winnerArrays[0])}
      </tr>
      <tr>
        <th>Player 2</th>
        ${td(winnerArrays[1])}
      </tr><tr>
        <th>Player 3</th>
        ${td(winnerArrays[2])}
      </tr><tr>
        <th>Player 4</th>
        ${td(winnerArrays[3])}
      </tr>
    </table>
    <br><hr><br>
  <div>
  `;
    tables.push(table);
  };

  let createTamplate = function(x) {
    for (let i = 0; i < x; i++) {
      addTable();
    }
    finalHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <style>
    table{
        background: black;
        margin: auto;
        }
    td, th {
        background: white;
        text-align: center;
    }
    </style>
    <title>Document</title>
  </head>
  <body>
    ${tables.join("")}
  </body>
</html>`;
  };
  createTamplate(50);
  return finalHtml;
};
