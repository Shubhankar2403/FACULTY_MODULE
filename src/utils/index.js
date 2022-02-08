import axios from "../API/axios";
export const extractValue = (array, prop) => {
  let extractedName = array.map((item) => item[prop]);
  return extractedName;
};

export const checkExistingState = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName);

  return sessionState && JSON.parse(sessionState);
};

export const submitForm = async (submitTo, payload) => {
  try {
    const response = await axios.post(submitTo, payload);

    if (response.data.success) {
      alert("Form Submiteed Successfully");
    }
  } catch (err) {
    console.log(err);
    alert("Something went wrong");
  }
};
