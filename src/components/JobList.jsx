import React from "react";
import { useGetJobsQuery } from "../services/api";
import Box from "@mui/material/Box";

const JobList = () => {
  const { data, isLoading, error } = useGetJobsQuery();
  console.log("data:- ", data);
  const jobDetailsList = data?.jdList || null;
  console.log("error:- ", error);

  if(isLoading) return <>Loading...</>
  if(error) return <>{error.error}</>
  return (
    <Box>
      {jobDetailsList.map((jobDetails) => (
        <p key={jobDetails.jdUid}>{jobDetails.companyName}</p>
      ))}
    </Box>
  );
};

export default JobList;
