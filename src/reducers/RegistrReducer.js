import actions from 'redux-form/lib/actions';
import { getValues } from '../actions/index';

const INITIAL_STATE = {
    formValues: ''
}


export default  (state = INITIAL_STATE, action) => {    
    switch(action.type){
        case 'REGISTRATION':
            return { ...state, formValues: action.payload }

        default:
            return state    
    }
}    
