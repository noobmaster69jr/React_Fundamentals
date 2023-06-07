import React,{Component} from 'react'

class ClassComponent extends Component{

    render(){
        return (<div>
            <h2>The value passed is {this.props.value}</h2>
        </div>)
    }
}

export default ClassComponent