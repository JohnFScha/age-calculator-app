import { SET_AGE } from "./ageTypes";

const initialState = {
  age: {
    days: 0,
    months: 0,
    years: 0
  }
}

const ageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AGE:
      return {
        ...state,
        age: action.payload
      }
    default: 
      return state;
  }
}

export default ageReducer;