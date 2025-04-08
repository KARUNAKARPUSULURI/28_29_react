//write class based component to display color names
//take one state variable for the input value
//form -> input - > button

import { Component } from "react";
import "./App.css"

class FillColors extends Component {
    constructor() {
        super()
        this.state = {
            color: "",
            textColor : ""
        }
    }
    handleColorChange = (e) => {
        this.setState({ color: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ textColor: this.state.color })
    }
    render() {
        return (
            <>
                <div
                    style={
                        {
                            width: "100px",
                            height: "100px",
                            border: "4px solid black",
                        }
                    }>
                        <p style={{color : this.state.textColor}}>Hello</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Submit</button>
                    <input type="color" onChange={this.handleColorChange} />
                </form>
            </>
        )
    }
}

export default FillColors;