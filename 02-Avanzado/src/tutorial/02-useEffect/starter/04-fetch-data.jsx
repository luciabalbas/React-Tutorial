import { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    console.log('holi')
    const getUsers = async () => {
      try {
        const resp = await fetch(url)
        const users = await resp.json()
        // console.log(users)
        setUser(users)
        console.log(users)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])
  return (
    <section>
      <h2>fetch data example</h2>
      <ul>
        {users.map((user) => {
          const { login, avatar_url, html_url, id } = user
          return (
            <li id={id}>
              <h4>{login}</h4>
              <img src={avatar_url} alt={login} width={100} />
              <p>
                <a href={html_url}>Github</a>
              </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
