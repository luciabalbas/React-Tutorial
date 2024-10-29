const ErrorExample = () => {
  let count = 0
  const handleButton = () => {
    count = count + 1
    console.log(count)
  }

  return (
    <div>
      <h2>useState error example</h2>
      <h2>{count}</h2>
      <button className="btn" onClick={handleButton}>
        click me
      </button>
      <hr />
    </div>
  )
}

export default ErrorExample
