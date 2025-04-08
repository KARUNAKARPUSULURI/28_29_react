import { Component } from "react";
import "./App.css";
import Button from "./Components/Button";
import Search from "./Components/Search";
class App extends Component {
  render = () => {
    var a;
    const obj = {
      name: "karunakar"
    }
    return <>
      {a} - {obj.name}
      <Button a = {a} obj = {obj.name}/>
      <Search />
    </>
  }

}

export default App;