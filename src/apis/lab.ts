import axios from "axios"
const { VITE_LAB_HOST } = import.meta.env;

export const testApi = async () => {
  return axios.post(VITE_LAB_HOST + '/create_rubric').then((res) => {
    console.log(res);
  })
}