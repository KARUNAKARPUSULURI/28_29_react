//write class based syntax
// take two state variables -> names and color
// iterate over the names and color array and show them in the UI

import { Component } from "react";

class colorNames extends Component {
    constructor() {
        super();
        this.state = {
            names: ["Red", "Green", "Blue", "Yellow"],
            colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"]
        }
    }
    render() {
        return (
            <>
                {
                    this.state.names.map((name, index) => (
                        <>
                            <h1
                                style={{ color: `${this.state.colors[index]}` }}
                                key={index}
                            >
                                {name} - {this.state.colors[index]}
                            </h1>
                        </>
                    ))
                }
            </>
        )
    }
}

export default colorNames