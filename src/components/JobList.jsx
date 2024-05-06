import React, { useState, useRef, useEffect } from "react";
import { useGetJobsQuery } from "../services/api";
import JobCard from "./JobCard";
import { Grid, Modal, Box, Typography } from "@mui/material";
import { FETCH_JOBS_BODY } from "../constants";
import { useFilterContext } from "../store/filterContext";

const JobList = () => {
  const [jobQueryOffset, setJobsQueryOffset] = useState(
    FETCH_JOBS_BODY.DEFAULT_OFFSET
  );
  const { data, isLoading, error } = useGetJobsQuery({
    limit: FETCH_JOBS_BODY.DEFAULT_LIMIT,
    offset: jobQueryOffset,
  });

  const { filters } = useFilterContext();

  const jobDetailsList = data?.jdList || null;

  const [filteredJobList, setFilteredJobList] = useState(null);

  useEffect(() => {
    setFilteredJobList(() => {
      const filtered = jobDetailsList?.filter(
        (job) =>
          filters.experience >= job.minExp &&
          filters.experience <= job.maxExp &&
          filters.minimumBasePay <= job.minJdSalary &&
          (filters.mode.toLowerCase() === job.location ||
            filters.mode === "In-Office" ||
            filters.mode === "Hybrid")
      );
      return filtered;
    });
  }, [filters, jobDetailsList]);

  console.log("filtered job list:- ", filteredJobList);

  useEffect(() => {}, [filters.mode]);

  useEffect(() => {}, [filters.experience]);

  console.log("job details list: ", jobDetailsList);

  const [isJobDescriptionModalOpen, setIsJoDescriptionModalOpen] =
    useState(false);
  const [modalContent, setModalContent] = useState("");

  const listRef = useRef();

  const handleJobDescriptionModal = (jobDescription) => {
    setIsJoDescriptionModalOpen(true);
    setModalContent(jobDescription);
  };

  const handleScroll = () => {
    const {
      current: { scrollTop, scrollHeight, clientHeight },
    } = listRef;
    if (scrollTop + clientHeight >= scrollHeight - 1000) {
      setJobsQueryOffset(jobDetailsList.length + 1);
    }
  };
  const renderJobList = filteredJobList ?? jobDetailsList;

  if (isLoading) return <>Loading...</>;

  if (error) return <>{error.error}</>;

  if(!renderJobList?.length) return <>No Job Matches with the preference</>

  return (
    <Box
      onScroll={handleScroll}
      sx={{ overflowY: "scroll", height: "100vh", p: 1 }}
      ref={listRef}
    >
      <Grid container spacing={4}>
        {renderJobList?.map((job) => {
          return (
            <JobCard
              key={job.jdUid}
              companyName={job.companyName}
              jobRole={job.jobRole}
              logoUrl={job.logoUrl}
              location={job.location}
              minJdSalary={job.minJdSalary}
              maxJdSalary={job.maxJdSalary}
              salaryCurrencyCode={job.salaryCurrencyCode}
              jobDetailsFromCompany={job.jobDetailsFromCompany}
              minExp={job.minExp}
              maxExp={job.maxExp}
              jdLink={job.jdLink}
              handleShowJobDescription={handleJobDescriptionModal}
            />
          );
        })}
      </Grid>
      <Modal
        open={isJobDescriptionModalOpen}
        onClose={() => setIsJoDescriptionModalOpen(false)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            outline: "none",
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="fontWeightBold"
            textAlign="center"
          >
            Job Description
          </Typography>
          <Box mt={3}>
            <Typography variant="body1">About Company:</Typography>
            <Typography variant="body2" mt={1}>
              {modalContent}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default JobList;
