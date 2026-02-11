import React ,{useState}from 'react'

import './second.css'
import { use } from 'react';
function Second( {username,userimgurl}) {
  const [ state,setState ] =useState(100);
  const [message,setmessage]=useState("offer is on")
  useEffect(function(){
    console.log("The side effect is happend")
    if( state>100){
      setState(100);
    }
    if(state<90  && state>=80){
      setmessage("Hurry up")
    }else if(state<80){
        setmessage(" only Few is available")
    }
    else{
      setmessage("offer is on")
    }

    
  },[state] );
  function addItem(){
    setState(state-1)
  }
  function removeItem(){
    setState(state+1)
  }
  return (
    <div>
        <div className='Main2'>
          <h1> only available is{state}</h1>
          <h1>{message}</h1>
      <h1>{username}</h1>
      <img src= {userimgurl} alt =""/>
      <br/>
      <button onClick={addItem}>Add </button>
      <button onClick={removeItem}>Return</button>
    </div>
    </div>
  )
}

export default Second
