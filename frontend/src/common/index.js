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
  logout: {
    url: `${backendDomain}/api/v1/user/logout`,
    method: "get",
  },

  allUser: {
    url: `${backendDomain}/api/v1/admin/all-users`,
    method: "get",
  },

  // singleUser: {
  //   url: `${backendDomain}/api/v1/admin/${userId}`,
  // },
};

export default SummaryApi;
