import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Paper from "@mui/material/Paper";
import {
  Tooltip,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  tableCellClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function Home({ rows, setRows, setButton }) {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Employee List
          </Typography>
          <Tooltip title="Add New Employee">
            <IconButton
              aria-label="add-employee"
              onClick={() => {
                setButton(true);
                navigate("/employee/add");
              }}
            >
              <PersonAddIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Employee</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
            //   if (index === 0) {
            //     return null;
            //   } else {
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                    <IconButton
                        color="primary"
                        aria-label="view-employee"
                        onClick={() => {
                          setButton(true);
                          navigate("/employee/view/" + index);
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>

                      <IconButton
                        color="secondary"
                        aria-label="edit-employee"
                        onClick={() => {
                          setButton(false);
                          navigate("/employee/edit/" + index);
                        }}
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton
                        color="error"
                        aria-label="delete-employee"
                        onClick={() => {
                          const temp = rows;
                          temp.splice(index, 1);
                          setRows([...temp]);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </StyledTableCell>
                  </TableRow>
                );
            //   }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
