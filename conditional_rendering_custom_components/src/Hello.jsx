import React, { Component } from 'react'

export default class Hello extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            users: [],
            editId: null,
            editName: "",
            editEmail: "",
            editPassword: ""
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, users } = this.state;
        const newUser = {
            id: Date.now(),
            name,
            email,
            password
        }
        this.setState({ users: [...users, newUser], name: "", email: "", password: "" })
    }
    handleDelete = (id) => {
        const { users } = this.state;
        this.setState({
            users: users.filter(user => user.id !== id)
        })
    }
    handleEdit = (user) => {
        this.setState({
            editId: user.id,
            editName: user.name,
            editEmail: user.email,
            editPassword: user.password
        })
    }
    handleEditChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
    handleCancelEdit = () => {
        this.setState({
            editId : null
        })
    }
    handleSaveEdit = (id) => {
        const {users, editName, editEmail, editPassword} = this.state
        const updatedUsers = users.map(user => user.id === id ? {id, name: editName, email : editEmail, password : editPassword} : user)
        this.setState({
            users : updatedUsers,
            editId : null
        })
    }
    render() {
        const {
            users,
            name,
            email,
            password,
            editId,
            editName,
            editEmail,
            editPassword
        } = this.state;
        console.log(this.state.users)
        return (
            <div>
                <form onSubmit={this.handleSubmit} autoComplete='off'>
                    <input type='text' value={name} name={"name"} onChange={this.handleChange} />
                    <input type='text' value={email} name={"email"} onChange={this.handleChange} />
                    <input type='text' value={password} name={"password"} onChange={this.handleChange} />
                    <button type='submit'>Submit</button>
                </form>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td>No users found</td>
                            </tr>
                        ) : (
                            users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{editId === user.id ? (
                                        <input type='text' value={editName} name={"editName"} onChange={this.handleEditChange} />
                                    ) : (user.name)}</td>
                                    <td>{editId === user.id ? (
                                        <input type='text' value={editEmail} name={"editEmail"} onChange={this.handleEditChange} />
                                    ) : user.email}</td>
                                    <td>{editId === user.id ? (
                                        <input type='text' value={editPassword} name={"editPassword"} onChange={this.handleEditChange} />
                                    ) : user.password}</td>
                                    <td>
                                        {editId === user.id ? (
                                            <div>
                                                <button onClick={() => this.handleSaveEdit(user.id)}>
                                                    Save
                                                </button>
                                                <button onClick={this.handleCancelEdit}>
                                                    Cancel
                                                </button>
                                            </div>
                                        ) : (
                                            <div>
                                                <button onClick={() => this.handleEdit(user)}>
                                                    Edit
                                                </button>
                                                <button onClick={() => this.handleDelete(user.id)}>
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
