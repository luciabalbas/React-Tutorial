import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleButton = () => {
    setValue(value + 1)
    console.log(value)
  }
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h2>{value}</h2>
      <button className="btn" onClick={handleButton}>
        Aumenta
      </button>
      <hr></hr>
    </>
  )
}

export default UseStateGotcha
