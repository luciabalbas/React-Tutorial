const Book = (props) => {
  // console.log(props)
  const { img, title, author, id } = props
  // const displayTitle = () => {
  //   console.log(title)
  // }
  // const getSingleBook = () => {
  //   getBook(id)
  // }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button>display Title</button>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
