import ServerAPI from "../../api/ServerAPI";
// import Swal from "sweetalert2";

import { DATA_PRODUCTS } from "../actionType";

const setDataProducts = (dataProducts) => {
  return {
    type: DATA_PRODUCTS,
    payload: {
      dataProducts: dataProducts,
    },
  };
};

const fetchDataProducts = () => async (dispatch) => {
  try {
    const fetchProduct = await ServerAPI({
      method: "GET",
      url: "/api/products",
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch(setDataProducts(fetchProduct.data.data));
  } catch (error) {
    console.log(error);
  }
};

const dataProductAction = {
  fetchDataProducts,
  setDataProducts,
};

export default dataProductAction;
