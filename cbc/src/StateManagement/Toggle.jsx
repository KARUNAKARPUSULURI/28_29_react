import { Component } from "react";

class Toggle extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
    }
    handleToggle = () => {
        this.setState({isLoggedIn : !this.state.isLoggedIn})
    }
    render(){
        return (
            <>
                <h1>This is Toggle Application</h1>
                <button onClick={this.handleToggle}>{this.state.isLoggedIn ? "Logout" : "Login"}</button>
                <button>Open</button>
                <div></div>
            </>
        )
    }
}

export default Toggle;