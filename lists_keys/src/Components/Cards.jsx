import { studentsData } from "../Data/studentData"
import "./cards.css";

function Cards() {
    return (
        <div className="cards-container">
            {
                studentsData.map((student, index) => {
                    return (
                        <div className="card">
                            <div className="card-header">
                                <h3>ID : {student.id}</h3>
                                <h3>Name : {student.studentName}</h3>
                            </div>
                            <div className="card-footer">
                                <h3>Age : {student.age}</h3>
                                <h3>Gender : {student.gender}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards