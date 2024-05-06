import React from "react";
import JobList from "./JobList";
import { Box } from "@mui/material";
import FilterBar from "./FilterBar";

const Main = () => {
  return (
    <Box p={3}>
      {/* <FilterBar /> */}
      <JobList />
    </Box>
  );
};

export default Main;
