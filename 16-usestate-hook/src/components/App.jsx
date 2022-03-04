import React, {useState} from 'react'
import DigitalClock from './DigitalClock'

export default function App() {

  //useState is used to update the value of count 
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button className = 'reset-button' onClick={() => setCount(0)}>Reset</button>
      <br/>
      <DigitalClock />
    </div>
  )
}

