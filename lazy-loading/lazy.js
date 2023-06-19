import React from 'react'
const Component = React.lazy(() => import("./DummyComponent"));
const LazyComponent = () => {
    
    return (
      <>
        <Component />
        <h3>This component is lazy loaded</h3>
      </>
    );
}

export default LazyComponent