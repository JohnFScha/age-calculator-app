import { combineReducers } from 'redux';
import ageReducer from './age/ageReducer';

const rootReducer = combineReducers({
  age: ageReducer
})

export default rootReducer;