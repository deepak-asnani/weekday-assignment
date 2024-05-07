import React, { createContext, useContext, useState } from "react";
import { DEFAULT_FILTERS_VALUES } from "../constants";

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS_VALUES);

  console.log("filters in context:- ", filters)

//   const updateFilters = (newFilters) => {
//     setFilters(newFilters);
//   };

  return (
    <FilterContext.Provider value={{ filters, setFilters}}>
      {children}
    </FilterContext.Provider>
  );
};
