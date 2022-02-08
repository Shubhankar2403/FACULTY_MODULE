import React from "react";
import { useFetch } from "../../hooks/useFetch";
import API from "../../API";

const StudentProfile = ({
  studentUID,
  setopenStudentProfile,
  setStudentUID,
}) => {
  const { content, loading, error } = useFetch(
    API.fetchStudents(studentUID),
    `${studentUID}Details`
  );
  let student = [];
  if (!loading) {
    student = content.data;
  }
  //   console.log(student);
  return (
    <>
      <button
        onClick={() => {
          setStudentUID("");
          setopenStudentProfile(false);
        }}
      >
        Close Student Profile
      </button>
      <ul>
        <li>Name: {student?.name}</li>
        <li>USN: {student?.usn}</li>
        <li>Contact Number: {student?.contactNo}</li>
        <li>Email: {student?.personalMail}</li>
        <li>Gender: {student?.gender}</li>
        <li>
          Placement Status(0:not placed|1:placed):{student?.placement_status}
        </li>
        <li>linkedin:{student?.linkedIN}</li>
        <li>Github: {student?.github}</li>
      </ul>
      {Array.isArray(student?.skills) && (
        <>
          <h3>Skills</h3>
          <ul>
            {student?.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default StudentProfile;
