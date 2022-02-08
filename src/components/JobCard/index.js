import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { blue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import { Stack } from "@mui/material";

const ReadMoreButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[900]),
  backgroundColor: blue[900],
  borderRadius: 10,
  textTransform: "none",
  color: "white",
  "&:hover": {
    backgroundColor: blue[700],
  },
}));
const JobCard = ({ job }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: "850px",
          width: "850px",
          height: 268,
          borderRadius: 2,
          boxShadow: 10,
          padding: 2,
          margin: "20px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          boxSizing: "border-box",
        }}
      >
        <Typography
          sx={{ fontSize: 15 }}
          color="text.secondary"
          backgroundColor="gray"
          width="17%"
          height="20px"
          top="11px"
          border-radius="10px"
          left="10px"
          textAlign="center"
          gutterBottom
        >
          Announcement
        </Typography>
        <div>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              mb={0}
              variant="h6"
              gutterBottom
              component="div"
              fontSize="1vw"
              fontWeight="550"
            >
              CAMPUS PLACEMENT DRIVE BY {job.companyName}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <CardMedia
                component="img"
                style={{ width: "12px", marginLeft: "10px" }}
                image="../../images/linkedin_s.png"
                alt="linkedin"
              />

              <CardMedia
                component="img"
                style={{ width: "12px", marginLeft: "10px" }}
                image="../../images/instagram_s.png"
                alt="instagram"
              />

              <CardMedia
                component="img"
                style={{ width: "12px", marginLeft: "10px" }}
                image="../../images/facebook_s.png"
                alt="facebook"
              />
            </Stack>
          </Stack>
        </div>

        <Typography
          mt={-1.5}
          variant="subtitle1"
          gutterBottom
          component="div"
          fontSize="0.7vw"
          marginTop="0.1rem"
          color=" rgba(74, 117, 181, 1)"
        >
          {job.date}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {job.jobDesc}
        </Typography>

        <ReadMoreButton variant="contained">Read More</ReadMoreButton>
      </Card>
    </>
  );
};

export default JobCard;
