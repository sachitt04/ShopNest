import { useTable,Column, TableOptions } from "react-table"
 
function TableHOC <T extends Object>(columns:Column <T>[],
    data:T[],
    containerClassName:string,
    heading:string){
    return function HOC(){
        const options: TableOptions<T> = {
            columns,
            data
        }
        const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow}
         = useTable(options)
        return <div className={containerClassName}>
            <h2 className={heading}></h2>

            <table className="table" {...getTableProps()}>
                <thead>

                    {
                        headerGroups.map((headerGroups)=>(
                            <tr {...headerGroups.getHeaderGroupProps()}>

                                {headerGroups.headers.map((column)=>(
                                    <th {...column.getHeaderProps}>
                                        {column.render.("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row)=>{
                            prepareRow(row)
                            return <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell)=>(
                                        <td{...cell.getCellProps()}>
                                        {cell.render("cell")}
                                        </td>
                                    ))
                                }
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>

    }

}

export default TableHOC