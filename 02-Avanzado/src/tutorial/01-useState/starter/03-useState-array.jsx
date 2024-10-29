import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    console.log(id)
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  // const clearAllItems = () => {
  //   setPeople([])
  // }

  return (
    <div>
      <h2>useState array example</h2>
      {people.map((person) => {
        console.log(person)
        const { name, id } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        )
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        clear all
      </button>
      <hr />
    </div>
  )
}

export default UseStateArray
