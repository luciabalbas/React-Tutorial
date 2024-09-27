// I M P O R T   T O   R O O T - Create Root Component - Not necessary bc React 17
import React from 'react'
import ReactDOM from 'react-dom/client'

// I M P O R T   C S S
import './index.css'

// F I R S T   C O M P O N E N T
// function Greeting() {
//   return (
//     // <React.Fragment>
//     <>
//       <div className="someValue">
//         <h2>My First Component</h2>
//         <ul>
//           <li>
//             <a href="">hello world</a>
//           </li>
//         </ul>
//       </div>
//       {/* // Only one parent item */}
//       <h3>hello world</h3>
//       <input type="text" name="" id="" />
//       </>
//     // </React.Fragment>
//   )
// }
// export default Greeting;

// function Greeting() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'hello world')
//   )
// }

// N E S T   C O M P O N E N T
// function Greeting() {
//   return (
//     <div>
//       {/* <h2>John Doe</h2> */}
//       <Person />
//       {/* <p>This is my message</p> */}
//       <Message />
//     </div>
//   )
// }

// const Person = () => <h2>john doe</h2>
// const Message = () => {
//   return <p>this is my message</p>
// }

//const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting />)

// B O O K L I S T
const Booklist = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/91rcGxdclIL._SY466_.jpg"
    alt="Onyx Storm"
  />
)
const Title = () => <h2>Onyx Storm</h2>
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }
  // <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
  return <h4 style={inlineHeadingStyles}>Rebecca Yarros</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
