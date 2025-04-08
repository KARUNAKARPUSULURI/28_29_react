import Heading from "../../Common/Heading/Heading";
import Search from "../../Common/Search/Search";
import Table from "../../Common/Table/Table";
import { customProps } from "../../CustomProps/props";
import { classData } from "../../Data/Class";

const Class = () => {
    return (
        <>
            <Heading name={"Classes"} />
            <Search searchProps={customProps.searchProps} />
            <Table btnProps = {customProps.btnProps} columns={Object.keys(classData[0])} dataSource={classData}/>
        </>
    )
}

export default Class;