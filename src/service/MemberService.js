import axios from "axios";
import HeaderService from "./HeaderService";
// const API_URL = "http://localhost:8080/auth/";
const API_URL = "http://localhost:6969/";

const register = (email, password, name) => {
  return axios.post(API_URL + "auth/" + "signup", {
    email
    ,password
    ,name
  });
};

const login = async (email, password) => {
  
  const jwtAuth = await axios
    .post(API_URL + "auth/" + "login", {
      email
      ,password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("member", JSON.stringify(response.data));
      }

      return response.data;
    }) 

  return jwtAuth;
};

const loginOauth = async (response) => {

  const jwtAuth = await axios
    .post(API_URL + "auth/" + "loginOauth", {
      ...response
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("member", JSON.stringify(response.data));
      }

      return response.data;
    }) 

  return jwtAuth;
};

const logout = () => {
  localStorage.removeItem("member");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("member"));
};

const getMyMemberInfo = () => {
  const memberInfo = axios.get(API_URL + "member/" + "me", { headers: {
    'Authorization' : HeaderService.getHeader()
  } }).then(
    (response) => {
      return response.data;
    }
  );

  return memberInfo;
};

const MemberService = {
  register,
  login,
  logout,
  getCurrentUser,
  getMyMemberInfo,
  loginOauth,
};

export default MemberService;