import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { API_URL, formatter } from "../../../config";
import { use } from "react";
import { useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import Form from "../FORM/Form";
import AddIcon from "@mui/icons-material/Add";

function Register(id, tenSP, loai, giaTien, carbs, hinhAnh) {
  return {
    id,
    tenSP,
    loai,
    giaTien,
    carbs,
    hinhAnh,
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "tenSP",
    numeric: false,
    disablePadding: true,
    label: "Tên Sản Phẩm",
  },
  {
    id: "loai",
    numeric: true,
    disablePadding: false,
    label: "Loại",
  },
  {
    id: "maSP",
    numeric: true,
    disablePadding: false,
    label: "maSP",
  },
  {
    id: "giaTien",
    numeric: true,
    disablePadding: false,
    label: "Giá Tiền (VNĐ)",
  },
  {
    id: "mucdohienthi",
    numeric: true,
    disablePadding: false,
    label: "Mức đô hiển thị",
  },
  {
    id: "hinhAnh",
    numeric: true,
    disablePadding: false,
    label: " Hình Ảnh",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected, arrSelected } = props;
  const [open, setOpen] = React.useState(false);
  const [dataEdit, setDataEdit] = React.useState([]);
  const [data, setData] = React.useState([]);

  const deleteApi = async () => {
    for (const item of arrSelected) {
      try {
        if (window.confirm("Bạn có chắc không?")) {
          const response = await axios.delete(`${API_URL}/${item}`);
          toast.success("Xoá thành công");
          window.location.reload();
        } else {
          return;
        }
      } catch (error) {
        toast.error(`Xoá thất bại`);
        console.error("Error for", item, error);
      }
    }
  };

  const editApi = async () => {
    if (arrSelected.length > 1) {
      toast.error("Vui lòng chỉ chọn 1 sản phẩm để chỉnh sửa");
      return;
    }

    for (const item of arrSelected) {
      try {
        const response = await axios.get(`${API_URL}/${item}`);
        setDataEdit(response.data);
      } catch (error) {
        console.error("Error for", item, error);
      }
    }
    setOpen(true);
  };

  const onSave = async (data) => {
    for (const item of arrSelected) {
      try {
        const response = await axios.put(`${API_URL}/${item}`, data);
        toast.success("Cập nhật thông tin thành công");
        window.location.reload();
        setDataEdit(response.data);
      } catch (error) {
        console.error("Error for", item, error);
      }
    }
  };

  const addApi = async () => {
    setDataEdit(null);
    setOpen(true);
    if (arrSelected.length > 1) {
      toast.error("Vui lòng bỏ checkbox để thêm sản phẩm mới");
      return;
    }
  };

  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          fontSize="1.8rem"
          variant="h6"
          textAlign="center"
          marginY="20px 20px"
          id="tableTitle"
          component="div">
          Phụ Tùng Chính Hãng
        </Typography>
      )}
      {numSelected > 0 ? (
        <div className="d-flex">
          <IconButton>
            <EditIcon onClick={() => editApi()} />
          </IconButton>

          <IconButton>
            <DeleteIcon onClick={() => deleteApi()} />
          </IconButton>
        </div>
      ) : (
        <Tooltip title="Filter list" className="d-flex">
          <IconButton>
            <AddIcon onClick={() => addApi()} />
          </IconButton>
        </Tooltip>
      )}

      <Form
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
        onSave={onSave}
        initialData={dataEdit}
      />
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("id");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [order, orderBy, page, rowsPerPage]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...data]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, data]
  );

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f9fafb",
        maxHeight: "100vh",
        p: 3,
        overflowY: "scrollY",
      }}>
      <Paper
        sx={{
          width: "100%",
          mb: 2,
          bgcolor: "#fafafa", // nền trắng sáng
          boxShadow: "0 3px 6px rgba(0,0,0,0.1)", // shadow nhẹ, hiện đại
          borderRadius: 2,
          border: "1px solid #e0e0e0", // viền nhạt nhẹ nhàng
          maxHeight: "90vh", // giới hạn chiều cao 300px
          overflowY: "auto", // scroll dọc khi nội dung vượt
          border: "1px solid #ccc",
          padding: 1,
        }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          arrSelected={selected}
          sx={{ color: "rgba(0,0,0,0.87)" }}
        />

        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
              sx={{ bgcolor: "#f5f5f5" }} // header nền xám nhạt
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{
                      cursor: "pointer",
                      bgcolor: isItemSelected ? "#e3f2fd" : "transparent", // nền xanh nhạt khi chọn
                      "&:hover": { bgcolor: "#f0f0f0" }, // hover nền xám nhẹ
                      color: "rgba(0, 0, 0, 0.87)",
                    }}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                        sx={{
                          color: "#1976d2",
                          "&.Mui-checked": {
                            color: "#1565c0",
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      sx={{ color: "rgba(0,0,0,0.87)" }}>
                      {row.tenSP}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "rgba(0,0,0,0.87)" }}>
                      {row.loai}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "rgba(0,0,0,0.87)" }}>
                      {row.maSP}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "rgba(0,0,0,0.87)" }}>
                      {formatter(row.giaTien)}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "rgba(0,0,0,0.87)" }}>
                      {row.mucdohienthi}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: "rgba(0,0,0,0.87)",
                        display: "flex",
                        justifyContent: "right",
                      }}>
                      <Avatar
                        src={row.hinhAnh} // url ảnh trong data
                        alt={row.tenSP}
                        variant="rounded" // hình chữ nhật bo góc, hoặc 'circular' tròn
                        sx={{ width: 160, height: 140 }}
                      />
                      {/* Có thể đặt tên hoặc nội dung kèm */}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                    backgroundColor: "transparent",
                  }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            bgcolor: "#ffffff",
            color: "rgba(0,0,0,0.87)",
            ".MuiTablePagination-actions": {
              color: "#1976d2",
            },
            ".MuiInputBase-root": {
              color: "rgba(0,0,0,0.87)",
            },
            ".MuiSelect-icon": {
              color: "rgba(0,0,0,0.87)",
            },
          }}
        />
      </Paper>
    </Box>
  );
}
