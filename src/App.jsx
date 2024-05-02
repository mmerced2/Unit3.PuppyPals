import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'
import './index.css'

function App() {
  
//console.log(puppyList)
const [puppies, setPuppies] = useState(puppyList);
const [featPupId, setFeatPupId] = useState(null);
const featuredPup = puppies.find((pup)=> pup.id === featPupId);


console.log(featuredPup);


return (
  <div className="logo:hover">
    <div className='card'>
    <div className='read-the-docs'>
      <h1>Puppy List</h1>
    {
      puppies.map((puppy) => {
           return <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>{puppy.name}</p>;
         })
         
     }

    <p className='h2'> {featPupId && (
        <div>
          <h2> Name: {featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </p>
    </div>
    </div>
  </div>
);


}

export default App;
