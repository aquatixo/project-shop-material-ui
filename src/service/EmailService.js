import axios from "axios";

const API_URL = "http://localhost:6969/";

const sendEmail = async (to) => {
  
  const code = await axios
    .post(API_URL + "email/" + "sendEmail", {
      to
    })
    .then((response) => {
      console.log(response);

      return response.data;
    }) 

  return code;
};

const EmailService = {
  sendEmail,
};

export default EmailService;