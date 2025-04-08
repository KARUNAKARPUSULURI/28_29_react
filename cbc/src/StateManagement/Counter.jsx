import { Component } from "react";

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    handleIncrement = () => {
        this.setState({count : this.state.count + 1})
    }
    handleReset = () => {
        this.setState({count : 0})
    }
    handleDecrement = () => {
        this.setState({count : this.state.count - 1})
    }
    render() {
        return (
            <>
                <h1>This is Counter Application</h1>
                <div>
                    <h3>Counter : {this.state.count}</h3>
                    <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
                        <button disabled = {this.state.count >= 5} onClick={this.handleIncrement} style={{color : "#fff", backgroundColor : "Green"}}><strong>+</strong></button>
                        <button disabled = {this.state.count == 0} onClick={this.handleReset} style={{color : "#fff", backgroundColor : "Red"}}><strong>⟲</strong></button>
                        <button disabled = {this.state.count <= 0} onClick={this.handleDecrement} style={{color : "#fff", backgroundColor : "blue"}}><strong>-</strong></button>
                    </div>
                </div>
            </>
        )
    }
}

export default Counter;