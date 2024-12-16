import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleButton = () => {
    // el log va mal porque empieza en el 0, cualquier funcionalidad que dependa de él estará mal
    // setValue(value + 1)
    // console.log(value)

    // setValue((currentSate) => {
    //   const newSate = currentSate + 1
    //   return newSate
    // })
    // // ahora el console log es correcto
    // console.log(value)

    setTimeout(() => {
      console.log('clicked the button')
      setValue((currentSate) => {
        return currentSate + 1
      })
    }, 3000)
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
