import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { FILTER_TYPES } from "../constants";

const FilterInput = ({ options, handleFilter, filterType, filterValue }) => {
  return (
    <TextField
      select
      value={filterValue}
      label={filterType.name}
      onChange={(e) => {
        handleFilter(e, filterType.key );
      }}
      sx={{ width: "25%" }}
    >
      {options.map((name) => (
        <MenuItem key={name} value={name}>
          {filterType.key === FILTER_TYPES.MINIMUM_BASE_PAY.key? "$" : ""} {name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FilterInput;
