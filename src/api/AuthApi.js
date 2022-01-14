import axios from "axios";
import axiosClient from "./axiosClient";

export const authApi = {
  login(params) {
    const url = "/users";

    return axiosClient.get(url, { params }).catch((e) => {
      console.log(e);
    });
  },
  checkUsername(params) {
    const url = "/users";

    return axiosClient.get(url, { params }).catch((e) => {
      console.log(e);
    });
  },
  signUp(params) {
    const url = "/users";

    return axiosClient.post(url, params).catch((e) => {
      console.log(e);
    });
  },
};
