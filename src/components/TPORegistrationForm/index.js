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
//   // axios
//   //   .post(
//   //     "https://acharya-placement-dev.herokuapp.com/api/admin/register/tpo",
//   //     payload
//   //     // {
//   //     //   headers: {
//   //     //     Authorization:
//   //     //       "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxMGM5MGJhNGMzNjYzNTE2ZTA3MDdkMGU5YTg5NDgxMDYyODUxNTgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYWRtaW4xIiwicm9sZXMiOlsiYWRtaW4iXSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1ZCI6InBsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1dGhfdGltZSI6MTY0NDE2NzAzMCwidXNlcl9pZCI6IlFtQ0VZdUpXUm1lN3BFcVM1TThkaU83MzZsYzIiLCJzdWIiOiJRbUNFWXVKV1JtZTdwRXFTNU04ZGlPNzM2bGMyIiwiaWF0IjoxNjQ0MTY3MDMwLCJleHAiOjE2NDQxNzA2MzAsImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JgU6fJw9KBckX098B_OFpMxrsDoNcPd--fsni60Z3-VipP5kY9N6dEqxa_NIWcbilMPzvz0JEZ0yLcgK_hwLD6rnTpViJUBvBrLqtnPg_izu56L3fl4pjn73em_vkCZv1D7BqWU49Uh5ZcfORbZocUqILP42u9HILIJb9vGlgqwC9d2aTJ80piPr0ICBfc9CR6SSHPZmTMQkyLcoYWn7OrYoh_ae1I7ddFKLGFihBZGeD_EAD2qJ7bVxt8oKfkMEqGDmRhLKTftGGg3jfSbU8cBkAk8MTe-UJj7fPnup_wiBrtzpuJlxeCBMMNxEUrc-fOnlVF5hABS62sBMb6boRw",
//   //     //   },
//   //     // }
//   //   )
//   //   .then((res) => {
//   //     if (res.data.success) {
//   //       alert("Job Posted");
//   //     }
//   //   })
//   //   .catch((err) => {
//   //     alert("Failed to Create Job");
//   //   });
//   /**
//    * 20000 edited
//    */

//   // const response = axios
//   //   .post(
//   //     "https://acharya-placement-dev.herokuapp.com/api/admin/register/tpo",
//   //     payload
//   //   )

//   //   .then((res) => {
//   //     if (res.data.success) {
//   //       alert("TPO REGISTERED");
//   //     }
//   //   })
//   //   .catch((err) => {
//   //     alert("Failed to Register a TPO");
//   //     console.log(err);
//   //   });
//   /**
//    * 20000 OG
//    */
//   // axios
//   //   .post(
//   //     "https://acharya-placement-dev.herokuapp.com/api/admin/register/tpo",
//   //     payload
//   //     // {
//   //     //   headers: {
//   //     //     Authorization:
//   //     //       "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxMGM5MGJhNGMzNjYzNTE2ZTA3MDdkMGU5YTg5NDgxMDYyODUxNTgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmFuZGl0aGEgTSIsInJvbGVzIjpbInRwbyJdLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGxhY2VtZW50LXN5c3RlbS1hY2hhcnlhIiwiYXVkIjoicGxhY2VtZW50LXN5c3RlbS1hY2hhcnlhIiwiYXV0aF90aW1lIjoxNjQzNzc1MjAwLCJ1c2VyX2lkIjoic2pBaWFGVER0VlNBazlPbmR4c2hkczhvTmJOMiIsInN1YiI6InNqQWlhRlREdFZTQWs5T25keHNoZHM4b05iTjIiLCJpYXQiOjE2NDM3NzUyMDAsImV4cCI6MTY0Mzc3ODgwMCwiZW1haWwiOiJuYW5kaXRoYW1hZGh1c3VkaGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmFuZGl0aGFtYWRodXN1ZGhhQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ff3Y9Njszl8Dj1I3nI8GuTKtANjlhmWNSVuxuej0V3Si9Kd9I9Rz_6h3t_XkzW5OQFCj3uX7g9EupXt9Xk_gmnlxHWqoEYwNhpQXZ_M_BYPPboNsoge6X2Dl3kt07nPVTb6ao9fdjDm4bTHBE8IJf5YHgtzY8SfjOCjoHJsdz1pT1qZj_Ys6WuGOqlDdvtmVa3-_fXbzgm-0_b0i2YZdjXTV2SFomVg5odzbb9Hdq8PJno4qUQUikjDK8TqD1jkgkotjaxbS4gvQZFBXQh_MKUZXCVDsX-Dce4G-TFvuoo81oKm7B8QaIB4oWNObxfLtodx8Gjrmw2TdT8L6VKsATg",
//   //     //   },
//   //     // }
//   //   )
//   //   .then((res) => {
//   //     if (res.data.success) {
//   //       alert("Job Posted");
//   //     }
//   //   })
//   //   .catch((err) => {
//   //     alert("Failed to Create Job");
//   //   });

//   // console.log("payload:  ", payload);

//   /**
//    *
//    */
//   try {
//     const response = await axios.post(submitTo, payload);

//     if (response.data.success) {
//       alert("TPO REGISTERED");
//     }
//   } catch (err) {
//     console.log(err);
//     alert("Something went wrong");
//   }
// };

const TPORegistrationForm = () => {
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
      submitForm(API.postNewTPO(), values);
      // alert("TPO Registered Successfully");
    } else alert("invalid");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6" style={{ position: "absolute", top: "65px" }}>
          NEW TPO REGISTRATION
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
export default TPORegistrationForm;
