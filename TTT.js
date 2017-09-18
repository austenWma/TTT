let prompt = require('prompt')

let mainBoard = "1|2|3\n- - -\n4|5|6\n- - -\n7|8|9"

const playTTT = (board) => {
  console.log('Board ready...')
  console.log(board)
  prompt.start();
  console.log('Player 1 input a number to make a move!')
  prompt.get('move', (err, result1) => {
    let newBoard = mainBoard.slice().split('');
    let moveIdx = newBoard.indexOf(result1.move);
    newBoard.splice(moveIdx, 1)
    newBoard.splice(moveIdx, 0, 'X')
    console.log(newBoard.join(''))
    prompt.start();
    console.log('Player 2 input a number to make a move!')
    prompt.get('move', (err, result2) => {
      let moveIdx = newBoard.indexOf(result2.move);
      newBoard.splice(moveIdx, 1)
      newBoard.splice(moveIdx, 0, 'O')
      console.log(newBoard.join(''))
      mainBoard = newBoard;
    })
  })
}

const checkWins = (board) => {

}

playTTT(mainBoard)
