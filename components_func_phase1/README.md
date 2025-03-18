
key features of react :- 
1. component based architecture
2. Virtual dom
3. jsx
4. one way data binding

<></> -> fragments

Components:- components are the building blocks of your application
1. Components are like Lego blocks which are used for reuseablity
2. components are used to split our webpage into multiple components

Note:- whenever you are declaring a component, the component name should be starting with capital letter

Types of components:- 
1. Functional based components :- it is like js function syntax
2. Class based components :- it is like js class syntax
<!-- 3. Server based components -->

1. Functional based components:- It is like js function syntax -> 

function ComponentName(){
    return <>
    //jsx -> html code
    </>
}

const Hello = function(){} //function expression | first class functions

const Hello = () => {} //arrow function

1. Named Function | regular function
2. Function expression | first class functions
3. arrow function

js -> functions -> reusuable code -> workers 
it is used to perform business logic
it is reusuable block of code to perform specific task

person A -> Task ? - > Bring me water

Task : - Bring me water
Taskname :- bringinWater

function BringingWater(){
    console.log("brought? ")
    water = true
    return water
}

bringingWater()

eg.,

1. Header -> logo, navlinks
2. Banner ->img
3. main -> cards
4. footer -> navlinks

Containers | Pages
navlinks -> Home, about, contact, services 