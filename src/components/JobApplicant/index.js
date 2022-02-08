import React from "react";
import { useFetch } from "../../hooks/useFetch";
import API from "../../API";

const JobApplicant = ({ JobPostID, setopenJobApplicants, setJobPostID }) => {
  // const { content, loading, error } = useFetch();
  const { content, loading } = useFetch(
    API.fetchJobApplicants(JobPostID),
    "jobApplicants"
  );

  // )

  // API.fetchStudents(studentUID), `${studentUID}Details`;
  let applications = [];
  if (!loading) {
    applications = content.applications;
  }
  console.log(applications);
  return (
    <>
      <button
        onClick={() => {
          setJobPostID("");
          setopenJobApplicants(false);
        }}
      >
        Close Job Application
      </button>

      <h3>Job Applicants</h3>
      {Array.isArray(applications) && (
        <>
          {applications.map((application, index) => (
            <ul key={index}>
              <li>Name: {application.name}</li>
              <li>USN: {application.usn}</li>
              <li>Personal Mail: {application.personalMail}</li>
              <li>Gender: {application.gender}</li>
              <li>Github: {application.github}</li>
              <li>Placement Status: {application.placement_status}</li>
            </ul>
          ))}
        </>
      )}
    </>
  );
};

export default JobApplicant;
