import { Component } from "react";
import "./App.css"
class App extends Component {
  //constructor started
  constructor(){
    super();
    this.state = {
      gender : ""
    }
  }
  //constructor ended
  //handleChange started
  handleChange = (e) => {
    this.setState({gender : e.target.value});
  }
  //handleChange ended
  //render started
  render() {
    return (
      <>
      <h3>Selected Gender : {this.state.gender}</h3>
        <select onChange={this.handleChange}>
          <option value={""}>Select</option>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
        </select>
      </>
    )
  }
  //render ended
}
export default App;