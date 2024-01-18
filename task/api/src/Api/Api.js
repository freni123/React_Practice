import axios from "axios";
/* --------------------------------- getapi --------------------------------- */
export const get_api = (url, endpoint) => {
  return axios
    .get(url + endpoint)
    .then((res) => {
      //   console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
/* --------------------------------- postapi -------------------------------- */
export const post_api = (url, endpoint, data) => {
  return axios
    .post(url + endpoint, data)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err, "err");
      return err;
    }); 

  // console.log(url, endpoint, data);
};
/* -------------------------------- deleteapi ------------------------------- */
export const deleteApi = (url, endpoint, id) => {
  axios.delete(url + endpoint + id);
};
/* -------------------------------- updateapi ------------------------------- */
export const updateAPI = async (url,endpoint,id,data) => {
  return axios.put(url + endpoint + "/" + id,data).then((res)=>{
      return res
  }).catch((err)=>{
      return err
  })
}

