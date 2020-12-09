import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
    categoryReducer,
    itemReducer
})
// console.log(rootReducer);
export default rootReducer

 