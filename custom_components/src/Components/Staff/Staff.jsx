import Heading from "../../Common/Heading/Heading";
import Search from "../../Common/Search/Search";
import Table from "../../Common/Table/Table";
import { customProps } from "../../CustomProps/props";
import { staffData } from "../../Data/Staff";

const Staff = () => {
    return (
        <>
            <Heading name={"Staff"} />
            <Search searchProps={customProps.searchProps} />
            <Table btnProps={customProps.btnProps} columns={Object.keys(staffData[0])} dataSource={staffData} />
        </>
    )
}

export default Staff;