import {createContext} from 'react'

const MyContext = createContext()

const MyProvider = (props) =>{
    const sharedData = "This is a shared Data"
    return (
        //it became a provider
        <MyContext.Provider value={sharedData}>
            {props.children}
        </MyContext.Provider>
    )
}

const MyConsumer = () =>{

    return (
        //it became a consumer
      <MyContext.Consumer>{(value) => <div>{value}</div>}</MyContext.Consumer>
    );
}


//further we should wrap it in App.js

const App = () =>{
    return (
        <MyProvider>
            <MyConsumer/>
        </MyProvider>
    )
}