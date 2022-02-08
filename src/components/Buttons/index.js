import React from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ProfileButton = styled(Button)(({ theme }) => ({
  marginBottom: "15px",
  textTransform: "none",
  borderRadius: "10px",
  background: "#1E4786",
  color: "white",
}));

const Buttonss = (props) => {
  const {
    openStudentList,
    setopenStudentList,
    openAddCompany,
    setOpenAddCompany,
    openRegisterTPO,
    setOpenRegisterTPO,
    openRegisterFaculty,
    setOpenRegisterFaculty,
    setopenJobList,
    openJobList,
  } = props;
  // const { openStudentList } = props.openStudentList;

  const handleClick = (i) => {
    setopenStudentList(false);
    setOpenAddCompany(false);
    setOpenRegisterTPO(false);
    setOpenRegisterFaculty(false);
    setopenJobList(false);
    if (i === 1) {
      setopenStudentList(true);
      console.log("Setting  openStudentList", openStudentList);
    } else if (i === 2) {
      setOpenAddCompany(true);
      console.log("Setting  openAddCompany", openAddCompany);
    } else if (i === 3) {
      setOpenRegisterTPO(true);
      console.log("Setting  openRegisterTPO", openRegisterTPO);
    } else if (i === 4) {
      setOpenRegisterFaculty(true);
      console.log("Setting  openRegisterTPO", openRegisterFaculty);
    } else if (i == 5) {
      setopenJobList(true);
      console.log("Setting  openJobList", openJobList);
    }
  };
  return (
    <>
      <Link to="/View" style={{ textDecoration: "none" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
        >
          <Stack direction="column" justify-justifyContent="space-evenly">
            {/* <ProfileButton variant="contained">VIEW DRIVES</ProfileButton> */}
            <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(1);
              }}
            >
              VIEW STUDENT LIST
            </ProfileButton>

            {/* <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(2);
              }}
            >
              NEW DRIVE
            </ProfileButton> */}

            {/* <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(3);
              }}
            >
              REGISTER A TPO
            </ProfileButton>

            <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(4);
              }}
            >
              REGISTER A Faculty
            </ProfileButton> */}
            <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(5);
              }}
            >
              VIEW DRIVES
            </ProfileButton>
          </Stack>
        </Stack>
      </Link>
    </>
  );
};

export default Buttonss;
