import React from 'react'
import ReactDom from 'react-dom'


// function Greeting(){
//   return ( 
//     <div>
//       <h4>Hello world..!</h4>
//     </div>
//   );
//}
let h1 = React.createElement('h1',null, 'Hello world..!');

const Greeting = () => {
  return React.createElement('div',
    {},
    h1,
    h1
  );
}


ReactDom.render(<Greeting/>, document.getElementById('root'))
