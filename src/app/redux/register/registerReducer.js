import { USER_SET_FULLNAME, USER_SET_EMAIL, USER_SET_PASSWORD, USER_REGISTER_RESET_FORM } from "../actionType";

const initialState = {
  fullname: "",
  email: "",
  password: "",
};

const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_RESET_FORM:
      return {
        ...state,
      };
    case USER_SET_FULLNAME:
      return {
        ...state,
        fullname: action.payload.fullname,
      };
    case USER_SET_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case USER_SET_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default userRegisterReducer;
