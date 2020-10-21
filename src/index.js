import React from 'react'
import ReactDom from 'react-dom'


let h1 = React.createElement('h1',null, 'Hello world..!');

class HelloWorld extends React.Component{

  render(){

    return React.createElement('div',null,h1,h1);
  }

}

ReactDom.render(
  React.createElement(HelloWorld,null)
  ,document.getElementById('root')
)
