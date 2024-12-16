import { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  const sayHello = () => {
    console.log('hello there')
  }

  sayHello()

  useEffect(() => {
    console.log('hello from useEffect')
  }, [])
  // las [] es donde depende el re-render, si vacío => solo al cargar la página

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  )
}
export default UseEffectBasics
