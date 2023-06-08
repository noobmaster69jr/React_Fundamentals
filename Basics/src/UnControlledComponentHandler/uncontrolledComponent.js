import { Component } from "react";


//Uncontrolled components are collection of form elements which are controlled by DOM 
//instead of react 
class Uncontrolled extends Component {
  render() {
    return (
      <form>
        <label>
          Name
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Uncontrolled;
