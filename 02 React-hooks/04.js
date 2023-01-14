// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import { useState,useEffect } from 'react'
import { useLocalStorageState } from '../utils';
function Board({squares,setSquares,selectSquare,setMoves}) {
  const nextValue = calculateNextValue(squares);
  const winner = calculateWinner(squares);
  const status = calculateStatus(winner,squares,nextValue);

  function restart() {
    setSquares(Array(9).fill(null));
    setMoves([Array(9).fill(null)]);
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i,winner,nextValue,status)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="restart" onClick={restart}>
        restart
      </button>
    </div>
  )
}

function Game() {
  const [squares,setSquares] = useLocalStorageState("squares",Array(9).fill(null));
  const [moves,setMoves] = useLocalStorageState("moves",[Array(9).fill(null)]);
  function selectSquare(square,winner="",nextValue,status) {
    console.log(square,winner,nextValue,status);
    if(winner || squares[square] !== null){
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue;
    setSquares(squaresCopy);
    setMoves([...moves,squaresCopy]);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board setMoves={setMoves} squares={squares} setSquares={setSquares} selectSquare={selectSquare} />
      </div>
      <div className="game-info">
      <div>{status}</div>
      <ol>{moves.map(move => <li key={move}><button onClick={() => {  console.log(move,squares); setSquares(move) ;}} style={{display : "block", marginBottom : "8px", cursor : "pointer"}}>{moves.indexOf(move) === 0 ? 'Go To Game Start' : `Go To move #${moves.indexOf(move)}`}</button></li>)}</ol>
      </div>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function App() {
  return <Game />
}

export default App
