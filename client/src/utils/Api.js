import axios from "axios";

export const getData = function () {
  return axios.get("/api/data");
};

export const upDateData = function (id, data) {
   return axios.put("/api/data/" + id, data);
 };

export const createData = function (data) {
    return axios.post("/api/data/" + data);
}

 export const deleteData = function (id) {
   return axios.delete("/api/data/" + id);
 };
