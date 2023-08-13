import todoReducer from './habitReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer;