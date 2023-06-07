import {useState} from 'react'

export default function FuncState(){
    const [count, setCount] = useState(0)
 
    return (
      <>
        <div className="m-auto" style={{ width: "200px" }}>
          <h1>Walter White</h1>
          <p>Count: {count}</p>
          <button className="btn btn-primary" onClick={()=>setCount(count+1)}>
            Increment
          </button>
        </div>
      </>
    );
}

