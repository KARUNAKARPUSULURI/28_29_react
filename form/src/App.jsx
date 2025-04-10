import React from "react";
import "./App.css"

class RegisterForm extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      age: 0,
      gender: "",
      phone_number: 9876543210,
      email: "",
      password: "",
      confirmPassword: "",
      submittedData: null
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { username, age, gender, phone_number, email, password, confirmPassword } = this.state
    if(password !== confirmPassword) return ;
    this.setState({ submittedData: { username, age, gender, phone_number, email, password, confirmPassword } })
  }
  render() {
    console.log(this.state.submittedData)
    return (
      <>
        <h3>This is Registration form</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Name: </label>
          <input
            type="text"
            placeholder="Enter your name..."
            id="username"
            name="username"
            onChange={this.handleChange}
          /><br />
          <label htmlFor="age">Age: </label>
          <input type="number" placeholder="Enter your age..." id="age" name="age" onChange={this.handleChange} /><br />
          <label htmlFor="gender">Gender: </label>
          <select name="gender" onChange={this.handleChange}>
            <option value={""}>Select</option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
          </select><br />
          <label htmlFor="phone_number">Phone Number: </label>
          <input type="tel" placeholder="Enter your mobile number..." id="phone_number" name="phone_number" onChange={this.handleChange} /><br />
          <label htmlFor="email">Email: </label>
          <input type="email" placeholder="Enter your email..." id="email" name="email" onChange={this.handleChange} /><br />
          <label htmlFor="password">Password: </label>
          <input type="password" placeholder="Enter your password..." id="password" name="password" onChange={this.handleChange} /><br />
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input type="password" placeholder="Enter your confirmPassword..." id="confirmPassword" name="confirmPassword" onChange={this.handleChange} /><br />
          <button type="submit">Register</button>
        </form>
        <div>
          {
            this.state.submittedData && (
              <div>
                  <h3>Name : {this.state.submittedData.username}</h3>
                  <h3>Age : {this.state.submittedData.age}</h3>
                  <h3>Gender : {this.state.submittedData.gender}</h3>
                  <h3>Mobile Number : {this.state.submittedData.phone_number}</h3>
                  <h3>Email : {this.state.submittedData.email}</h3>
                  <h3>Password : {this.state.submittedData.password}</h3>
                  <h3>Confirm Password : {this.state.submittedData.confirmPassword}</h3>
              </div>
            )
          }
        </div>
      </>
    )
  }
}

export default RegisterForm