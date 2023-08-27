/* eslint-disable @typescript-eslint/no-explicit-any */
import { dummy } from "@/pages/task/eval/modal/utils";
import axios from "axios"
const { VITE_LAB_HOST } = import.meta.env;

export const getRubric = async (script: string) => {
  return axios.post(VITE_LAB_HOST + '/create_rubric', { selected_script: script }).then((res: any) => {
    return res.data;
  })
}

export const getDialogue = async (data: any): any[] => {
  return new Promise((res) => {
    setTimeout(() => {
      res(dummy as any);
    }, 1000);
  })

  // return axios.post(VITE_LAB_HOST + '/dialogue_generation', data).then((res: any) => {
  //   return res.data;
  // })

}

export const getVariation = async (data: any) => {
  return axios.post(VITE_LAB_HOST + '/generate_variations', data).then((res: any) => {
    return res.data;
  })
}