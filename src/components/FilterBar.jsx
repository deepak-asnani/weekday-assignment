import React, { useState, useEffect } from "react";
import { Stack, TextField } from "@mui/material";
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
  const [searchValue, setSearchValue] = useState("");

  const handleFilter = (event, filterType) => {
    const selectedValue =
      filterType === FILTER_TYPES.COMPANY_NAME.key ? event : event.target.value;

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

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      handleFilter(searchValue, FILTER_TYPES.COMPANY_NAME.key);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  return (
    <Stack
      direction="row"
      spacing={4}
      sx={{ marginBottom: "1em", p: "0.5em" }}
      flexWrap="wrap"
      useFlexGap
    >
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
      <TextField
        label={FILTER_TYPES.COMPANY_NAME.name}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Stack>
  );
};

export default FilterBar;
