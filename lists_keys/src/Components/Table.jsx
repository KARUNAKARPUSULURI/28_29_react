import { studentsData } from "../Data/studentData"

const Table = () => {
    return (
        <>
            <h1>Students Data: {" "}</h1>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        {Object.keys(studentsData[0])
                            .map((headings, index) =>
                                <th key={headings}>
                                    {headings[0].toUpperCase() + headings.slice(1,)}
                                </th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {studentsData.map((student, index)=> {
                        return (
                            <tr key={student.id} style={{cursor: "pointer"}} onClick={()=> console.log("whos is getting triggered???", student.id)}>
                                <td>{student.id}</td>
                                <td>{student.studentName}</td>
                                <td>{student.age}</td>
                                <td>{student.gender}</td>
                                <td>{student.email}</td>
                                <td>{student.batch}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table

