import { combineReducers } from 'redux';
import counterReducer from './conterReducer'
import isDataReducer from './isDataReducer';
import moneyReducer from './moneyReducer'

const rootReducer = combineReducers({
    counter : counterReducer,
    isData : isDataReducer,
    money : moneyReducer,
});

export default rootReducer;