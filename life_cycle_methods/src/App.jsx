import { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      getSingleProduct: null, // {}
      count: 1 //2
    }
  }
  handleNext = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handlePrev = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleReset = () => {
    this.setState({ count: 1 })
  }
  getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(data => this.setState({ data }))
  }
  getProductsById = () => {
    fetch(`https://fakestoreapi.com/products/${this.state.count}`)
      .then((res) => res.json())
      .then(data => this.setState({ getSingleProduct: data }))
  }
  componentDidMount() {
    this.getProducts()
    this.getProductsById()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.count != this.state.count) { //1 -> 2 | 2 -> 2 | 2 == 2
      this.getProductsById()
    }
  }
  render() {
    const { data, getSingleProduct, count } = this.state
    return (
      <>
        <h1>{count}</h1>
        {
          getSingleProduct && (
            <h1>{getSingleProduct.title}</h1>
          )
        }
        <div>
          <button onClick={this.handlePrev}>Previous</button>
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleNext}>Next</button>
        </div>
      </>
    )
  }
}

export default App