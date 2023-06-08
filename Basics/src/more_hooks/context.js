import { useContext,createContext, useState } from "react";

//1. create a context
const UserContext = createContext()

//3.consumed here
const UserInfo = () => {
    const user = useContext(UserContext)

    return (
      <div>
        <h1>Got the value from context : {user}</h1>
      </div>
    );
}


function Login(){
    const [user, setUser] = useState([])
  

    //2. value is provided from here
    return (<>
    <UserContext.Provider value={user}>
        <div>
            <button onClick={()=> setUser("Ashwin")
               }>Log In</button>
            <UserInfo/>

        </div>
    </UserContext.Provider>
    </>)
}

export default Login