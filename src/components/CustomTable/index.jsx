import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Pagination } from "../Pagination"
import "./style.scss"

const CustomTable = ({ headColumns, bodyColumns, offset, setOffset, limit, setLimit }) => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headColumns?.map((col, index) => (
                <TableCell key={col.key}>
                  <div className={`table-col ${index === headColumns.length - 1 ? "last" : ""}`}>{col.title}</div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {bodyColumns.map((row, rowIndex) => (
              <tr key={row.id}>
                {headColumns.map((col, index) => (
                  <TableCell key={col.key}>
                    <div className={`table-row ${index === headColumns.length - 1 ? "last" : ""}`}>
                      {col.key === "order" ? rowIndex + 1 : row[col.key]}
                    </div>
                  </TableCell>
                ))}
              </tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination-wrapper">
        <Pagination
          count={25}
          pageCount={10}
          onChange={(pageNumber) => setOffset(pageNumber)}
          currentPage={offset ?? 1}
          onChangeLimit={(limitNumber) => {
            setLimit(limitNumber)
          }}
          limit={limit ?? 10}
        />
      </div>
    </div>
  )
}

export default CustomTable
