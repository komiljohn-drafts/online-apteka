import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Pagination } from "../Pagination"
import "./style.scss"

const CustomTable = ({ headColumns, bodyColumns, offset, setOffset, limit, setLimit, count }) => {
  const tableClass = "text-sm leading-6 px-4 py-3 text-center"
  const navigate = useNavigate()

  return (
    <div>
      <TableContainer className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              {headColumns?.map((col, index) => (
                <TableCell key={col.key} className={index === 0 ? "" : "border-l"}>
                  <div className={`font-semibold ${tableClass}`}>{col.title}</div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {bodyColumns?.map((row, rowIndex) => (
              <tr
                key={row.id}
                className={`duration-300 cursor-pointer ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-[#f4f6fa]"
                } hover:bg-blue-100`}
                onClick={() => navigate(`${row.id}`)}
              >
                {headColumns.map((col, index) => (
                  <TableCell key={col.key} className={index === 0 ? "" : "border-l"}>
                    <div className={tableClass}>
                      {col.key === "order"
                        ? rowIndex + 1
                        : col.render
                        ? col.render(row?.attributes[col.key])
                        : row?.attributes[col.key]}
                    </div>
                  </TableCell>
                ))}
              </tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="border-t pt-3 mt-4">
        <Pagination
          count={count}
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
