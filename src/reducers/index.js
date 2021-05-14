import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RegistrReducer from './RegistrReducer'



export default combineReducers({
  form: formReducer,
  registration: RegistrReducer
});