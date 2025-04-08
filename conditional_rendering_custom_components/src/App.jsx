import React, { Component } from 'react';

class UserCRUD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: '',
      email: '',
      password: '',
      editId: null,
      editName: '',
      editEmail: '',
      editPassword: '',
      formError: '',
    };
  }

  handleEditInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEditClick = (user) => {
    this.setState({
      editId: user.id,
      editName: user.name,
      editEmail: user.email,
      editPassword: user.password
    });
  };

  handleCancelEdit = () => {
    this.setState({
      editId: null
    });
  };

  handleSaveEdit = (id) => {
    const { users, editName, editEmail, editPassword } = this.state;

    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          name: editName,
          email: editEmail,
          password: editPassword
        };
      }
      return user;
    });

    this.setState({
      users: updatedUsers,
      editId: null,
      formError: ''
    });
  };

  render() {
    const { 
      users, 
      name, 
      email, 
      password, 
      editId, 
      editName, 
      editEmail, 
      editPassword,
      formError
    } = this.state;

    return (
      <div>
        <div>
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
                  <td colSpan="4">
                    No users found. Add a user to get started.
                  </td>
                </tr>
              ) : (
                users.map(user => (
                  <tr key={user.id}>
                    <td>
                      {editId === user.id ? (
                        <input
                          type="text"
                          name="editName"
                          value={editName}
                          onChange={this.handleEditInputChange}
                        />
                      ) : (
                        user.name
                      )}
                    </td>
                    <td>
                      {editId === user.id ? (
                        <input
                          type="email"
                          name="editEmail"
                          value={editEmail}
                          onChange={this.handleEditInputChange}
                        />
                      ) : (
                        user.email
                      )}
                    </td>
                    <td>
                      {editId === user.id ? (
                        <input
                          type="password"
                          name="editPassword"
                          value={editPassword}
                          onChange={this.handleEditInputChange}
                        />
                      ) : (
                        '••••••••'
                      )}
                    </td>
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
                          <button onClick={() => this.handleEditClick(user)}>
                            Edit
                          </button>
                          <button onClick={() => this.handleDeleteUser(user.id)}>
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
      </div>
    );
  }
}

export default UserCRUD;