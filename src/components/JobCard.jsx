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
  maxExp,
  handleShowJobDescription,
}) => {
  const CurrencyIconComponent = CURRENCY_ICONS[salaryCurrencyCode];
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
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

            <Box
              onClick={() => handleShowJobDescription(jobDetailsFromCompany)}
              sx={{
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                maxHeight: "7em",
              }}
            >
              <Typography variant="body1">
                {`${jobDetailsFromCompany.substring(0, 260)}`}
              </Typography>
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))",
                }}
              >
                &nbsp;
              </Typography>
            </Box>
            <Box
              onClick={() => handleShowJobDescription(jobDetailsFromCompany)}
            >
              <Typography
                color="primary"
                textAlign="center"
                sx={{
                  cursor: "pointer",
                  position: "relative",
                  textAlign: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
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
            <Typography>
              {minExp || 0} {maxExp && `- ${maxExp}`} Years
            </Typography>
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
              ":hover": {
                bgcolor: "rgb(85, 239, 196)", // theme.palette.primary.main
              },
            }}
            disableElevation
            disableRipple
            onClick={() =>
              window.open(jdLink, "_blank", "noopener, noreferrer")
            }
            startIcon={<BoltRoundedIcon />}
          >
            Easy Apply
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default JobCard;
