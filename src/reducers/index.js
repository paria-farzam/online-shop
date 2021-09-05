import {combineReducers} from 'redux';
import comment from './comment';
import authentication from './authentication';
import goods from './goods';

const rootReducer = combineReducers({
    comment,
    authentication,
    goods
})

export default rootReducer;