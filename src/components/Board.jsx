import { useState } from 'react'
import Square from './Square'

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)

  function handleClick(i) {
    if (squares[i]) return

    const nextSquares = squares.slice()
    nextSquares[i] = isXNext ? 'X' : 'O'
    setSquares(nextSquares)
    setIsXNext(!isXNext)
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    )
  }

  return (
    <div className="board">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
