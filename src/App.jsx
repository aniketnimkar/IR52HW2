import { useState } from 'react'
import './App.css'
import useFetch from './useFetch'

export default function App() {
  const [showData, setShowData] = useState(false);
  const {data} = useFetch('https://v2.jokeapi.dev/joke/Programming?type=single')
  // console.log(data)
  
  return (
    <main>
      <h1>Programming API</h1>
       <button onClick={()=>setShowData(true)}>Get Programming Joke</button>
        {
          showData && (
            <div>
              {data ? <p>{JSON.stringify(data.joke)}</p> : <p>Error occerd while fetching the Programming Joke.</p>}
            </div>
          )
        }
    </main>
  )
}
