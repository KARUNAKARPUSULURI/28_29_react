state management->

counter application :- +, -, reset
Toggle -> 



names: ["", "", "", "", ""]


colors : ["","","","",""]
"" -> "" -> karunakar
"" -> ""

karunakar
chaitanya
harish
saiteja
hemanth
















Manual updations || dynamic updations

variables || state -> setState()

what is state?
- state is a variable that holds the current state of the component
- state is an object that holds the current state of the component
- state is a variable that holds the current state of the component and can be updated using setState()

function setState({name}){
    return a //undefined
}
  constructor(a) {
    super()
    this.state = {
      gender: ""
    }
  }
  handleGender = (a) => {
    this.setState({ gender: a.target.value })
  }

  <h3> Chooose your gender : {this.state.gender}</h3>
        <select onChange={this.handleGender}>
          <option value=""> select</option>
          <option value="male"> male</option>
          <option value="Female"> Female</option>
        </select>





0 -> 1
 
this.state = {
    name : "karunakar",
    count : 0
}
setState({count : this.state.count + 1})















new Component()

const obj = {
    name : "karunakar",
    render(){
        return this.name
    }
}


JS -> dom ->
<p></p>
<button onclick = "handleclick">

<script>
let count = 0;
function handleclick(){
    count = count + 1   
    return count
}
let ele = document.getElementsByTagName("p")[0]
ele.innerText = count

Document
</script>

react -> vdom -> 

state