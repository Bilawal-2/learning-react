import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){
  return ( 
    <div>
      <h4>Hello world..!</h4>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement('div',
//     {},
//       React.createElement('h1',{},'Hello world')
//   );
// }


ReactDom.render(<Greeting/>, document.getElementById('root'))
