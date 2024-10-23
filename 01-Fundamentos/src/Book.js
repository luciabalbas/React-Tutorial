const Book = (props) => {
  // console.log(props)
  const { img, title, author, number } = props
  // const displayTitle = () => {
  //   console.log(title)
  // }
  // const getSingleBook = () => {
  //   getBook(id)
  // }
  console.log(title, '-', number)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button>display Title</button>
      <h4>{author}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  )
}

export default Book
