import axios from "axios";
import SummaryApi from "../common";

const fetchCategoryWiseProduct = async (category) => {
  console.log(category, typeof category);
  try {
    const response = await axios.post(
      SummaryApi.getProductByCategory.url,
      { category }, // Request body
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = response.data; // Axios automatically parses JSON responses
    return responseData; // Return the data for further use
  } catch (error) {
    console.error("Error fetching category-wise product:", error);
    throw error; // Propagate the error for handling
  }
};

export default fetchCategoryWiseProduct;
