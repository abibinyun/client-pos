import { combineReducers } from "redux";
import userLoginReducer from "./login/loginReducer";
import userProfileReducer from "./profile/profileReducer";
import userRegisterReducer from "./register/registerReducer";
import dataProductReducer from "./product/productReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  dataProduct: dataProductReducer,
});

export default rootReducer;
