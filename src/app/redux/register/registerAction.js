import ServerAPI from "../../api/ServerAPI";
import Swal from "sweetalert2";

import { USER_SET_FULLNAME, USER_SET_EMAIL, USER_SET_PASSWORD, USER_REGISTER_RESET_FORM } from "../actionType";

const resetForm = () => {
  return {
    type: USER_REGISTER_RESET_FORM,
  };
};

const setEmail = (email) => {
  return {
    type: USER_SET_EMAIL,
    payload: {
      email: email,
    },
  };
};

const setFullName = (fullName) => {
  return {
    type: USER_SET_FULLNAME,
    payload: {
      fullname: fullName,
    },
  };
};

const setPassword = (password) => {
  return {
    type: USER_SET_PASSWORD,
    payload: {
      password: password,
    },
  };
};

const register = (fullName, email, password, navigate) => async (dispatch) => {
  try {
    const registerData = {
      full_name: fullName,
      email: email,
      password: password,
    };

    if (registerData.full_name === "") {
      return Swal.fire({
        title: "Nama harus diisi",
        icon: "Fail",
        timer: 1500,
      });
    } else if (registerData.email === "") {
      return Swal.fire({
        title: "Email harus diisi",
        icon: "Fail",
        timer: 1500,
      });
    } else if (registerData.password === "") {
      return Swal.fire({
        title: "Password harus diisi",
        icon: "Fail",
        timer: 1500,
      });
    }

    console.log(registerData);
    const postRegisterData = await ServerAPI({
      method: "POST",
      mode: "cors",
      url: "/auth/register",
      data: registerData,
    });

    if (postRegisterData.status === 200) {
      Swal.fire({
        title: "Register Success",
        icon: "success",
        timer: 1500,
      });

      navigate("/login");
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

const userRegisterAction = {
  resetForm,
  setFullName,
  setEmail,
  setPassword,
  register,
};

export default userRegisterAction;
