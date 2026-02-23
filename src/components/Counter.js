import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const [error,setError] = React.useState("");

    const handleDecrement = () => {
        if(count>0){
            setCount(count-1);
            setError("");
        }
        else{
            setError("Count cannot be negative");
        }
    }
  return (
    <div>
      <h2>Counter: {count}</h2>
    <button onClick={()=>{setCount(count+1);setError("");}} >Increment</button>
    <button onClick={handleDecrement} >Decrement</button>
    {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}

export default Counter
