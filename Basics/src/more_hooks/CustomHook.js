import React, { useEffect , useState} from 'react'


const useCustom = () =>{

    const [data, setData] = useState("");
    useEffect(()=>{
        
        async function fetchData(){
            try{
                const response = await fetch("https://v2.jokeapi.dev/joke/Any");
                 const data = await response.json();
                  setData(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
      
    }, [])
    return data
}
const CustomHook = () => {
   const data = useCustom()
   console.log("inside custom HOOk")
  return (
    <div className="text-center vh-100 d-flex flex-column justify-content-center">
      <h3 className="text-warning">{data.setup}</h3>
      <h2 className="text-success">{data.delivery}</h2>
    </div>
  );
}

export default CustomHook