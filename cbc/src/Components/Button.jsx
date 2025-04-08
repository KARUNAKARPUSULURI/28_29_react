import { Component } from "react";

class Button extends Component {
    render() {
        const {a, obj} = this.props
        return (
            <>

                <button>{a ? obj : "N/A"}</button>
            </>
        )
    }
}

export default Button;