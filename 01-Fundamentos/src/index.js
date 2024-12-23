// I M P O R T   T O   R O O T - Create Root Component - Not necessary bc React 17
import React from 'react'
import ReactDOM from 'react-dom/client'

// I M P O R T   C S S
import './index.css'

// I M P O R T  b o o k s
import { books } from './Books'

// I M P O R T  B O O K
import Book from './Book'

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

// // B O O K L I S T

// const title = 'Onyx Storm'
// const author = 'Rebecca Yarros'
// const img = 'https://m.media-amazon.com/images/I/91rcGxdclIL._SY466_.jpg'

// const Booklist = () => {
//   return (
//     <section className="booklist">
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}>
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
//           repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
//         </p>
//         <button>click me</button>
//       </Book>
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   )
// }

const Booklist = () => {
  const someValue = 'shakeAndBake'
  const displayValue = () => {
    console.log(someValue)
  }
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id)
  //   console.log(book)
  // }
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {/* <EventExample /> */}
        {books.map((book, index) => {
          // console.log(book)
          // const { img, title, author, id } = book
          // return <Book title={title} img={img} author={author} />
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

// Book  MOVED TO HIS OWN ARCHIVE
// const Book = (props) => {
//   // console.log(props)
//   const { img, title, author, id } = props
//   // const displayTitle = () => {
//   //   console.log(title)
//   // }
//   // const getSingleBook = () => {
//   //   getBook(id)
//   // }
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <button>display Title</button>
//       <h4>{author}</h4>
//     </article>
//   )
// }

// books  MOVED TO HIS OWN ARCHIVE
// const books = [
//   {
//     author: 'Rebecca Yarros',
//     title: 'Onyx Storm',
//     img: 'https://m.media-amazon.com/images/I/91rcGxdclIL._SY466_.jpg',
//     id: 1,
//   },
//   {
//     author: 'Holly Jackson',
//     title: "A Good Girl's Guide to Murder",
//     img: 'https://m.media-amazon.com/images/I/81E3hDPr3eL._SY425_.jpg',
//     id: 2,
//   },
// ]

// E V E N T S
const EventExample = () => {
  const handleFormInput = (e) => {
    // console.log(e)
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle button click!')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitetted')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">submit</button>
        <div>
          <button onClick={() => console.log('clicked me')} type="button">
            click me
          </button>
        </div>
      </form>
    </section>
  )
}

// const firstBook = {
//   author: 'Rebecca Yarros',
//   title: 'Onyx Storm',
//   img: 'https://m.media-amazon.com/images/I/91rcGxdclIL._SY466_.jpg',
// }

// const secondBook = {
//   author: 'Holly Jackson',
//   title: "A Good Girl's Guide to Murder",
//   img: 'https://m.media-amazon.com/images/I/81E3hDPr3eL._SY425_.jpg',
// }

// const Image = () => (
//   <img
//     src="https://m.media-amazon.com/images/I/91rcGxdclIL._SY466_.jpg"
//     alt="Onyx Storm"
//   />
// )
// const Title = () => <h2>Onyx Storm</h2>
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   }
//   // <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
//   return <h4 style={inlineHeadingStyles}>Rebecca Yarros</h4>
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
