import { classData } from "../../Data/Class"
import DeleteBtn from "../DeleteBtn/DeleteBtn"

const Table = ({ btnProps, columns, dataSource }) => {
    console.log(btnProps)
    console.log(columns)
    console.log(dataSource)
    return (
        <table border={1} cellSpacing={0}>
            <thead>
                <tr>
                    {columns.map((heading, index) => (
                        <th key={heading}>
                            {heading[0].toUpperCase() + heading.slice(1,)}
                        </th>
                    ))}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataSource.length > 0 && dataSource.map((row, index) => (
                        <tr key={row.id}>
                            {
                                columns.length > 0 && columns.map((cell, index) => (
                                    <>
                                        <td>
                                            {row[cell]}
                                        </td>
                                    </>
                                ))
                            }
                            <td>
                                <DeleteBtn btnProps={btnProps} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table