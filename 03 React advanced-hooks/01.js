// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import { useReducer } from 'react'
function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const countReducer = (prevuesState,newState) =>{
    console.log(newState);
    return {...prevuesState,...newState};
  }
  const [state, setState] = React.useReducer(countReducer, {count: initialCount,})
  const {count} = state;
  console.log(count);
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
