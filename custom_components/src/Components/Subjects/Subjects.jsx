import Heading from "../../Common/Heading/Heading";
import Search from "../../Common/Search/Search";
import Table from "../../Common/Table/Table";
import { customProps } from "../../CustomProps/props";
import { subjectsData } from "../../Data/Subjects";

const Subjects = () => {
    return (
        <>
            <Heading name={"Subjects"}/>
            <Search searchProps={customProps.searchProps} />
            <Table btnProps={customProps.btnProps} columns={Object.keys(subjectsData[0])} dataSource={subjectsData}/>
        </>
    )
}

export default Subjects;