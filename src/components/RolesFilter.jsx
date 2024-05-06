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

const RolesFilter = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  console.log("selected roles:- ", selectedRoles);
  const handleSelectRoles = (event) => {
    console.log("event:- ", event);
    const role = event.target.value[0];
    console.log("role:- ", role);
    // if (selectedRoles.includes(role)) {
    //   console.log("role:- ", role);
    //   setSelectedRoles(
    //     (prevSelectedRoles) => !prevSelectedRoles.includes(role)
    //   );
    // } else {
    //   setSelectedRoles((prevSelectedRoles) => [...prevSelectedRoles, role]);
    // }
  };
  return (
    <>
      <InputLabel htmlFor="grouped-native-select">Roles</InputLabel>
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
      </Select>
    </>
  );
};

export default RolesFilter;
