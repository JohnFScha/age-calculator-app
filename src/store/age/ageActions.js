import { SET_AGE } from "./ageTypes";

export const setAge = (age) => {
  return {
    type: SET_AGE,
    payload: age
  }
}