
const url = "http://localhost:3000/students"

//functional based components are stateless compoennts
const Table = () => {
  const fetchStudents = async () => {
    const response = await fetch(url)
    var data = await response.json()
    localStorage.setItem("hello", JSON.stringify(data))
  }
  const data = JSON.parse(localStorage.getItem("hello")) // [].map((student)=>{ return <tr><td>{student.id}</td><td>{student.name}</td></tr>})
  console.log(data)
  return (
    <>
      <h1>Display students</h1>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((student, index) => {
            console.log("student", student)
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
              </tr>
            )
          })} */}
        </tbody>
      </table>
    </>
  )
}

export default Table