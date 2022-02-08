import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import { InputBase, Paper, Typography } from "@mui/material";
// import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useFetch } from "../../hooks/useFetch";
import API from "../../API";

export default function JobList({ setJobPostID, setopenJobApplicants }) {
  const { content, loading } = useFetch(API.fetchJobList(), "jobsDetails");

  const [search, setSearch] = useState("");

  let jobs = [];
  if (!loading) {
    jobs = content.jobs;
  }

  return (
    <>
      <Typography align="center" variant="h5" gutterBottom component="div" my={5}>
        JOB LIST
      </Typography>

      <Paper
        component="form"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          boxSizing: "border-box",
          marginBottom: "1rem",
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Job" />
        {/* <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <AssignmentIndIcon />
        </IconButton> */}
      </Paper>

      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          maxHeight: 630,
          overflow: "auto",
        }}
        // style={{ maxHeight: "90%", overflow: "auto" }}
      >
        {Array.isArray(jobs) &&
          jobs.map((job, index) => (
            <>
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => {
                      setJobPostID(job?.postId);
                      setopenJobApplicants(true);
                      console.log(job?.postId);
                      // setJobPostID, setopenJobApplicants
                    }}
                  >
                    <CommentIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemText primary={job?.companyName} />
                  {/* <ListItemText primary={student.uid} /> */}
                </ListItemButton>
              </ListItem>
            </>
          ))}
      </List>
    </>
  );
}
