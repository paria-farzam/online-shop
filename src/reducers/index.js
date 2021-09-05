import {combineReducers} from 'redux';
import comment from './comment';
import authentication from './authentication';

const rootReducer = combineReducers({
    comment,
    authentication
})

export default rootReducer;