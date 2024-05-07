import React, { useState } from "react";
import {
  Stack,
  TextField,
  MenuItem,
  ListSubheader,
  Box,
  InputLabel,
  Select,
} from "@mui/material";
import { JOB_ROLES } from "../constants";

const RolesFilter = ({options, handleFilter, filterType, filterValue }) => {
    console.log("filter value in roles:- ", filterValue)
  return (
    <>
      {/* <InputLabel htmlFor="grouped-native-select">Roles</InputLabel>
      <Select
        sx={{ width: "100%" }}
        id="grouped-native-select"
        native
        multiple
        value={selectedRoles}
        onChange={(e) => handleSelectRoles(e)}
      >
        {Object.entries(JOB_ROLES).map(([category, roles]) => (
          <optgroup key={category} label={category}>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </optgroup>
        ))}
      </Select> */}

      <TextField
        label={filterType.name}
        select
        SelectProps={{ multiple: true }}
        value={filterValue}
        sx={{ width: "25%" }}
        onChange={(e) => {handleFilter(e, filterType.key)}}
      >
        {Object.entries(options).map(([category, roles]) => (
          <li key={category}>
            <ul>
              <ListSubheader>{category}</ListSubheader>
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </ul>
          </li>
        ))}
      </TextField>
    </>
  );
};

export default RolesFilter;
