let prompt = require('prompt')

let mainBoard = "1|2|3\n- - -\n4|5|6\n- - -\n7|8|9"

const playTTT = (board) => {
  console.log('Board ready...')
  console.log(board)
  prompt.start();
  console.log('Player X input a number to make a move!')
  prompt.get('move', (err, result1) => {
    let newBoard = mainBoard.slice().split('');
    let moveIdx = newBoard.indexOf(result1.move);
    newBoard.splice(moveIdx, 1);
    newBoard.splice(moveIdx, 0, 'X');
    console.log(newBoard.join(''));
    prompt.start();
    console.log('Player O input a number to make a move!')
    prompt.get('move', (err, result2) => {
      let moveIdx = newBoard.indexOf(result2.move);
      newBoard.splice(moveIdx, 1);
      newBoard.splice(moveIdx, 0, 'O');
      console.log(newBoard.join(''));
      mainBoard = newBoard.join('');
      checkWinsOrPlayOn(mainBoard);
    })
  })
}

const checkWinsOrPlayOn = (board) => {
  console.log('Checking wins...')
  let rows = board.split('\n');
  let cols = ['', '', ''];
  let diag = ['', '']

  // Checking for row wins, and constructing col
  for (let i = 0; i < rows.length; i+=2) {
    let rowVal = rows[i].split('|').join('');
    if (rowVal === 'XXX' || rowVal === 'OOO') {
      console.log('WE HAVE A WINNER!!!')
      return
    }

    // Construct col sets
    cols[0] += rowVal[0];
    cols[1] += rowVal[1];
    cols[2] += rowVal[2];

    //Construct diag sets
    if (i === 0) {
      diag[0] += rowVal[0];
      diag[1] += rowVal[2];
    } else if (i === 2) {
      diag[0] += rowVal[1];
      diag[1] += rowVal[1];
    } else {
      diag[0] += rowVal[2];
      diag[1] += rowVal[0];
    }
  }

  // Checking cols sets for wins
  for (let i = 0; i < cols.length; i++) {
    if (cols[i] === 'XXX' || cols[i] === 'OOO') {
      console.log('WE HAVE A WINNER!!!')
      return
    }
  }

  // Checking diag sets for wins
  for (let i = 0; i < diag.length; i++) {
    if (diag[i] === 'XXX' || diag[i] === 'OOO') {
      console.log('WE HAVE A WINNER!!!')
      return
    }
  }


  console.log(rows)
  playTTT(board)
}

playTTT(mainBoard)
