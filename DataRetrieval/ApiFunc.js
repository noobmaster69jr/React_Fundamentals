import React, { useEffect, useState } from 'react'

const ApiFunc = () => {

    const [state, setState] = useState("")

    useEffect(()=>{
         const requestOptions = {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name:'Tharun'})
        }

        fetch("https://reqres.in/api/posts", requestOptions)
        .then(response => response.json())
        .then(data => setState(data.name))
    },[])

  return (
    <div>
      <h1>Data retrieval in react using fetch</h1>
      <h3>Hi this is {`${state}`}</h3>
    </div>
  );
}

export default ApiFunc