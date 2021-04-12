import React,{useEffect,useState} from "react"
import './App.css';
import axios from"axios"
function App() {
 const [users,setusers]=useState([]) 
 const [name,setname] = useState("")
  useEffect(()=> {
axios.get('https://randomuser.me/api/?results=5').then(data => {
  setusers(data.data.results)
})
  },[])

  return (
    <div className="App">
    {users.map(user => (
    <div>{user?.name.first}</div> 
    ) )}  
    <button onClick={}>
      sortbyAge
    </button>
    </div>
  );
}

export default App;
