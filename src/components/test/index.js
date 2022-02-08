import React from "react";
import API from "../../API";
import { useFetch } from "../../hooks/useFetch";

const Test = () => {
  //const { content } = useFetch(API.fetchApplication(), "applicationsDetails");
  const { content } = useFetch(API.fetchStudents(), "studentsDetails");

  console.log(content);
  return <div>Test Page</div>;
};

export default Test;
