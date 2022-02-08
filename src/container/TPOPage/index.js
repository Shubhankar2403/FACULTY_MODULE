import React from "react";
import { Container, Card } from "@mui/material";
import TPORegistrationForm from "../../components/TPORegistrationForm";

const TPORegistration = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <div className="b">
            <Buttons
              openStudentList={openStudentList}
              setopenStudentList={setopenStudentList}
              openAddCompany={openAddCompany}
              setOpenAddCompany={setOpenAddCompany}
            />
          </div>
        </Grid>
        <Grid item sm={4}>
          {openStudentList && <StudentList />}
          {openAddCompany && <CompanyForm />}
        </Grid>
        <Grid item sm={4}>
          {openTest && <Test />}
        </Grid>
      </Grid>
      <Card
        sx={{
          maxWidth: "300px",
          height: "100px",
          borderRadius: 2,
          boxShadow: 10,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          boxSizing: "border-box",
        }}
      >
        <TPORegistrationForm />
      </Card>
    </>
  );
};

export default TPORegistration;
