import ServerAPI from "../../api/ServerAPI";
import { USER_PROFILE_DATA, SET_LOADING } from "../actionType";

const setProfileData = (userProfile) => {
  return {
    type: USER_PROFILE_DATA,
    payload: {
      user: userProfile,
    },
  };
};

const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

const fetchProfile = () => async (dispatch) => {
  try {
    let token = localStorage.getItem("token");

    const fetchProfileData = await ServerAPI({
      method: "GET",
      url: "/auth/me",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    dispatch(setProfileData(fetchProfileData.data));
    console.log(fetchProfileData.data);
  } catch (error) {
    console.log(error);
  }
};

const userProfileAction = {
  setProfileData,
  setLoading,
  fetchProfile,
};

export default userProfileAction;
