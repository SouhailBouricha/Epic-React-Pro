// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useRef,useState } from 'react';

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const [error,setError] = useState(""); 
  const [username,setUsername] = useState(""); 
  const inputRef = useRef(null);
  const btnRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitUsername(e.target.elements[0].value);
    // onSubmitUsername(inputRef.current.value);
  }
  const handleChange = (e) =>{
    const isValid = e.target.value === e.target.value.toLowerCase();
    setError(isValid ? "" : 'Username must be lower case');
    btnRef.current.disabled = !isValid;
  }
  const handleChange_2 = (e) =>{
    setUsername(e.target.value.toLowerCase());
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input onChange={handleChange} type="text" ref={inputRef}/>
        <input value={username} onChange={handleChange_2} type="text" />
      </div>
      <button ref={btnRef} type="submit">Submit</button>
      <h1>{error}</h1>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => {
    alert(`You entered: ${username}`)
  }
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
