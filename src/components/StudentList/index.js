import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import { InputBase, Paper, Typography } from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useFetch } from "../../hooks/useFetch";
import API from "../../API";

export default function StudentList({ setStudentUID, setopenStudentProfile }) {
  const { content, loading } = useFetch(API.fetchStudents(), "studentsDetails");
  const [search, setSearch] = useState("");
  if (loading) {
    return <></>;
  }

  let students = [];
  if (!loading) {
    students = content.students;
  }
  // console.log("HEsd", students);
  return (
    <>
      <Typography align="center" variant="h5" gutterBottom component="div">
        STUDENT LIST
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
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Student" />
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
        {Array.isArray(students) &&
          students.map((student, index) => (
            <>
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => {
                      setStudentUID(student.uid);
                      setopenStudentProfile(true);
                      // console.log("student", student.uid);
                    }}
                  >
                    <CommentIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemText primary={student.displayName} />
                  {/* <ListItemText primary={student.uid} /> */}
                </ListItemButton>
              </ListItem>
            </>
          ))}
      </List>
    </>
  );
}
