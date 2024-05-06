import React, { useState, useRef } from "react";
import { useGetJobsQuery } from "../services/api";
import JobCard from "./JobCard";
import { Grid, Modal, Box, Typography } from "@mui/material";
import { FETCH_JOBS_BODY } from "../constants";

const JobList = () => {
  const [jobQueryOffset, setJobsQueryOffset] = useState(
    FETCH_JOBS_BODY.DEFAULT_OFFSET
  );
  const { data, isLoading, error } = useGetJobsQuery({
    limit: FETCH_JOBS_BODY.DEFAULT_LIMIT,
    offset: jobQueryOffset,
  });

  const jobDetailsList = data?.jdList || null;

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

  if (isLoading) return <>Loading...</>;

  if (error) return <>{error.error}</>;

  return (
    <Box
      onScroll={handleScroll}
      sx={{ overflowY: "scroll", height: "100vh", p: 1 }}
      ref={listRef}
    >
      <Grid container spacing={4}>
        {jobDetailsList.map((job) => {
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
