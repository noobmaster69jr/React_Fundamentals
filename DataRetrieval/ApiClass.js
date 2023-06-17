import React, {Component} from 'react'

class ApiClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:""
        }
    }

    componentDidMount(){
        const requestOptions = {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name:'Ashwanth'})
        }

        fetch("https://reqres.in/api/posts", requestOptions)
        .then(response => response.json())
        .then(data => this.setState((prevState) => ({
            name: data.name
        })))
    }

    render(){
        return (
            <div>
                <h1>Data retrieval in react using fetch</h1>
                <h3>Hi this is {`${this.state.name}`}</h3>
            </div>
        )
    }
}

export default ApiClass