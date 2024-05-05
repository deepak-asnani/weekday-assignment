import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Grid,
  Stack,
  Button,
} from "@mui/material";
import { CURRENCY_ICONS } from "../constants";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";

const JobCard = ({
  companyName,
  jobRole,
  logoUrl,
  jdLink,
  location,
  minJdSalary,
  maxJdSalary,
  salaryCurrencyCode,
  jobDetailsFromCompany,
  minExp,
  handleShowJobDescription,
}) => {
  const CurrencyIconComponent = CURRENCY_ICONS[salaryCurrencyCode];
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card p={2} sx={{ borderRadius: 4 }}>
        <CardContent>
          <Stack direction="row" flexWrap="wrap">
            <CardMedia
              component="img"
              image={logoUrl}
              sx={{ height: 50, width: 50 }}
            />
            <Box ml={1}>
              <Typography
                variant="body1"
                color="text.disabled"
                sx={{ fontWeight: "bold" }}
              >
                {companyName}
              </Typography>
              <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
                {jobRole}
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                mt={0.5}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                }}
              >
                {location}
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction="row"
            color="grey.600"
            mt={1}
            sx={{ alignItems: "center" }}
          >
            <Typography fontWeight="fontWeightBold">
              Estimated salary:{" "}
            </Typography>
            <CurrencyIconComponent sx={{ fontSize: "1.1rem" }} />

            <Typography fontWeight="fontWeightBold">
              {minJdSalary && `${minJdSalary} -`} {maxJdSalary}
            </Typography>
            {salaryCurrencyCode === "INR" && (
              <Typography fontWeight="fontWeightBold">LPA</Typography>
            )}
          </Stack>
          <Box mt={1}>
            <Typography
              variant="body1"
              fontWeight="fontWeightBold"
              sx={{ fontSize: "0.9rem" }}
            >
              About Company:
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              fontWeight="fontWeightBold"
            >
              About us
            </Typography>
            <Typography variant="body1" gutterBottom>
              {`${jobDetailsFromCompany.substring(0, 250)}`}
            </Typography>
            <Box
              onClick={() => handleShowJobDescription(jobDetailsFromCompany)}
              sx={{ cursor: "pointer", position: "relative" }}
            >
              <Typography
                color="primary"
                textAlign="center"
                sx={{
                  cursor: "pointer",
                  position: "relative",
                  textAlign: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "8px",
                  borderRadius: "4px",
                }}
              >
                Show More
              </Typography>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography
              color="text.disabled"
              fontWeight="fontWeightBold"
              sx={{ fontSize: "0.85rem" }}
            >
              Minimum Experience
            </Typography>
            <Typography>{`${minExp || 0} Years`}</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              width: "80%",
              margin: "auto",
              backgroundColor: "rgb(85, 239, 196);",
              color: "text.primary",
              py: "0.8rem",
              fontSize: "1rem",
              my: "1rem",
            }}
            onClick={() =>
              window.open(jdLink, "_blank", "noopener, noreferrer")
            }
            startIcon={<BoltRoundedIcon backgroundColor="yellow" />}
          >
            Easy Apply
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default JobCard;
