import React, {Component} from 'react'

class Lifecycle extends Component {
  //   mounting (Creating the component)
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor is called");
  }

  // redux: called before the page loads up
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps lifecycle method is called");
    return null;
  }

  // updating (Changing mounting component)
  // static getDeivedStateFromProps
  // render

  // looking for an update // waiting the the update to happen
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  // get previous state values
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate is called");
    return null;
  }

  // updates the component
  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }

  render() {
    console.log("Render is called");

    return (
      <div className="container">
        <h2>React Is Awesome!</h2>
        {/* updating (Changing mounting component) */}
        <button
          className="btn btn-primary"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        <h1 className="fw-bolder">{this.state.count}</h1>
      </div>
    );
  }

  //The componentDidMount() method is called after the component is rendered.
  componentDidMount() {
    console.log("Component Did Mount is called");
  }
}

export default Lifecycle