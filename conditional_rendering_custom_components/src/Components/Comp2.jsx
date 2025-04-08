const Comp2 = ({obj}) => {
    const {name, age, gender} = obj
    return <h1>This is Component two and its name is {name}, age {age ? age : "no age provided"} and gender {gender}</h1>
}

export default Comp2