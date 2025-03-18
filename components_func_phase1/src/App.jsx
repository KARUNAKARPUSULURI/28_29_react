import Header from "./Components/Header/Header"


export const Greet = () => {
  const wish = 'Hello World'
  return <div>
    <Header />
  </div>
}

export const OrderPizza = () => {
  const isOrdered = false
  if (isOrdered) {
    return <h1>Your pizza is on the way</h1>
  } else {
    return <h1>Order your pizza now</h1>
  }
}

export const NameCheck = () => {
  const name = "Karunakar" //falsy  value
  if(name){
    return <h1>Hello {name}</h1>
  }else{
    return <h1>Please enter your name</h1>
  }
}