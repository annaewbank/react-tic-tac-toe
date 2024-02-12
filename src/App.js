import { useState } from "react";

// SQUARE COMPONENT
// Create a square component
// Pass the Square component a prop called value
function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

// BOARD COMPONENTS
// Create a board component
// The default keyword tells other files using your code that it’s the main function in your file
export default function Board() {
  // STATES
  // Player state - X starts by default:
  const [xIsNext, setXIsNext] = useState(true);
  // Refactored: Children's state is lifted into the parent
  const [squares, setSquares] = useState(Array(9).fill(null));

  // EVENT HANDLERS
  // Click event handler
  function handleClick(i) {
    // Return early if square is already taken:
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // Else update square and change player:
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares); // Update squares state and re-render
    setXIsNext(!xIsNext); // Update players state
  }

  // PLAYER OR WINNER
  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // RENDER
  // JSX button element with a className prop -> .square in CSS
  return(
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </> // Fragments to wrap multiple adjacent JSX elements
  );

  // HELPER FUNCTION
  function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
}
