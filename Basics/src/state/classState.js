import React from "react";

class ClassState extends React.Component {
  state = {
    count: 0,
    name: "John Doe",
  };
   
  increment(){
        this.setState(prevState => ({count: prevState.count+1}))
     }

  render() {
    const { count, name } = this.state;

    return (
      <div className="m-auto" style={{width:'200px'}}>
        <h1>{name}</h1>
        <p>Count: {count}</p>
        <button className="btn btn-primary" onClick={()=>this.increment()}>Increment</button>
      </div>
    );
  }
}

export default ClassState