import axios from "axios";
import SummaryApi from "../common";

const fetchCategoryWiseProduct = async (category) => {
  const response = await axios(SummaryApi.getProductByCategory.url);
};
