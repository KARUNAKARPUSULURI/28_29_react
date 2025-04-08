import Heading from "../../Common/Heading/Heading"
import Search from "../../Common/Search/Search"
import Table from "../../Common/Table/Table"
import { customProps } from "../../CustomProps/props"
import { libraryData } from "../../Data/Library"

const Library = () => {
    return (
        <>
            <Heading name={"Library"} />
            <Search searchProps={customProps.searchProps} />
            <Table btnProps={customProps.btnProps} columns={Object.keys(libraryData[0])} dataSource={libraryData} />
        </>
    )
}

export default Library