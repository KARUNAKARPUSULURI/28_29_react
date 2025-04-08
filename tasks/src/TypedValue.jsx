//Write class based component syntax
//show 1 h1 tag and input tag in the UI
//When user types in the input tag, it should be reflected in the h1 tag
//onChange event is used to get the value of the input tag and set it to the state variable

import { Component } from "react";


class TypedValue extends Component{
    constructor(){
        super()
        this.state = {
            typedValue : "",
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(e){
        console.log(e.target.value);
        this.setState({typedValue : e.target.value})
    }
    render(){
        return (
            <>
            <h1>Typed Value : {this.state.typedValue}</h1>
            <input type="text" placeholder="type something..." onChange={this.handleInputChange}/>
            </>
        )
    }
}

export default TypedValue