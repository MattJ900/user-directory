import React, { useEffect, useState } from "react"
import './App.css';
import axios from "axios"
function App() {
  const [users, setusers] = useState([])
  const [name, setname] = useState("")
  const [sortDir, setsortDir] = useState(true)
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10').then(data => {
      setusers(data.data.results)
    })
  }, [])
  const setnamefunc = (e) => {
    setname(e.target.value)
  }
  const sortAgeFunc = () => {
    let newUsers;
    if (sortDir) {
      newUsers = [...users].sort((a, b) => a.dob.age - b.dob.age)
    } else {
      newUsers = [...users].sort((b, a) => a.dob.age - b.dob.age)
    }
    setsortDir(!sortDir)
    console.log(newUsers);
    setusers(newUsers)
  }
  return (
    <div className="App">
      <input value={name} onChange={setnamefunc}></input>
      {users.filter(user => user.name.first.includes(name)).map(user => (
        <div>
          <tr>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.dob.age}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
          </tr>
        </div>
      ))}
      <button onClick={sortAgeFunc}>
        sortbyAge
    </button>
    </div>
  );
}

export default App;
