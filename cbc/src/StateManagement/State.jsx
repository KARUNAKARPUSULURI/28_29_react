import { Component } from "react";

class State extends Component{
    constructor(){
        super()
        this.state = {
            count : 1,
            name : "karunakar",
            age : 24
        }
    }
    handleChangeName = () => {
       this.setState({name : "chaitanya", count : 2, age : 30})
    }
    render(){
        const {count, name, age} = this.state
        return (
            <>
                <h1>State management</h1>
                <h3>{count}) {name} - {age}</h3>
                <button onClick={this.handleChangeName}>Click me</button>
            </>
        )
    }
}

export default State;