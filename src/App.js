import{ useEffect, useState } from 'react'
import './App.css';
import UserList from './UserList';

function App() {
  const [data, setData] = useState([]);
 const [error, setError] = useState(null);
 useEffect(() => {
   function fetchData() {
     fetch("https://jsonplaceholder.typicode.com/users")
       .then(res => res.json())
       .then(res => setData(res))
       .catch(err => setError(err));
   }

   fetchData();
 }, []);
 console.log(data)
  return (
    <div className="App">
      <UserList data={data}/>
    </div>
  );
}

export default App;

