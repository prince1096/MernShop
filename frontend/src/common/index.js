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

  uploadProduct: {
    url: `${backendDomain}/api/v1/admin/upload-product`,
    method: "post",
  },

  allProduct: {
    url: `${backendDomain}/api/v1/admin/get-product`,
    method: "get",
  },

  updateProduct: {
    url: `${backendDomain}/api/v1/admin/update-product`,
    method: "put",
  },

  getCategoryOfProduct: {
    url: `${backendDomain}/api/v1/product/get-categoryProduct`,
    method: "get",
  },

  getProductByCategory: {
    url: `${backendDomain}/api/v1/product/get-ProductByCategory`,
    method: "post",
  },

  productDetails: {
    url: `${backendDomain}/api/v1/product/productDetails`,
    method: "post",
  },
};

export default SummaryApi;
