import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  })

  // const [name, setName] = useState('peter')
  // const [age, setAge] = useState(24)
  // const [hobby, setHobby] = useState('read books')

  const displayPerson = () => {
    // setPerson({ name: 'john', age: 28, hobby: 'scream at the computer' })
    // setPerson({ name: 'susan' }) // elimina los demás componentes
    setPerson({ ...person, name: 'susan' })
  }
  // const displayPerson = () => {
  //   setName('john')
  //   setAge(26)
  //   setHobby('scream at the computer')
  // }

  return (
    <>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show John
      </button>
      <hr></hr>
    </>
  )
}

export default UseStateObject
