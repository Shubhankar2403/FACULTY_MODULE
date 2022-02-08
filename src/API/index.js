import {
  GET_ALL_JOB_LIST,
  GET_ALL_STUDENTS,
  GET_STUDENT_PROFILE_BASE_URL,
  POST_NEW_FACULTY,
  POST_NEW_JOB,
  POST_NEW_TPO,
  GET_ALL_APPLICATION_FOR_JOB_BASE_URL,
} from "./config";

const API = {
  postNewFaculty: () => {
    const endpoint = `${POST_NEW_FACULTY}`;
    return endpoint;
  },
  postNewTPO: () => {
    const endpoint = `${POST_NEW_TPO}`;
    return endpoint;
  },
  postNewJob: () => {
    const endpoint = `${POST_NEW_JOB}`;
    return endpoint;
  },
  fetchStudents: (id) => {
    let endpoint;
    if (id === undefined) endpoint = `${GET_ALL_STUDENTS}`;
    else endpoint = `${GET_STUDENT_PROFILE_BASE_URL}${id}`;
    return endpoint;
  },
  // fetchStudentProfile: (id) => {
  //   const endpoint = `${GET_STUDENT_PROFILE_BASE_URL}${id}`;
  //   return endpoint;
  // },
  fetchJobList: (pageSize, pageNo) => {
    let endpoint;
    if (pageSize === undefined && pageNo === undefined)
      endpoint = `${GET_ALL_JOB_LIST}`;
    else endpoint = `${GET_ALL_JOB_LIST}?pageSize=${pageSize}&pageNo=${pageNo}`;
    return endpoint;
  },
  fetchJobApplicants: (postId) => {
    let endpoint;
    endpoint = `${GET_ALL_APPLICATION_FOR_JOB_BASE_URL}${postId}/applications`;
    return endpoint;
  },
};

export default API;
