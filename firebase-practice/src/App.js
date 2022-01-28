import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, doc, getDocs } from 'firebase/firestore';
import './App.css';

function App() {
  const [user, setUsers] = useState([]);
  const usersReference = collection(db, "users");

  useEffect(() => {

    const getUsers = async () => {

      const data = await getDocs(usersReference);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getUsers();
  }, [])


  return (
    <div className="App">
      {user.map((user) => {
        return <div> 
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <h1>{user.greatesthit}</h1>
        </div>
      })}
     
    </div>
  );
}

export default App;
