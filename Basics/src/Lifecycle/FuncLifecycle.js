import {useEffect} from "react"

const FuncLifecycle = () =>{
 /*The useEffect hook in React is used to handle side effects in functional components.
  It allows you to perform certain actions in response to component lifecycle events,
  such as when the component mounts, updates, or unmounts. */
    useEffect(()=>{
        console.log("useEffect hook is called")
    },[])

    return (<h4>This is a functional component</h4>)
}
export default FuncLifecycle