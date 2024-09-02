// Import to Root - Create Root Component
import React from 'react'
import ReactDOM from 'react-dom/client'

// First Component
function Greeting() {
  return (
    <React.Fragment>
      <div className="someValue">
        <h2>My First Component</h2>
        <ul>
          <li>
            <a href="">hello world</a>
          </li>
        </ul>
      </div>
      {/* // Only one parent item */}
      <h3>hello world</h3>
      <input type="text" name="" id="" />
    </React.Fragment>
  )
}
// export default Greeting;

// function Greeting() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'hello world')
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
