import React, {useState} from 'react'

export default function DigitalClock() {

const[latestTime, setLatestTime] = useState(new Date().toLocaleTimeString())

function updateTime(){
    setLatestTime(new Date().toLocaleTimeString())
}
setInterval(updateTime,1000)
 return <>
        <h1 style={{fontSize : "60px", width : "500px"}}>DigitalClock</h1>
        <h1 className='current-time'>{latestTime}</h1>
        <button className='get-time-button' onClick={updateTime}>Get Time</button>
  </>  
}
