import React, { useEffect } from "react";
import { useState } from "react";
import { Form, useForm } from "./../Forms/";
// import { FormControls } from "./../FormControls/";
import { submitForm } from "../../utils";
import {
  Button,
  Card,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import API from "../../API";
import axios from "../../API/axios";

const initialValues = {
  displayName: "",
  email: "",
  password: "",
};

// const submitForm = async (submitTo, payload) => {
//   try {
//     const response = await axios.post(submitTo, payload);

//     if (response.data.success) {
//       alert("FACULTY REGISTERED");
//     }
//   } catch (err) {
//     console.log(err);
//     alert("Something went wrong");
//   }
// };

const FacultyRegistrationForm = () => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("displayName" in fieldValues)
      temp.displayName = fieldValues.displayName
        ? ""
        : "displayName is required";
    if ("email" in fieldValues)
      temp.email = fieldValues.email ? "" : "Email is required";
    if ("password" in fieldValues)
      temp.password = fieldValues.password ? "" : "password is required";

    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialValues, true, validate);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // console.log(values);
      submitForm(API.postNewFaculty(), values);
    } else alert("invalid");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" style={{ position: "absolute", top: "65px" }}>
          NEW FACULTY REGISTRATION
        </Typography>
        <Card
          style={{
            width: 750,
            height: 350,
            position: "absolute",
            top: "100px",
          }}
        >
          <Grid container>
            <Grid item>
              <TextField
                variant="outlined"
                label="Display Name"
                onChange={handleInputChange}
                name="displayName"
                value={values.displayName}
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "10px",
                  width: 720,
                }}
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                label="Email"
                onChange={handleInputChange}
                name="email"
                value={values.email}
                style={{
                  position: "absolute",
                  top: "90px",
                  left: "10px",
                  width: 720,
                }}
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                label="Password"
                onChange={handleInputChange}
                name="password"
                value={values.password}
                type="password"
                style={{
                  position: "absolute",
                  top: "160px",
                  left: "10px",
                  width: 720,
                }}
              ></TextField>
            </Grid>
            {/* <Grid item>
              <TextField
                variant="outlined"
                label="Confirm Password"
                onChange={handleInputChange}
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                style={{
                  position: "absolute",
                  top: "230px",
                  left: "10px",
                  width: 720,
                  height: 160,
                }}
              ></TextField>
            </Grid> */}

            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ position: "absolute", top: "230px", left: "10px" }}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={resetForm}
              style={{ position: "absolute", top: "230px", left: "300px" }}
            >
              Reset
            </Button>
          </Grid>
        </Card>
      </div>
    </Form>
  );
};
export default FacultyRegistrationForm;
