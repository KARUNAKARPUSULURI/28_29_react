import { Component } from "react";

class CreateData extends Component {
    constructor(){
        super()
        this.state = {
            email : "",
            password : "",
            submittedData : []
        }
    }
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        this.setState({submittedData : [...this.state.submittedData, {email, password}] })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="enter email" onChange={this.handleEmailChange} />
                    <input type="password" placeholder="enter password" onChange={this.handlePasswordChange} />
                    <button type="submit">Submit</button>
                </form>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.submittedData.map(({email, password})=>(
                                <tr>
                                    <td>{email}</td>
                                    <td>{password}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CreateData;