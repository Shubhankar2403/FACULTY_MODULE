import React, { useState } from "react";
import Buttons from "../../components/Buttons";
import StudentList from "../../components/StudentList";
import CompanyForm from "../../components/CompanyForm";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { Card } from "@material-ui/core";
import "./index.css";
import Test from "../../components/test";
import Navbar from "../../components/Navbar";
import TPORegistrationForm from "../../components/TPORegistrationForm";
import FacultyRegistrationForm from "../../components/FacultyRegistrationForm";
import StudentProfile from "../../components/StudentProfile";
import JobList from "../../components/JobList";
import JobApplicant from "../../components/JobApplicant";
const ViewPage = () => {
  const [openStudentList, setopenStudentList] = useState(false);
  const [openJobList, setopenJobList] = useState(false);
  const [openStudentProfile, setopenStudentProfile] = useState(false);
  const [studentUID, setStudentUID] = useState("");
  const [openDrive, setOpenDrive] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);
  const [openAddCompany, setOpenAddCompany] = useState(false);
  const [openRegisterTPO, setOpenRegisterTPO] = useState(false);
  const [openRegisterFaculty, setOpenRegisterFaculty] = useState(false);
  const [openTest, setopenTest] = useState(false);
  const [openJobApplicants, setopenJobApplicants] = useState(false);
  const [JobPostID, setJobPostID] = useState("");

  return (
    <>
      {/* <Navbar /> */}

      <Grid container>
        <Grid item sm={4}>
          <div className="b">
            <Buttons
              openStudentList={openStudentList}
              setopenStudentList={setopenStudentList}
              openAddCompany={openAddCompany}
              setOpenAddCompany={setOpenAddCompany}
              openRegisterTPO={openRegisterTPO}
              setOpenRegisterTPO={setOpenRegisterTPO}
              openRegisterFaculty={openRegisterFaculty}
              setOpenRegisterFaculty={setOpenRegisterFaculty}
              setopenJobList={setopenJobList}
              openJobList={openJobList}
            />
          </div>
        </Grid>
        <Grid item sm={4}>
          {openStudentList && (
            <StudentList
              setopenStudentProfile={setopenStudentProfile}
              setStudentUID={setStudentUID}
            />
          )}
          {openJobList && (
            <JobList
              setopenJobApplicants={setopenJobApplicants}
              setJobPostID={setJobPostID}
            />
          )}

          {openAddCompany && <CompanyForm />}
          {openRegisterTPO && <TPORegistrationForm />}
          {openRegisterFaculty && <FacultyRegistrationForm />}
        </Grid>
        <Grid item sm={4}>
          {openStudentProfile && studentUID != "" && (
            <StudentProfile
              studentUID={studentUID}
              setopenStudentProfile={setopenStudentProfile}
              setStudentUID={setStudentUID}
            />
          )}
          {openJobApplicants && JobPostID != "" && (
            <JobApplicant
              JobPostID={JobPostID}
              setopenJobApplicants={setopenJobApplicants}
              setJobPostID={setJobPostID}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ViewPage;
