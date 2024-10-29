import { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState())
  // const value = useState('hello')[0]
  // const func = useState('hello')[1]
  // console.log(value)
  // console.log(func)

  const [count, setCount] = useState(0)
  const handleButton = () => {
    setCount(count + 1)
    // return count
  }
  return (
    <div>
      <h2>useState basics</h2>
      <h3>You clicked {count} times</h3>
      <button type="button" className="btn" onClick={handleButton}>
        click me
      </button>
      <hr />
    </div>
  )
}

export default UseStateBasics
