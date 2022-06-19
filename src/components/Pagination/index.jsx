import React from "react"
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { Popover } from "@mui/material"
import MuiPagination from "@mui/material/Pagination"
import "./style.scss"

export function Pagination({
  children,
  className,
  size = "large",
  type = "simple",
  count = 0,
  pageBound = 5,
  pageCount = 10,
  currentPage = 1,
  onChange = function () {},
  title = "Elementlar soni",
  marginTop = 0,
  onChangeLimit,
  limit = 10,
  ...rest
}) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClickPopup = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <div className="pagination" style={{ marginTop }}>
      <div className="indicator" onClick={handleClickPopup}>
        <InsertDriveFileIcon fontSize="small" className="leftIcon" />
        <span className="text-black font-medium">{limit} dan ko'rsatish</span>
        <KeyboardArrowDownIcon className="rightIcon" />
      </div>

      <MuiPagination
        count={Math.ceil(count / limit)}
        shape="rounded"
        className="flex"
        page={currentPage}
        onChange={(_, value) => onChange(value)}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div
          className="itemsShowCount"
          onClick={() => {
            onChangeLimit(10)
            onChange(1)
            handleClose()
          }}
        >
          10
        </div>
        <div
          className="itemsShowCount"
          onClick={() => {
            onChangeLimit(30)
            onChange(1)
            handleClose()
          }}
        >
          30
        </div>
        <div
          className="itemsShowCount"
          onClick={() => {
            onChangeLimit(50)
            onChange(1)
            handleClose()
          }}
        >
          50
        </div>
      </Popover>
    </div>
  )
}
