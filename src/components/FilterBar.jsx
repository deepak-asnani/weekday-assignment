import React from "react";
import { Stack } from "@mui/material";
import FilterInput from "./FilterInput";
import {
  EXPERIENCE_VALUES,
  FILTER_TYPES,
  JOB_MODES,
  MIN_BASE_PAYS,
} from "../constants";
import { useFilterContext } from "../store/filterContext";

const FilterBar = () => {
  const { filters, setFilters } = useFilterContext();

  const handleFilter = (event, filterType) => {
    const selectedValue = event.target.value;

    setFilters((prevSelectedFilters) => {
      console.log("prev selected filters:- ", prevSelectedFilters);
      const requiredFilterType = Object.keys(prevSelectedFilters).find(
        (filter) => filter === filterType
      );
      console.log("required filter type:- ", requiredFilterType);
      if (requiredFilterType) {
        return { ...prevSelectedFilters, [requiredFilterType]: selectedValue };
      } else {
        return { [filterType]: selectedValue };
      }
    });
  };

  return (
    <Stack direction="row" spacing={4} sx={{ marginBottom: "1em" }}>
      {/* <RolesFilter /> */}
      <FilterInput
        options={EXPERIENCE_VALUES}
        filterType={FILTER_TYPES.EXPERIENCE}
        handleFilter={handleFilter}
        filterValue={filters?.[FILTER_TYPES.EXPERIENCE.key]}
      />
      <FilterInput
        options={JOB_MODES}
        filterType={FILTER_TYPES.MODE}
        handleFilter={handleFilter}
        filterValue={filters?.[FILTER_TYPES.MODE.key]}
      />
      <FilterInput
        options={MIN_BASE_PAYS}
        filterType={FILTER_TYPES.MINIMUM_BASE_PAY}
        handleFilter={handleFilter}
        filterValue={filters?.[FILTER_TYPES.MINIMUM_BASE_PAY.key]}
      />
    </Stack>
  );
};

export default FilterBar;
