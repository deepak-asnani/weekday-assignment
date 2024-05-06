import React from "react";
import JobList from "./JobList";
import { Box } from "@mui/material";
import FilterBar from "./FilterBar";
import { FilterProvider } from "../store/filterContext";

const Main = () => {
  return (
    <FilterProvider>
      <Box p={3}>
        <FilterBar />
        <JobList />
      </Box>
    </FilterProvider>
  );
};

export default Main;
