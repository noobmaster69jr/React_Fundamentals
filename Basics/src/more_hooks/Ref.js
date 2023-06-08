import React,{ useEffect, useRef, useState} from 'react'

const Ref = () => {
 const textElement = useRef();
 const [content, setContent] = useState("Super fast Reloading...");
 // grab the button element and change the text to clicked

 useEffect(() => {
   console.log(textElement.current.innerText);

   textElement.current.innerText = content;
 },[content]);

 return (
   <div>
     <h1>Advance Hooks </h1>
     <h3 ref={textElement}>Loading...</h3>
     <button onClick={()=>setContent("Loaded Successfully")}>Click Me</button>
   </div>
 );
}

export default Ref