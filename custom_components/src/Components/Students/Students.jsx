import Heading from "../../Common/Heading/Heading";
import Search from "../../Common/Search/Search";
import Table from "../../Common/Table/Table";
import { customProps } from "../../CustomProps/props";
import { studentsData } from "../../Data/Students";

const Students = () => {
    return (
        <>
            <Heading name={"Students"} />
            <Search searchProps={customProps.searchProps} />
            <Table btnProps={customProps.btnProps} columns = {Object.keys(studentsData[0])} dataSource = {studentsData}/>
        </>
    )
}

export default Students;