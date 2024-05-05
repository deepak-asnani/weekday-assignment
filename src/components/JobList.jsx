import React, { useState } from "react";
import { useGetJobsQuery } from "../services/api";
import JobCard from "./JobCard";
import { Grid, Modal, Box, Typography } from "@mui/material";

const JobList = () => {
  const { data, isLoading, error } = useGetJobsQuery();
  const jobDetailsList = data?.jdList || null;

  const [isJobDescriptionModalOpen, setIsJoDescriptionModalOpen] =
    useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleJobDescriptionModal = (jobDescription) => {
    setIsJoDescriptionModalOpen(true);
    setModalContent(jobDescription);
  };

  if (isLoading) return <>Loading...</>;
  if (error) return <>{error.error}</>;

  return (
    <Box>
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
