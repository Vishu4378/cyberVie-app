import axios from "axios";

export const uploadDocs = (file: any) => {
  return axios.post("http://localhost:5000/upload", file).then((res) => {
    return res;
  });
};

export const viewUser = () => {
  return axios.get("http://localhost:5000/view").then((res) => {
    return res.data;
  });
};
