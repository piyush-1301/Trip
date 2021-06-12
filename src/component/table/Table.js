import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Table.css";
import { useStateValue } from "../../StateProvider";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [filterType, setFilterType] = useState("All");
  const [{ basket }, dispatch] = useStateValue();
  const [rows, setRows] = useState(basket);

  const handleClick = (e) => {
    const fil = e.target.id;
    setFilterType(fil);
    console.log(filterType);
  };

  useEffect(() => {
    if (filterType === "All") setRows(basket);
    else setRows(basket?.filter((i) => i.type === filterType));
  }, [filterType]);

  return (
    <div className="Table">
      <TableContainer component={Paper} >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Place</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {String(row.date)}
                </StyledTableCell>
                <StyledTableCell>{String(row.city)}</StyledTableCell>
                <StyledTableCell>{String(row.type)}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ul className="list-horizontal">
        <span>Filter By:</span>
        <li onClick={handleClick} id="All">
          All
        </li>
        <li onClick={handleClick} id="Trek">
          Trek
        </li>
        <li onClick={handleClick} id="Club">
          Club
        </li>
        <li onClick={handleClick} id="Tropic">
          Tropics
        </li>
      </ul>
    </div>
  );
}
