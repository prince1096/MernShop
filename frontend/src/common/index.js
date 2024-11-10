const backendDomain = "http://localhost:8080";

const SummaryApi = {
  signUp: {
    url: `${backendDomain}/api/v1/user/signup`,
    method: "post",
  },
  logIn: {
    url: `${backendDomain}/api/v1/user/login`,
    method: "post",
  },
  currentUser: {
    url: `${backendDomain}/api/v1/user/user-details`,
    method: "get",
  },
};

export default SummaryApi;
