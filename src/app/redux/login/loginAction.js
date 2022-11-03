import ServerAPI from "../../api/ServerAPI";
import { USER_SET_EMAIL, USER_SET_PASSWORD } from "../actionType";
import Swal from "sweetalert2";

// import userProfileAction from "../profile/profileAction";

const setEmail = (email) => {
  return {
    type: USER_SET_EMAIL,
    payload: {
      email: email,
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

const login = (email, password, navigate) => async (dispatch) => {
  try {
    const loginData = {
      email: email,
      password: password,
    };

    const postData = await ServerAPI({
      method: "POST",
      url: "/auth/login",
      data: loginData,
    });

    let token = postData.data.token;
    localStorage.setItem("token", token);

    if (postData.data.message === "Login succesfully") {
      Swal.fire({
        title: "Login Success",
        icon: "success",
        timer: 1500,
      });

      navigate("/profile");
      window.location.reload();
    } else if (postData.data.message === "Email or Password incorect") {
      Swal.fire({
        title: "Password atau Email salah",
        icon: "error",
        timer: 1500,
      });
    }
  } catch (error) {
    console.log("error :", error);
  }
};

const userLoginAction = {
  setEmail,
  setPassword,
  login,
};

export default userLoginAction;
