import { Component } from "react";

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            data: []
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    handleAdd = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        this.setState({ data: [...this.state.data, { email, password }] })
    }
    handleDelete = (id) => {
        const deletedItems = this.state.data.filter((user, index)=> index != id )
        this.setState({data : deletedItems})
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleAdd}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder="Enter your email..." id="email" name="email" onChange={this.handleChange} /><br />
                    <label htmlFor="password">Password: </label>
                    <input type="password" placeholder="Enter your password..." id="password" name="password" onChange={this.handleChange} /><br />
                    <button type="submit">Login</button>
                </form>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data && this.state.data.map((user, index)=>(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <button>✏️</button>
                                        <button onClick={()=> this.handleDelete(index)}>👉🏻🗑️</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default LoginForm