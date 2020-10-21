import React from 'react'
import ReactDom from 'react-dom'

//Nested Components

function Greeting(){
  return(
    <div>
      <Person/>
      <Message/>
    </div>
  )
}

const Person = () => <h> Bilawal Khan  </h>
const Message  = () => {
  
    return <p>this is my message</p>
};
ReactDom.render(
  <Greeting/>
  ,document.getElementById('root')
)
