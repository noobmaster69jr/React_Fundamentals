import FallbackComponent from "./FallbackComponent"
import { Suspense } from "react"
import LazyComponent from "./lazy"

const SuspenseComponent = () =>{

    return (
      <Suspense fallback={<FallbackComponent/>}>
        <LazyComponent />
      </Suspense>
    );
    
}

export default SuspenseComponent