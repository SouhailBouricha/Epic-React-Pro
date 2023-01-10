// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className='box box--small' style={{backgroundColor : "lightblue", fontStyle : "italic"}}>small lightblue box</div>
const mediumBox = <div className='box box--medium' style={{backgroundColor : "pink", fontStyle : "italic"}}>medium pink box</div>
const largeBox = <div className='box box--large' style={{backgroundColor : "orange", fontStyle : "italic"}}>large orange box</div>

function Box({className, size, style,children}){
  let dim = size === "small" ? {width: '90px' , height: '90px' } : size === "medium" ? {width: '180px' , height: '180px' } :  size === "large" ? {width: '270px' , height: '270px' } : "";
  console.log(dim);
  return (<div className={"box " + className} style={{...dim,fontStyle: 'italic',...style}}>{children}</div>)
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
    </div>
  )
}

export default App
