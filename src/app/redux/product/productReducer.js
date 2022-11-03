import { DATA_PRODUCTS } from "../actionType";

const initialState = {
  dataProducts: [],
};

const dataProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_PRODUCTS:
      return {
        ...state,
        dataProducts: action.payload.dataProducts,
      };

    default:
      return state;
  }
};

export default dataProductReducer;
