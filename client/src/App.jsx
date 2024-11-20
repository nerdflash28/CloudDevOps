import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch('http://localhost:3000/'); 
      res = await res.json();
      setData(res.data);
    }
    fetchData();
  }, [])

  return (
    <h1 className="text-3xl font-bold underline text-green-900">
      {data}
    </h1>
  )
}

export default App
