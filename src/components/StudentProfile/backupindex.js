import React, { useState } from "react";
import { Card, CardContent, checkbox, Divider } from "@material-ui/core";
// import { FaStar } from "react-icons/fa";
// import { Rating } from "material-ui-rating";
// // import star_border from "@material-ui/icons/star_border";

import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   TableFooter,
// } from "@material-ui/core";
// import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const Resume = () => {
  const paperStyle = {
    padding: "30px 190px",
    width: 300,
    margin: "100px auto",
    backgroundColor: " #F8F8FF ",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const buttonStyle = { marginTop: "50px", align: "center" };
  //Variables to Store the data from User
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [about, setabout] = useState();
  const [email, setemail] = useState();
  const [birth, setbirth] = useState();
  const [address, setadd] = useState();
  const [phone, setphone] = useState();
  const [github, setgithub] = useState();
  const [fb, setfb] = useState();
  const [skype, setskype] = useState();
  const [linkedin, setlinkedin] = useState();
  const [TenthSch, setTenthSch] = useState();
  const [TenthMarks, setTenthMarks] = useState();
  const [TwelthSch, setTwelthSch] = useState();
  const [TwelthMarks, setTwelthMarks] = useState();
  const [College, setCollege] = useState();
  const [CollegeMarks, setCollegeMarks] = useState();
  const [Skill1, setTechSkill1] = useState();
  const [Skill2, setTechSkill2] = useState();
  const [Skill3, setTechSkill3] = useState();
  const [Intern1, setIntern1] = useState();
  const [Intern2, setIntern2] = useState();
  const [Intern3, setIntern3] = useState();
  const [Intern4, setIntern4] = useState();
  const [Project1, setProject1] = useState();
  const [Project2, setProject2] = useState();
  const [Project3, setProject3] = useState();
  const [Project4, setProject4] = useState();
  const [Lang1, setLang1] = useState();
  const [Lang2, setLang2] = useState();
  const [Lang3, setLang3] = useState();
  const [Lang4, setLang4] = useState();
  const [Hobby1, setHobby1] = useState();
  const [Hobby2, setHobby2] = useState();
  const [Hobby3, setHobby3] = useState();
  const [Hobby4, setHobby4] = useState();

  console.log("fname:", fname);
  console.log("lname:", lname);
  console.log("email:", email);
  console.log("about:", about);
  console.log("phone:", phone);
  console.log("birth:", birth);
  console.log("address:", address);
  console.log("");
  return (
    <Grid>
      <Card style={{ padding: "20px", margin: "100px" }} elevation={10}>
        <CardContent>
          <Grid align="center">
            <h1 style={headerStyle}>RESUME</h1>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create the Resume!
            </Typography>
          </Grid>

          <form>
            <h2 style={{ textAlign: "left" }}> About </h2>
            <Divider />
            <Grid container style={{ marginTop: "10px" }}>
              <Grid xs={12} sm={12} md={6} item style={{ padding: "5px" }}>
                <TextField
                  placeholder="Enter first name"
                  label="First Name"
                  variant="outlined"
                  onChange={(e) => {
                    setfname(e.target.value);
                  }}
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={12} md={6} item style={{ padding: "5px" }}>
                <TextField
                  placeholder="Enter last name"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setlname(e.target.value);
                  }}
                />
              </Grid>

              <Grid itemxs={12} sm={12} md={12} style={{ padding: "5px" }}>
                <TextField
                  label="About Me"
                  multiline
                  rows={4}
                  placeholder="About Me"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setabout(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </form>

          <h2 style={{ textAlign: "left", paddingTop: "20px" }}> Info </h2>
          <Divider />
          <Grid container style={{ marginTop: "10px" }} spacing={1}>
            <Grid item xs={12}>
              <TextField
                type="email"
                placeholder="Enter email"
                label="Email"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                placeholder="dd/mm/yyyy"
                label="Date of Birth"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setbirth(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                placeholder="Address"
                label="Address"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setadd(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                placeholder="Phone"
                label="Phone"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setphone(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <h2 style={{ textAlign: "left", paddingTop: "20px" }}> Socials</h2>
          <Divider />
          <Grid container style={{ marginTop: "10px" }} spacing={1}>
            <Grid item xs={6}>
              <TextField
                placeholder="Github"
                label="Github"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setgithub(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                placeholder="Facebook"
                label="Facebook"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setfb(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                placeholder="Skype"
                label="Skype"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setskype(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                placeholder="Linkdin"
                label="Linkdin"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setlinkedin(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <h2 style={{ textAlign: "left", paddingTop: "20px" }}> Education </h2>
          <Divider />
          <Grid container style={{ marginTop: "10px" }} spacing={2}>
            <Grid item xs={8}>
              <TextField
                type="email"
                placeholder="10th School"
                label="10th School"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setTenthSch(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="email"
                placeholder="10th %"
                label="10th %"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setTenthMarks(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                type="email"
                placeholder="12th School"
                label="12th School"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setTwelthSch(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="email"
                placeholder="12th %"
                label="12th %"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setTwelthMarks(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                type="email"
                placeholder="BE College"
                label="BE College"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setCollege(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="email"
                placeholder="BE %"
                label="BE %"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setCollegeMarks(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <h3 style={{ textAlign: "left", paddingTop: "20px" }}>
            {" "}
            Technical Skills{" "}
          </h3>
          <Divider />
          <Grid container style={{ marginTop: "10px" }}>
            <Grid item xs={8} style={{ padding: "5px" }}>
              <TextField
                placeholder="Technical Skills"
                label="Technical Skills"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setTechSkill1(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={4} style={{ padding: "5px" }}>
              <Checkbox color="primary" value="xyz" />

              <Checkbox color="primary" value="xyz" />

              <Checkbox color="primary" value="xyz" />

              {/* <Checkbox color="primary" value="xyz" />
              <Checkbox color="primary" value="xyz" /> */}
            </Grid>
            <Grid container>
              <Grid item xs={8} style={{ padding: "5px" }}>
                <TextField
                  placeholder="Technical Skills"
                  label="Technical Skills"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setTechSkill2(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={4} style={{ padding: "5px" }}>
                <Checkbox color="primary" value="xyz" />

                <Checkbox color="primary" value="xyz" />

                <Checkbox color="primary" value="xyz" />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={8} style={{ padding: "5px" }}>
                <TextField
                  placeholder="Technical Skills"
                  label="Technical Skills"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setTechSkill3(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={4} style={{ padding: "5px" }}>
                <Checkbox color="primary" />

                <Checkbox color="primary" />

                <Checkbox color="primary" />
              </Grid>
            </Grid>
            <Grid
              container
              style={{ paddingBottom: "20px", paddingTop: "20px" }}
            >
              <Grid item xs={6}>
                <h3 style={{ textAlign: "left" }}> Internships </h3>
                <Divider style={{ marginRight: "20px" }} />
              </Grid>
              <Grid item xs={6}>
                <h3 style={{ textAlign: "left" }}>Project </h3>
                <Divider />
              </Grid>
            </Grid>

            <Grid container spacing={0}>
              <Grid xs={6} item>
                <TextField
                  placeholder="1"
                  variant="outlined"
                  onChange={(e) => {
                    setIntern1(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  placeholder="1"
                  variant="outlined"
                  onChange={(e) => {
                    setProject1(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid xs={6} item>
                <TextField
                  placeholder="2"
                  variant="outlined"
                  onChange={(e) => {
                    setIntern2(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  placeholder="2"
                  variant="outlined"
                  onChange={(e) => {
                    setProject2(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid xs={6} item>
                <TextField
                  placeholder="3"
                  variant="outlined"
                  onChange={(e) => {
                    setIntern3(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  placeholder="3"
                  variant="outlined"
                  onChange={(e) => {
                    setProject3(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid xs={6} item>
                <TextField
                  placeholder="4"
                  variant="outlined"
                  onChange={(e) => {
                    setIntern4(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  placeholder="4"
                  variant="outlined"
                  onChange={(e) => {
                    setProject4(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              style={{ paddingBottom: "20px", paddingTop: "20px" }}
            >
              <Grid item xs={6}>
                <h3 style={{ textAlign: "left" }}> Languages </h3>
                <Divider style={{ marginRight: "20px" }} />
              </Grid>
              <Grid item xs={6}>
                <h3 style={{ textAlign: "left" }}>Hobbies</h3>
                <Divider />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid xs={6} item>
                <TextField
                  placeholder="1"
                  variant="outlined"
                  onChange={(e) => {
                    setLang1(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  placeholder="1"
                  variant="outlined"
                  onChange={(e) => {
                    setHobby1(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid xs={6} item>
                <TextField
                  placeholder="2"
                  variant="outlined"
                  onChange={(e) => {
                    setLang2(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  placeholder="2"
                  variant="outlined"
                  onChange={(e) => {
                    setHobby2(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid xs={6} item>
                <TextField
                  placeholder="3"
                  variant="outlined"
                  onChange={(e) => {
                    setLang3(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  placeholder="3"
                  variant="outlined"
                  onChange={(e) => {
                    setHobby3(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid xs={6} item>
                <TextField
                  placeholder="4"
                  variant="outlined"
                  onChange={(e) => {
                    setLang4(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  placeholder="4"
                  variant="outlined"
                  onChange={(e) => {
                    setHobby4(e.target.value);
                  }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="space-evenly"
              spacing={1}
              style={buttonStyle}
            >
              <Grid item xs={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  Width="130"
                  auto
                >
                  Save
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  Width="250"
                  auto
                >
                  Download
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Resume;
