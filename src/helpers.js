export const showJob = ({
  filteredExperience,
  jobMinExp,
  jobMaxExp,
  filteredMinPay,
  jobMinSalary,
  filteredMode,
  jobLocation,
  searchedCompanyName,
  jobCompanyName,
}) => {
  const isExperienceMatched =
    !filteredExperience ||
    (filteredExperience >= jobMinExp && filteredExperience <= jobMaxExp);
  const isMinBasePayMatched = !filteredMinPay || filteredMinPay <= jobMinSalary;
  const isModeMatched =
    !filteredMode && filteredMode.toLowerCase() === jobLocation;
  const isSearchedResultsMatched =
    !searchedCompanyName && searchedCompanyName === jobCompanyName;
  return (
    isExperienceMatched &&
    isMinBasePayMatched &&
    isModeMatched &&
    isSearchedResultsMatched
  );
};
