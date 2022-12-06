import axios from "axios";

export const uploadDocs = (file: any) => {
  return axios.post("https://cybervie.onrender.com/upload", file).then((res) => {
    return res;
  });
};

export const viewUser = () => {
  return axios.get("https://cybervie.onrender.com/view").then((res) => {
    return res.data;
  });
};
